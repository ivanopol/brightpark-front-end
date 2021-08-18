<template>
  <div class="models-page">
    <div>
      <div v-if="new_design">
        <ModelsListNew />
        <BodiesListNew />
        <ModelsBannerNew
          class="models-banner"
          :colors="model.colors"
          :prices="model.car_attrs"
          :model="model.model"
          :type="model.type"
          :form_id="'model__banner-new_'"
          @scrollTo="scrollToCredit"
          :goal="'fixconditions'"
        />

        <TestDriveBanner />
        <AdvantagesNew class="models-advantages"/>
        <ModelsFeatures/>
        <ModelsEquipments class="equipments-block" :complectations="complectations"/>
        <TradeInFormNew />
        <ModelsAbout />
        <CreditNew id="creditCalc" />
        <ModelsWarranty />
        <BookCarNew class="book-section"/>
      </div>

      <div v-else>
        <div class="container model-breadcrumbs">
            <BreadCrumbs :breadcrumbs="makeBreadcrumbs"/>
        </div>

        <ModelBanner :data="model.slider" />
        <MegaTeasers2 />
        <ModelInfo v-for="(info, index) in model.blocks" v-bind:key="info.id"
          :block="info"
          :n="index"
          :model="model.model_id"
          :type="model.type_id"
        />
       <ColorChoose :colors="model.colors" :model="model.model_slug" :type="model.type_slug" v-if="model.colors.length !== 0"/>

        <section class="model-details">
          <div class="trigger-wrap" >
           <p class="trigger-wrap-text" v-if="!this.is_niva">Осталось <span class="model-count-text">{{count}}</span> {{model.model_full}} по цене лучше, чем на сайте</p>
          </div>
          <steps  :car_model='model.model'
                  :car_type='model.type'
                  :car_attrs='model.car_attrs'
                  :form_id="$store.state._page + '__fill-form_'"
                  :goal="'fixconditions'"
                  :prefix="$store.state._page + '__'">
          </steps>
        </section>

        <Reviews v-if="model.reviews.length !== 0"
                 :reviews='model.reviews'
                 :model_name="model.model_full"/>
        <Plate :text="plate"/>
        <NextAction />
        <Feedback :model_full="model.model_full" />
      </div>
    </div>
    <nuxt-child/>
  </div>
</template>

<!--<script lang="ts">-->
<script>
import Vue from 'vue'
import MegaTeasers2 from "@/components/elements/MegaTeasers2";

