<template>
  <div>
    <div class="container">
      <BreadCrumbs :breadcrumbs="makeBreadcrumbs" />
    </div>
    <div class="container p-top-90">
      <div class="stocks-wrapper">
        <h1 class="ad_h1">О Компании</h1>
        <div class="stocks-one">
          <div class="stocks-one-body">
            <p>Брайт Парк — прогрессивная федеральная автомобильная сеть, развивающаяся уже больше 9 лет. За это время дети некоторых наших клиентов сами успели стать нашими клиентами. А компания стала другом более 20 000 семей.</p>
            <p>Мы объединяем автоцентры в 6 регионах России: Москва, Пермь, Екатеринбург, Волгоград, Ростов-на-Дону, Магнитогорск. Наша команда — лидер по продаже и обслуживанию автомобилей LADA, SKODA, УАЗ и Карлссон (автомобили с пробегом). Также мы являемся ключевыми партнерами ПАО “АВТОВАЗ” по объему продаж.</p>
            <p>Для нас важен каждый клиент. Мы искренне радуемся, когда число любителей LADA растет! Наша главная ценность — сделать покупку и обладание автомобилем наполненным приятных эмоций. Более 1000 сотрудников старательно работают над тем, чтобы помочь вам выбрать автомобиль или воспользоваться услугами сервиса. Наша команда регулярно проходит сертификации у автопроизводителей. А свой собственный учебный центр способствует быстрому развитию профессиональных навыков каждого работника. Поэтому довериться нам не страшно</p>
            <p>Всё это было бы невозможно без желания постоянного развития. Наши сотрудники, развиваясь профессионально и чувствуя заботу компании всегда готовы помочь в решении любых вопросов, связанных с покупкой и эксплуатацией вашего автомобиля.</p>
            <p>Основные направления работы Брайт Парка:</p>
            <ul>
              <li>Продажа новых и подержанных легковых авто</li>
              <li>Выкуп и комиссия автомобилей с пробегом</li>
              <li>Кредитование и страхование</li>
              <li>
                Корпоративные продажи
              </li>
              <li>
                Сервисное обслуживание
              </li>
            </ul>
            <p>Будем рады видеть вас у нас в гостях!</p>
          </div>
        </div>
      </div>
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
    if (!Object.keys(store.state.city).length) {
      return false;
    }

    let validate_city = store.state.cities.find((city) => city.value === params.city) !== undefined

    return validate_city
  },
  async asyncData(context) {
    context.store.commit('set_page', 'about')
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
      breadcrumbs.push({url: this.$store.state._page, title: "О компании"})
      return breadcrumbs
    }
  },
})
</script>
