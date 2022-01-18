<template>
  <section class="main-screen">
    <picture class="main-screen__new-year-gift">
      <source srcset="~static/images/banner-new-year-gift-mob.png" media="(max-width: 768px)">
      <img src="~static/images/banner-new-year-gift.png" alt="Новогодний подарок от Брайт Парк">
    </picture>

    <div class="main-screen__swiper-wrap">
      <swiper id="swiper" class="swiper" ref="mySwiper"  :options="swiperOption">
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
        <swiper-slide :key="banner.key" v-for="banner in banners">
          <div class="banner_btn-call" v-if="banner.type == 2">
             <ButtonPhone :class="'callibri_tel banner-button-3 ' + banner.buttonColor"
                          text="Заказать звонок"
             />
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
          title: 'avtovaz-edet-k-nam',
          extension: 'jpg',
          buttonColor: 'yellow',
          link: '',
          type: 2,
        },
        {
          key: 2,
          title: 'santa',
          extension: 'jpg',
          buttonColor: 'yellow',
          link: '',
          type: 1,
        },
/*        {
          key: 3,
          title: 'yellow',
          extension: 'jpg',
          buttonColor: 'purple',
          link: 'vesta/sedan',
          type: 1,
        },*/
        {
          key: 4,
          title: 'green',
          extension: 'jpg',
          buttonColor: 'orange',
          link: 'credit',
          type: 1,
        },
        {
          key: 5,
          title:'all_inclusive_2',
          extension: 'jpg',
          buttonColor: 'green',
          link: 'vesta/sw',
          type: 1,
        },
/*        {
          key: 6,
          title:'purple',
          extension: 'jpg',
          buttonColor: 'green',
          link: 'granta/sedan',
          type: 1,
        },*/
      ],
      swiperOption: {
/*        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },*/
        autoplay: false,
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

      .yellow {
        background-color: #FFCA0D;
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

  .type-3-title {
    position: absolute;
    color: #504ea0;
    top: 110px;
    left: 130px;

    .title {
      font-family: 'Bright Park Display';
      font-size: 82px;
      margin-bottom: 35px;
      display: block;
    }

    ul {
      li {
        font-family: 'Factor A';
        font-size: 34px;
        line-height: 1.2;
      }
    }

    .appeal-wrap {
      margin-top: 35px;
      display: grid;
      grid-template-columns: 1.5fr .5fr;

      .appeal {
        font-family: 'Bright Park Display';
        font-size: 30px;
        line-height: 1.2;

        a {
          color: #504ea0;
          font-weight: normal;
        }
      }

      .button {
        position: relative;

        .banner-button-2 {
          position: absolute;
          color: #fff;
          font-weight: normal;
          text-decoration: underline;
          font-size: 16px;
          padding: 16px 50px;
          border-radius: 6px;
        }
      }
    }

    @media only screen and (min-width: 901px) and (max-width: 1400px) {
      & {
        top: 7.63vw;
        left: 9.02vw;

        .title {
          font-size: 5.59vw;
          margin-bottom: 2.43vw;
        }

        ul {
          li {
            font-size: 2.36vw;
          }
        }

        .appeal-wrap {
          margin-top: 2.43vw;

          .appeal {
            font-size: 2.08vw;
          }
        }
      }
    }

    @media only screen and (min-width: 581px) and (max-width: 900px) {
      & {
        top: 13vw;
        left: 12.2vw;
        width: 74%;

        .title {
          font-size: 6vw;
          margin-bottom: 2vw;
        }

        ul {
          li {
            font-size: 3vw;
          }
        }

        .appeal-wrap {
          margin-top: 2vw;
          grid-template-columns: 1.3fr .8fr;

          .appeal {
            font-size: 2vw;
          }
        }
      }
    }

    @media only screen and  (max-width: 580px) {
      & {
        top: 23vw;
        left: 9vw;
        width: 80%;

        .title {
          font-size: 9vw;
          margin-bottom: 9vw;
        }

        ul {
          li {
            font-size: 3.6vw;
            line-height: 1.4;
          }
        }

        .appeal-wrap {
          margin-top: 14vw;
          display: flex;
          flex-direction: column;

          .appeal {
            font-size: 3.2vw;
            line-height: 1.4;
          }

          .button {
            height: 49px;
            margin-top: 40px;
            display: flex;
            justify-content: center;

            .banner-button-2 {
              position: relative;
            }
          }
        }
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

      .bold {
        font-weight: bold;
      }
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
        font-weight: normal;
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
        padding: 0 15% 0 10%;
        line-height: 1.4;

        .appeal {
          font-size: 4.13vw; // 16px;

          a {
            font-weight: bold;
          }
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

  .banner-button-2 {
    position: absolute;
    color: #000;
    font-weight: normal;
    text-decoration: none;
    font-size: 16px;
    padding: 16px 50px;
    border-radius: 6px;
    left: 5%;
    bottom: 30%;


    &:hover {
      opacity: 1;
    }
  }

  .banner_btn-call {
    position: absolute;
    bottom: 19.9%;
    left: 6.94%;
  }

  .banner-button-3 {
    cursor: pointer;
    font-size: 16px;
    padding: 16px 50px;
    border-radius: 6px;
    color: #582d96;
    font-weight: normal;
    text-decoration: underline;
  }



  @media only screen and (max-width: 900px) {
    #swiper {
      .banner-button {
        bottom: 12%;
        right: 5%;
      }

      .banner-button-2 {
        bottom: 7%;
        right: 10%;
        left: unset;
      }

      .swiper-pagination {
        bottom: 15px;
      }
    }

    .banner_btn-call {
      bottom: 19.9%;
      left: 5.2%;
    }
  }

  @media only screen and (max-width: 580px) {

    .banner_btn-call {
      left: unset;
      bottom: 10%;
    }

    #swiper {
      .swiper-pagination {
        display: none;
      }

      .banner-button {
        bottom: 5vh;
        right: 50%;
        transform: translate(50%, 0);
      }

      .banner-button-2 {
        bottom: 20vh;
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


<style lang="scss" scoped>
  .main-screen {
    position: relative;
    max-width: 1440px;
    margin: 0 auto;
  }

  .main-screen__new-year-gift {
    max-width: 266px;
    position: absolute;
    top: -10px;
    right: 3%;
    z-index: 2;

    img {
      width: 100%;
    }

    @media (max-width: 1200px) {
      max-width: 200px;
      top: -8px;
    }

    @media (max-width: 768px) {
      top: -7px;
      left: unset;
      right: -5px;
    }

    @media (max-width: 570px) {
      top: unset;
      bottom: 40%;
      right: -5px;
    }
  }
</style>
