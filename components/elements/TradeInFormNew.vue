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
          <form
            id="offlineWidgetForm"
            action="#"
            method="POST"
            name="offlineForm"
            @submit="send"
            :data-goal="goal"
          >
            <div class="trade-in_form__offline__fields">
              <div class="input-field">

                <!--<input type="text" name="name" v-model="usersName">

                <span
                  class="input-field__placeholder"
                  :class="[usersName !== '' ? 'active' : false]"
                >
                  Ваше имя
                </span> -->

                <input type="text" name="name" v-model="name">
                <span class="input-field__placeholder" :class="[name !== '' ? 'active' : false]">Ваше имя</span>
              </div>

              <div class="input-field">
                <the-mask
                  :id="form_id + '_input_phone'"
                  name="phone"
                  pattern=".{18,}"
                  mask="+# (###)-###-##-##"
                  v-model="phone"
                  type="tel"
                  required="true"
                ></the-mask>
                <span class="input-field__placeholder" :class="[phone !== '' ? 'active' : false]">Контактный телефон</span>
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
          <form id="onlineWidgetForm" >
            <div class="trade-in__form__online__fields">
              <div class="select-field">
                <!-- <select @change="getModels($event)">
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
                </select> -->

                <v-select
                  :options="allMarks"
                  :get-option-label="(option) => option.label"
                  class="v-select-field"
                  @input="getModels"
                  v-model="selectedMark"
                  @search:focus="placeholderControl('mark')"
                  @search:blur="placeholderControl('mark')"
                >
                  <template #option="{ label }">
                    <span class="v-select-field__bold-text">
                      {{ label }}
                    </span>
                  </template>
                </v-select>

                <span
                  class="select-field__placeholder"
                  :class="[selectedMark.label !== '' || isMarkActive ? 'active' : false]"
                >
                  Марка автомобиля
                </span>

              </div>

              <div class="select-field">
                <v-select
                  :options="allModels"
                  :get-option-label="(option) => option.label"
                  class="v-select-field"
                  @input="getModifications"
                  v-model="selectedModel"
                  @search:focus="placeholderControl('model')"
                  @search:blur="placeholderControl('model')"
                >
                  <template #option="{ label }">
                    <span class="v-select-field__bold-text">
                      {{ label }}
                    </span>
                  </template>
                </v-select>

                <span
                  class="select-field__placeholder"
                  :class="[selectedModel.label !== '' || isModelActive ? 'active' : false]"
                >
                  Модель автомобиля
                </span>
