<template>
  <section class="main-screen">
    <div class="main-screen__swiper-wrap">
      <swiper id="swiper" class="swiper" ref="mySwiper" :options="swiperOption">

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
        <swiper-slide :key="banner.key" v-for="banner in banners">
          <picture>
            <source :srcset="path.mobile + banner.title + '.' + banner.extension + ', ' + path.mobile + banner.title + '.' + banner.extension + ' 2x'" media="(max-width: 580px)">
            <source :srcset="path.tablet + banner.title + '.' + banner.extension + ', ' + path.tablet + banner.title + '.' + banner.extension + ' 2x'" media="(max-width: 900px)">
            <source :srcset="path.desktop + banner.title + '.' + banner.extension + ', ' + path.desktop + banner.title + '.' + banner.extension + ' 2x'" media="(min-width: 901px)">
            <img :src="path.mobile + banner.title + '.' + banner.extension"
                 :srcset="path.mobile + banner.title + '.' + banner.extension + ', ' + path.mobile + banner.title + '.' + banner.extension + ' 2x'"
                 alt="" />
          </picture>
          <a :href="'/' + $store.state.city.value + '/' + banner.link" :class="'banner-button event ' + banner.buttonColor">Подробнее</a>
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
          title: 'yellow',
          extension: 'jpg',
          buttonColor: 'purple',
          link: 'vesta/sedan',
        },
        {
          key: 2,
          title: 'green',
          extension: 'jpg',
          buttonColor: 'orange',
          link: 'credit',
        },
        {
          key: 3,
          title:'purple',
          extension: 'jpg',
          buttonColor: 'green',
          link: 'granta/sedan',
        },
      ],
      swiperOption: {
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        autoHeight: false,
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
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
  created: function() {
  }
};
</script>

<style lang="scss" >

  #swiper {
    max-width: 1440px;

    .swiper-button-next {
      right: 30px;
      padding-left: 5px;
    }

    .swiper-button-prev {
      left: 30px;
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
