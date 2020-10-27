<template>
  <div>
    <div class="container">
      <BreadCrumbs :breadcrumbs="makeBreadcrumbs"/>
    </div>
    <div class="container p-top-90">
      <h1>Контакты</h1>
      <div class="contacts-wrap">
        <div class="contacts" itemscope itemtype="http://schema.org/LocalBusiness">
          <ul>
            <li>
              <span class="contacts-field-name">Адрес:</span>
              <span class="contacts-field-value">{{ $store.state.city.address }}</span>
            </li>
            <li>
              <span class="contacts-field-name">Время работы:</span>
              <span class="contacts-field-value" ><time itemprop="openingHours" :datetime="$store.state.city.opening_hours.days.en + ', ' + $store.state.city.opening_hours.hours">с {{ $store.state.city.opening_hours.hours_split.from }} до {{$store.state.city.opening_hours.hours_split.to }}</time></span>
            </li>
            <li>
              <span class="contacts-field-name">Телефон:</span>
              <span class="contacts-field-value"><a id="contacts__left-side__phone" class="callibri_tel event" :href="'tel:' + $store.state.city.phone" >{{ $store.state.city.phone_format }}</a></span>
            </li>
            <li>
              <span class="contacts-field-name">E-Mail:</span>
              <span class="contacts-field-value"><a id="contacts__left-side__email" class="event" :href="'mailto:' + $store.state.city.email">{{ $store.state.city.email }}</a></span>
            </li>
            <li>
              <span class="contacts-field-name">Соц. сети:</span>
              <span class="contacts-field-value"><a id="contacts__left-side__vk" class="event" :href="$store.state.city.vk_url" target="_blank"><img class="social_logos" src="/images/icons/vk-logo.png" alt="Логотип ВК">Вконтакте</a></span>
            </li>
            <li>
              <span class="contacts-field-name"></span>
              <span class="contacts-field-value"><a id="contacts__left-side__facebook" class="event" :href="$store.state.city.fb_url" target="_blank"><img class="social_logos" src="/images/icons/facebook-logo.png" alt="Логотип Facebook">Facebook</a></span>
            </li>
            <li>
              <span class="contacts-field-name"></span>
              <span class="contacts-field-value"><a id="contacts__left-side__instagram" class="event" :href="$store.state.city.instagram_url" target="_blank"><img class="social_logos" src="/images/icons/instagram-logo.png" alt="Логотип Instagram">Instagram</a></span>
            </li>
            <li>
              <span class="contacts-field-name"></span>
              <span class="contacts-field-value"><a id="contacts__left-side__youtube" class="event" :href="$store.state.city.youtube_url" target="_blank"><img class="social_logos" src="/images/icons/yt-logo.png" alt="Логотип YouTube">Youtube</a></span>
            </li>
            <li>
              <span class="contacts-field-name"></span>
              <span class="contacts-field-value"><a id="contacts__left-side__ok" class="event" :href="$store.state.city.ok_url" target="_blank"><img class="social_logos" src="/images/icons/ok-logo.png" alt="Логотип Одноклассники">Одноклассники</a></span>
            </li>
          </ul>
        </div>

        <div class="contacts-map">
          <client-only placeholder="Загрузка...">
            <YandexMapComponent :button="false" :lazy_load="false" />
          </client-only>
        </div>
      </div>
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
  validate: function ({params, store}) {
    if (!Object.keys(store.state.city).length) {
      return false;
    }

    let validate_city = store.state.cities.find((city) => city.value === params.city) !== undefined

    return validate_city
  },
  async asyncData(context) {
    context.store.commit('set_page', 'contacts')
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
      breadcrumbs.push({url: this.$store.state._page, title: "Контакты"})
      return breadcrumbs
    }
  },
})
</script>

