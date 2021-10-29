<template>
  <section class="main-screen">
    <div class="main-screen__swiper-wrap">
      <swiper id="swiper" class="swiper" ref="mySwiper"  :options="swiperOption">
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
        <swiper-slide :key="banner.key" v-for="banner in banners">
          <div v-if="banner.type == 2">
            <div class="type-2-title">
              <span class="title">Мы работаем в дежурном режиме</span>
              <span class="description">Продаем автомобили <span class="bold">онлайн</span></span>
            </div>

            <div class="type-2-connect">
              <span class="appeal">По всем вопросам звоните <PhoneSelection class="callibri_tel"/></span>
            </div>
          </div>
          <picture>
            <source :srcset="path.mobile + banner.title + '.' + banner.extension + ', ' + path.mobile + banner.title + '.' + banner.extension + ' 2x'" media="(max-width: 580px)">
            <source :srcset="path.tablet + banner.title + '.' + banner.extension + ', ' + path.tablet + banner.title + '.' + banner.extension + ' 2x'" media="(max-width: 900px)">
            <source :srcset="path.desktop + banner.title + '.' + banner.extension + ', ' + path.desktop + banner.title + '.' + banner.extension + ' 2x'" media="(min-width: 901px)">
            <img :src="path.mobile + banner.title + '.' + banner.extension"
                 :srcset="path.mobile + banner.title + '.' + banner.extension + ', ' + path.mobile + banner.title + '.' + banner.extension + ' 2x'"
                 alt="" />
          </picture>
          <a v-if="banner.link"
              :href="'/' + $store.state.city.value + '/' + banner.link"
             :class="'banner-button event ' + banner.buttonColor">
            Подробнее
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: 'MainBanner',
  data: function () {
    return {
      path: {
        mobile: '/images/main/mobile/',
        mobileBig: '/images/main/mobile/big_phones/',
        tablet: '/images/main/tablet/',
        desktop: '/images/main/desktop/',
      },
      banners: [
        {
          key: 1,
          title: 'mode',
          extension: 'jpg',
          buttonColor: '',
          link: '',
          type: 2,
        },
        {
          key: 2,
          title: 'yellow',
          extension: 'jpg',
          buttonColor: 'purple',
          link: 'vesta/sedan',
          type: 1,
        },
        {
          key: 3,
          title: 'green',
          extension: 'jpg',
          buttonColor: 'orange',
          link: 'credit',
          type: 1,
        },
        {
          key: 4,
          title:'all_inclusive_2',
          extension: 'jpg',
          buttonColor: 'green',
          link: 'vesta/sw',
          type: 1,
        },
        {
          key: 5,
          title:'purple',
          extension: 'jpg',
          buttonColor: 'green',
          link: 'granta/sedan',
          type: 1,
        },
      ],
      swiperOption: {
        autoplay: false,
/*        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },*/
        cssMode: false,
        autoHeight: false,
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        preventInteractionOnTransition: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  mounted: function() {
  }
};
</script>

<style lang="scss" >

  #swiper {
    max-width: 1440px;

    .swiper-button-next {
      right: 45px;
      padding-left: 5px;
    }

    .swiper-button-prev {
      left: 45px;
      padding-right: 5px;
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: #fff;
      width: 55px;
      height: 55px;
      background-color: rgba(255,255,255,0.2);
      border-radius: 40px;
      transition: 0.15s background-color;

      &:hover {
        background-color: rgba(255,255,255,0.4);
      }

      &::after {
        font-size: 30px;
      }
    }


    .swiper-pagination {

      width: auto;
      left: 50%;
      transform: translate(-50%, 0);
      background-color: rgba(255, 255, 255, 0.2);
      bottom: 4vh;
      padding: 5px 10px;
      border-radius: 20px;

      .swiper-pagination-bullet {
        background-color: rgba(255, 255, 255, 1);
        opacity: 0.6;
        margin: 3px 10px;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }

      .swiper-pagination-bullet-active {
        background-color: rgba(255, 255, 255, 1);
        opacity: 1;
      }
    }


    .swiper-slide {
/*      -webkit-transform: translateZ(0);
      -webkit-backface-visibility: hidden;*/
      display: flex;
      align-content: center;
      justify-content: center;

      picture {
        width: 100%;
        max-width: 1440px;
        //display: flex;
      }

      img {
        object-fit: cover;
        width: 100%;
        max-width:100%;
        vertical-align:middle
      }

      .orange {
        background-color: #e95909;
      }

      .green {
        background-color: #5bbd84;
      }

      .purple {
        background-color: #504ea0;
      }
    }
  }

  .type-2-title {
    position: absolute;
    color: #fff;
    width: 700px;
    top: 85px;
    left: 110px;

    .title {
      font-family: 'Bright Park Display';
      font-size: 68px;
      letter-spacing: 1px;
      display: block;
    }

    .description {
      font-family: 'Factor A';
      font-size: 41px;
      margin-top: 20px;
      display: block;
      letter-spacing: 2px;
      font-weight: 300;
    }

    @media only screen and (min-width: 580px) and (max-width: 1400px) {
      & {
        width: 50vw;
        top: 6vw;
        left: 7.85vw;

        .title {
          font-size: 4.85vw;
          letter-spacing: unset;
        }

        .description {
          font-size: 2.92vw;
          margin-top: 1.42vw;
          letter-spacing: unset;
        }
      }
    }

    @media only screen and (max-width: 580px) {
      & {
        position: absolute;
        color: #fff;
        width: 100%; //300px;
        top: 28.98vw; // 120px;
        left: unset;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 10%;

        .title {
          font-size: 7.24vw; // 30px;
          letter-spacing: unset;
        }

        .description {
          font-size: 3.86vw; // 16px;
          margin-top: 2.41vw; // 10px;
          letter-spacing: unset;

          .bold {
            font-weight: bold;
          }
        }
      }
    }
  }

  .type-2-connect {
    position: absolute;
    color: #fff;
    bottom: 90px;
    left: 355px;

    .appeal {
      font-family: 'Bright Park Display';
      display: block;
      font-size: 24px;

      a {
        color: #fff;
      }
    }

    @media only screen and (min-width: 980px) and (max-width: 1400px) {
      & {
        bottom: 20%; // 90px;
        left: 24.65vw; // 355px;

        .appeal {
          font-size: 1.66vw; // 24px;
        }
      }
    }

    @media only screen and (min-width: 581px) and (max-width: 979px) {
      & {
        bottom: 17%; // 90px;
        left: 25.65vw; // 355px;

        .appeal {
          font-size: 18px; // 24px;
        }
      }
    }

    @media only screen and (max-width: 580px) {
      & {
        bottom: 7%;
        left: unset;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0 10%;
        line-height: 1.4;

        .appeal {
          font-size: 4.13vw; // 16px;
        }
      }
    }
  }

  .banner-button {
    position: absolute;
    color: #fff;
    font-weight: normal;
    text-decoration: underline;
    font-size: 16px;
    padding: 16px 50px;
    border-radius: 6px;
    right: 13%;
    bottom: 24%;
  }



  @media only screen and (max-width: 900px) {
    #swiper {
      .banner-button {
        bottom: 12%;
        right: 5%;
      }

      .swiper-pagination {
        bottom: 15px;
      }
    }
  }

  @media only screen and (max-width: 580px) {
    #swiper {
      .swiper-pagination {
        display: none;
      }

      .banner-button {
        bottom: 5vh;
        right: 50%;
        transform: translate(50%, 0);
      }

      .swiper-slide {
        img {
          //height: calc(100vh - 177px);
        /*  height: 100vmin;*/
        }
      }

      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
  }
</style>
