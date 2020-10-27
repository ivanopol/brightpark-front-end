<template>
  <div>
    <div class="container">
      <BreadCrumbs :breadcrumbs="makeBreadcrumbs"/>
    </div>
    <div>
      <Carcasses/>
    </div>
    <nuxt-child/>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      seo: {}
    }
  },
  validate: function ({params, store}) {
    let validate_city = false
    let validate_model = false

    if (!Object.keys(store.state.city).length) {
      return false;
    }

    validate_city = store.state.cities.find((city) => city.value === params.city) !== undefined
    validate_model = store.state.models.indexOf(params.models) >= 0

    return validate_city && validate_model
  },
  async asyncData(context) {
    context.store.commit('set_page', 'models')
    context.store.commit('set_bg', '')

    const seo = await context.$axios.$post(process.env.apiUrl + `/api/get_meta_tags`, {
      route: context.route.fullPath
    })
    return { seo: seo }
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
    makeBreadcrumbs: function() {
      let breadcrumbs = []
      breadcrumbs.push({url: "", title: "Главная"})
      breadcrumbs.push({url: this.$store.state._model.slug, title: "Модельный ряд " + this.$store.state._model.title})
      return breadcrumbs
    }
  },
})
</script>

<style lang="scss">

</style>
