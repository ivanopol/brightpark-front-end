<template>
  <div class="models-page" :class="theme">
    <div>
      <div v-if="new_design">
        <ModelsListNew />
        <BodiesListNew />
        <ModelsBannerNew
          class="models-banner"
          :colors="model.colors"
          :prices="model.price"
          :model="model.model.title"
          :type="model.type.title_ru"
          @scrollTo="scrollToCredit"
          :isHit="getHit()"
        />

        <TestDriveBanner :model="model.model.title" :type="model.type.title_ru"/>
        <AdvantagesNew class="models-advantages"/>
        <ModelsFeatures :features="model.features"/>
        <ModelsEquipments class="equipments-block" :complectations="model.complectations"/>
        <TradeInFormNew :model="model.type.title" :type="model.type.title_ru"/>
<!--        <ModelsAbout :model="model.model.slug" :type="model.type.slug" />-->
        <CreditNew id="creditCalc"
                   :model="model.model.title"
                   :type="model.type.title_ru"
                   :equipments="model.complectations"/>
        <ModelsWarranty />
        <BookCarNew class="book-section"/>
      </div>

      <div v-else>
        <div class="container model-breadcrumbs">
            <BreadCrumbs :breadcrumbs="makeBreadcrumbs"/>
        </div>

        <ModelBanner :data="model.slider" />
        <MegaTeasers2 />
        <ModelInfo v-for="(info, index) in model.blocks" v-bind:key="info.id"
          :block="info"
          :n="index"
          :model="model.model_id"
          :type="model.type_id"
        />
       <ColorChoose :colors="model.colors" :model="model.model_slug" :type="model.type_slug" v-if="model.colors.length !== 0"/>

        <section class="model-details">
          <div class="trigger-wrap" >
           <p class="trigger-wrap-text" v-if="!this.is_niva">Осталось <span class="model-count-text">{{count}}</span> {{model.model_full}} по цене лучше, чем на сайте</p>
          </div>
          <steps  :car_model='model.model'
                  :car_type='model.type'
                  :car_attrs='model.car_attrs'
                  :form_id="$store.state._page + '__fill-form_'"
                  :goal="'fixconditions'"
                  :prefix="$store.state._page + '__'">
          </steps>
        </section>

        <Reviews v-if="model.reviews.length !== 0"
                 :reviews='model.reviews'
                 :model_name="model.model_full"/>
        <Plate :text="plate"/>
        <NextAction />
        <Feedback :model_full="model.model_full" />
      </div>
    </div>
    <nuxt-child/>
  </div>
</template>

<script>
import Vue from 'vue'
import MegaTeasers2 from "@/components/elements/MegaTeasers2";

export default Vue.extend({
  components: {MegaTeasers2},
  data: function () {
    return {
      new_design: false,
      model: '',
      car_title: '',
      seo: {},
      count: 0,
      isHitOfSales: false,
      theme: 'theme-01',
    }
  },
  layout (context) {
    return context.route.params.models === 'granta' || context.route.params.models === 'vesta' ? 'model_new' : 'model'
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
    let new_design = false
    let model = {}
    let car_title = ''
    let car = {}

    context.store.commit('set_page', 'model')
    context.store.commit('set_bg', '')

    if (context.route.params.models === 'granta' || context.route.params.models === 'vesta' ) {
      new_design = true
      model = await context.$axios.$get(
        process.env.apiUrl + `/api/model_new?&city=${context.route.params.city}&model=${context.route.params.models}&type=${context.route.params.model}`
      )
      car_title = model.model.title + ' ' + model.type.title
      car = {
        model_full: car_title,
        url: '/' + context.route.params.city + '/' + model.model.slug + '/' + model.type.slug + '/model-details'
      }
    } else {
      model = await context.$axios.$get(
        process.env.apiUrl + `/api/model?&city=${context.route.params.city}&models=${context.route.params.models}&model=${context.route.params.model}`
      )
      car_title = model.model_full
      car = {
        model_full: car_title,
        url: '/' + context.route.params.city + '/' + model.model_slug + '/' + model.type_slug + '/model-details'
      }
    }

    context.store.commit('set_car', car)

    const seo = await context.$axios.$post(process.env.apiUrl + `/api/get_meta_tags`, {
      route: context.route.fullPath
    })



    return { model: model, seo: seo, new_design: new_design, car_title: car_title }
  },
  head() {
    if (Object.keys(this.seo).length == 0) {
      return null
    }

    let image = this.seo.images

    if (this.model.colors.length) {
      image = this.model.colors[0].image
    }

    return {
      title: this.seo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.seo.description },
        { property: 'og:image', content: image },
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

    let image = this.seo.images

    if (this.model.colors.lenght) {
      image = this.model.colors[0].image
    }

    return {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": this.seo.title,
      "description": this.seo.description,
      "url": process.env.baseUrl + this.$route.fullPath,
      "image": image,
    }
  },
  computed: {
    makeBreadcrumbs: function () {
      let breadcrumbs = []
      if (this.model) {
        breadcrumbs.push({url: "", title: "Главная"})
        breadcrumbs.push({url: this.model.model_slug, title: "Модельный ряд " + this.model.model})
        breadcrumbs.push({url: this.model.model_slug + '/' + this.model.type_slug, title: this.model.model_full})
      }
      return breadcrumbs
    },
    is_niva: function() {
      return this.$store.state.car.model_full.toLowerCase() === 'niva travel'
    },
    plate: function () {
      const textDefault = 'Выбрали LADA ' + this.model.model_full + '? Тест-драйв лучше отзывов. Познакомьтесь с&nbsp;автомобилем лично!'
      const textNiva = ' Узнайте цены и выгоды ' + this.$store.state._month.accusative + ' по телефону: <span itemprop=\'telephone\' class=\'block callibri_tel\'>' + this.$store.state.city.phone_format + '</span>'
      return this.$store.state.car.model_full.toLowerCase() === 'niva travel' ? textNiva : textDefault
    },
  },
  methods: {
    getHit: function() {
      if (this.model.model.slug === 'granta' && this.model.type.slug === 'sedan') {
        return true
      } else if (this.model.model.slug === 'vesta' && this.model.type.slug === 'sedan') {
        return true
      }
      return false
    },
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    scrollToCredit() {
      const element = document.getElementById('creditCalc');
      element.scrollIntoView({block: 'start', behavior: 'smooth'});
    },
  },
  created() {
    //this.theme = this.themes[this.$route.params.model]

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

<style lang="scss" scoped>
  .models-advantages {
    margin: 60px 0 40px;
  }

  .models-banner {
    margin-bottom: 60px;
  }

  .equipments-block {
    margin-top: 90px;
  }

  .book-section {
    margin: 20px 0 60px;
  }
</style>
