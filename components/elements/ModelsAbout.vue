<template>
<div>
  <section class="models-about" v-if="isMobile">
    <div class="container models-about__container">
      <div class="models-about__wrapper">
        <div class="models-about__item opened">
          <button class="models-about__item__head" @click="open($event)">
            Экстерьер
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="white" stroke-width="2"/>
            </svg>
          </button>

          <div class="models-about__item__inner">
            <img :src="models.granta.sedan.exterior.mobImage" alt="">

            <div class="models-about__item__inner__text">
              <p>
                Седан&nbsp;&mdash; всем знакомый формат автомобиля. Это вместительный багажник, гармонично вписанный в&nbsp;стиль. Это серьезный подход к&nbsp;делу. И, конечно, забота о&nbsp;пассажирах, потому что грузовой отсек всегда отделен от&nbsp;салона.
              </p>
            </div>
          </div>
        </div>

        <div class="models-about__item">
          <button class="models-about__item__head" @click="open($event)">
            Интерьер
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="white" stroke-width="2"/>
            </svg>
          </button>

          <div class="models-about__item__inner">
            <img :src="models.granta.sedan.exterior.mobImage" alt="">

            <div class="models-about__item__inner__text">
              <p>
                Седан&nbsp;&mdash; всем знакомый формат автомобиля. Это вместительный багажник, гармонично вписанный в&nbsp;стиль. Это серьезный подход к&nbsp;делу. И, конечно, забота о&nbsp;пассажирах, потому что грузовой отсек всегда отделен от&nbsp;салона.
              </p>
            </div>

          </div>
        </div>

        <div class="models-about__item">
          <button class="models-about__item__head" @click="open($event)">
            Комфорт
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="white" stroke-width="2"/>
            </svg>
          </button>

          <div class="models-about__item__inner">
            <img :src="models.granta.sedan.exterior.mobImage" alt="">

            <div class="models-about__item__inner__text">
              <p>
                Седан&nbsp;&mdash; всем знакомый формат автомобиля. Это вместительный багажник, гармонично вписанный в&nbsp;стиль. Это серьезный подход к&nbsp;делу. И, конечно, забота о&nbsp;пассажирах, потому что грузовой отсек всегда отделен от&nbsp;салона.
              </p>
            </div>

          </div>
        </div>

        <div class="models-about__item">
          <button class="models-about__item__head" @click="open($event)">
            Безопасность
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="white" stroke-width="2"/>
            </svg>
          </button>

          <div class="models-about__item__inner">
            <img :src="models.granta.sedan.exterior.mobImage" alt="">

            <div class="models-about__item__inner__text">
              <p>
                Седан&nbsp;&mdash; всем знакомый формат автомобиля. Это вместительный багажник, гармонично вписанный в&nbsp;стиль. Это серьезный подход к&nbsp;делу. И, конечно, забота о&nbsp;пассажирах, потому что грузовой отсек всегда отделен от&nbsp;салона.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="models-about-desk"
    :style="{ 'background-image': 'url(' + currentBackground + ')' }"
    v-if="!isMobile"
  >
    <div class="container models-about-desk__container">
      <div class="models-about-desk__toggle">
        <button
          type="button"
          class="models-about-desk__toggle__btn active"
          @click="switchWidget($event, 'exterior')"
        >
          Экстерьер
        </button>

        <button
          type="button"
          class="models-about-desk__toggle__btn"
          @click="switchWidget($event, 'interior')"
        >
          Интерьер
        </button>

        <button
          type="button"
          class="models-about-desk__toggle__btn"
          @click="switchWidget($event, 'comfort')"
        >
          Комфорт
        </button>

        <button
          type="button"
          class="models-about-desk__toggle__btn"
          @click="switchWidget($event, 'safety')"
        >
          Безопасность
        </button>
      </div>

      <h2 class="models-about-desk__title">
        {{ currentTitle }}
      </h2>

      <div class="models-about-desk__description">
        <p>
          {{ currentDescription }}
        </p>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "ModelsAbout",

  props: {
    model: {
      type: String,
      default: 'granta'
    },

    carsBody: {
      type: String,
      default: 'sedan'
    }
  },

  data: function () {
    return {
      isMobile: true,
      currentWidget: 'exterior',

      models: {
        granta: {
          sedan: {
            exterior: {
              mobImage: require('../../static/images/model-about/granta-sedan-exterior-mob.png'),
              image: require('../../static/images/model-about/granta-sedan-exterior.jpg'),
              title: 'Народный тип кузова',
              description: 'Седан – всем знакомый формат автомобиля. Это вместительный багажник, гармонично вписанный в стиль. Это серьезный подход к делу. И, конечно, забота о пассажирах, потому что грузовой отсек всегда отделен от салона.'
            },

            interior: {
              mobImage: require('../../static/images/model-about/granta-sedan-exterior-mob.png'),
              image: require('../../static/images/model-about/granta-sedan-interior.jpg'),
              title: 'Прикольный салончик',
              description: 'Аоаоао аоаоа аоооо ааауа оооаоао вооооу',
            },

            comfort: {
              mobImage: require('../../static/images/model-about/granta-sedan-exterior-mob.png'),
              image: '~static/images/model-abot/granta-sedan-exterior.jpg',
              title: 'Прикольный салончик',
              description: 'Аоаоао аоаоа аоооо ааауа оооаоао вооооу',
            },

            safety: {
              mobImage: require('../../static/images/model-about/granta-sedan-exterior-mob.png'),
              image: '~static/images/model-abot/granta-sedan-exterior.jpg',
              title: 'Прикольный салончик',
              description: 'Аоаоао аоаоа аоооо ааауа оооаоао вооооу',
            },
          },
        },
      }
    }
  },

  mounted() {
    if (typeof window !== 'undefined') {
      window.innerWidth < 1024 ? this.isMobile = true : this.isMobile = false;
    }

    this.initHeight();
  },

  computed: {
    currentTitle() {
      const carsBody = this.carsBody,
        model = this.model,
        currentWidget = this.currentWidget,
        models = this.models;

      return models[model][carsBody][currentWidget].title;

    },

    currentDescription() {
      const carsBody = this.carsBody,
        model = this.model,
        currentWidget = this.currentWidget,
        models = this.models;

      return models[model][carsBody][currentWidget].description;
    },

    currentBackground() {
      const carsBody = this.carsBody,
        model = this.model,
        currentWidget = this.currentWidget,
        models = this.models;

      return models[model][carsBody][currentWidget].image;
    },
  },

  methods: {
    open(event) {
      const target = event.target;
      const targetHeight = target.offsetHeight;
      const parent = target.closest('.models-about__item');

      if (!parent.classList.contains('opened')) {
        document.querySelectorAll('.models-about__item').forEach(function(elem) {
          const elemParent = elem.closest('.models-about__item');
          elem.classList.remove('opened');
          elemParent.style.height = targetHeight + 'px';
        });

        const currentHeight = parent.querySelector('.models-about__item__inner').offsetHeight;
        parent.classList.add('opened');
        parent.style.height = currentHeight + 'px';
      }
    },

    // Ставим высоту по умолчанию открытому элементу
    initHeight() {
      const elem = document.querySelector('.models-about__item.opened');
      elem.style.height = elem.offsetHeight + 'px';
    },

    switchWidget(event, widget) {
      document.querySelectorAll('.models-about-desk__toggle__btn').forEach(function(elem) {
        elem.classList.remove('active');
      });

      const target = event.target;
      target.classList.add('active');

      this.currentWidget = widget;
    }
  }
}
</script>

