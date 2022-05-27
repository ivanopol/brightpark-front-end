<template>
  <div>
    <ServiceHooper />
    <div class="container_bg_dark">
      <div class="container">
        <div id="advantages" class="advantages_wrap service_wrap">
          <h2><span class="c_orange">Наши</span> преимущества</h2>
          <ul>
            <li>
              <div class="advantage">
                <span class="icon"><img src="/images/icons/service/best_prices.svg" alt="Брайт Парк сервис: Лучшие цены в городе"></span>
                <span class="text">Низкие цены</span>
              </div>
            </li>
            <li>
              <div class="advantage">
                <span class="icon"><img src="/images/icons/service/experience.svg" alt="Брайт Парк сервис: Стаж мастеров от 10 лет"></span>
                <span class="text">Стаж мастеров от&nbsp;10&nbsp;лет</span>
              </div>
            </li>
            <li>
              <div class="advantage">
                <span class="icon"><img src="/images/icons/service/garanty.svg" alt="Брайт Парк сервис: Гарантия на услуги 1 год"></span>
                <span class="text">Гарантия на&nbsp;услуги 1&nbsp;год</span>
              </div>
            </li>
            <li>
              <div class="advantage">
                <span class="icon"><img src="/images/icons/service/car_state.svg" alt="Брайт Парк: Отчёт о состоянии А/М при выдаче"></span>
                <span class="text">Отчёт&nbsp;о&nbsp;состоянии авто при выдаче</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container_bg_dark">
      <div class="container">
        <FormService  :form_id="$store.state._page + '__sign-up-for-a-service_'"
                      :button_text="'Записаться на сервис'"
                      :form_title="''"
                      :is_comment='true'
                      :form_h1="'<span class=\'c_orange\'>Запишись</span> на сервис'"
                      form_class="mobile_white_bg"
                      :form_type='2'
                      goal="service"
                      class_list="callibri_phone_service_btn btn-position event feedback__form__call"
                    >
        </FormService>
      </div>
    </div>
    <CarLogos />
    <OurServices />
    <TrustUs />
    <client-only>
      <ReviewService />
    </client-only>
    <div class="container_bg_dark">
      <div class="container">
        <FormRetarget :form_id="$store.state._page + '__sign-up-to-our-service_'"
                      :button_text="'Записаться на сервис'"
                      :form_title="'<span class=\'c_orange\'>Запишись</span> к нам на сервис'"
                      :form_pre_title="'и получи скидку 5% при визите в день обращения'"
                      :is_comment='true'
                      form_class="mobile_white_bg"
                      :form_type='2'
                      goal="service"
                      class_list="callibri_phone_service_btn btn-position event feedback__form__call"
        ></FormRetarget>
      </div>
    </div>
    <FooterOld footer_class="container_bg_dark"
            :ym_button='true'
            ym_btn_class="green btn-position"
            :page="$store.state._page" />
    <nuxt-child/>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'service',
  data: function () {
    return {
      seo: {}
    }
  },
  async asyncData(context) {
    context.store.commit('set_page', 'service')
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

<style scoped lang="scss">

</style>
