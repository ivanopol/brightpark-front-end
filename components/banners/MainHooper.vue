<template>
  <section>
    <hooper class="main-screen-wrap" :autoPlay="false" :playSpeed="6000" :wheelControl="false" :transition="600" :infiniteScroll="true">

      <slide class="even">
        <div class="asset-container dark-gradient-left">
          <picture>
            <source srcset="~static/images/main/mobile/novaya-granta-ot-495-900-rublej.jpg, ~static/images/main/mobile/novaya-granta-ot-495-900-rublej.jpg 2x" media="(max-width: 580px)">
            <source srcset="~static/images/main/tablet/novaya-granta-ot-495-900-rublej.jpg, ~static/images/main/tablet/novaya-granta-ot-495-900-rublej.jpg 2x" media="(max-width: 1365px)">
            <source srcset="~static/images/main/desktop/novaya-granta-ot-495-900-rublej.jpg, ~static/images/main/desktop/novaya-granta-ot-495-900-rublej.jpg 2x" media="(min-width: 1366px)">
            <img loading=lazy class="asset-image" src="~static/images/main/mobile/novaya-granta-ot-495-900-rublej.jpg"
                 srcset="~static/images/main/mobile/novaya-granta-ot-495-900-rublej.jpg, ~static/images/main/mobile/novaya-granta-ot-495-900-rublej.jpg 2x" alt="АКЦИЯ НОВАЯ GRANTA ОТ 495 900 РУБЛЕЙ!" />
          </picture>
        </div>
        <div class="product-content">
          <p class="title-tagline bold title-uppercase">НОВАЯ GRANTA ОТ <span class="title-bold">495&nbsp;900&nbsp;РУБЛЕЙ</span>!</p>
          <div class="item-buttons">
            <a :href="$store.state.city.value + '/granta/sedan'" id="main__slider__novaya-granta-ot-495-900-rublej-details" class="btn btn-primary event">Подробнее о модели</a>
            <a :href="$store.state.city.value + '/stocks/novaya-granta-ot-495-900-rublej'" id="main__slider__novaya-granta-ot-495-900-rublej-action" class="btn btn-secondary event">Условия акции</a>
          </div>
        </div>
      </slide>

      <slide class="even">
        <div class="asset-container dark-gradient-left">
          <picture>
            <source srcset="~static/images/main/mobile/novaya-vesta-ot-713-900-rublej.jpg, ~static/images/main/mobile/novaya-vesta-ot-713-900-rublej.jpg 2x" media="(max-width: 580px)">
            <source srcset="~static/images/main/tablet/novaya-vesta-ot-713-900-rublej.jpg, ~static/images/main/tablet/novaya-vesta-ot-713-900-rublej.jpg 2x" media="(max-width: 1365px)">
            <source srcset="~static/images/main/desktop/novaya-vesta-ot-713-900-rublej.jpg, ~static/images/main/desktop/novaya-vesta-ot-713-900-rublej.jpg 2x" media="(min-width: 1366px)">
            <img loading=lazy class="asset-image" src="~static/images/main/mobile/novaya-vesta-ot-713-900-rublej.jpg"
                 srcset="~static/images/main/mobile/novaya-vesta-ot-713-900-rublej.jpg, ~static/images/main/mobile/novaya-vesta-ot-713-900-rublej.jpg 2x" alt="АКЦИЯ НОВАЯ VESTA ОТ 713 900 РУБЛЕЙ!" />
          </picture>
        </div>
        <div class="product-content">
          <p class="title-tagline bold title-uppercase">НОВАЯ VESTA ОТ <span class="title-bold">713&nbsp;900&nbsp;РУБЛЕЙ</span>!</p>
          <div class="item-buttons">
            <a :href="$store.state.city.value + '/vesta/sedan'" id="main__slider__novaya-vesta-ot-713-900-rublej-details" class="btn btn-primary event">Подробнее о модели</a>
            <a :href="$store.state.city.value + '/stocks/novaya-vesta-ot-713-900-rublej'" id="main__slider__novaya-vesta-ot-713-900-rublej-action" class="btn btn-secondary event">Условия акции</a>
          </div>
        </div>
      </slide>

      <slide class="even">
        <div class="asset-container dark-gradient-left">
          <picture>
            <source srcset="~static/images/main/mobile/novyj-xray-ot-679-900-rublej.jpg, ~static/images/main/mobile/novyj-xray-ot-679-900-rublej.jpg 2x" media="(max-width: 580px)">
            <source srcset="~static/images/main/tablet/novyj-xray-ot-679-900-rublej.jpg, ~static/images/main/tablet/novyj-xray-ot-679-900-rublej.jpg 2x" media="(max-width: 1365px)">
            <source srcset="~static/images/main/desktop/novyj-xray-ot-679-900-rublej.jpg, ~static/images/main/desktop/novyj-xray-ot-679-900-rublej.jpg 2x" media="(min-width: 1366px)">
            <img loading=lazy class="asset-image" src="~static/images/main/mobile/novyj-xray-ot-679-900-rublej.jpg"
                 srcset="~static/images/main/mobile/novyj-xray-ot-679-900-rublej.jpg, ~static/images/main/mobile/novyj-xray-ot-679-900-rublej.jpg 2x" alt="АКЦИЯ НОВЫЙ XRAY ОТ 679 900 РУБЛЕЙ!" />
          </picture>
        </div>
        <div class="product-content">
          <p class="title-tagline bold title-uppercase">НОВЫЙ XRAY ОТ <span class="title-bold">679&nbsp;900&nbsp;РУБЛЕЙ</span>!</p>
          <div class="item-buttons">
            <a :href="$store.state.city.value + '/xray/xray'" id="main__slider__novyj-xray-ot-679-900-rublej-details" class="btn btn-primary event">Подробнее о модели</a>
            <a :href="$store.state.city.value + '/stocks/novyj-xray-ot-679-900-rublej'" id="main__slider__novyj-xray-ot-679-900-rublej-action" class="btn btn-secondary event">Условия акции</a>
          </div>
        </div>
      </slide>

      <slide class="odd">
        <div class="asset-container">
          <picture>
            <source srcset="~static/images/main/mobile/osobye-usloviya-dlya-pensionerov.jpg, ~static/images/main/mobile/osobye-usloviya-dlya-pensionerov.jpg 2x" media="(max-width: 580px)">
            <source srcset="~static/images/main/tablet/osobye-usloviya-dlya-pensionerov.jpg, ~static/images/main/tablet/osobye-usloviya-dlya-pensionerov.jpg 2x" media="(max-width: 1365px)">
            <source srcset="~static/images/main/desktop/osobye-usloviya-dlya-pensionerov.jpg, ~static/images/main/desktop/osobye-usloviya-dlya-pensionerov.jpg 2x" media="(min-width: 1366px)">
            <img loading=lazy class="asset-image" src="~static/images/main/mobile/osobye-usloviya-dlya-pensionerov.jpg"
                 srcset="~static/images/main/mobile/osobye-usloviya-dlya-pensionerov.jpg, ~static/images/main/mobile/osobye-usloviya-dlya-pensionerov.jpg 2x" alt="АКЦИЯ ОСОБЫЕ УСЛОВИЯ ДЛЯ ПЕНСИОНЕРОВ" />
          </picture>
        </div>
        <div class="product-content">
          <p class="title-tagline bold title-uppercase dark">ОСОБЫЕ УСЛОВИЯ ДЛЯ ПЕНСИОНЕРОВ</p>
          <div class="item-buttons">
            <a :href="$store.state.city.value + '/stocks/osobye-usloviya-dlya-pensionerov'" id="main__slider__osobye-usloviya-dlya-pensionerov-action" class="btn btn-primary event">Условия акции</a>
          </div>
        </div>
      </slide>

      <slide class="even">
        <div class="asset-container">
          <picture>
            <source srcset="~static/images/main/mobile/wow-obmen-na-novuyu-lada.jpg, ~static/images/main/mobile/wow-obmen-na-novuyu-lada.jpg 2x" media="(max-width: 580px)">
            <source srcset="~static/images/main/tablet/wow-obmen-na-novuyu-lada.jpg, ~static/images/main/tablet/wow-obmen-na-novuyu-lada.jpg 2x" media="(max-width: 1365px)">
            <source srcset="~static/images/main/desktop/wow-obmen-na-novuyu-lada.jpg, ~static/images/main/desktop/wow-obmen-na-novuyu-lada.jpg 2x" media="(min-width: 1366px)">
            <img loading=lazy class="asset-image" src="~static/images/main/mobile/wow-obmen-na-novuyu-lada.jpg"
                 srcset="~static/images/main/mobile/wow-obmen-na-novuyu-lada.jpg, ~static/images/main/mobile/wow-obmen-na-novuyu-lada.jpg 2x" alt="АКЦИЯ WOW-ОБМЕН НА НОВУЮ LADA" />
          </picture>
        </div>
        <div class="product-content">
          <p class="title-tagline bold title-uppercase"><span class="title-bold">WOW-ОБМЕН</span> НА НОВУЮ LADA</p>
          <div class="item-buttons">
            <a :href="$store.state.city.value + '/stocks/wow-obmen-na-novuyu-lada'" id="main__slider__wow-obmen-na-novuyu-lada-action" class="btn btn-primary event">Условия акции</a>
          </div>
        </div>
      </slide>

      <slide class="even">
        <div class="asset-container">
          <picture>
            <source srcset="~static/images/main/mobile/pervyj-avtomobil.jpg, ~static/images/main/mobile/pervyj-avtomobil.jpg 2x" media="(max-width: 580px)">
            <source srcset="~static/images/main/tablet/pervyj-avtomobil.jpg, ~static/images/main/tablet/pervyj-avtomobil.jpg 2x" media="(max-width: 1365px)">
            <source srcset="~static/images/main/desktop/pervyj-avtomobil.jpg, ~static/images/main/desktop/pervyj-avtomobil.jpg 2x" media="(min-width: 1366px)">
            <img loading=lazy class="asset-image" src="~static/images/main/mobile/pervyj-avtomobil.jpg"
                 srcset="~static/images/main/mobile/pervyj-avtomobil.jpg, ~static/images/main/mobile/pervyj-avtomobil.jpg 2x" alt="АКЦИЯ ПЕРВЫЙ АВТОМОБИЛЬ" />
          </picture>
        </div>
        <div class="product-content">
          <p class="title-tagline bold title-uppercase">ПЕРВЫЙ АВТОМОБИЛЬ</p>
          <div class="item-buttons">
            <a :href="$store.state.city.value + '/stocks/pervyj-avtomobil'" id="main__slider__pervyj-avtomobil-action" class="btn btn-primary event">Условия акции</a>
          </div>
        </div>
      </slide>

      <slide class="odd">
        <div class="asset-container">
          <picture>
            <source srcset="~static/images/main/mobile/formula-kredita-v-brajt-parke.jpg, ~static/images/main/mobile/formula-kredita-v-brajt-parke.jpg 2x" media="(max-width: 580px)">
            <source srcset="~static/images/main/tablet/formula-kredita-v-brajt-parke.jpg, ~static/images/main/tablet/formula-kredita-v-brajt-parke.jpg 2x" media="(max-width: 1365px)">
            <source srcset="~static/images/main/desktop/formula-kredita-v-brajt-parke.jpg, ~static/images/main/desktop/formula-kredita-v-brajt-parke.jpg 2x" media="(min-width: 1366px)">
            <img loading=lazy class="asset-image" src="~static/images/main/mobile/formula-kredita-v-brajt-parke.jpg"
                 srcset="~static/images/main/mobile/formula-kredita-v-brajt-parke.jpg, ~static/images/main/mobile/formula-kredita-v-brajt-parke.jpg 2x" alt="Брайт Парк: КРЕДИТ В БРАЙТ ПАРКЕ Новогодняя рассрочка + Первый взнос 0%" />
          </picture>
        </div>
        <div class="product-content">
          <p class="title-tagline bold title-uppercase"><span class="title-bold">ФОРМУЛА КРЕДИТА</span> В БРАЙТ&nbsp;ПАРКЕ</p>
          <div class="item-buttons">
            <a :href="$store.state.city.value + '/stocks/formula-kredita-v-brajt-parke'" id="main__slider__formula-kredita-v-brajt-parke-action" class="btn btn-primary event">Условия акции</a>
          </div>
        </div>
      </slide>

      <slide class="odd">
        <div class="asset-container">
          <picture>
            <source srcset="~static/images/main/mobile/main_granta_gray.jpg, ~static/images/main/mobile/main_granta_gray.jpg 2x" media="(max-width: 580px)">
            <source srcset="~static/images/main/tablet/main_granta_gray.jpg, ~static/images/main/tablet/main_granta_gray.jpg 2x" media="(max-width: 1365px)">
            <source srcset="~static/images/main/desktop/main_granta_gray.jpg, ~static/images/main/desktop/main_granta_gray.jpg 2x" media="(min-width: 1366px)">
            <img loading=lazy class="asset-image" src="~static/images/main/mobile/main_granta_gray.jpg"
                 srcset="~static/images/main/mobile/main_granta_gray.jpg, ~static/images/main/mobile/main_granta_gray.jpg 2x" alt="Брайт Парк: КРЕДИТ В БРАЙТ ПАРКЕ Новогодняя рассрочка + Первый взнос 0%" />
          </picture>
        </div>
        <div class="product-content">
          <p class="title-tagline bold title-uppercase"><span class="title-bold">КРЕДИТ В&nbsp;БРАЙТ&nbsp;ПАРКЕ</span><br>Весенняя рассрочка +&nbsp;Первый&nbsp;взнос&nbsp;0%</p>
          <div class="item-buttons">
            <a :href="$store.state.city.value + '/granta/sedan'" id="main__slider__kredit-v-brajt-parke-novogodnyaya-rassrochka-pervyj-vznos-0-details" class="btn btn-primary event">Подробнее о модели</a>
            <a :href="$store.state.city.value + '/stocks/kredit-v-brajt-parke-novogodnyaya-rassrochka-pervyj-vznos-0'" id="main__slider__kredit-v-brajt-parke-novogodnyaya-rassrochka-pervyj-vznos-0-action" class="btn btn-secondary event">Условия акции</a>
          </div>
        </div>
      </slide>
      <slide class="odd">
        <div class="asset-container">
          <picture>
            <source srcset="~static/images/main/mobile/main_granta_red.jpg, ~static/images/main/mobile/main_granta_red.jpg 2x" media="(max-width: 580px)">
            <source srcset="~static/images/main/tablet/main_granta_red.jpg, ~static/images/main/tablet/main_granta_red.jpg 2x" media="(max-width: 1365px)">
            <source srcset="~static/images/main/desktop/main_granta_red.jpg, ~static/images/main/desktop/main_granta_red.jpg 2x" media="(min-width: 1366px)">
            <img loading=lazy class="asset-image" src="~static/images/main/mobile/main_granta_red.jpg"
                 srcset="~static/images/main/mobile/main_granta_red.jpg, ~static/images/main/mobile/main_vesta_red.jpg 2x" alt="ДОПЛАТА 40 000 РУБЛЕЙ ПРИ ОБМЕНЕ НА LADA GRANTA" />
          </picture>
        </div>
        <div class="product-content">
          <p class="title-tagline bold title-uppercase"><span class="title-bold">ДОПЛАТА 40 000 &#8381;</span> ПРИ ОБМЕНЕ НА LADA&nbsp;GRANTA</p>
          <div class="item-buttons">
            <a :href="$store.state.city.value + '/granta/sedan'" id="main__slider__doplata-40-000-rublej-pri-obmene-na-lada-granta-details" class="btn btn-primary event">Подробнее о модели</a>
            <a :href="$store.state.city.value + '/stocks/doplata-40-000-rublej-pri-obmene-na-lada-granta'" id="main__slider__doplata-40-000-rublej-pri-obmene-na-lada-granta-action" class="btn btn-secondary event">Условия акции</a>
          </div>
        </div>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </section>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'MainHooper',
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  created: function() {
    //console.log(this.$store.state);
  }
};
</script>


