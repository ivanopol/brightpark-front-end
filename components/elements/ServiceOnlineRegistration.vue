<template>
  <div :class="'service-online-registration ' + theme">
    <div class="service-online-registration__wrapper">
      <div class="service-online-registration__block">
        <img src="~static/images/serviceman.png"
             class="service-online-registration__serviceman"
             alt="Онлайн регистрация на сервисное обслуживание">
        <div class="service-online-registration__content">
          <div class="service-online-registration__header">
            <p class="service-online-registration__title">Онлайн запись на сервис</p>
            <p class="service-online-registration__desc">Оставьте заявку на&nbsp;ремонт и&nbsp;обслуживание автомобиля в&nbsp;3&nbsp;шага&nbsp;&mdash; это займет не&nbsp;более 1&nbsp;минуты</p>
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
                      mask="F###FF###"
                      :tokens="carNumberTokens"
                      :oninput="transformUpper()"
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
                  <div class="service-online-registration__row-single">
                    <v-select
                      required
                      :options="allWorks"
                      class="v-select-field"
                      v-model="form.workType"
                      :searchable="false"
                      :multiple="false"
                      placeholder="Вид работ"
                    >
                    </v-select>
                  </div>
                  <div class="service-online-registration__row-single">
                    <v-select
                      required
                      :options="allCities"
                      class="v-select-field"
                      v-model="form.city"
                      :searchable="false"
                      :multiple="false"
                      placeholder="Город"
                    >
                    </v-select>
                  </div>
                  <div class="service-online-registration__row-single">
                    <v-select
                      required
                      :options="allServices"
                      class="v-select-field"
                      v-model="form.service"
                      :searchable="false"
                      :multiple="false"
                      placeholder="Сервис"
                    >
                    </v-select>
                  </div>
                  <div class="service-online-registration__row-double">
                    <button class="service-online-registration__button-next start-2"
                            @click.prevent="next(3)"
                    >Далее</button>
                  </div>
                </div>
              </div>

              <div class="step-3" v-else-if="currentStep === 3">
                <div class="step__title">
                  <p>Выбор даты и времени</p>
                </div>
                <div class="step-3__fields">
                  <div class="service-online-registration__row-single">
                    <v-date-picker
                      :popover="{ visibility: 'click' }"
                      :min-date='new Date()'
                      v-model="form.date"
                      :input-debounce="500"
                      :locale="calendarLocale"
                      class="service-online-registration__form-date"
                    >
                      <template v-slot="{ inputValue, inputEvents }">
                        <input
                          class="service-online-registration__form-input"
                          :value="inputValue"
                          v-on="inputEvents"
                          placeholder="Дата и время"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"
                          />
                        </svg>
                      </template>
                    </v-date-picker>
                  </div>
                  <div class="service-online-registration__row-single">
                    <textarea class="service-online-registration__form-input"
                              placeholder="Комментарий"
                              v-model="form.comment">
                    </textarea>
                  </div>
                  <div class="service-online-registration__row-double">
                    <button class="service-online-registration__button-next start-2"
                    >Записаться</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
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
      calendarLocale: 'ru-RU',
      allMarks: [],
      allModels: [],
      allWorks: [
        'ТО',
        'Диагностика',
        'Замена жидкостей',
        'Ремонт',
        'Шиномонтаж',
        'Кузовные работы',
        'Химчистка, полировка и т.д.',
        'Другое',
      ],
      allCities: this.$store.state.cities,
      allServices: [

      ],
      form: {
        name: '',
        phone: '',
        mark: '',
        model: '',
        gosnumber: '',
        workType: '',
        city: '',
        service: '',
        date: '',
        comment: ''
      },
      carNumberTokens: {
        'F': {
          pattern: /[авекмнорстухАВЕКМНОРСТУХ]/
        },
        '#': { pattern: /\d/ },
      }
    }
  },
  methods: {

    transformUpper: function () {
      this.form.gosnumber = this.form.gosnumber.toUpperCase()
    },

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
  mounted() {
  }
}
</script>

