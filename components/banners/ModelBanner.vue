<template>
  <div class="carcasses-wrap container-max">
    <div class="items-mini_wrap container">
      <hooper class="items-mini" id="items-mini" :settings="hooperSettings" v-on:slide="change_line">
        <slide v-for="slide in data.slides_mini" v-bind:key="slide.id">
          <nuxt-link :to="slide.url"
                     :id="'model__carcase-choice__'+ slide.slug"
                     class="event"
                     :class="{ current_model : slide.active}">
            <picture>
              <source :srcset="get_source(slide.image)" media="(min-width: 580px)">
              <img :src="slide.image" :alt="slide.alt">
            </picture>
            <span v-text="slide.title"></span>
          </nuxt-link>
        </slide>
      </hooper>
      <span class="indicator"></span>
    </div>

    <div id="items" class="items">
      <div :class="data.slides.class">
        <div class="items-data">
          <h1 class="title" v-html="bannerTitle + data.slides.title"></h1>
          <a :href="data.slides.link"
                      id="model__banner__purchase-conditions"
                      class="event btn-banner">Условия покупки</a>
        </div>
        <span class="more_details" v-scroll-to="'#model-info'">
            <span>Подробнее</span>
        </span>
      </div>
    </div>
    <plate :text="plate"
           :bold='true'
    ></plate>
  </div>
</template>

<script >
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: "ModelBanner",
  props: {
    data: {
      default: '',
    //  type: Object
    }
  },
  data() {
    return {
      model: '',
      hooperSettings: {
        infiniteScroll: this.data.slides_mini.length > 2,
        itemsToShow: 3,
        centerMode: true,
        trimWhiteSpace: false,
        mouseDrag: false,
        wheelControl: false,
        breakpoints: {
          580: {
            infiniteScroll: false,
            itemsToShow: 6,
            centerMode: false,
            trimWhiteSpace: true,
            mouseDrag: true,
          },
          800: {
            infiniteScroll: false,
            itemsToShow: 6,
            centerMode: false,
            trimWhiteSpace: true,
            mouseDrag: true
          },
        }
      }
    }
  },
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  computed: {
    plate: function() {
      const textDefault = 'В&nbsp;Брайт парке специальные цены на&nbsp;LADA&nbsp;&mdash; каждый день! Узнайте подробности<span class=\'show_desktop\'> по&nbsp;телефону</span>: <a href=\'tel:' + this.$store.state.city.phone + '\' class=\'callibri_tel event\'>' + this.$store.state.city.phone_format + '</a>'
      return textDefault
    },
    bannerTitle: function() {
      let title = ''

      switch (this.$store.state.car.model_full) {
        case "Largus Универсал":
        case "Largus Cross":
        case "XRAY":
        case "XRAY Cross":
          title = 'Новый '
          break;
        default:
          title = 'Новая '
      }

      return title
    },
  },
  mounted: function() {

    if (window.innerWidth < 581) {
      this.$children[0].slideTo(this.data.active);
      this.setIndicatorDefaultPosition();
    } else {
      setTimeout(() => this.setIndicatorPosition(), 300);
    }

    window.addEventListener("resize", this.myEventHandler);
  },
  created: function () {

  },
  methods: {
    get_source: function(path) {
      let new_path = path.replace('mobile/', '');
      return new_path + ', ' + new_path + ' 2x';
    },
    change_line: function(event) {
    },
    myEventHandler: function() {
      if (window.innerWidth < 581) {
        this.$children[0].slideTo(this.data.active);
        this.setIndicatorDefaultPosition();
      } else {
        this.$children[0].slideTo(0);
        this.setIndicatorPosition();
      }
    },
    setIndicatorPosition: function() {
      if (!document.getElementById('items-mini')) {
        return false
      }

      var model = document.getElementById('items-mini').getElementsByClassName('current_model')[0].getBoundingClientRect();
      var parent = document.getElementById('items-mini').getBoundingClientRect();
      var pos = model.left - parent.left + model.width / 2;

      if (pos) {
        var indicator = document.getElementsByClassName('indicator')[0];
        indicator.style.left = pos + 'px';
      }
    },
    setIndicatorDefaultPosition: function() {
      var indicator = document.getElementsByClassName('indicator')[0];
      indicator.style.left = '48%';
    }
  },

}
</script>

<style lang="scss">
  @import "~assets/scss/hooper.scss";

  .btn-banner {
    @include basic-button($fz: 14px, $width: 50%);

    @media screen and (max-width: 500px) {
      margin: auto;
    }
  }
</style>
