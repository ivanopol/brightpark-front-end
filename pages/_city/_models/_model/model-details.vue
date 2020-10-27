<template>
  <div>
    <section class="container container-special">
      <div class="model-details-breadcrumbs">
        <BreadCrumbs :breadcrumbs="makeBreadcrumbs"/>
      </div>
      <div class="car-info-wrap">
        <div class="car-preview-wrap">
          <img :src="model.car_preview.image" :alt="model.car_preview.alt">
        </div>
        <div class="prices-wrap">
          <div class="model-price-text">
            <p>от {{model.car_attrs.special_price | formatPrice}} руб.</p>
          </div>

          <div class="credit-price-text">
            <p>В кредит от {{minimalPayment | formatPrice}} руб. / мес.</p>
          </div>
        </div>
      </div>

      <section class="model-details">
        <div class="trigger-wrap">
          <p class="trigger-wrap-text">Осталось <span class="model-count-text">{{count}}</span> {{model.car_model.title}} {{model.car_type.title_ru}} по цене лучше, чем на сайте</p>
        </div>
         <steps  :car_model='model.car_model'
                 :car_type='model.car_type'
                 :car_attrs='model.car_attrs'
                 :form_id="$store.state._page + '__fill-form_'"
                 :goal="'fixconditions'"
                 :prefix="$store.state._page + '__'">
         </steps>
      </section>
      <div class="block-note"><p>Предложение ограниченно, подробности в автосалоне</p></div>

      <Footer :page="$store.state._page"/>
    </section>
    <nuxt-child/>
  </div>
</template>

<script>
import Vue from 'vue'
import format_price from "~/mixins/format_price";

export default Vue.extend({
  mixins: [format_price],
  layout: 'details',
  data: function () {
    return {
      count: 0,
      model: '',
      brands: [],
      seo: {},
    }
  },
  validate: function ({params, store}) {
    let validate_city = false
    let validate_model = false
    let validate_type = true

    if (!Object.keys(store.state.city).length) {
      return false;
    }

    validate_city = store.state.cities.find((city) => city.value === params.city) !== undefined
    validate_model = store.state.models.indexOf(params.models) >= 0

    return validate_city && validate_model && validate_type
  },
  async asyncData(context) {
    context.store.commit('set_page', 'details')
    context.store.commit('set_bg', 'bg-gray')

    const model = await context.$axios.$get(
      process.env.apiUrl + `/api/model_details?&city=${context.route.params.city}&models=${context.route.params.models}&model=${context.route.params.model}`
    )

    const seo = await context.$axios.$post(process.env.apiUrl + `/api/get_meta_tags`, {
      route: context.route.fullPath
    })
    return { model: model, seo: seo }
  },
  head() {
    if (Object.keys(this.seo).length == 0) {
      return null
    }
    return {
      title: this.seo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.seo.description },
        { property: 'og:image', content: this.seo.images },
        { property: 'og:site_name', content: this.seo.site_name },
        { property: 'og:url', content: process.env.baseUrl + this.$route.fullPath },
        { property: 'og:type', content: 'place' },
        { property: 'place:location:latitude', content: this.seo.place.latitude },
        { property: 'place:location:longitude', content: this.seo.place.longitude },
        { property: 'twitter:title', content: this.seo.title },
      ],
    }
  },
  jsonld() {
    if (Object.keys(this.seo).length == 0) {
      return null
    }
    return {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": this.seo.title,
      "description": this.seo.description,
      "url": process.env.baseUrl + this.$route.fullPath,
      "image": this.seo.images,
    }
  },
  computed: {
    minimalPayment() {
      const monthly_rate = this.model.minimal_percent_rate / 12 / 100;
      return Math.ceil((this.model.car_attrs.price / 2) * ((monthly_rate * Math.pow((1 + monthly_rate), this.$store.state.max_credit_period))
        / (Math.pow((1 + monthly_rate), this.$store.state.max_credit_period) - 1)));
    },
    makeBreadcrumbs: function () {
      let breadcrumbs = []
      breadcrumbs.push({url: "", title: "Главная"})
      breadcrumbs.push({url: this.model.car_model.slug, title: "Модельный ряд " + this.model.car_model.title})
      breadcrumbs.push({url: this.model.car_model.slug + '/' + this.model.car_type.slug, title:  this.model.car_model.title + ' ' + this.model.car_type.title_ru})
      breadcrumbs.push({url: this.model.car_model.slug + '/' + this.model.car_type.slug + '/model-details', title:  "Условия покупки"})
      return breadcrumbs
    }
  },
  methods: {
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
  created() {
    if(this.$cookies.get('count') === undefined) {
      this.count = this.getRandomInt(7, 15)

      this.$cookies.set('count', this.count, {
        path: '/',
        maxAge: 60 * 60 * 24
      })
    } else {
      this.count = this.$cookies.get('count')
    }
  }
})
</script>

<style lang="scss">

</style>
