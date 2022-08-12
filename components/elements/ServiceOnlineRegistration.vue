<template>
  <div :class="'service-online-registration ' + theme">
    <div class="service-online-registration__wrapper">
      <img src="~static/images/serviceman.png"
           class="service-online-registration__serviceman"
           alt="Онлайн регистрация на сервисное обслуживание">
      <div class="service-online-registration__content">
        <div class="service-online-registration__header">
          <p class="service-online-registration__title">Онлайн запись на сервис</p>
          <p class="service-online-registration__desc">Оставьте заявку на ремонт и обслуживание автомобиля в 3 шага - это займет не более 1 минуты</p>
          <ul class="service-online-registration__step-list">
            <li :class="{ active : step.active }" :key="step.number" v-for="step in steps">
              <span>{{ step.number }}</span>
            </li>
          </ul>
        </div>
        <div class="service-online-registration__body">
          <form>
            <div class="step-1" v-if="currentStep === 1">
              <div class="step__title">
                <p>Заполнение информации</p>
              </div>
              <div class="step-1__fields">
                <div class="service-online-registration__row-double">
                  <input type="text"
                         placeholder="Имя"
                         v-model="form.name"
                         class="service-online-registration__form-input"
                  />

                  <the-mask
                    pattern=".{18,}"
                    mask="+# (###)-###-##-##"
                    v-model="form.phone"
                    type="tel"
                    required="true"
                    placeholder="Телефон"
                    class="service-online-registration__form-input"
                  ></the-mask>
                </div>

                <div class="service-online-registration__row-double">
                  <v-select
                    required
                    :options="allMarks"
                    :get-option-label="(option) => option.label"
                    class="v-select-field"
                    @input="getModels"
                    v-model="form.mark"
                    :searchable="false"
                    :multiple="false"
                    placeholder="Марка"
                  >
                  </v-select>

                  <v-select
                    required
                    :options="allModels"
                    :get-option-label="(option) => option.label"
                    class="v-select-field"
                    v-model="form.model"
                    :searchable="false"
                    :multiple="false"
                    placeholder="Модель"
                    :disabled="allModels.length === 0"
                  >
                  </v-select>
                </div>
                <div class="service-online-registration__row-single">
                  <the-mask
                    pattern=".{18,}"
                    mask="F###FF##"
                    :tokens="carNumberTokens"
                    v-model="form.gosnumber"
                    type="text"
                    required="true"
                    placeholder="Гос. номер"
                    class="service-online-registration__form-input"
                  ></the-mask>
                </div>
                <div class="service-online-registration__row-double">
                  <button class="service-online-registration__button-next start-2"
                          @click.prevent="next(2)"
                  >Далее</button>
                </div>
              </div>
            </div>

            <div class="step-2" v-else-if="currentStep === 2">
              <div class="step__title">
                <p>Выбор услуги и сервиса</p>
              </div>
              <div class="step-2__fields">

              </div>
            </div>

            <div class="step-3" v-else-if="currentStep === 3">
              <div class="step__title">
                <p>Выбор даты и времени</p>
              </div>
              <div class="step-3__fields">

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ServiceOnlineRegistration",
  props: {
    theme: {
      default: 'purple',
      type: String
    }
  },
  data: function () {
    return {
      currentStep: 1,
      steps: [
        {
          number: 1,
          active: true
        },
        {
          number: 2,
          active: false
        },
        {
          number: 3,
          active: false
        },
      ],
      allMarks: [],
      allModels: [],
      form : {
        name : '',
        phone : '',
        mark: '',
        model: '',
        gosnumber : ''
      },
      carNumberTokens: {
        F: {
          pattern: /[авекмнорстухАВЕКМНОРСТУХ]/,
          transform: v => v.toLocaleUpperCase()
        },
        '#': {pattern: /\d/},
      }
    }
  },
  methods: {
    next: function (next) {
      this.checkFields()
      this.setStep(next)
      return {}
    },

    checkFields: function () {

    },

    setStep: function (step) {
      let number = step - 1
      this.clearSteps()
      this.steps[number].active = true
      this.currentStep = step
      return {}
    },

    clearSteps: function () {
      this.steps.forEach((el, index) => {
        el.active = false
      })
      return {}
    },

    getModels(data) {
      if (!data) {
        return false;
      }
      axios.get(
        process.env.crmUrl +`/ajax/getModelsCORS`, {
          params: {
            city: this.$store.state.city.value,
            mark_id: data.id
          }
        }
      ).then((response) => {
        this.clearData('model')
        this.allModels = this.arrayFormat(response.data.models)
      })
    },

    clearData: function(step) {
      switch(step) {
        case 'model':
          this.allModels = []
          this.form.model = ''
      }
    },

    arrayFormat(object, field = 'name', additional = []) {
      let newObject = []

      Object.keys(object).forEach(function (key){
        newObject[key] = {
          id: object[key].id,
          label: object[key][field],
          code: object[key][field]
        }
        if (additional) {
          additional.forEach(function (add_key){
            newObject[key][add_key] = object[key][add_key]
          })
        }
      });

      return newObject
    }
  },
  async fetch() {

    const myInit = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      }
    };

    let brands = await fetch(
      process.env.crmUrl + `/ajax/getMarksCORS?city=` + this.$store.state.city.value, myInit
    ).then(res => res.json())

    this.allMarks = this.arrayFormat(brands.models)
  },
}
</script>

