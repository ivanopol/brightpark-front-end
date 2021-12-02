<template>
  <div>
    <section class="main-screen">
      <RetargetingHooper />
    </section>
    <div class="container">
      <div id="advantages" class="advantages_wrap retargeting_wrap">
        <h1><span class="c_orange">Преимущества</span> покупки сейчас</h1>
        <ul>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/pervonchalnyj_vznos.svg" alt="Брайт Парк: 0% первоначальный взнос"></span>
              <span class="text">0% первоначальный взнос</span>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/vygoda_v_kredit.svg" alt="Брайт Парк: 10% выгода в кредит"></span>
              <span class="text">10% выгода<br>в кредит</span>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/doplata.svg" alt="Брайт Парк: Доплатим 40000 р. при обмене вашего авто"></span>
              <span class="text">Доплатим 40&nbsp;000 р.<br><span class="text-small">при обмене вашего авто</span></span>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/stavka.svg" alt="Брайт Парк: Ставка по кредиту от 3,5%"></span>
              <span class="text">Ставка по кредиту от&nbsp;1,7%</span>
            </div>
          </li>
        </ul>
      </div>
      <Steps :form_id="$store.state._page + '__fill-form_'"
             :goal="'fixconditions'"
             :prefix="$store.state._page + '__'" />
      <Baraban />
<!--      <HookRetarget />-->
      <FormRetarget :form_id="$store.state._page + '__leave-request-now_'"
                    :button_text="'Получить лучшие условия'"
                    :form_title="'<span class=\'c_orange\'>Оставьте</span> заявку сейчас'"
                    :goal="'specialoffer'" />
      <div class="block-note"><p>*Предложение ограниченно, подробности в автосалоне</p></div>
    </div>
    <nuxt-child/>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'without_footer',
  data: function () {
    return {
      seo: {}
    }
  },
  async asyncData(context) {
    context.store.commit('set_page', 'retargeting')
    context.store.commit('set_bg', '')
    context.store.commit('show_footer', false)

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

<style scoped lang="scss">

</style>
