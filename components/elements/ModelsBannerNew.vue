<template>
  <section class="banner">
    <div class="container banner__container">
      <div class="banner__inner">
        <div class="banner__inner__car color-svg-figure">
          <div class="banner__inner__car__hit" v-if="isHit">
            <span>
              хит продаж
            </span>
            <svg width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFCA0D" d="M129.936 93.5843L134.387 11.3205C134.713 5.31105 129.695 0.377862 123.692 0.805412L9.34428 8.94953C3.69317 9.35202 -0.495308 14.3642 0.112402 19.9969L7.03662 84.1761C7.54539 88.8919 11.2969 92.6014 16.018 93.0572L118.99 102.998C124.652 103.544 129.629 99.2643 129.936 93.5843Z" />
            </svg>
          </div>

          <img :src="currentImage" :alt="colorTitle" :title="colorTitle" class="banner__inner__car__image">

          <ul class="banner__inner__car__colors">
            <li
              v-for="color in colors"
              :key="color.id"
              :class="[currentColor === color.id ? 'active-color' : '']"
              @click="changeColor(color.id)"
              :title="color.title"
              >
              <div :class="'banner__inner__car__colors__color ' + color.class" />
            </li>
          </ul>

          <div class="banner__inner__car__colors__mobile" @click="openColorChoose">
            <div :class="'banner__inner__car__colors__mobile__current-color ' + colorClass" />
            <p>Выберите цвет</p>
          </div>
        </div>

        <div class="banner__inner__info">
          <h1>{{ newWord }} LADA {{ carName }} в {{ $store.state.city.dative }}</h1>
          <p class="banner__inner__info__price color-secondary-color">от {{ prices.value | formatPrice }} ₽</p>
          <div class="banner__inner__info__credit">
            <p>Или в кредит <span> от {{ prices.credit | formatPrice }} ₽ / месяц </span></p>
            <button type="button" class="color-primary-color" @click="scrollTo">Рассчитать кредит</button>
          </div>

          <ButtonNew
            buttonColor="color-secondary-background"
            :type="'submit'"
            :buttonText="'Оставить заявку'"
            class="banner__inner__info__button"
            @click.native="show(
                    'Оставить заявку',
                    $store.state._page + '__modal-banner-new_',
                    1,
                    'model_banner_modal-request'
                  )"
          />
        </div>
      </div>
    </div>

    <modal name="form-callback4" height="auto" :adaptive="true" class="models-banner__modal">
      <div :id="form_id + '_close'" class="close event" @click="hide"></div>
      <FormLeadNew
        :form_id="form_id"
        :form_title="form_title"
        :form_type="form_type"
        :goal="goal"
        :comment="$store.state.car.model_full + ', цвет: ' + colorTitle"
      />
    </modal>

    <modal name="color-choose" height="auto" :adaptive="true" class="color-choose">
      <div id="color-choose_modal_close" class="close event" @click="closeColorChoose"></div>
      <color-choose-mobile
        :colors="colors"
        @changeColor="changeColorMobile"
        :active-color="currentColor"
      />
    </modal>
  </section>
</template>

<script>
import format_price from "@/mixins/format_price";