<style lang="scss">
.service-online-registration {
  .start-2 {
    grid-column-start:2;
  }

  &__wrapper {
    width: 100%;
    margin: 0 auto;
    position: relative;

    @media only screen and (min-width: 900px) {
      & {
        max-width: 1440px;
      }
    }

    .service-online-registration__serviceman {
      position: absolute;
      right: 150px;
      bottom: 0;
      width: 390px;
      z-index: 1;
      pointer-events: none;

      @media (max-width: 1366px) {
        display: none;
      }
    }
  }

  &__content {
    width: 60%;
    padding: 40px 0 40px 100px;
    box-sizing: border-box;
    max-width: 650px;
  }

  &__body {
  }

  &__row-single {
    display: grid;
    grid-template-columns: 1fr;
  }

  &__row-double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  .v-select-field,
  &__form-input {
    width: 100%;
    max-width: unset;
    background-color: unset;
    height: 40px;
    /*      color: #fff;
          border-color: #fff;*/

    /*      &::placeholder {
            color: rgba(255, 255, 255, .7);
          }*/
  }

  &__header {
    text-align: left;
    margin-bottom: 30px;
  }

  &__title {
    font-size: 32px;
    font-family: 'Bright Park Display';
    margin-bottom: 15px;
  }

  &__desc {
    font-size: 16px;
    line-height: 1.4;
    font-family: 'Factor A';
    margin-bottom: 30px;
  }

  &__step-list {
    font-family: 'Factor A';
    font-size: 32px;
    display: flex;
    align-items: center;

    li {
      margin-right: 40px;
      border: 2px solid;
      padding: 10px 15px;
      line-height: 0.95em;
      border-radius: 15px;
      position: relative;
      box-sizing: border-box;

      span {
        display: block;
        margin-bottom: -8px;
      }

      &:after {
        content: '';
        position: absolute;
        width: 40px;
        height: 2px;
        right: -42px;
        background-color: #fff;
        top: 50%;
        transform: translate(0, -50%);
      }

      &:last-child {
        margin-right: 0;

        &:after {
          display: none;
        }
      }

      &.active {
        background-color: #FFCA0D;
        border-color: #FFCA0D;
      }
    }
  }

  .step__title {
    font-family: 'Bright Park Display';
    margin-bottom: 20px;
  }

  .v-select-field {
    border: 1px solid #E9E9E9;
    color: #393840;

    border-radius: 5px;
    height: 40px;
    width: 100%;
    font-size: 16px;
    position: relative;

    &.v-select {
      margin-bottom: 11px;
    }

    .vs__dropdown-toggle {
      height: 100%;
      border-color: #e9e9e9;
    }

    .vs__selected-options {
      padding: 4px 6px 0 0;
    }
    .vs__search,
    .vs__selected {
      line-height: 1;
      padding: 6px 10px;
      margin: 0;
    }

    .toggle {
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -3px;
      right: 18px;
      width: 10px;
      height: 10px;
      border: 8px solid transparent; border-top: 8px solid #fff;
      transform: none;
    }

    input {
      &::placeholder {
        color: rgba(255, 255, 255, .7);
      }
    }

    .vs__search {
      font-size: 16px;
      font-weight: normal;
      font-family: arial,serif;
    }

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
}

.purple {
  .service-online-registration__wrapper {
    background-color: #504ea0;
    color: #fff;
    border-color: #fff;

    &:before {
      content: '';
      background: url("../../static/images/element.svg") no-repeat 0 0;
      height: 130px;
      width: 58px;
      position: absolute;
      left: 0;
      top: 0;
    }

    .service-online-registration__button-next {
      border-radius: 5px;
      color: #504ea0;
      background: #ffca0d;
      width: 100%;
      font-size: 16px;
      margin: 0 0 0 auto;
      transition: 0.2s;
      font-family: "Bright Park Display";
      position: relative;

      &:hover {
        transition: 0.2s;
        opacity: 0.6;
      }
    }

    .service-online-registration__step-list {
      li {
        border-color: #fff;

        &:after {
          background-color: #fff;
        }

        &.active {
          background-color: #FFCA0D;
          border-color: #FFCA0D;
        }
      }
    }
  }
}


</style>