export default Vue.extend({
  components: {MegaTeasers2},
  data: function () {
    return {
      new_design: false,
      model: '',
      seo: {},
      count: 0,
      complectations: {
        drive_active: [
          {
            id: 1,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5МТ',
            title: 'Comfort Light',
            price: 719900,
          },
          {
            id: 2,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5МТ',
            title: 'Comfort',
            price: 726900,
          },
        ],
        hatchback: [
          {
            id: 1,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5МТ',
            title: 'Classic',
            price: 577500,
          },
          {
            id: 2,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5МТ',
            title: 'Comfort Light',
            price: 618500,
          },
          {
            id: 3,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5МТ',
            title: 'Comfort',
            price: 625500,
          },
          {
            id: 4,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '98 л.с.',
            transmission: '4AТ',
            title: 'Comfort',
            price: 715500,
          },
          {
            id: 5,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '98 л.с.',
            transmission: '4AТ',
            title: 'Luxe',
            price: 759800,
          },
        ],
        liftback: [
          {
            id: 1,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Standard',
            price: 553900,
          },
          {
            id: 2,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Classic',
            price: 582500,
          },
          {
            id: 3,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Comfort Light',
            price: 623500,
          },
          {
            id: 4,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Comfort',
            price: 630500,
          },
          {
            id: 5,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: '#CLUB',
            price: 652900,
          },
          {
            id: 6,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Luxe',
            price: 674800,
          },
          {
            id: 7,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5MT',
            title: 'Comfort Light',
            price: 648500,
          },
          {
            id: 8,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5MT',
            title: 'Comfort',
            price: 655500,
          },
          {
            id: 9,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5MT',
            title: '#CLUB',
            price: 677900,
          },
          {
            id: 10,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5MT',
            title: 'Luxe',
            price: 699800,
          },
          {
            id: 11,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '98 л.с.',
            transmission: '4AT',
            title: 'Comfort',
            price: 720500,
          },
          {
            id: 12,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '98 л.с.',
            transmission: '4AT',
            title: 'Luxe',
            price: 764800,
          },
        ],
        sedan: [
          {
            id: 1,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Standard',
            price: 531900,
          },
          {
            id: 2,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Classic',
            price: 562500,
          },
          {
            id: 3,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Comfort Light',
            price: 603500,
          },
          {
            id: 4,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Comfort',
            price: 610500,
          },
          {
            id: 5,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: '#CLUB',
            price: 632900,
          },
          {
            id: 6,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Luxe',
            price: 654800,
          },
          {
            id: 7,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5MT',
            title: 'Comfort Light',
            price: 628500,
          },
          {
            id: 8,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5MT',
            title: 'Comfort',
            price: 635500,
          },
          {
            id: 9,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5MT',
            title: '#CLUB',
            price: 657900,
          },
          {
            id: 10,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5MT',
            title: 'Luxe',
            price: 679800,
          },
          {
            id: 11,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '98 л.с.',
            transmission: '4AT',
            title: 'Comfort Light',
            price: 693500,
          },
          {
            id: 12,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '98 л.с.',
            transmission: '4AT',
            title: 'Comfort',
            price: 700500,
          },
          {
            id: 13,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '98 л.с.',
            transmission: '4AT',
            title: 'Luxe',
            price: 744800,
          },
        ],
        universal: [
          {
            id: 1,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Standard',
            price: 560900,
          },
          {
            id: 2,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Classic',
            price: 589500,
          },
          {
            id: 3,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Comfort Light',
            price: 630500,
          },
          {
            id: 4,
            engine: '1,6 л',
            flap: '8-кл.',
            capacity: '90 л.с.',
            transmission: '5MT',
            title: 'Comfort',
            price: 637500,
          },
          {
            id: 5,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5MT',
            title: 'Comfort',
            price: 662500,
          },
          {
            id: 6,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '106 л.с.',
            transmission: '5MT',
            title: 'Luxe',
            price: 706800,
          },
          {
            id: 7,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '98 л.с.',
            transmission: '4AT',
            title: 'Comfort',
            price: 727500,
          },
          {
            id: 8,
            engine: '1,6 л',
            flap: '16-кл.',
            capacity: '98 л.с.',
            transmission: '4AT',
            title: 'Luxe',
            price: 771800,
          },
        ]
      }
    }
  },
  layout (context) {
    return context.route.params.models === 'granta' ? 'model_new' : 'model'
  },
  validate: function ({params, store}) {
    let validate_city = false
    let validate_model = false
    let validate_type = true

    if (!Object.keys(store.state.city).length) {
      return false;
    }

    validate_city = store.state.cities.find((city) => city.value === params.city) !== undefined
    validate_model = store.state.models.indexOf(params.models) >= 0

    return validate_city && validate_model && validate_type
  },
  async asyncData(context) {
    context.store.commit('set_page', 'model')
    context.store.commit('set_bg', '')
    const model = await context.$axios.$get(
      process.env.apiUrl + `/api/model?&city=${context.route.params.city}&models=${context.route.params.models}&model=${context.route.params.model}`
    )

    let new_design = false
    if (context.route.params.models === 'granta') {
      new_design = true
    }

    let car = {
      model_full: model.model_full,
      url: '/' + context.route.params.city + '/' + model.model_slug + '/' + model.type_slug + '/model-details'
    }
    context.store.commit('set_car', car)

    const seo = await context.$axios.$post(process.env.apiUrl + `/api/get_meta_tags`, {
      route: context.route.fullPath
    })

    return { model: model, seo: seo, new_design: new_design }
  },
  head() {
    if (Object.keys(this.seo).length == 0) {
      return null
    }

    let image = this.seo.images

    if (this.model.colors.lenght) {
      image = this.model.colors[0].image
    }

    return {
      title: this.seo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.seo.description },
        { property: 'og:image', content: image },
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

    let image = this.seo.images

    if (this.model.colors.lenght) {
      image = this.model.colors[0].image
    }

    return {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": this.seo.title,
      "description": this.seo.description,
      "url": process.env.baseUrl + this.$route.fullPath,
      "image": image,
    }
  },
  computed: {
    makeBreadcrumbs: function () {
      let breadcrumbs = []
      if (this.model) {
        breadcrumbs.push({url: "", title: "Главная"})
        breadcrumbs.push({url: this.model.model_slug, title: "Модельный ряд " + this.model.model})
        breadcrumbs.push({url: this.model.model_slug + '/' + this.model.type_slug, title: this.model.model_full})
      }
      return breadcrumbs
    },
    is_niva: function() {
      return this.$store.state.car.model_full.toLowerCase() === 'niva travel'
    },
    plate: function () {
      const textDefault = 'Выбрали LADA ' + this.model.model_full + '? Тест-драйв лучше отзывов. Познакомьтесь с&nbsp;автомобилем лично!'
      const textNiva = ' Узнайте цены и выгоды ' + this.$store.state._month.accusative + ' по телефону: <span itemprop=\'telephone\' class=\'block callibri_tel\'>' + this.$store.state.city.phone_format + '</span>'
      return this.$store.state.car.model_full.toLowerCase() === 'niva travel' ? textNiva : textDefault
    },
  },
  methods: {
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    scrollToCredit() {
      const element = document.getElementById('creditCalc');
      element.scrollIntoView({block: 'start', behavior: 'smooth'});
    },
  },
  created() {
    if(this.$cookies.get('count') === undefined) {
      this.count = this.getRandomInt(7, 15)

      this.$cookies.set('count', this.count, {
        path: '/',
        maxAge: 60 * 60 * 24
      })
    } else {
      this.count = this.$cookies.get('count')
    }
  }
})
</script>

<style lang="scss" scoped>
  .models-advantages {
    margin: 60px 0 40px;
  }

  .models-banner {
    margin-bottom: 60px;
  }

  .equipments-block {
    margin-top: 90px;
  }

  .book-section {
    margin-top: 20px;
  }
</style>
