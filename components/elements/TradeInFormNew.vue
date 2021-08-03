<template>
<section class="trade-in">
  <div class="container trade-in__container">
    <div class="trade-in__head">
      <img src="~static/images/trade-in-form/granta.png" alt="">

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
          Оценить онлайн
        </button>

        <button
          type="button"
          class="trade-in__form__toggle__btn active"
          @click="toggleWidget($event, 'offline')"
        >
          Оценить в салоне
        </button>
      </div>

      <div
        class="trade-in__form__inner trade-in__form__offline"
        id="offlineWidget"
        v-if="isOfflineWidget"
      >
        <form>
          <input type="text" name="name" placeholder="Ваше имя">
          <input type="tel" name="phone" placeholder="Контактный телефон">

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
        <form>
          <select  placeholder="Марка автомобиля">
            <option value="LADA">LADA</option>
          </select>
          <input type="text" name="name" placeholder="Ваше имя">
          <input type="tel" name="phone" placeholder="Контактный телефон">

          <ButtonNew
            :button-text="'Оставить заявку'"
            :button-color="'#514EA1'"
            class="trade-in__form__offline__submit"
          />
        </form>
      </div>
    </div>
  </div>

</section>
</template>

<script>
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
  }
}
</script>

<style scoped lang="scss">
  .trade-in {
    background: #514EA1;
    padding: 17px 0 0;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    margin: 30px 15px;
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
  }


  .trade-in__head__desc {
    font-size: 16px;
    font-family: "Factor A";
  }

  .trade-in__advantages {
    color: white;
    font-size: 15px;
    max-width: 240px;
    margin: 50px auto 30px;
    line-height: 20px;
  }

  .trade-in__form__toggle {
    border-bottom: 1px solid rgba(255, 255, 255, .35);
    display: flex;
    justify-content: center;

    button {
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
    }
  }

  .trade-in__form {
    background: url("~static/images/trade-in-form/bg-layer-mob.svg") no-repeat;
    background-size: cover;
    padding: 50px 0 30px;
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
      margin-bottom: 10px;

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

</style>
