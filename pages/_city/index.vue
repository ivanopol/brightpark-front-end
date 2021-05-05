<template>
  <div>
    <section class="main-screen">
      <MainHooper></MainHooper>
    </section>
    <plate :bold='true' :text="'В Брайт парке специальные цены на LADA — каждый день! Узнайте подробности по телефону: <a href=\'tel:' + $store.state.city.phone + '\' class=\'callibri_tel event\'>' + $store.state.city.phone_format + '</a>'" />

    <ModelsList/>
    <MegaTeasers/>
    <div class="container">
      <Advantages />
      <div class="advantages_form">
        <FormBuyComponent :form_id="'main__advantages_'"
                          :is_comment="true"
                          :button_text="'Отправить'"
                          :form_title="'Оставьте заявку, мы вам перезвоним'"
                          :goal="'about_model'" />

      </div>
      <div class="b-desciption">
        <h2><span>Простой выбор</span></h2>
        <p><span>У&nbsp;нас можно приобрести по&nbsp;доступной </span><span>цене</span><span> технологичный и&nbsp;современный автомобиль, который соответствует вашему стилю вождения, образу жизни и&nbsp;характеру. Выберите семейную и&nbsp;практичную модель, маневренное и&nbsp;динамичное авто для города или внедорожник для экстремальной езды. </span></p>
        <p><span>Наши консультанты помогут с&nbsp;подбором машины, организуют тест-драйв и&nbsp;сформируют комплектацию авто по&nbsp;индивидуальным требованиям.</span></p>
        <h2><span>Удобная и&nbsp;выгодная покупка</span></h2>
        <p><span>Мы&nbsp;будем сопровождать вас на&nbsp;всех этапах приобретения: от&nbsp;выбора модели до&nbsp;оформления документов. Проконсультируем по&nbsp;финансовым, правовым, страховым и&nbsp;техническим вопросам.</span></p>
        <p><span>У&nbsp;нас большой перечень финансовых программ от&nbsp;банков-партнеров для быстрой и&nbsp;выгодной покупки. Есть удобная программа обмена: возьмем на&nbsp;себя реализацию вашей старой машины и&nbsp;подарим 40&nbsp;000&nbsp;руб.&nbsp;на&nbsp;новую модель LADA.</span></p>
        <h2><span>Надежная поддержка</span></h2>
        <p><span><span>Приобретение авто у&nbsp;</span><span>официального дилера</span><span>&nbsp;— гарантия надежной технической поддержки. Выполняем гарантийное и&nbsp;постгарантийное обслуживание автомобиля. Вы&nbsp;сможете обратиться к&nbsp;нам по&nbsp;любому вопросу на&nbsp;протяжении всего срока службы автомобиля: мы&nbsp;всегда на&nbsp;связи.</span></span></p>
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