export default {
  mixins: [format_price],
  name: "ModelsBannerNew",

  props: {
    prices: Object,
    model: String,
    type: String,
    colors: Array,
    isHit: {
      type: Boolean,
      default: false,
    }
  },

  data: function () {
    return {
      seo: {},
      count: 0,
      currentImage: "",
      currentColor: -1,
      colorClass: "",
      colorTitle: "",
      form_id: '',
      goal: '',
      form_type: 1,
      form_title: '',
    }
  },


  methods: {
    show(title, form_id, form_type, goal) {
      this.form_title = title;
      this.form_id = form_id;
      this.form_type = form_type; // 1 - обычная форма, 2 - форма сервиса
      this.goal = goal;

      //  console.log(this.$modal);
      this.$modal.show("form-callback4");
      /*      () => {
             callibriInit();
           }*/
    },
    hide() {
      this.$modal.hide("form-callback4");
    },

    openColorChoose() {
      this.$modal.show("color-choose");
    },

    closeColorChoose() {
      this.$modal.hide("color-choose");
    },

    changeColor(color) {
      this.colors.forEach(el => {
        if (el.id == color) {
          this.currentImage = el.image;
          this.currentColor = el.id;
          this.colorTitle = el.title
        }
      })
    },

    changeColorMobile(data) {
      this.currentImage = data.image;
      this.currentColor = data.colorId;
      this.colorClass = data.colorClass;
    },

    scrollTo() {
      this.$emit('scrollTo');
    }
  },

  computed: {
    carName: function() {
      return this.model === this.type ? this.model : this.model + ' ' + this.type
    },
    newWord: function() {
      return this.model.toLowerCase() === 'largus' ?  "Новый" : "Новая"
    }
  },
  mounted() {
    this.currentColor = this.colors[0].id;
    this.currentImage = this.colors[0].image;
    this.colorClass = this.colors[0].class;
    this.colorTitle = this.colors[0].title;
  },

}
</script>

<style scoped lang="scss">
@import "./assets/scss/_colors.scss";