<style scoped lang="scss">
.models-about__item {
  position: relative;
  overflow: hidden;
  transition: .2s ease;
  background: black;

  &:not(:first-child) {
    height: 78px;
  }

  &.opened {
    .models-about__item__head {
      background: rgba(0, 0, 0, .2);

      svg {
        transform: rotate(180deg);
        transition: .2s;
      }
    }

    .models-about__item__inner {
      opacity: 1;
      transition: .5s ease-in;
    }
  }
}

.models-about__item__head {
  position: absolute;
  top: 0;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 1);
  border: none;
  color: white;
  padding: 25px 39px;
  font-family: "Factor A";
  width: 100%;
  height: 78px;
  z-index: 1;
  border-bottom: 1px solid rgba(255, 255, 255, .25);

  svg {
    margin-left: 9px;
    transition: .2s ease;
  }
}

.models-about__item__inner {
  opacity: .1;
  transition: .2s ease;

  img {
    width: 100%;
  }
}

.models-about__item__inner__text {
  font-family: "Factor A";
  font-size: 18px;
  line-height: 28px;
  padding: 15px 20px;
  background: black;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, .25);
}

.models-about-desk {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #000;
  transition: background-image .5s ease-in;
}

.models-about-desk__container {
  position: relative;
  min-height: 850px;
  overflow: unset;
}

.models-about-desk__toggle {
  padding-top: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, .25);
}

.models-about-desk__toggle__btn {
  font-weight: 500;
  font-size: 24px;
  color: white;
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  padding-bottom: 23px;
  font-family: "Factor A";
  margin-right: 58px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
  &.active {
    border-bottom-color: white;
  }
}

.models-about-desk__title {
  color: white;
  font-family: "Bright Park Display";
  font-size: 42px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 0;
  text-transform: unset;
}

.models-about-desk__description {
  color: white;
  font-size: 18px;
  font-family: "Factor A";
  line-height: 28px;
  padding: 47px 30px 55px 68px;
  max-width: 568px;
  background: url("~static/images/model-about/descript-bg.svg") no-repeat;
  background-size: cover;
  position: absolute;
  bottom: 70px;
  right: -32px;
}
</style>
