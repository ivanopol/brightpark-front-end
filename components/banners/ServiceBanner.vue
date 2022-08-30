<template>
  <section class="service-screen">
    <div class="service-screen__swiper-wrap">
      <swiper id="swiper-service" class="swiper" ref="mySwiper2"  :options="swiperOption">
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

          <div :class="banner.place + ' buttons-service-wrapper'">
            <div :key="button.key" v-for="button in banner.buttons" >
              <ButtonNew
                v-if="button.type === 'window'"
                buttonColor=""
                :type="'button'"
                :buttonText="button.text"
                :class="button.color"
                @click.native="show(
                        'Оставить заявку',
                        $store.state._page + '__modal-banner-new_',
                        button.form_type ? button.form_type : 1,
                        'service_banner_call',
                        button.form_title_special,
                      )"
              />

              <a v-if="button.type === 'link'"
                 :href="'/' + $store.state.city.value + '/' + button.link"
                 :class="' event ' + button.color">
                {{ button.text }}
              </a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <modal name="form-service-banner" height="auto" :adaptive="true" class="service-banner__modal">
      <div :id="form_id + '_close'" class="close event" @click="hide"></div>
      <FormLeadNew
        :form_id="form_id"
        :form_title="form_title"
        :form_type="form_type"
        :goal="goal"
        :form_title_special="form_title_special"
      />
    </modal>

  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: 'ServiceBanner',
  data: function () {
    return {
      form_id: '',
      goal: '',
      form_type: 1,
      form_title: '',
      form_title_special: '',
      colorTitle: '',
      path: {
        mobile: '/images/main/mobile/',
        mobileBig: '/images/main/mobile/big_phones/',
        tablet: '/images/main/tablet/',
        desktop: '/images/main/desktop/',
      },
      banners: [
        {
          key: 0,
          title: 'den-otkrytyh-dverej',
          extension: 'jpg',
          place: 'banner-button-service-6',
          buttons: [
            {
              key: 1,
              type: 'window',
              form_type: 2,
              form_title_special: '',
              color: 'orange',
              text: 'ЗАПИСАТЬСЯ',
              link: '',
            },
          ]
        },
        {
          key: 1,
          title: 'akciya-mesyaca-na-kuzovnye-raboty',
          extension: 'jpg',
          place: 'banner-button-service-9',
          buttons: [
            {
              key: 1,
              type: 'window',
              form_type: 1,
              form_title_special: '',
              color: 'orange',
              text: 'ЗАКАЗАТЬ ЗВОНОК',
              link: '',
            },
          ]
        },
        {
          key: 2,
          title: 'kompleksnaya-diagnostika',
          extension: 'jpg',
          place: 'banner-button-service-6',
          buttons: [
            {
              key: 1,
              type: 'window',
              form_type: 2,
              form_title_special: 'Заявка на сервис. Диагностика',
              color: 'green',
              text: 'ЗАПИСАТЬСЯ',
              link: '',
            },
          ]
        },
        {
          key: 3,
          title: 'letnyaya-gosprogramma-2',
          extension: 'jpg',
          place: 'banner-button-service-8',
          buttons: [
            {
              key: 1,
              type: 'window',
              form_type: 1,
              form_title_special: '',
              color: 'yellow',
              text: 'ЗАКАЗАТЬ ЗВОНОК',
              link: '',
            },
          ]
        },
/*       {
          key: 3,
          title: 'dlya-novyh-klientov-servisa',
          extension: 'jpg',
          place: 'banner-button-service-7',
          buttons: [
            {
              key: 1,
              type: 'window',
              form_type: 2,
              form_title_special: 'Заявка на сервис. Новые клиенты',
              color: 'orange',
              text: 'ЗАПИСАТЬСЯ',
              link: '',
            },
          ]
        },*/
      ],
      swiperOption: {
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        cssMode: false,
        autoHeight: false,
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: false,
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
  methods: {
    show(title, form_id, form_type, goal, form_title_special) {
      console.log("Click!");
      this.form_title = title;
      this.form_id = form_id;
      this.form_type = form_type; // 1 - обычная форма, 2 - форма сервиса
      this.goal = goal;
      this.form_title_special = form_title_special

      this.$modal.show("form-service-banner");
    },
    hide() {
      this.$modal.hide("form-service-banner");
    },

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper2.$swiper
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
  },
  created: function() {
    if ( this.$store.state.city.value == 'magnitogorsk' ) {
      this.banners.splice(0,1,{
        key: 0,
        title: 'den-otkrytyh-dverej-2',
        extension: 'jpg',
        place: 'banner-button-service-6',
        buttons: [
          {
            key: 1,
            type: 'window',
            form_type: 2,
            form_title_special: '',
            color: 'orange',
            text: 'ЗАПИСАТЬСЯ',
            link: '',
          },
        ]
      },)
    }
  },
};
</script>

<style lang="scss" >

#swiper-service {
  width: 100%;

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
      max-width: 100%;
      //display: flex;
    }

    img {
      object-fit: cover;
      width: 100%;
      max-width:100%;
      vertical-align:middle;
      background-color: #d6e7ef;
    }

    @media only screen and (max-width: 580px) {
      img {
       // aspect-ratio: 390 / 467;
      }
    }

    @media only screen and (min-width: 581px) and (max-width: 900px) {
      img {
       // aspect-ratio: 900 / 584;
      }
    }

    @media only screen and (min-width: 901px) {
      img {
      //  aspect-ratio: 903 / 409;
      }
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

.buttons-service-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:first-child {
    margin-right: 15px;
    margin-bottom: 0;
  }

  div {
    a,
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: normal;
      text-decoration: none;
      font-size: 16px;
      padding: 10px 32px 6px;
      border-radius: 6px;
      max-width: 300px;
      white-space: nowrap;
      height: 65px;
    }
  }
}


  .banner-button-service,
  .banner-button-service-2,
  .banner-button-service-3,
  .banner-button-service-4,
  .banner-button-service-5,
  .banner-button-service-6,
  .banner-button-service-7,
  .banner-button-service-8,
  .banner-button-service-9 {
    position: absolute;
  }

  .banner-button-service {
    left: 8.5%;
    bottom: 23%;
  }

  .banner-button-service-2 {
    left: 6.3%;
    bottom: 13%;
  }

  .banner-button-service-3 {
    right: 6%;
    bottom: 25%;
    button {
      color: #6a32b7 !important;
    }
  }

  .banner-button-service-4 {
    right: 6%;
    bottom: 23%;
  }

  .banner-button-service-5 {
    right: 11%;
    top: 38%;
  }

  .banner-button-service-6 {
    right: 9%;
    bottom: 15%;
  }

  .banner-button-service-7 {
    right: 7%;
    bottom: 28%;
  }

