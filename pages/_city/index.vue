<template>
  <div>
    <section class="main-screen">
      <MainHooper></MainHooper>
    </section>
    <plate :bold='true' :text="'Обменяем ваш авто на&nbsp;новую LADA без доплаты, Подробности по&nbsp;телефону: <a href=\'tel:' + $store.state.city.phone + '\' class=\'callibri_tel event\'>' + $store.state.city.phone_format + '</a>'" />

    <ModelsList/>
    <MegaTeasers/>
    <div class="container">
      <Advantages />
      <div class="advantages_form">
        <FormBuyComponent :form_id="'main__advantages_'"
                          :button_text="'Отправить'"
                          :form_title="'Оставьте заявку, мы вам перезвоним'"
                          :goal="'about_model'" />

      </div>
    </div>
    <Banks/>
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
    if (!Object.keys(store.state.city).length) {
      return false;
    }

    return store.state.cities.find((city) => city.value === params.city) !== undefined;
  },
  async asyncData(context) {
    context.store.commit('set_page', 'main')
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
})
</script>

<style lang="scss">

</style>
