<template>
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
</template>

<script>
export default {
  name: "ModelsAbout",

  data: function () {
    return {
      isMobile: true,

      models: {
        granta: {
          sedan: {
            exterior: {
              mobImage: require('../../static/images/model-about/granta-sedan-exterior-mob.png'),
              image: '~static/images/model-about/granta-sedan-exterior.jpg',
              title: 'Народный тип кузова',
              description: 'Седан – всем знакомый формат автомобиля. Это вместительный багажник, гармонично вписанный в стиль. Это серьезный подход к делу. И, конечно, забота о пассажирах, потому что грузовой отсек всегда отделен от салона.'
            },

            interior: {
              mobImage: '~static/images/model-abot/granta-sedan-interior-mob.jpg',
              image: '~static/images/model-abot/granta-sedan-exterior.jpg',
              title: 'Прикольный салончик',
              description: 'Аоаоао аоаоа аоооо ааауа оооаоао вооооу',
            },

            comfort: {

            },

            safety: {

            },

          },

          liftback: {

          }
        },

        vesta: {

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
</style>
