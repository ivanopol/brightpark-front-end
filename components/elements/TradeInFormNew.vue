<template>
<section class="trade-in">
  <div class="container trade-in__container">

    <div class="trade-in__wrapper">
      <div class="trade-in__head">

        <picture>
          <source srcset="~static/images/trade-in-form/granta-desk.png" media="(min-width: 1000px)">
          <img src="~static/images/trade-in-form/granta.png" alt="">
        </picture>

        <h2 class="trade-in__head__title">
          Получите выгоду по&nbsp;Трейд-ин
        </h2>

        <p class="trade-in__head__desc">
          Бесплатная оценка и диагностика специалистом
        </p>
      </div>
      <advantages-list-mini
        class="trade-in__advantages"
        :tick-color="'#fff'"
        :advantages="['Скидка при обмене 40 000 ₽', 'Оценка на 7% ниже рынка', 'Пакет доп. оборудования со скидкой 50%']"
      />
      <div class="trade-in__form">
        <div class="trade-in__form__toggle">
          <button
            type="button"
            class="trade-in__form__toggle__btn"
            @click="toggleWidget($event, 'online')"
          >
            {{ widgetOnlineText }}
          </button>

          <button
            type="button"
            class="trade-in__form__toggle__btn active"
            @click="toggleWidget($event, 'offline')"
          >
            {{ widgetOfflineText }}
          </button>
        </div>

        <div
          class="trade-in__form__inner trade-in__form__offline"
          id="offlineWidget"
          v-if="isOfflineWidget"
        >
          <form id="offlineWidgetForm">
            <div class="trade-in_form__offline__fields">
              <input type="text" name="name" placeholder="Ваше имя">
              <input type="tel" name="phone" placeholder="Контактный телефон">
            </div>

            <ButtonNew
              :button-text="'Оставить заявку'"
              :button-color="'#514EA1'"
              class="trade-in__form__offline__submit"
            />
          </form>
        </div>

        <div
          class="trade-in__form__inner trade-in__form__online"
          id="onlineWidget"
          v-if="!isOfflineWidget"
        >
          <form id="onlineWidgetForm">
            <div class="trade-in__form__online__fields">
              <div class="select-field">
                <select  placeholder="Марка автомобиля">
                  <option value="LADA">
                    LADA
                  </option>
                </select>
              </div>

              <div class="select-field">
                <select  placeholder="Модель автомобиля">
                  <option value="Granta">
                    Granta
                  </option>
                </select>
              </div>

              <div class="select-field">
                <select  placeholder="Модель автомобиля">
                  <option value="Granta">
                    Granta
                  </option>
                </select>
              </div>

              <div class="select-field">
                <select  placeholder="Модель автомобиля">
                  <option value="Granta">
                    Granta
                  </option>
                </select>
              </div>

              <div class="select-field">
                <select  placeholder="Модель автомобиля">
                  <option value="Granta">
                    Granta
                  </option>
                </select>
              </div>

              <div class="select-field">
                <select  placeholder="Модель автомобиля">
                  <option value="Granta">
                    Granta
                  </option>
                </select>
              </div>
            </div>

            <ButtonNew
              :button-text="'Оставить заявку'"
              :button-color="'#514EA1'"
              class="trade-in__form__offline__submit"
            />
          </form>
        </div>
      </div>
    </div>

  </div>
</section>
</template>

<script>
import axios from "axios";

export default {
  name: "TradeInFormNew",

  data: function () {
    return {
      isOfflineWidget: true,
    }
  },

  methods: {
    toggleWidget(event, widget) {
      const btn = event.target;
      const buttons = document.querySelectorAll('.trade-in__form__toggle__btn');
      console.log(window);

      buttons.forEach( function(elem) {
        elem.classList.remove('active');
      });

      btn.classList.add('active');

      if(widget === 'offline') {
        this.isOfflineWidget = true;
      } else {
        this.isOfflineWidget = false;
      }
    }
  },

  computed: {
    widgetOnlineText() {
      if (typeof window !== 'undefined') {

        if (window.innerWidth > 1024) {
          return 'Оцените автомобиль онлайн'
        } else {
          return 'Оценить онлайн'
        }

      }
    },

    widgetOfflineText() {
      if (typeof window !== 'undefined') {

        if (window.innerWidth > 1024) {
          return 'Оцените автомобиль в салоне'
        } else {
          return 'Оценить в салоне'
        }

      }
    }
  },

  mounted() {
    const data = {
      parent: 180,
    };

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
    // axios.post('https://188.225.85.167/estimate/get-models', data, config)
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err))

    // fetch('http://188.225.85.167/estimate/get-models', {
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*"
    //   },
    //   body: {
    //     parent: 180
    //   }
    // })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  },
}
</script>