<!--
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
                -->
              </div>

              <div class="select-field">

                <v-select
                    :options="allModifications"
                    :get-option-label="(option) => option.label"
                    class="v-select-field"
                    @input="getYears"
                    v-model="selectedModification"
                    :searchable="false"
                  >
                  <template #option="{ label }">
                    <span class="v-select-field__bold-text">
                      {{ label }}
                    </span>
                  </template>
                </v-select>

                <span
                  class="select-field__placeholder"
                  :class="[selectedModification.label !== '' ? 'active' : false]"
                >
                  Модификация автомобиля
                </span>


                <!--<select @change="getYears" v-model="values.modification">
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
                </select>-->
              </div>

              <div class="select-field">
                <v-select
                  :options="years"
                  :get-option-label="(option) => option.label"
                  class="v-select-field"
                  v-model="selectedYear"
                  :searchable="false"
                >
                  <template #option="{ label }">
                    <span class="v-select-field__bold-text">
                      {{ label }}
                    </span>
                  </template>
                </v-select>

                <span
                  class="select-field__placeholder"
                  :class="[selectedYear.label !== '' ? 'active' : false]"
                >
                  Год выпуска
                </span>

               <!-- <select  placeholder="Модель автомобиля" @change="setYear($event)">
                  <option value="" disabled selected></option>
                  <option
                    v-for="year in years"
                    :key="years.indexOf(year)"
                    :value="year.value"
                  >
                    {{ year.value }}
                  </option>
                </select> -->
              </div>

              <div class="select-field">

                <v-select
                  :options="mileages"
                  :get-option-label="(option) => option.label"
                  class="v-select-field"
                  v-model="selectedMileage"
                  :searchable="false"
                >
                  <template #option="{ label }">
                    <span class="v-select-field__bold-text">
                      {{ label }}
                    </span>
                  </template>
                </v-select>

                <span
                  class="select-field__placeholder"
                  :class="[selectedMileage.label !== '' ? 'active' : false]"
                >
                  Пробег
                </span>

               <!-- <select  placeholder="Модель автомобиля" v-model="selectedMileage">
                  <option value="" disabled selected></option>
                  <option
                    v-for="mileage in mileages"
                    :key="mileages.indexOf(mileage)"
                    :value="mileage.value"
                  >
                    {{ mileage.label }}
                  </option>
                </select> -->
              </div>

              <div class="select-field">

                <v-select
                  :options="transmissions"
                  :get-option-label="(option) => option.label"
                  class="v-select-field"
                  v-model="selectedTransmission"
                  :searchable="false"
                >
                  <template #option="{ label }">
                    <span class="v-select-field__bold-text">
                      {{ label }}
                    </span>
                  </template>
                </v-select>

                <span
                  class="select-field__placeholder"
                  :class="[selectedTransmission.label !== '' ? 'active' : false]"
                >
                  Коробка передач
                </span>

               <!-- <select v-model="selectedTransmission">
                  <option value="" disabled selected></option>
                  <option
                    v-for="transmission in transmissions"
                    :key="transmissions.indexOf(transmission)"
                    :value="transmission"
                  >
                    {{ transmission }}
                  </option>
                </select> -->
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
      :mileage="selectedMileage.label"
      :modification="selectedModification.label"
      :transmission="selectedTransmission.label"
      :year="selectedYear.label"
      :priceFrom="pricesRange.from"
      :priceTo="pricesRange.to"
      :comment="'Интересуется: ' + $store.state.car.model_full + '.' +
                'АВТОМОБИЛЬ КЛИЕНТА: ' +
                'марка: ' + selectedMark.label + ', ' +
                'модель: ' + selectedModel.label + ', ' +
                'модификация: ' + selectedModification.label + ' , ' +
                'год: ' + selectedYear.label + ', ' +
                'пробег: ' + selectedMileage.label + ' км., ' +
                'коробка передач: ' + selectedTransmission.label + ',' +
                'предварительная стоимость: ' + pricesRange.from + ' - ' + pricesRange.to + ' руб.'"
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
      allMarks: [],
      allModels: [],
      selectedMark: {
        label: '',
      },
      selectedModel: {
        label: '',
      },
      selectedModification: {
        label: '',
      },
      allModifications: [],
      selectedMileage: {
        label: ''
      },
      years: [],
      selectedYear: {
        label: ''
      },
      selectedTransmission: {
        label: ''
      },
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
        {
          label: 'Автоматическая'
        },

        {
          label: 'Роботизированная'
        },

        {
          label:  'Механическая'
        },

        {
          label: 'Вариатор'
        }
      ],
      submitButtonText: 'Рассчитать',

      pricesRange: {
        from: '',
        to: '',
      },

      isModelActive: false,
      isMarkActive: false,

      name: '',
      phone: '',
      form_id: "models__test-drive_",
      form_title: "Оцените автомобиль в салоне",
      comment: '',
      form_type: 1,
      goal: "offline",
    }
  },

  methods: {
    send: function(event) {
      event.preventDefault();
      this.isLoading = true;

      let formData = {
        phone: this.clearMask(this.phone),
        name: this.name,
        city: this.$store.state.city.value,
        url: this.url,
        caption: this.form_title,
        form_id: this.form_id,
        comment: this.comment,
        form_type: this.form_type,
        utm: this.utm
      };

      this.$axios({
        method: "post",
        url: process.env.apiUrl + "/api/send_contact_form",
        data: formData
      })
        .then(response => {
          this.clearInput();
          this.success = true;
          this.isLoading = false;
          this.status = true;
          //console.log(window);
          try {
            this.sendGoals(this.goal);
          } catch (err) {
            console.log(err);
          }
          return {};
        })
        .catch(error => {
          this.error = true;
          this.clearInput();
          return {};
        });
    },
    clearInput: function() {
      this.phone = null;
      this.name = null;
      this.comment = null;
      return {};
    },
    clearMask: function(value) {
      return value.replace(/\D/g, "");
    },
    sendGoals: function(goal) {
      if (goal) {
        let ym_ids = this.getCountersIds();
        let goalArr = goal.match(/^(.+?):(.+?)$/);
        let target_goal = goalArr === null ? goal : goalArr[2];

        ym_ids.forEach(function(item) {
          window["yaCounter" + item].reachGoal(target_goal);
        });
      }
      return {};
    },

    getCountersIds: function() {
      var id_list = [];

      window.ym.a.forEach(function(item) {
        id_list.push(item[0]);
      });
      return id_list;
    },

/*    attachHandler: function() {
      function attachHandler(el, evtname, fn) {
        if (el.addEventListener) {
          el.addEventListener(evtname, fn.bind(el), false);
        } else if (el.attachEvent) {
          el.attachEvent("on" + evtname, fn.bind(el));
        }
      }

      attachHandler(window, "load", () => {
        console.log(this.form_id + "_input_phone")
        var ele = document.querySelector(
          "input[id=" + this.form_id + "_input_phone]"
        );
        attachHandler(ele, "invalid", function() {
          this.setCustomValidity("Please enter at least 5 characters.");
          this.setCustomValidity("");
        });
      });
      return {};
    },*/

    decodeCookie(obj) {
      return JSON.parse(decodeURIComponent(escape(atob(obj))));
    },

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

    getModels(data) {
      axios.get(process.env.apiUrl + '/api/get_brand_models', {
        params: {
          model_id: data.id,
        }
      })
        .then((response) => {
          this.allModels = response.data.models;
        })
        .catch((error) => {
          console.log(error);
        })
    },

    getModifications: function(data) {
      axios.get(process.env.apiUrl + '/api/get_complectations/' + this.selectedMark.code.toString() + '/' + data.code.toString(),
        {})
        .then((response) => {
          this.allModifications = response.data.modifications;
        });
    },

    getYears: function(data) {
      var currentYear = new Date().getFullYear(), years = [];
      var startYear = 1980;
      while (currentYear >= startYear) {
        years.push({label: currentYear, value: currentYear});
        currentYear--;
      }

      this.years = years;
    },



    getResult: function() {
      const data = JSON.stringify({
        tech_param_id: this.selectedModification.tech_param_id,
        km_age: this.selectedMileage.value,
        year: this.selectedYear.value
      });

      axios.post(process.env.apiUrl + '/api/get_estimation/', data)
        .then((response) => {
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

    placeholderControl(placeholder) {
      switch (placeholder) {
        case "mark":
          this.isMarkActive = !this.isMarkActive;
          break;
        case "model":
          this.isModelActive = !this.isModelActive;
          break;
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
    if (this.$cookies.get("bp_uid") !== undefined) {
      this.utm = this.decodeCookie(this.$cookies.get("bp_uid"));
    }
  },
/*  beforeMount() {
    this.attachHandler();
  },*/

  async fetch() {
    const brands = await fetch(
      process.env.apiUrl + `/api/get_cars_brands`
    ).then(res => res.json())

    this.allMarks = brands
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
      background-size: cover;
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
        transform: unset;
        top: 15px;
        left: 19px;
      }
    }

    select {
      option {
        color: black;
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
      transform: unset;
      top: 15px;
      left: 19px;
    }
  }

  .v-select {
    height: 70px;
    border-radius: 5px;
    width: 100%;
    border: none;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding-top: 22px;
    padding-left: 15px;
    font-size: 24px;
    font-weight: 500;
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
    //height: 100vh !important;
    overflow-y: auto;

    @media (min-width: 1024px) {
      max-width: 970px;
    }
  }

  .v-select-field .vs__dropdown-toggle {
    height: 100%;
  }

</style>