.banner-button-service-8 {
  left: 8.5%;
  bottom: 27%;
  button {
    color: #6a32b7 !important;
    }
  }

.banner-button-service-9 {
  right: 8%;
  bottom: 12%;
}

.banner_btn-call {
  position: absolute;
  bottom: 19.9%;
  left: 6.94%;
}


@media only screen and (max-width: 900px) {
  #swiper-service {
    .banner-button-service {
      bottom: 13%;
      left: 7%;
    }

    .banner-button-service-2 {
      bottom: 13%;
      left: 7%;
    }

    .banner-button-service-3 {
      bottom: 21%;
      right: 7%;
    }

    .banner-button-service-4 {
      bottom: 20%;
      right: 7%;
    }

    .banner-button-service-5 {
      top: 36%;
      right: 9%;
    }

    .banner-button-service-6 {
      bottom: 10%;
      right: 8%;
    }

    .banner-button-service-7 {
      bottom: 10%;
      right: 8%;
    }

    .banner-button-service-8 {
      bottom: 29%;
      left: 7%;
    }

    .banner-button-service-9 {
      bottom: 8%;
      left: 7%;
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

  .buttons-service-wrapper {
    flex-direction: column;

    & > div:first-child {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }

  .banner_btn-call {
    left: unset;
    bottom: 10%;
  }

  #swiper-service {
    .swiper-pagination {
      display: none;
    }

    .banner-button-service,
    .banner-button-service-2,
    .banner-button-service-3,
    .banner-button-service-4,
    .banner-button-service-6,
    .banner-button-service-7,
    .banner-button-service-9 {
      bottom: 0;
      right: 50%;
      left: auto;
      transform: translate(50%, 0);
      padding: 16px 16px;
      text-align: center;
      button {
        font-size: 14px
      }
    }

    .banner-button-service-5,
    .banner-button-service-8 {
      bottom: 0;
      right: 50%;
      left: auto;
      transform: translate(50%, 0);
      padding: 16px 0;
      text-align: center;
      button {
        font-size: 14px
      }
    }


    .banner-button-service-8 button {
      color: #fff!important;
      background-color: #504ea0!important;
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

.service-banner__modal {
  .vm--modal {
    max-width: 570px;
    border-radius: 0;
  }

}

</style>


<style lang="scss" scoped>
.service-screen {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.service-screen__new-year-gift {
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
