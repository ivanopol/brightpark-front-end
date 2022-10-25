<template>
  <div>
    <div class="container">
      <BreadCrumbs :breadcrumbs="makeBreadcrumbs"/>
    </div>
    <StocksItem :data="data"/>
    <div>
      <div class="container" v-if="callback">
        <div class="advantages_form">
          <FormBuyComponent :form_id="$store.state._page + '__advantages_'"
                            :button_text="'Отправить'"
                            :form_title="'Оставьте заявку, мы вам перезвоним'"
                            :goal="'specialoffer'" />

        </div>
      </div>
      <ModelsList/>
      <MegaTeasers/>
    </div>
    <nuxt-child/>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: function () {
    return {
      data: {},
      seo: {},
      exceptions: [],
      callback: true
    }
  },
  validate: function ({params, store}) {
    if (!Object.keys(store.state.city).length) {
      return false;
    }

    let validate_city = store.state.cities.find((city) => city.value === params.city) !== undefined
    let validate_item = /^[\w\-]*$/.test(params.stock_item)

    return validate_city && validate_item;
  },
  async asyncData(context) {
    context.store.commit('set_page', 'stocks-one')
    context.store.commit('set_bg', '')

    const stock_item = await context.$axios.$get(
      process.env.apiUrl + `/api/stocks_item?&city_id=${context.store.state.city.city_id}&slug=${context.route.params.stock_item}`
    ).then(res => { return res })

    if ( !Object.keys(stock_item).length ) {
      context.error({ statusCode: 404, message: 'Страница не найдена' })
    }

    const seo = await context.$axios.$post(process.env.apiUrl + `/api/get_meta_tags`, {
      route: context.route.fullPath
    })

    return { data: stock_item, seo: seo }
  },
  head() {
    if (Object.keys(this.seo).length == 0) {
      return null
    }

    return {
      title: this.seo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.seo.description },
        { property: 'og:image', content: this.data.preview },
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
      "image": this.data.preview,
    }
  },
  computed: {
    makeBreadcrumbs: function() {
      let breadcrumbs = []
      breadcrumbs.push({url: "", title: "Главная"})
      breadcrumbs.push({url: "stocks", title: "Акции"})
      breadcrumbs.push({url: "stocks/" + this.data.slug , title: this.data.title})
      return breadcrumbs
    },
    isException: function() {
      return this.exceptions.indexOf(this.$route.params.stock_item) >= 0
    }
  },
  mounted() {
    if (this.$route.path == '/yekaterinburg/stocks/3000-rublej-za-kazhdogo-novogo-klienta') {
      this.callback = false
    }
  }
})
</script>

<style lang="scss">

</style>
