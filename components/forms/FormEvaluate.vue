<template>
<div class="evaluate">
  <h4 class="evaluate__title">
    Оценка вашего автомобиля
  </h4>

  <div class="evaluate__car-info">
    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Марка автомобиля
      </h5>

      <p class="evaluate__car-info__item__value">
        Mercedes
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Модель автомобиля
      </h5>

      <p class="evaluate__car-info__item__value">
        S600 AMG
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Марка автомобиля
      </h5>

      <p class="evaluate__car-info__item__value">
        Mercedes
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Марка автомобиля
      </h5>

      <p class="evaluate__car-info__item__value">
        Mercedes
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Марка автомобиля
      </h5>

      <p class="evaluate__car-info__item__value">
        Mercedes
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Марка автомобиля
      </h5>

      <p class="evaluate__car-info__item__value">
        Mercedes
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Марка автомобиля
      </h5>

      <p class="evaluate__car-info__item__value">
        Mercedes
      </p>
    </div>
  </div>



  <div class="evaluate__car__prices">
    <p class="evaluate__car__prices__description">
      Предварительная стоимость
      <span>(в зависимости от состояния)</span>
    </p>

    <p class="evaluate__car__prices__range">
      545000 - 560000 Р*
    </p>

    <p class="evaluate__car__prices__warning">
      * — Расчет является ориентировочным, более точный расчет производится в салоне при осмотре автомобиля.
    </p>
  </div>

  <div class="evaluate__car__form-wrapper">

    <img src="~static/images/coins.png" alt="" class="evaluate__car-info__form__coins">

    <form class="evaluate__car__form">

      <h5 class="evaluate__car__form__heading">
        Хотите + 10 000&nbsp;₽ к&nbsp;оценочной стоимости?
      </h5>

      <p class="evaluate__car__form__description">
        Оставьте ваши контактные данные, вам придёт код, при предъявлении которого, мы&nbsp;добавим 10&nbsp;000 рублей к&nbsp;оценочной стоимости вашего авто в&nbsp;салоне.
      </p>

      <div class="evaluate__car__form__field">
        <span class="field-placeholder" :class="[nameVal !== '' ? 'active' : '']">
          Ваше имя
        </span>

        <input type="text" v-model="nameVal">
      </div>

      <div class="evaluate__car__form__field">
        <span class="field-placeholder" :class="[phoneVal !== '' ? 'active' : '']">
          Контактный телефон
        </span>

        <input type="text" v-model="phoneVal">
      </div>

      <ButtonNew
        button-color="#514EA1"
        button-text="Получить код"
        class="evaluate__form__submit"
      />
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: "FormEvaluate",

  props: {
    mark: String,
    model: String,
    modification: String,
    mileage: String,
    year: String,
    transmission: String,
  },

  data: function() {
    return {
      nameVal: '',
      phoneVal: '',
    }
  },
}
</script>

<style scoped lang="scss">
.evaluate {
  background: white;
  padding: 48px 0 0;
}

.evaluate__title {
  color: #514EA1;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: "Bright Park Display";
  padding: 0 20px;
}

.evaluate__car-info__item {
  margin-bottom: 20px;
}

.evaluate__car-info {
  padding: 0 20px;
}

.evaluate__car-info__item__heading {
  font-size: 12px;
  font-weight: 500;
  font-family: "Factor A";
  text-transform: uppercase;
  color: rgba(0, 0, 0, .5);
  margin-bottom: 4px;
}

.evaluate__car-info__item__value {
  font-size: 20px;
  font-weight: 700;
  color: #000;
  font-family: "Factor A";
}

.evaluate__car__prices {
  margin-top: 50px;
}

.evaluate__car__prices__description {
  text-transform: uppercase;
  color: rgba(0, 0, 0, .5);
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  font-family: "Factor A";
  line-height: 16px;
  span {
    display: block;
  }
}

.evaluate__car__prices__range {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #514EA1;
  font-family: "Factor A";
  margin: 15px 0;
}

.evaluate__car__prices__warning {
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, .5);
  font-family: "Factor A";
  text-align: center;
}

.evaluate__car__form-wrapper {
  background: url("~static/images/trade-in-form/bg-layer-mob.svg") no-repeat;
  background-size: cover;
  padding: 70px 0;
  position: relative;
  margin-top: 50px;
}

.evaluate__car__form__field {
  position: relative;
  input {
    background: rgba(255, 255, 255, .2);
    border-radius: 5px;
    height: 60px;
    max-width: unset;
    width: 100%;
    padding: 15px 23px 0;
    color: white;
    border: none;
  }
}

.field-placeholder {
  position: absolute;
  top: 22px;
  left: 23px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  font-family: "Factor A";
  transition: .2s ease-out;

  &.active {
    font-size: 12px;
    top: 10px;
    transition: .2s ease-in;
  }
}

.evaluate__car__form__heading {
  font-size: 28px;
  font-weight: 700;
  color: white;
  font-family: "Bright Park Display";
  margin-bottom: 20px;
}

.evaluate__car-info__form__coins {
  position: absolute;
  right: 0;
  top: 0;
}

.evaluate__car__form__description {
  font-size: 14px;
  font-family: "Factor A";
  margin-bottom: 24px;
  color: white;
  line-height: 20px;
}

.evaluate__form__submit {
  height: 60px;
  font-size: 14px;
}

</style>
