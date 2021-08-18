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
            class="trade-in__form__toggle__btn active"
            @click="toggleWidget($event, 'online')"
          >
            {{ widgetOnlineText }}
          </button>

          <button
            type="button"
            class="trade-in__form__toggle__btn"
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
              <div class="input-field">
                <input type="text" name="name"v-model="usersName">

                <span
                  class="input-field__placeholder"
                  :class="[usersName !== '' ? 'active' : false]"
                >
                  Ваше имя
                </span>
              </div>

              <div class="input-field">
                <input type="tel" name="phone" v-model="usersPhone">

                <span
                  class="input-field__placeholder"
                  :class="[usersPhone !== '' ? 'active' : false]"
                >
                  Контактный телефон
                </span>
              </div>
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
                <span
                  class="select-field__placeholder"
                  :class="[selectedMark.label !== '' ? 'active' : false]"
                >
                  Марка автомобиля
                </span>
                <select @change="getModels($event)">
                  <option value="" disabled selected></option>

                  <option
                    :value="mark.id"
                    v-for="mark in allMarks"
                    :key="allMarks.indexOf(mark)"
                    :data-code="mark.code"
                    :data-label="mark.label"
                  >
                    {{ mark.label }}
                  </option>
                </select>
              </div>

              <div class="select-field">
                <span
                  class="select-field__placeholder"
                  :class="[values.model !== null ? 'active' : false]"
                >
                  Модель автомобиля
                </span>

                <select @change="getModifications($event)" v-model="values.model">
                  <option value="" disabled selected></option>
                  <option
                    :value="model.id"
                    v-for="model in allModels"
                    :key="allModels.indexOf(model)"
                    :data-code="model.code"
                    :data-label="model.label"
                  >
                    {{ model.label }}
                  </option>
                </select>
              </div>

              <div class="select-field">
                <span
                  class="select-field__placeholder"
                  :class="[values.modification !== null ? 'active' : false]"
                >
                  Модификация автомобиля
                </span>


                <select @change="getYears" v-model="values.modification">
                  <option value="" disabled selected></option>
                  <option
                    :value="modification.id"
                    v-for="modification in allModifications"
                    :key="allModifications.indexOf(modification)"
                    :data-param="modification.tech_param_id"
                    :data-label="modification.label"
                  >
                    {{ modification.label }}
                  </option>
                </select>
              </div>

              <div class="select-field">
                <span
                  class="select-field__placeholder"
                  :class="[selectedYear !== null ? 'active' : false]"
                >
                  Год выпуска
                </span>

                <select  placeholder="Модель автомобиля" @change="setYear($event)">
                  <option value="" disabled selected></option>
                  <option
                    v-for="year in years"
                    :key="years.indexOf(year)"
                    :value="year.value"
                  >
                    {{ year.value }}
                  </option>
                </select>
              </div>

              <div class="select-field">
                <span
                  class="select-field__placeholder"
                  :class="[selectedMileage !== null ? 'active' : false]"
                >
                  Пробег
                </span>

                <select  placeholder="Модель автомобиля" v-model="selectedMileage">
                  <option value="" disabled selected></option>
                  <option
                    v-for="mileage in mileages"
                    :key="mileages.indexOf(mileage)"
                    :value="mileage.value"
                  >
                    {{ mileage.label }}
                  </option>
                </select>
              </div>

              <div class="select-field">
                <span
                  class="select-field__placeholder"
                  :class="[selectedTransmission !== null ? 'active' : false]"
                >
                  Коробка передач
                </span>

                <select v-model="selectedTransmission">
                  <option value="" disabled selected></option>
                  <option
                    v-for="transmission in transmissions"
                    :key="transmissions.indexOf(transmission)"
                    :value="transmission"
                  >
                    {{ transmission }}
                  </option>
                </select>
              </div>
            </div>

            <ButtonNew
              :button-text="submitButtonText"
              :button-color="'#514EA1'"
              class="trade-in__form__offline__submit"
              @click.prevent.native="getResult"
            />
          </form>
        </div>
      </div>
    </div>
  </div>

  <modal name="thanks-modal" height="auto" :adaptive="true" class="thanks-modal">
    <div id="thanks_modal_close" class="close event" @click="hide('thanks-modal')"></div>
    <ModalThanks />
  </modal>

  <modal name="form-evaluate" height="auto" width="970px" :adaptive="true" class="form-evaluate" @closed="hide('form-evaluate')">
    <div id="form_evaluate_close" class="close event" @click="hide('form-evaluate')"></div>
    <FormEvaluate
      :mark="selectedMark.label"
      :model="selectedModel.label"
      :mileage="selectedMileage"
      :modification="selectedModification.label"
      :transmission="selectedTransmission"
      :year="selectedYear"
      :priceFrom="pricesRange.from"
      :priceTo="pricesRange.to"
    />
  </modal>
</section>
</template>

<script>
import axios from "axios";

