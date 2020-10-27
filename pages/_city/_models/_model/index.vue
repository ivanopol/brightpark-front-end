<template>
  <div>
    <div>
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
      <FormModel :form_id="'model__try-it-yourself_'"
                      :form_title="'Расширенный тест-драйв в Брайт парке'"
                      :goal="'test_drive'">
      </FormModel>
      <Reviews v-if="model.reviews.length !== 0"
               :reviews='model.reviews'
               :model_name="model.model_full"/>
      <Plate :text="'Выбрали LADA ' + $store.state.car.model_full +'? Узнайте все дополнительные выгоды октября!'"/>
      <NextAction />
      <Feedback :model_full="model.model_full" />
    </div>
    <nuxt-child/>
  </div>
</template>

<!--<script lang="ts">-->
<script>
import Vue from 'vue'
import MegaTeasers2 from "@/components/elements/MegaTeasers2";

export default Vue.extend({
  components: {MegaTeasers2},
  data: function () {
    return {
      model: '',
      seo: {},
    }
  },
  layout: 'model',
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
    context.store.commit('set_page', 'model')
    context.store.commit('set_bg', '')
    const model = await context.$axios.$get(
      process.env.apiUrl + `/api/model?&city=${context.route.params.city}&models=${context.route.params.models}&model=${context.route.params.model}`
    )
    let car = {
      model_full: model.model_full,
      url: '/' + context.route.params.city + '/' + model.model_slug + '/' + model.type_slug + '/model-details'
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
    makeBreadcrumbs: function () {
      let breadcrumbs = []
      if (this.model) {
        breadcrumbs.push({url: "", title: "Главная"})
        breadcrumbs.push({url: this.model.model_slug, title: "Модельный ряд " + this.model.model})
        breadcrumbs.push({url: this.model.model_slug + '/' + this.model.type_slug, title: this.model.model_full})
      }
      return breadcrumbs
    }
  }
})
</script>

<style lang="scss">

</style>