.banner__container {
  overflow: unset;
}
.banner__inner {
  padding: 0 20px;
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.banner__inner__car {
  flex: .6;
  position: relative;
  height: 255px;
  margin-top: 54px;

  @media (min-width: 1000px) {
    height: 415px;
    flex: .5;
    margin-left: -120px;
  }
}

.banner__inner__car__image {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 300px;
  left: 50%;

  @media (min-width: 1000px) {
    max-width: 670px;
    left: 70%;
  }
}

.banner__inner__car__colors {
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    position: absolute;
    bottom: 15px;
    left: 110px;

    li {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  li {
    position: relative;

    &:after {
      display: none;
    }

    &.active-color {
      .banner__inner__car__colors__color {
        transform: scale(1.2);
      }

      &:after {
        content: "";
        position: absolute;
        background-image: url("../../static/images/icons/tick.svg");
        background-size: cover;
        width: 10px;
        height: 8px;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

      }
    }
  }
}

.banner__inner__car__colors__color,
.banner__inner__car__colors__mobile__current-color {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;

  &.color- {
    &karakum {
      background-color: #74766A;
    }

    &brune {
      background-color: #5B4F3F;
    }

    &gray-plateau {
      background-color: #E8F0F2;
    }

    &blue-planet {
      background-color: #0057ae;
    }

    &cornelian {
      background-color: #860e0c;
    }

    &white-cloud {
      background-color: #fefaf4;
    }

    &panther {
      background-color: #161313;
    }

    &riesling {
      background-color: #b4b2ae;
    }

    &techno {
      background-color: #aea297;
    }

    &borneo {
      background-color: #98a5ac;
    }

    &coriander {
      background-color: #857d7a;
    }

    &white-ice,
    &white-glacial {
      background-color: #ffffff;
    }

    &red-cornelian {
      background-color: #860E02;
    }

    &red-alloy {
      background-color: #B10121;
    }
    &angkor {
      background-color: #3F3A32;
    }

    &carfagen {
      background-color: #E8E5CD;
    }

    &daiving {
      background-color: #1449BF;
    }

    &phantom {
      background-color: #686866;
    }

    &pluton {
      background-color: #515958;
    }

    &maestro {
      background-color: #111112;
    }

    &platina {
      background-color: #C3C4C4;
    }

    &fiery-red {
      background-color: #DA0F23;
    }

    &basalt-gray {
      background-color: #A8B9A0;
    }

    &light-brown-cougar {
      background-color: #986F59;
    }

    &black-pearl {
      background-color: #1C1D1A;
    }

    &platina {
      background-color: #C3C4C4;
    }

    &white-cloud {
      background-color: #FEFAF4;
    }

    &nessi-2 {
      background-color: #112717;
    }

    &panthera {
      background-color: #161313;
    }

    &benefis {
      background-color: #430D45;
    }

    &barokko {
      background-color: #850D34;
    }

    &terra {
      background-color: #6C2003;
    }

    &borneo-dark {
      background-color: #444E4E;
    }

    &snow-queen {
      background-color: #D0D8E2;
    }

    &coriander-dark {
      background-color: #706c62;
    }

    &camouflage-jungle {
      background-color: #1E4526;
    }
    &sky-blue {
      background-color: #1279BC;
    }
    &cashemer {
      background-color: #311500;
    }
    &amber {
      background-color: #FF9225;
    }
    &mars {
      background-color: #CB390A;
    }
    &extravaganza {
      background-color: #96011D;
    }
    &sochi {
      background-color: #1C3937;
    }
    &techno-2 {
      background-color: #BABABA;
    }
    &quartz {
      background-color: #858585;
    }
    &borneo-2 {
      background-color: #444E4E;
    }
    &black-mirror {
      background-color: #000;
    }
    &snow-queen-2 {
      background-color: #E2E8EC;
    }
    &wild-plum {
      background-color: #652A6D;
    }
    &iceberg {
      background-color: #FEFEFE;
    }
    &blue-planet {
      background-color: #0056ae;
    }
  }
}

.banner__inner__info {
  margin-top: 40px;

  h1 {
    font-size: 32px;
    font-family: 'Bright Park Display';
    text-transform: unset;
    margin-bottom: 0;

    @media (min-width: 1000px) {
      text-align: left;
      font-size: 36px;
      max-width: 370px;
    }
  }

  @media (min-width: 1000px) {
    flex: .4;
    max-width: 470px;
  }
}


.banner__inner__car__colors__mobile {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    color: white;
    font-size: 12px;
    border-bottom: 1px dashed rgba(255, 255, 255, .35);
    font-family: 'Factor A';
    text-transform: uppercase;
    font-weight: 700;
    margin-left: 10px;
    margin-top: 2px;
  }

  @media (min-width: 1000px) {
    display: none;
  }
}

.banner__inner__car__colors__mobile__current-color {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #1B65F5;
}


.banner__inner__info__price {
  font-weight: 700;
  text-align: center;
  font-size: 36px;
  font-family: 'Factor A';
  margin: 20px 0;

  @media (min-width: 1000px) {
    text-align: left;
    font-size: 44px;
  }
}

.banner__inner__info__credit {
  padding: 15px 0;
  border: 1px dashed rgba(81, 78, 161, 0.35);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 16px;
    font-family: "Factor A";
    span {
      font-weight: 700;
    }
  }

  button {
    padding: 0;
    background: none;
    border: none;
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 8px;
    font-weight: 700;
    font-family: "Factor A";
    border-bottom: 1px dashed rgba(81, 78, 161, 0.35);
    cursor: pointer;
    transition: .2s;

    &:hover {
      opacity: .7;
      transition: .2s;
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 22px;
    height: 50px;

    button {
      margin-top: 0;
    }
  }
}

.banner__inner__info__button {
  height: 60px;
  max-width: 300px;
  margin: 30px auto;

  @media (min-width: 1000px) {
    margin: 30px 0;
  }
}

.banner__inner__car__hit {
  display: none;

  @media (min-width: 1024px) {
    width: 136px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;

    span {
      color: white;
      font-size: 20px;
      font-family: "Factor A";
      text-transform: uppercase;
      font-weight: 700;
      position: relative;
      z-index: 1;
      text-align: center;
    }

    svg {
      width: 100%;
      position: absolute;

    }
  }
}
</style>

<style lang="scss">
.models-banner__modal {
  .vm--modal {
    max-width: 570px;
    border-radius: 0;
  }

}

.color-choose {
  .vm--modal {
    overflow-y: auto;
  }
}
</style>