export default {
  name: "TradeInFormNew",

  data: function () {
    return {
      isOfflineWidget: false,
      allMarks: null,
      allModels: null,
      selectedMark: {
        label: '',
      },
      selectedModel: {
        label: '',
      },
      selectedModification: {
        label: '',
      },
      allModifications: null,
      selectedMileage: null,
      years: null,
      selectedYear: null,
      selectedTransmission: null,
      mileages: [
        {label: 'До 10 000', value: 5000},
        {label: '10 000 - 30 000', value: 20000},
        {label: '30 000 - 50 000', value: 40000},
        {label: '50 000 - 75 000', value: 62000},
        {label: '75 000 - 100 000', value: 90000},
        {label: '100 000 - 150 000', value: 1250000},
        {label: '150 000 - 200 000', value: 1250000},
        {label: 'более 200 000', value: 1250000}
      ],
      transmissions: [
        'Автоматическая', 'Роботизированная', 'Механическая', 'Вариатор'
      ],
      submitButtonText: 'Рассчитать',

      pricesRange: {
        from: '',
        to: '',
      },

      values: {
        model: null,
        modification: null,
        mark: null,
      },

      usersName: '',
      usersPhone: '',
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
        this.submitButtonText = 'Оставить заявку';
      } else {
        this.isOfflineWidget = false;
        this.submitButtonText = 'Рассчитать';
      }
    },

    getModels(event) {
      const target = event.target;
      const selectedOption = target.options[target.selectedIndex];

      this.selectedMark = {
        label: selectedOption.dataset.label,
        id: target.value,
        code: selectedOption.dataset.code,
      };

      this.values.model = null;
      this.values.modification = null;



      // fetch(`http://10.0.41.205/ajax/getModels?mark_id=${this.selectedMark}`)
      //   .then(res => res.json())
      //   .then(data => {
      //     this.allModels = data.models;
      //   })
      //   .catch(err => console.log(err))

      axios.get(process.env.apiUrl + '/api/get_brand_models', {
        params: {
          model_id: this.selectedMark.id
        }
      })
        .then((response) => {
          this.allModels = response.data.models;
        })
        .catch((error) => {
          // console.log(error);
        })
        .finally(() => {
        });

      // if (this.selectedMark !== null) {
      //   this.selectedModel = null;
      //   // this.selected_modification = null;
      //   // this.selected_year = null;
      //   // this.selected_mileage = null;
      //   // this.selected_tech_param_id = null;
      //   // this.estimation = null;
      //   // this.tradeInEstimation = 0;
      //   // this.brightParkEstimation = 0;
      //   // this.step_two = false;
      //   // this.step_three = false;
      //   // this.step_four = false;
      //   // this.step_five = false;
      // }
      // this.step_one = true;
      // this.selected_brand = input;

    },

    getModifications: function(event) {
      const target = event.target;
      const selectedOption = target.options[target.selectedIndex];
      this.selectedModel = {
        id: target.value,
        label: selectedOption.dataset.label,
        code: selectedOption.dataset.code
      };

      this.values.modification = null;

      axios.get(process.env.apiUrl + '/api/get_complectations/' + this.selectedMark.code.toString() + '/' + this.selectedModel.code.toString(),
        {})
        .then((response) => {
          this.allModifications = response.data.modifications;
        });
    },

    getYears: function(event) {
      const target = event.target;
      this.selectedModification = {
        label: target.options[target.selectedIndex].dataset.label,
        param: target.options[target.selectedIndex].dataset.param,
      };

      var currentYear = new Date().getFullYear(), years = [];
      var startYear = 1980;
      while (currentYear >= startYear) {
        years.push({label: currentYear, value: currentYear});
        currentYear--;
      }

      this.years = years;
    },

    setYear: function(event) {
      const target = event.target;
      this.selectedYear = target.value;
    },

    getResult: function() {
      const data = JSON.stringify({
        tech_param_id: this.selectedModification.param,
        km_age: this.selectedMileage,
        year: this.selectedYear
      });

      axios.post(process.env.apiUrl + '/api/get_estimation/', data)
        .then((response) => {
          console.log(response.data.estimation.prices.autoru);
          this.pricesRange.from = response.data.estimation.prices.autoru.from;
          this.pricesRange.to = response.data.estimation.prices.autoru.to;

          this.show('form-evaluate');
        });
    },

    show(modal) {
      this.$modal.show(modal);
      document.body.style.overflow = 'hidden';
    },

    hide(modal) {
      this.$modal.hide(modal);
      document.body.style.overflow = 'unset';

    },
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

  created() {
    // fetch('http://10.0.41.205/ajax/getMarks')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.allMarks = data.models;
    //   })
    //   .catch(err => console.log(err))
    //
    // async fetch() {
    //   const brands = await fetch(
    //     process.env.apiUrl + `/api/get_cars_brands`
    //   ).then(res => res.json())
    //
    //   this.brands = brands
    // }
  },

  async fetch() {
    const brands = await fetch(
      process.env.apiUrl + `/api/get_cars_brands`
    ).then(res => res.json())

    this.allMarks = brands
  },

  mounted() {
    // this.show('form-evaluate');
  }
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
        pointer-events: none;

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
      padding: 30px 20px 10px;
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

      &:focus + .input-field__placeholder {
        transition: .2s ease;
        font-size: 12px;
        transorm: unset;
        top: 15px;
        left: 19px;
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

  .select-field, .input-field {
    position: relative;
    margin-bottom: 20px;
    max-width: 340px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 1000px) {
      margin: 0;
      max-width: unset;
    }
  }

  .select-field__placeholder, .input-field__placeholder {
    position: absolute;
    left: 22px;
    font-weight: 500;
    font-size: 18px;
    font-family: "Factor A";
    top: 50%;
    transform:  translate(0, -50%);
    transition: .2s ease;
    color: white;
    pointer-events: none;

    &.active {
      transition: .2s ease;
      font-size: 12px;
      transorm: unset;
      top: 15px;
      left: 19px;
    }
  }

</style>

<style lang="scss">
  .thanks-modal .vm--modal {
    max-width: 570px;
    border-radius: 10px;

    .close {
      &:before {
        background-color: #514EA1;
        height: 4px;
      }

      &:after {
        background-color: #514EA1;
        height: 4px;
      }
    }
  }

  .form-evaluate .vm--modal {
    max-width: unset;
    width: 100%;
    border-radius: 0;
    height: 100vh !important;
    overflow-y: auto;

    @media (min-width: 1024px) {
      max-width: 970px;
    }
  }
</style>
