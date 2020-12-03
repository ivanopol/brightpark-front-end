<template>
  <div>
    <section class="main-screen">
      <Retargeting2Banner :offer='offer' />
    </section>
    <div class="container">
      <div id="advantages" class="advantages_wrap retargeting_wrap">
        <h1><span class="c_orange">Преимущества</span> покупки сейчас</h1>
        <ul>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/doplata.svg" alt="Брайт Парк: Доплатим 40000 р. при обмене вашего авто"></span>
              <span class="text">Повысить субсидию<br>при обмене на <br>40 0000</span>

              <button type="button" class="advantage__button">
                Сохранить выгоду
              </button>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/stavka.svg" alt="Брайт Парк: Ставка по кредиту от 3,5%"></span>
              <span class="text">Снизить % ставку<br> при кредите</span>
              <button type="button" class="advantage__button">
                Сохранить выгоду
              </button>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/pervonchalnyj_vznos.svg" alt="Брайт Парк: 0% первоначальный взнос"></span>
              <span class="text">Увеличить выгоду при покупке с 10% до 13%</span>
              <button type="button" class="advantage__button">
                Сохранить выгоду
              </button>
            </div>
          </li>
        </ul>
      </div>
      <Steps :form_id="$store.state._page + '__fill-form_'"
             :goal="'fixconditions'"
             :prefix="$store.state._page + '__'" />
      <Baraban />
      <HookRetarget />
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
      seo: {},
      offer: {
        img_mobile: "/images/main/mobile/retargeting2_mobile.jpg",
        img_tablet: "/images/main/tablet/retargeting2_tablet.jpg",
        img_desktop: "/images/main/desktop/retargeting2_desktop.jpg",
      }
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

  .advantage {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .advantage__button {
    @include basic-button($width: 100%);
    border: none;
    margin-top: 15px;

    @media screen and (max-width: 450px) {
      font-size: .9em;
    }

    @media screen and (max-width: 350px) {
      font-size: .55em;
      height: 30px;
      font-weight: 700;
    }
  }

  .advantages_wrap.retargeting_wrap ul li {
    border: none;
  }
</style>