<style lang="scss">
.service-online-registration {
  .start-2 {
    grid-column-start:2;

    @media only screen and (max-width: 580px) {
      grid-column-start:1;
    }
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
      right: 0;
      bottom: 0;
      width: 450px;
      z-index: 1;
      pointer-events: none;

      @media (max-width: 1100px) {
        width: 400px;
      }
      @media (max-width: 900px) {
        display: none;
      }
    }
  }

  &__block {
    width: 80%;
    margin: 0 auto;
    position: relative;
    padding: 40px 0;


    @media (min-width: 1101px) and (max-width: 1366px) {
      width: 85%;
    }

    @media (max-width: 1100px) {
      width: 90%;
    }
  }

  &__content {
    width: 50%;
    box-sizing: border-box;

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  &__body {
    form > * {
      width: 100%;
    }
  }

  &__row-single {
    display: grid;
    grid-template-columns: 1fr;
  }

  &__row-double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

    @media only screen and (max-width: 580px) {
      grid-template-columns: 1fr;
      column-gap: unset;
    }
  }

  .v-select-field,
  &__form-input {
    width: 100%;
    max-width: unset;
    background-color: unset;
    height: 40px;
  }

  textarea.service-online-registration__form-input {
    resize: vertical;
    height: auto;
    max-height: 100px;
  }

  &__form-date {
    position: relative;
    margin-bottom: 14px;

    input {
      padding-left: 35px;
      margin-bottom: 0;
    }

    svg {
      position: absolute;
      left: 10px;
      width: 15px;
      height: 15px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }

  &__header {
    text-align: left;
    margin-bottom: 30px;
  }

  &__title {
    font-size: 30px;
    font-family: 'Bright Park Display',serif;
    margin-bottom: 15px;

    @media only screen and (max-width: 580px) {
      font-size: 26px;
      margin-bottom: 20px;
    }
  }

  &__desc {
    font-size: 14px;
    line-height: 1.4;
    font-family: 'Factor A',serif;
    margin-bottom: 30px;
  }

  .step__title {
    font-family: 'Bright Park Display',serif;
    margin-bottom: 20px;
    font-size: 18px;
  }


  &__step-list {
    font-family: 'Factor A',serif;
    font-size: 32px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-around;

    &:before {
      content: '';
      position: absolute;
      width: 70%;
      margin: 0 auto;
      height: 2px;
      top: 50%;
      transform: translate(0, -50%);
    }

    @media only screen and (min-width: 581px) {
      width: 50%;
    }

    li {
      margin-right: 40px;
      border: 2px solid;
      padding: 10px 15px;
      line-height: 0.95em;
      border-radius: 15px;
      position: relative;
      box-sizing: border-box;

      @media only screen and (max-width: 580px) {
        margin-right: unset;
      }

      span {
        display: block;
        margin-bottom: -8px;
      }

      &:last-child {
        margin-right: 0;

        &:after {
          display: none;
        }
      }
    }
  }

  .service-online-registration__button-next {
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    margin: 0 0 0 auto;
    transition: 0.2s;
    font-family: "Bright Park Display",serif;
    position: relative;

    &:hover {
      transition: 0.2s;
      opacity: 0.6;
    }

    @media only screen and (max-width: 580px) {
      max-width: unset;
      margin-top: 20px;
    }
  }

  .v-select-field {
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
      border: 8px solid transparent;
      transform: none;
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

      @media (max-width: 1100px) {
        display: none;
      }
    }

    .v-select-field,
    .service-online-registration__form-input {
      color: #fff;
      border: 1px solid #fff;

      .vs__selected {
        color: #fff;
      }

      .toggle {
        border-top: 8px solid #fff;
      }

      &::placeholder,
      input::placeholder {
        color: rgba(255, 255, 255, .7);
      }
    }

    .service-online-registration__form-date svg path {
      fill: rgb(255, 255, 255);
    }

    .vs--disabled {
      border: 1px solid rgba(255, 255, 255, .5);

      .toggle {
        border-top-color: rgba(255, 255, 255, .5);
      }

      input::placeholder {
        color: rgba(255, 255, 255, .3);
      }
    }


    .service-online-registration__button-next {
      color: #504ea0;
      background: #ffca0d;
    }

    .service-online-registration__step-list {
      &:before {
        background-color: #fff;
      }

      li {
        border-color: #fff;
        background-color: #504ea0;

        &.active {
          background-color: #FFCA0D;
          border-color: #FFCA0D;
        }
      }
    }
  }
}

.white {
  .service-online-registration__wrapper {
    background-color: #fff;
    color: #000;
    border-color: #000;

    .v-select-field,
    .service-online-registration__form-input {
      color: #000;
      border: 1px solid #000;

      .vs__selected {
        color: #000;
      }

      .toggle {
        border-top: 8px solid #000;
      }

      &::placeholder,
      input::placeholder {
        color: rgba(0, 0, 0, .7);
      }
    }

    .service-online-registration__form-date svg path {
      fill: rgb(0, 0, 0);
    }

    .vs--disabled {
      border: 1px solid rgba(0, 0, 0, .5);

      .toggle {
        border-top-color: rgba(0, 0, 0, .5);
      }

      input::placeholder {
        color: rgba(0, 0, 0, .3);
      }
    }


    .service-online-registration__button-next {
      color: #fff;
      background: #FD8355;
    }

    .service-online-registration__step-list {
      &:before {
        background-color: #000;
      }

      li {
        border-color: #000;
        background-color: #fff;
        color: #FD8355;

        &.active {
          background-color: #FD8355;
          border-color: #FD8355;
          color: #fff;
        }
      }
    }
  }
}

</style>