<style lang="scss" >
@import "~assets/scss/hooper.scss";

 .title-uppercase {
   font-family: PragmaticaLightCBold, Helvetica, sans-serif;
   text-transform: uppercase;
}

.title-bold {
  font-weight: bold;
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

.dark-gradient-left {
  @media only screen and (min-width: 1366px) {
    &:after {
      content: '';
      background: linear-gradient(90deg, #000000 0%, rgba(0, 212, 255, 0) 60%);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
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

    &.product-content-left {

    }

    .crossed {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #FF8351;
        top: 40%;
      }
    }

    .title-model {
      font-family: PragmaticaLightCBold, Helvetica, sans-serif;
      font-size: 213%;
      //font-weight: bold;
      margin-bottom: 10px;

    }

    .title-tagline {
      &.dark {
        color: #000
      }

      .action-bold {
        font-weight: bold;
        display: block;
      }

      font-size: 26px;
      //font-weight: bold;
      width: 80vw;
      max-width: 100%;
      margin: 45px auto 0;
      line-height: 1.2;
      /*                -webkit-transition: all ease-out 0.5s;
                      -moz-transition: all ease-out 0.5s;
                      -o-transition: all ease-out 0.5s;
                      transition: all ease-out 0.5s;*/

      .text-low {
        font-size: 70%;
      }


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
            margin: 0 0 15px 0;
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
          margin: 0 0 30px;
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

        &.product-content-left {
          align-items: flex-start;
          .title-tagline {
            width: 30%;
          }
        }

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
        width: 48%!important;
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
</style>
