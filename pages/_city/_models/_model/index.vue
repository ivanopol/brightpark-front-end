<template>
  <div class="models-page" :class="theme">
    <ModelsListNew />
    <BodiesListNew />
    <ModelsBannerNew
      class="models-banner"
      :colors="model.colors"
      :prices="model.price"
      :model="model.model.title"
      :type="model.type.title_ru"
      @scrollTo="scrollToCredit"
      :isHit="getHit()" />
    <BenefitBannerNiva :model="model.model.title" :type="model.type.title_ru" :credit="model.price.credit" v-if="is_niva"/>
    <BenefitBanner :model="model.model.title" :type="model.type.title_ru" v-else/>
    <AdvantagesNew class="models-advantages"/>
    <div class="container order-call-wrap">
        <OrderCallForm />
    </div>
    <ModelsFeatures :features="model.features"/>
    <ModelsEquipments class="equipments-block" :complectations="model.complectations"/>
    <TradeInFormNew :models="model.type.title" :type="model.type.title_ru"/>
    <ModelsAbout :about="model.about" />
<!--    <CreditNew id="creditCalc" :equipments="model.complectations"/>-->
    <ModelsWarranty :model="model.model.title" :type="model.type.title_ru"/>
    <BookCarNew class="book-section"/>
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
      model: '',
      seo: {},
      isHitOfSales: false,
      theme: 'theme-01',
      is_niva: false,
      mortgage: 0
    }
  },
  layout (context) {
    return 'model'
  },
  async validate(context) {

    let validate_city = false
    let validate_model = false
    let validate_type = false

    if (!Object.keys(context.store.state.city).length) {
      return false;
    }

    validate_city = context.store.state.cities.find((city) => city.value === context.params.city) !== undefined
    validate_model = context.store.state.models.indexOf(context.params.models) >= 0

    validate_type = await context.$axios.$post(
      process.env.apiUrl + `/api/verify_model`, {
        model: context.params.models,
        type:  context.params.model,
        city:  context.params.city,
      })

    return validate_city && validate_model && validate_type
  },
  async asyncData(context) {
    let model = {}
    let car_title = ''
    let car = {}

    context.store.commit('set_page', 'model')
    context.store.commit('set_bg', '')

    model = await context.$axios.$get(
      process.env.apiUrl + `/api/model_new?&city=${context.route.params.city}&model=${context.route.params.models}&type=${context.route.params.model}`
    )

    car_title = model.model.title + ' ' + model.type.title
    car = {
      model_full: car_title,
      url: '/' + context.route.params.city + '/' + model.model.slug + '/' + model.type.slug + '/model-details'
    }

    context.store.commit('set_car', car)

    const seo = await context.$axios.$post(process.env.apiUrl + `/api/get_meta_tags`, {
      route: context.route.fullPath
    })

    return { model: model, seo: seo }
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
  },
  methods: {
    setPageType: function() {
      if (
        this.$route.params.models === 'niva' ||
          this.$route.params.models === 'niva-legend' )
      {
        this.is_niva = true
      }
      return {}
    },
    changeTheme: function() {
      let theme = ''
      switch (this.$route.params.models) {
        case 'granta':
          theme = 'theme-01'
        break;
        case 'vesta':
        case 'niva':
          theme = 'theme-02'
        break;
        case 'xray':
          theme = 'theme-03'
        break;
        case 'largus':
          theme = 'theme-04'
          break;
        default:
          theme = 'theme-01'
        break;
      }
      return theme
    },
    getHit: function() {
      if (this.model.model.slug === 'granta' && this.model.type.slug === 'sedan') {
        return true
      } else if (this.model.model.slug === 'vesta' && this.model.type.slug === 'sedan') {
        return true
      } else if (this.model.model.slug === 'xray' && this.model.type.slug === 'xray') {
        return true
      } else if (this.model.model.slug === 'largus' && this.model.type.slug === 'universal') {
        return true
      }
      return false
    },

    scrollToCredit() {
      const element = document.getElementById('creditCalc');
      element.scrollIntoView({block: 'start', behavior: 'smooth'});
    },
  },
  created() {
    this.theme = this.changeTheme()
    this.setPageType()
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