<style scoped lang="scss">
  .trade-in__wrapper {
    background: #514EA1;
    padding: 17px 0 0;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin: 30px 15px;

    @media (min-width: 1000px) {
      padding: 0;
    }
  }

  .trade-in__container {
    position: relative;
    z-index: 1;
  }

  .bg-figure {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 0;

    img {
      width: 100%;
    }
  }

  .trade-in__head__title {
    font-size: 28px;
    text-transform: unset;
    font-family: "Bright Park Display";
    font-weight: 700;
    margin: 10px 0;

    @media (min-width: 1000px) {
      text-align: left;
      font-size: 36px;
      max-width: 370px;
    }
  }

  .trade-in__head {
    text-align: center;
    color: white;
    position: relative;
    padding: 0 40px 10px;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, .35);
      transform: rotate(-3deg);
    }

    img {
      margin: auto;
      display: block;
    }

    @media (min-width: 1000px) {
      padding-left: 220px;
      min-height: 220px;
      justify-content: center;
      display: flex;
      flex-direction: column;

      picture {
        position: absolute;
        left: 0;
        top: -8px;

        img {
          margin: 0;
        }
      }

      &:after {
        display: none;
      }
    }
  }


  .trade-in__head__desc {
    font-size: 16px;
    font-family: "Factor A";

    @media (min-width: 1000px) {
      text-align: left;
      max-width: 370px;
    }
  }

  .trade-in__advantages {
    color: white;
    font-size: 15px;
    max-width: 240px;
    margin: 50px auto 30px;
    line-height: 20px;

    @media (min-width: 1000px) {
      position: absolute;
      top: -16px;
      right: 33px;
      padding: 33px 45px 40px 43px;
      font-size: 18px;
      max-width: 500px;
    }
  }

  .trade-in__form__toggle {
    border-bottom: 1px solid rgba(255, 255, 255, .35);
    display: flex;
    justify-content: center;
  }

  .trade-in__form__toggle__btn {
    background: none;
    border: none;
    color: rgba(255, 255, 255, .8);
    font-weight: 500;
    font-family: "Factor A";
    font-size: 16px;
    margin-right: 20px;
    border-bottom: 3px solid transparent;
    padding-bottom: 10px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      border-bottom-color: white;
      color: white;
    }

    @media (min-width: 1000px) {
      font-size: 24px;
      margin-right: 60px;
    }
  }

  .trade-in__form {
    background: url("~static/images/trade-in-form/bg-layer-mob.svg") no-repeat;
    background-size: cover;
    padding: 50px 0 30px;

    @media (min-width: 1000px) {
      background: url("~static/images/trade-in-form/bg-layer.svg") no-repeat;
      position: relative;
    }
  }

  .trade-in__form__inner {
    padding-top: 30px;

    input, select {
      background: rgba(255, 255, 255, .2);
      border-radius: 5px;
      border: none;
      font-family: "Factor A";
      padding: 20px;
      color: white;
      font-size: 18px;
      font-weight: 500;
      display: block;
      width: 100%;
      max-width: 340px;
      margin: 0 auto 10px;

      &::placeholder {
        color: white;
        font-weight: 500;
        opacity: 1;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }


  .trade-in__form__offline__submit {
    margin-top: 20px;
    height: 60px;
    font-size: 14px;
  }

  .trade-in_form__offline__fields {
    @media (min-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 770px;
      margin: auto;
      grid-column-gap: 30px;

      input, select {
        width: 100%;
        margin-bottom: 0;
        max-width: unset;
      }
    }
  }

  .trade-in__form__online__fields {
    @media (min-width: 1000px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 1090px;
      margin: auto;
      grid-gap: 20px 30px;

      input, select {
        width: 100%;
        margin-bottom: 0;
        max-width: unset;
      }
    }
  }

</style>
