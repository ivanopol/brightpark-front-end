<template>
  <section>
    <div class="main-screen-wrap" >
      <div class="retargeting-banner">
        <h1 class="title retargeting-banner__heading">
          LADA в кредит <span style="display: inline-block;">в Брайт Парке</span>
        </h1>
        <div class="asset-container">
          <div class="retargeting-banner__overlay"></div>
          <picture>
            <source :srcset="offer.img_mobile + ', ' + offer.img_mobile + ' 2x'" media="(max-width: 580px)">
            <source :srcset="offer.img_tablet + ', ' + offer.img_tablet + ' 2x'" media="(max-width: 1365px)">
            <source :srcset="offer.img_desktop + ', ' + offer.img_desktop + ' 2x'" media="(min-width: 1366px)">
            <img class="asset-image" :src="offer.img_mobile" :srcset="offer.img_mobile + ', ' + offer.img_mobile + ' 2x'" :alt="offer.description" />
          </picture>
        </div>

        <button class="retargeting-banner__button" v-on:click.prevent="show('Экспресс кредит', $store.state._page + '__modal-banner_', 'Отправить', 1, 'callback')">
          Экспресс-кредит
        </button>
      </div>
    </div>

    <modal name="form-credit-banner" height="auto" :adaptive="true" >
      <div class="close" @click="hide"></div>
      <FormBuy2Component :form_title="form_title"
                         :form_id="form_id"
                         :button_text="button_text"
                         :form_type="form_type"
                         :goal="goal">
      </FormBuy2Component>
    </modal>
  </section>
</template>

<script>
export default {
  name: 'Credit',
  props: {
    offer: {
      type: Object
    }
  },
  data: function () {
    return {
      mobile: false,
      form_id: '',
      form_title: '',
      button_text: '',
      form_type: 1,
      goal: ''
    };
  },
  methods: {
    show (title, form_id, button_text, form_type, goal) {
      this.form_title = title;
      this.form_id = form_id;
      this.button_text = button_text;
      this.form_type = form_type; // 1 - обычная форма, 2 - форма сервиса
      this.goal = goal;
      this.$modal.show('form-credit-banner');
    },
    hide () {
      this.$modal.hide('form-credit-banner');
    },
  }
};
</script>


<style lang="scss" scoped>

