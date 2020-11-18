<template>
  <div>
    <section class="block-info container" >
      <div class="block-info-text">
              <span class="block-info-text-title">
                  <h2 v-html="block.price" v-if="n === 0"></h2>
                  <h2 v-html="block.title" v-else></h2>
              </span>
        <span class="block-info-text-text">
                  <p v-html="block.text"></p>
              </span>
      </div>
      <div class="trigger" v-if="block.trigger">
        <div class="trigger-wrap2">
          <img loading=lazy src="/images/icons/checkbox-green.svg" />
          <p>{{block.trigger}}</p>
        </div>
      </div>
      <div class="pointers_wrap" :id="point_id">
        <div class="pointers_list" :v-if="block.pointers">
          <ul :class="'pointers-' + model + '-' + type + '-' + block.pnum " >
            <li v-for="n in block.pointers">
              <span :class="'pointer p' + n" v-on:click="activate"></span>
            </li>
          </ul>
        </div>
        <div class="block-info-img" v-if="block.url">
          <picture>
            <source :srcset="get_source(block.url)" media="(min-width: 580px)">
            <img loading=lazy :src="block.url" alt="">
          </picture>
        </div>

        <div class="block-info-aside">
          <div class="aside_wrap" >
            <hooper class="info-aside">
              <slide v-for="slide in block.slider" :key="slide.id">
                <picture>
                  <source :srcset="get_source(slide.image)" media="(min-width: 580px)">
                  <img loading=lazy :src="slide.image" alt="">
                </picture>
                <p v-text="slide.text"></p>
              </slide>
              <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>

            <div class="close" v-on:click="deactivate"></div>
          </div>
        </div>
      </div>
      <Plate v-if="n===1" :text="'В&nbsp;наличии все комплектации LADA&nbsp;' + $store.state.car.model_full + '! Успевайте забронировать с&nbsp;золотыми условиями'"/>
    </section>
    <form-buy-component v-if="n === 1"
                        :form_id="'model__learn-about-details_'"
                        :button_text="'Отправить'"
                        :form_title="'<span class=\'c_orange\'>Узнайте</span> о модели подробнее'"
                        :goal="'about_model'">
    </form-buy-component>
  </div>
</template>

<script>
import { Hooper, Slide,  Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'ModelInfo',
  props : {
    block: {
      required: true,
      default: function () {
        return {}
      },
      type: Object
    },
    n: {
      required: true,
      default: 0,
      type: Number
    },
    model: {
      required: true,
      default: 0,
      type: Number
    },
    type: {
      required: true,
      default: 0,
      type: Number
    }
  },
  data: function () {
    return {}
  },
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  computed: {
    point_id: function () {
      return 'pointer_' + this.n;
    }
  },
  methods: {
    get_source: function(path) {
      let new_path = path.replace('mobile/', '');
      return new_path + ', ' + new_path + ' 2x';
    },
    activate: function (event) {

      var j = 0
      if (this.$children.length > 1) {
        for (let i = 0; i < this.$children.length; i++) {
          if (this.$children[i]._name === '<Hooper>') {
            j = i
            break
          }
        }
      }

      // Получаем номер слайда из класса нажатого плюса
      let activeSlide = Number (event.target.classList[1].replace('p', ''));
      this.$children[j].slideTo(activeSlide-1);
      let dots = document.querySelectorAll('#pointer_' + this.n + ' ul li span');
      dots.forEach(function(item, i, arr) {
        item.className += ' is_opacity';
      });
      let aside = document.querySelectorAll('#pointer_' + this.n + ' .block-info-aside');
      aside[0].className += ' show';
      let image = document.querySelectorAll('#pointer_' + this.n + ' .block-info-img');
      image[0].className += ' show';
    },
    deactivate: function (event) {
      let dots = document.querySelectorAll('#pointer_' + this.n + ' ul li span');
      dots.forEach(function(item, i, arr) {
        item.classList.remove("is_opacity");
      });
      let aside = document.querySelectorAll('#pointer_' + this.n + ' .block-info-aside');
      aside[0].classList.remove("show");
      let image = document.querySelectorAll('#pointer_' + this.n + ' .block-info-img');
      image[0].classList.remove("show");
    }
  },
};
</script>

<style lang="scss">
@import "~assets/scss/info.scss";

.block-price {
  text-transform: lowercase;
}

.no-block {
  display: inline;
}
</style>
