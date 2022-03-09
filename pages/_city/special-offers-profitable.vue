<template>
  <div>
    <section class="main-screen">
      <Retargeting2Banner />
    </section>
    <div class="container">
      <div id="advantages" class="advantages_wrap retargeting_wrap">
        <h1><span class="c_orange">Ваша</span> персональная выгода</h1>
        <ul>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/doplata.svg" alt="Брайт Парк: Повысить субсидию при обмене на 40 000 рублей"></span>
              <span class="text">Повысить субсидию<br>при обмене на <br>40&nbsp;000&nbsp;&#8381;</span>

              <button type="button" :id="$store.state._page + '__advantages-increase-subsidy__save-benefit'" class="advantage__button event"
                      v-on:click.prevent="show('Сохранить выгоду', $store.state._page + '__modal-advantages-increase-subsidy_', 'Отправить', 1, 'callback')"
              >
                Сохранить выгоду
              </button>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/stavka.svg" alt="Брайт Парк: Снизить % ставку при кредите"></span>
              <span class="text">Снизить % ставку<br> при кредите</span>
              <button type="button" :id="$store.state._page + '__advantages-reduce-rate__save-benefit'" class="advantage__button event"
                      v-on:click.prevent="show('Сохранить выгоду', $store.state._page + '__modal-advantages-reduce-rate_', 'Отправить', 1, 'callback')"
              >
                Сохранить выгоду
              </button>
            </div>
          </li>
          <li>
            <div class="advantage">
              <span class="icon"><img src="/images/icons/retargeting/pervonchalnyj_vznos.svg" alt="Брайт Парк: Увеличить выгоду при покупке с 10% до 24,8%"></span>
              <span class="text">Увеличить выгоду при&nbsp;покупке с&nbsp;10%&nbsp;до&nbsp;24,8%</span>
              <button type="button" :id="$store.state._page + '__advantages-increase-benefit__save-benefit'" class="advantage__button event"
                      v-on:click.prevent="show('Сохранить выгоду', $store.state._page + '__modal-advantages-increase-benefit_', 'Отправить', 1, 'callback')"
              >
                Сохранить выгоду
              </button>
            </div>
          </li>
        </ul>
      </div>
      <Baraban />
      <FormRetarget :form_id="$store.state._page + '__leave-request-now_'"
                    :button_text="'Получить лучшие условия'"
                    :form_title="'<span class=\'c_orange\'>Оставьте</span> заявку сейчас'"
                    :goal="'specialoffer2'" />
<!--      <HookRetarget />-->
    </div>
    <nuxt-child/>

    <modal name="form-special-offers2-advantages" height="auto" :adaptive="true">
      <div class="close" @click="hide"></div>
      <FormBuy2Component :form_title="form_title"
                         :form_id="form_id"
                         :button_text="button_text"
                         :form_type="form_type"
                         :goal="goal">
      </FormBuy2Component>
    </modal>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'without_footer2',
  data: function () {
    return {
      seo: {},
      mobile: false,
      form_id: '',
      form_title: '',
      button_text: '',
      form_type: 1,
      goal: ''
    }
  },

  methods: {
    show (title, form_id, button_text, form_type, goal) {
      this.form_title = title;
      this.form_id = form_id;
      this.button_text = button_text;
      this.form_type = form_type; // 1 - обычная форма, 2 - форма сервиса
      this.goal = goal;
      this.$modal.show('form-special-offers2-advantages');
    },
    hide () {
      this.$modal.hide('form-special-offers2-advantages');
    },
  },

  async asyncData(context) {
    context.store.commit('set_page', 'retargeting2')
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