.countdown {
  font-family: PragmaticaLightCBold, Helvetica, sans-serif;
  width: 256px;
  margin: 0 auto 15px;
  &-title {
    width: 100%;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  &-block {
    width: 100%;
    border: 4px solid #fff;
    border-radius: 30px;
    font-size: 30px;
    padding: 10px 20px 7px;
    display: inline-block;
    margin-bottom: 10px;

  }

  &-sign {
    width: 100%;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    & > span {
      display: block;
      width: 25%;
    }
  }

  @media only screen and (min-width: 1366px) {
    & {
      width: 290px;
      &-title {
        font-size: 24px;
      }

      &-block {
        font-size: 36px;
      }

      &-sign {
        font-size: 16px;
      }
    }
  }
}

.item-buttons {
  position: absolute;
  bottom: 0;
  width: 85.5vw;
  &>a {
    margin-bottom: 15px;
  }
  .btn {
    width: 100%;
    border-radius: 50px;
    padding: 14px 15px 10px;

    @media only screen and (max-width: 340px) {
      padding: 11px 15px 7px;
    }

    &.btn-primary {
      border: 2px solid #FF8351;
      color: #fff;
      background-color: #FF8351;
    }

    &.btn-secondary {
      border: 2px solid #fff;
      color: #fff;
      background-color: transparent;
    }
  }
}

.main-screen-wrap.hooper {
  top: 0px;
}

.main-screen-wrap ul li {
  position: relative;
}

.main-screen {
  margin: -60px 0 0;

  .asset-container {
    height: 100%;
  }
  .asset-image {
    object-fit: cover;
    margin: -75px 0 0 0;
    width: 100%;
  }

  @media only screen and (min-width: 900px) {
    & {
      margin: -80px auto 0;
      max-width: 1980px;
      max-height: 800px;
      overflow: hidden;
    }
  }

  .product-content {
    position: absolute;
    top: 5%;
    color: white;
    text-align: center;
    height: 78%;
    width: 100%;
    display: flex;
    justify-content: center;

    .title-model {
      font-family: PragmaticaLightCBold, Helvetica, sans-serif;
      font-size: 213%;
      //font-weight: bold;
      margin-bottom: 10px;

    }

    .title-tagline {
      font-size: 26px;
      //font-weight: bold;
      width: 80%;
      margin: 30px auto 0;
      line-height: 1.2;
      /*                -webkit-transition: all ease-out 0.5s;
                      -moz-transition: all ease-out 0.5s;
                      -o-transition: all ease-out 0.5s;
                      transition: all ease-out 0.5s;*/


      &.bold {
        font-family: PragmaticaLightCBold, Helvetica, sans-serif;
        font-size: 26px;
      }

      .highlight {
        display: block;
        font-size: 117%;
      }
    }
  }

  .retargeting-banner {
    position: relative;
    .product-content {
      .title-tagline {
        font-size: 7vw;
        margin-top: 23%;
      }
    }
  }

  @media only screen and (min-width: 580px) and  (max-width: 1024px) {
    .retargeting-banner {
      .product-content {
        padding-right: 10%;
      }
    }
  }

  @media only screen and (max-width: 321px) {
    .product-content {
      .title-tagline {
        margin: 40px auto 0;
        line-height: 1.1;

        &.bold {
          font-size: 143%;
          font-weight: bold;
        }
      }
    }
  }

  @media only screen and (min-width: 1366px) {
    .main-screen-wrap .hooper-pagination {
      bottom: 5%;
    }

    ul li.even {
      .product-content {
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        align-items: flex-start;
        max-width: 1200px;
        right: 0;
        margin: 8% auto 0;
        padding-left: 0;

        .title-tagline {
          margin: 0 0 30px;
          width: 41%;

          &.bold {
            font-size: 46px;
            font-weight: normal;
            text-align: left;

            .highlight {
              font-weight: bold;
            }
          }
        }

        .item-buttons {
          position: relative;
          width: 26%;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;

          .btn {
            width: auto;
            display: block;
            margin: 0 0 15px 0;
          }
        }
      }
    }

    ul li.odd {
      .product-content {
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        align-items: flex-end;
        max-width: 1200px;
        right: 0;
        margin: 8% auto 0;
        padding-right: 20px;

        .title-tagline {
          margin: 0 0 30px;
          width: 41%;

          &.bold {
            font-size: 46px;
            font-weight: normal;
            text-align: right;

            .highlight {
              font-weight: bold;
            }
          }
        }

        .item-buttons {
          position: relative;
          width: 26%;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;

          .btn {
            width: auto;
            display: block;
            margin: 0 0 15px 0;
          }
        }
      }
    }
  }


  @media only screen and (min-width: 1366px) and (max-width: 1919px) {
    // Баннер ретаргетинга
    .retargeting-banner {
      .product-content {
        height: 100%;
        padding: 0;
        top: 0;

        .title-tagline {
          font-size: 2.8vw;
          width: 35%;
          margin: 6.2% auto 0;
        }

        .countdown {
          margin: 0 auto 1.2%;

          .countdown-title {
            font-size: 18px;
            margin-bottom: 5px;
          }

          .countdown-block {
            font-size: 28px;
            padding: 6px 16px 3px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1920px) {
    .retargeting-banner {
      .product-content {
        height: 100%;
        padding: 0;
        top: 0;

        .title-tagline {
          font-size: 55px;
          width: 660px;
          margin: 130px auto 0;
        }

        .countdown {
          margin: 0 auto 1.2%;
          .countdown-title {
            font-size: 24px;
          }

          .countdown-block {
            font-size: 28px;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1366px) and (max-width: 1979px) {
    ul li.even,
    ul li.odd {
      .product-content {
        padding-right: 50px;

        .title-tagline {
          margin: 30px 0;
          width: 35%;

          &.bold {
            font-size: 36px;
          }
        }

        .item-buttons {
          width: 22%;
        }
      }
    }
  }

  @media only screen and (min-width: 580px) and  (max-width: 1365px) {
    .main-screen-wrap .hooper-pagination {
      bottom: 5%;
    }

    .retargeting-banner {
      height: 100%;
      padding: 0;
      top: 0;
      .product-content {
        justify-content: center;
        padding-top: 30px;

        .title-tagline {
          margin: 15px 0;
          text-align: right;
        }

        .item-buttons {
          display: flex;
          justify-content: flex-end;
        }

        .countdown {
          margin: 0px auto 175px;

          &-title {
            font-size: 15px;
          }

          &-block {
            font-size: 24px;
            border: 3px solid #fff;
            padding: 8px 20px 4px;
          }
        }
      }
    }

    ul li {
      .product-content {
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        align-items: flex-end;
        padding-right: 10%;

        .title-tagline {
          margin: 30px 0 30px;
          width: 40%;

          &.bold {
            font-size: 30px;
            font-weight: normal;
          }
        }

        .item-buttons {
          position: relative;
          width: 40%;

          .btn {
            width: 55%;
            display: block;
            margin: 10px auto;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 580px) and  (max-width: 1000px) {
    ul li {
      .product-content {
        padding-right: 0;
      }
      .title-tagline {
        width: 50%!important;
        &.bold {
          font-size: 24px !important;
        }
      }

      .item-buttons {
        width: 50%!important;

        a {
          font-size: 12px;
          min-width: 185px!important;
        }
      }
    }
  }
}

.retargeting-banner__button {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  @include basic-button();
  border: none;
}

.retargeting-banner__heading {
  z-index: 1;
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  text-transform: none;
  width: 100%;
  font-weight: 500;

  @media screen and (min-width: 500px) {
    top: 100px;
  }

  @media screen and (min-width: 1200px) {
    top: 140px;
    font-size: 38px;
  }

  @media screen and (min-width: 1365px) {
    top: 180px;
    font-size: 2.8vw;
  }

  @media screen and (min-width: 1920px) {
    font-size: 55px;
  }
}

.retargeting-banner__overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .35);
}
</style>
