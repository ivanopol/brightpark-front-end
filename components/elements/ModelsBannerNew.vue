<template>
  <section class="banner">
    <div class="container banner__container">
      <div class="banner__inner">
        <div class="banner__inner__car">
          <img src="~static/images/models/granta.png" alt="" class="banner__inner__car__image">

          <ul class="banner__inner__car__colors">
            <li>
              <div class="banner__inner__car__colors__color color-light-brown-cougar">
              </div>
            </li>

            <li>
              <div class="banner__inner__car__colors__color color-white-cloud">
              </div>
            </li>

            <li>
              <div class="banner__inner__car__colors__color color-red-alloy">
              </div>
            </li>

            <li>
              <div class="banner__inner__car__colors__color color-amber">
              </div>
            </li>
          </ul>

          <div class="banner__inner__car__colors__mobile">
            <div class="banner__inner__car__colors__mobile__current-color"></div>
            <p>
              Выберите цвет
            </p>
          </div>
        </div>

        <div class="banner__inner__info">
          <h1>
            {{ mainHeading }}
          </h1>

          <p class="banner__inner__info__price">
            от {{ price }}
          </p>

          <div class="banner__inner__info__credit">
            <p>
              Или в кредит <span> от 4 821 ₽ / месяц </span>
            </p>

            <button type="button">
              Рассчитать кредит
            </button>
          </div>

          <ButtonNew
            :type="'submit'"
            :buttonText="'Оставить заявку'"
            class="banner__inner__info__button"
            @click.native="show(
                    'Записаться на тест-драйв',
                    $store.state._page + '__modal-models-test-drive_',
                    1,
                    'test_drive'
                  )"
          />


        </div>
      </div>
    </div>

    <modal name="form-callback4" height="auto" :adaptive="true" class="models-banner__modal">
      <div :id="form_id + '_close'" class="close event" @click="hide"></div>
<!--      <FormTestDriveOrder-->
<!--        :form_id="form_id"-->
<!--        :goal="goal"-->
<!--      />-->

      <FormLeadNew />
    </modal>
  </section>
</template>

<script>
export default {
  name: "ModelsBannerNew",

  props: {
    colorsArray: Array,
  },

  data: function () {
    return {
      model: '',
      seo: {},
      count: 0,
      mainHeading: 'Новая LADA Granta Sedan в Перми',
      price: '495 900 ₽'
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
  }

}
</script>

<style scoped lang="scss">

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
  background: url("~static/images/decorations/model-figure.svg") no-repeat;
  background-size: contain;
  flex: .6;
  position: relative;
  height: 255px;
  margin-top: 54px;
  background-position: center;

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
}

.banner__inner__car__colors__color {
  width: 30px;
  height: 30px;
  border-radius: 50%;


  &.active {
    transform: scale(1.01);
  }


  &.color- {
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
  color: #5CBE86;
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
    color: #514EA1;
    font-weight: 700;
    font-family: "Factor A";
    border-bottom: 1px dashed rgba(81, 78, 161, 0.35);
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
</style>

<style lang="scss">
.models-banner__modal {
  .vm--modal {
    max-width: 570px;
    border-radius: 0;
  }

  .close {
    &:before {
      background-color: #514EA1;
    }

    &:after {
      background-color: #514EA1;
    }
  }
}
</style>
