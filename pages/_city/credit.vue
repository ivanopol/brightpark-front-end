<template>
  <!-- СТРАНИЦА ОТКЛЮЧЕНА. Чтобы ее включить надо убрать редирект из файла /301.json (в корневой папке сайта) -->
  <div>
    <section class="main-screen">
      <CreditBanner :offer='offer' />
    </section>
    <plate :bold='true' :text="'Внимание! Склад пополнился! Отдаем с&nbsp;максимальной выгодой!'" />

    <div class="container">
      <div id="advantages" class="advantages_wrap credit_wrap retargeting_wrap">
        <h1><span class="c_orange">Преимущества</span> покупки сейчас</h1>
        <ul>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/pervonchalnyj_vznos.svg" alt="Брайт Парк: 0% первоначальный взнос"></span>
              <span class="text">0%&nbsp;первоначальный взнос</span>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/calendar.svg" alt="Брайт Парк: 10% выгода в кредит"></span>
              <span class="text">До&nbsp;7&nbsp;лет<br>срок кредитования</span>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/doplata.svg" alt="Брайт Парк: Доплатим 40000 р. при обмене вашего авто"></span>
              <span class="text">От&nbsp;1,7% годовых</span>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/stavka.svg" alt="Брайт Парк: Ставка по кредиту от 3,5%"></span>
              <span class="text">98% одобрение</span>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/vygoda_v_kredit.svg" alt="Брайт Парк: Ставка по кредиту от 3,5%"></span>
              <span class="text">10% выгода в&nbsp;кредит</span>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/30_min.svg" alt="Брайт Парк: Ставка по кредиту от 3,5%"></span>
              <span class="text">30&nbsp;минут на&nbsp;одобрение кредита</span>
            </div>
          </li>
        </ul>
      </div>
      <FormRetarget :form_id="$store.state._page + '__leave-request-now_'"
                    :button_text="'Получить лучшие условия'"
                    :form_title="'<span class=\'c_orange\'>Оставьте</span> заявку сейчас'"
                    :goal="'credit'" />

      <Steps :form_id="$store.state._page + '__fill-form_'"
             :goal="'fixconditions'"
             :prefix="$store.state._page + '__'"
             :car_type="car_type"
             :car_model="car_model"
             style="margin-top: 30px;padding-top: 100px"
              />
    </div>
    <Banks />
    <div class="container">
      <div class="stocks-wrapper">
        <div class="stocks-one">
          <div class="stocks-one-body">
            <p>Редко кому удается быстро накопить на&nbsp;новую машину, ее&nbsp;приобретение может затянуться на&nbsp;долгое время. Кредитная программа от&nbsp;официального дилера Лада &laquo;Брайт Парк&raquo; в {{ $store.state.city.dative }} помогает купить автомобиль LADA в&nbsp;короткие сроки и&nbsp;на&nbsp;самых выгодных условиях. Удобный график выплат, возможность получения страховки и&nbsp;низкие суммы первоначального взноса.</p>
            <p>Мы&nbsp;ценим наше и&nbsp;ваше время, поэтому требований для оформления кредита совсем немного. А&nbsp;чтобы Вам было проще, наши специалисты сопроводят вас на&nbsp;каждом этапе оформления кредита и&nbsp;ответят на&nbsp;все возникающие вопросы.</p>
            <p>Все, что от&nbsp;вас требуется, это выбрать интересующий автомобиль LADA и&nbsp;обсудить с&nbsp;нашими специалистами условия кредитования. После этого выбрать нужный вам банк.</p>
            <p>Следующий этап- сбор необходимых документов и&nbsp;оформление заявки. Срок принятия решения составляет всего один день. После мы&nbsp;подпишем договор и&nbsp;Вы станете счастливым обладателем нового автомобиля Lada.</p>
            <p>С&nbsp;&laquo;Брайт Парк&raquo; купить новый автомобиль стало еще проще!</p>
          </div>
        </div>
      </div>
      <FormRetarget :form_id="$store.state._page + '__leave-request-now-2_'"
                    :button_text="'Получить лучшие условия'"
                    :form_title="'<span class=\'c_orange\'>Оставьте</span> заявку сейчас'"
                    :goal="'credit'" />
    </div>
  </div>
</template>


<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data: function () {
    return {
      seo: {},
      offer: {
        img_mobile: "/images/main/mobile/september_596х1057.jpg",
        img_tablet: "/images/main/tablet/900х584_september.jpg",
        img_desktop: "/images/main/desktop/1920х870_september.jpg",
      },

      car_type: '',
      car_model: '',
    }
  },

  mounted() {
    if(this.$route.query.car_model && this.$route.query.car_type) {
      this.car_model = this.$route.query.car_model;
      this.car_type = this.$route.query.car_type;

      document.querySelector('.steps-wrap').scrollIntoView({block: "start", behavior: "auto"})
    }
  },

  async asyncData(context) {
    context.store.commit('set_page', 'credit')
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
