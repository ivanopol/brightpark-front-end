<template>
<section class="trade-in">
  <div class="container trade-in__container">

    <div :class="'trade-in__wrapper ' + backgroundClassPrimary">
      <div class="trade-in__head">

        <picture>
          <source :srcset="path.desktop" media="(min-width: 1000px)">
          <img :src="path.mobile" :alt="path.title">
        </picture>

        <h2 class="trade-in__head__title">
          Получите выгоду по&nbsp;Трейд-ин
        </h2>

        <p class="trade-in__head__desc">
          Сдайте свой автомобиль и получите первый взнос на покупку новой LADA!
        </p>
      </div>
      <advantages-list-mini
        class="trade-in__advantages"
        :tick-color="'#fff'"
        :advantages="['Выгода при обмене', 'Юридическая чистота сделки', 'Справедливая оценка автомобиля']"
      />
      <div class="trade-in__form color-svg-traid-in">
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
              :buttonColor="backgroundClassPrimary"
              :class="{ preloader: isLoading }"
              v-bind:disabled="isButtonDisabled"
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
              <div class="input-field">
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

              <div class="input-field">
                <input type="text" name="city" v-model="city" readonly>
                <span class="input-field__placeholder" :class="[city !== '' ? 'active' : false]">Город</span>
              </div>


              <div class="select-field">
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

              <div class="select-field" :class="allModels.length === 0 ? 'disabled' : false">
                <v-select
                  :options="allModels"
                  :get-option-label="(option) => option.label"
                  class="v-select-field"
                  @input="getModifications"
                  v-model="selectedModel"
                  @search:focus="placeholderControl('model')"
                  @search:blur="placeholderControl('model')"
                  :disabled="allModels.length === 0 ? true : false"
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
              </div>

              <div class="select-field" :class="allModifications.length === 0 ? 'disabled' : false">

                <v-select
                    :options="allModifications"
                    :get-option-label="(option) => option.label"
                    class="v-select-field"
                    @input="getYears"
                    v-model="selectedModification"
                    :searchable="false"
                    :disabled="allModifications.length === 0 ? true : false"
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
                  Поколения автомобиля
                </span>
              </div>

              <div class="select-field" :class="years.length === 0 ? 'disabled' : false">
                <v-select
                  :options="years"
                  :get-option-label="(option) => option.label"
                  @input="getMileages"
                  class="v-select-field"
                  v-model="selectedYear"
                  :searchable="false"
                  :disabled="years.length === 0 ? true : false"
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
              </div>

              <div class="select-field" :class="selectedYear.label === '' ? 'disabled' : false">

                <input
                  type="text"
                  class="v-select-field v-select"
                  v-model="mileage"
                  @keypress="digitsValidation($event)"
                  :disabled="selectedYear.label === '' ? true: false"
                >

                <span
                  class="select-field__placeholder"
                  :class="[selectedMileage !== '' ? 'active' : false]"
                >
                  Пробег (тыс. км)
                </span>
              </div>

              <div class="select-field" :class="selectedMileage === '' ? 'disabled' : false">

                <v-select
                  :options="transmissions"
                  :get-option-label="(option) => option.label"
                  class="v-select-field"
                  v-model="selectedTransmission"
                  :searchable="false"
                  :disabled="selectedMileage === '' ? true : false"
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
              </div>
            </div>

            <ButtonNew
              :buttonColor="backgroundClassPrimary"
              :button-text="submitButtonText"
              :button-color="'#514EA1'"
              class="trade-in__form__offline__submit"
              goal="model_traid-in_online-button"
              @click.prevent.native="getResult"
              :class="{ preloader: isLoading }"
              v-bind:disabled="isButtonDisabled"
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
      @result="openResultModal"
      :buttonColor="backgroundClassPrimary"
      :bgColor="backgroundClassSecondary"
      :mark="selectedMark.label"
      :model="selectedModel.label"
      :mileage="selectedMileage"
      :modification="selectedModification.label"
      :transmission="selectedTransmission.label"
      :year="selectedYear.label"
      :priceGood="pricesRange.good"
      :priceExcellent="pricesRange.fine"
      :pricePerfect="pricesRange.ideal"
      goal="model_traid-in_modal-request"
      :form_type="form_type"
      :comment="'Интересуется: ' + $store.state.car.model_full + '. ' +
                'w--АВТОМОБИЛЬ КЛИЕНТА: ' +
                'w--марка: ' + selectedMark.label + ', ' +
                'w--модель: ' + selectedModel.label + ', ' +
                'w--модификация: ' + selectedModification.label + ' , ' +
                'w--год: ' + selectedYear.label + ', ' +
                'w--пробег: ' + selectedMileage + ' км., ' +
                'w--коробка передач: ' + selectedTransmission.label + ',' +
                'w--оценка по состоянию: ' + rateCar + '; ' +
                'w--КОД: ' + getCode "
    />
  </modal>
</section>
</template>

<script>
import axios from "axios";
import format_price from "@/mixins/format_price";


export default {
  mixins: [format_price],
  name: "TradeInFormNew",
  props: {
    model: String,
    type: String,
  },
  data: function () {
    return {
      isLoading: false,
      status: true,
      backgroundClassPrimary: 'color-primary-background',
      backgroundClassSecondary: 'color-secondary-background',
      isProduction: process.env.NODE_ENV === 'production',
      path: {},
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
      selectedMileage: '',
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
      transmissions: [],
      submitButtonText: 'Рассчитать',

      pricesRange: {
        good: '',
        fine: '',
        ideal: '',
      },

      isModelActive: false,
      isMarkActive: false,

      name: '',
      phone: '',
      city: '',
      form_id: "models__traid-in_",
      form_title: "Оцените автомобиль в салоне",
      comment: '',
      form_type: 1,
      goal: "model_traid-in_offline-request",
    }
  },

  methods: {
    openResultModal: function(state) {
      this.$modal.show('thanks-modal');
    },
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
      if (goal && this.isProduction) {
        let ym_ids = this.getCountersIds()
        let goalArr = goal.match(/^(.+?):(.+?)$/)
        let target_goal = goalArr === null ? goal : goalArr[2]

        ym_ids.forEach(function(item) {
          window["yaCounter" + item].reachGoal(target_goal)
        });
      }
      return {};
    },

    getCountersIds: function() {
      var id_list = [];

      window.ym.a.forEach(function(item) {
        id_list.push(item[0])
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
        this.clearData(1)
        this.allModels = this.arrayFormat(response.data.models)
      })
    },

    getModifications: function(data) {
      axios.get(process.env.crmUrl + '/ajax/getCarsGenerationCORS',
        {
          params: {
            model_id: data.id
          }
        })
        .then((response) => {
          this.clearData(2)
          this.allModifications = this.arrayFormat(response.data.generations, 'title', ['year_from', 'year_to']);
        });
    },

    getMileages: function() {
      this.clearData(4)
    },

    clearData: function(step) {
      switch(step) {
        case 1:
          this.allModels = []
          this.selectedModel.label = ''
        case 2:
          this.allModifications = []
          this.selectedModification.label = ''
        case 3:
          this.years = []
          this.selectedYear.label = ''
        case 4:
          this.mileage = ''
          this.selectedMileage = ''
      }
    },

    getYears: function() {
      this.clearData(3)
      let years = []
      let currentYear = this.selectedModification.year_to === 'н.в.' ?  new Date().getFullYear() : this.selectedModification.year_to

      for (let i=Number(currentYear); i >= Number(this.selectedModification.year_from); i--) {
        years.push({label: i, value: i});
      }

      this.years = years;


      axios.get(process.env.crmUrl + '/ajax/getCarsModificationCORS',
       {
          params: {
            id: this.selectedModification.id
          }
       }
       ).then((response) => {
         let carTransitions = []
         response.data.modifications.forEach(function (el){
           carTransitions.push(el.transmission)
         })
         carTransitions = carTransitions.filter((item, index) => carTransitions.indexOf(item) === index)

          this.transmissions = []
          carTransitions.forEach((el) => {
            switch(el) {
              case 'Автомат':
                this.transmissions.push({ label: 'Автоматическая', value: 'Автомат' })
                break;
              case 'Робот':
                this.transmissions.push({ label: 'Роботизированная', value: 'Робот' })
                break;
              case 'Механика':
                this.transmissions.push({ label: 'Механическая', value: 'Механика' })
                break;
              case 'Вариатор':
                this.transmissions.push({ label: 'Вариатор', value: 'Вариатор' })
                break;
            }
          })
       })
    },

    getResult: function() {
      if (!this.selectedMark.label ||
          !this.selectedModel.label ||
          !this.selectedModification.label ||
          !this.selectedYear.label ||
          !this.selectedTransmission.value ||
          !this.selectedMileage ||
          !this.phone &&
          this.phone.length < 18
      ) {
        return false;
      }

      this.isLoading = true

      let cityCode = 0
      switch(this.$store.state.city.value) {
        case 'perm':
          cityCode = 12
          break;
        case 'moscow':
          cityCode = 29
          break;
        case 'magnitogorsk':
          cityCode = 2
          break;
        case 'rostov-na-donu':
          cityCode = 9
          break;
        case 'yekaterinburg':
          cityCode = 4
          break;
        case 'volgograd':
          cityCode = 39
          break;
      }

      let milliage = this.selectedMileage.replace(/\s/gi, '')
      milliage =  milliage.replace(/[а-я]/gi, '')

      const data = JSON.stringify({
        mark: this.selectedMark.label,
        markId: 0,
        model: this.selectedModel.label,
        generation: this.selectedModification.label,
        year: this.selectedYear.label,
        drive: "Передний",
        transmission: this.selectedTransmission.value,
        equipment: "Medium Well",
        modification: "",
        expense: 0,
        price: 0,
        range: 0,
        region: cityCode,
        mileage: milliage,
        adv_url: "",
      })

      let comment = 'Интересуется: ' + this.$store.state.car.model_full + '. ' +
        'w--АВТОМОБИЛЬ КЛИЕНТА: ' +
        'w--марка: ' + this.selectedMark.label + ', ' +
        'w--модель: ' + this.selectedModel.label + ', ' +
        'w--модификация: ' + this.selectedModification.label + ' , ' +
        'w--год: ' + this.selectedYear.label + ', ' +
        'w--пробег: ' + this.selectedMileage + ' км., ' +
        'w--коробка передач: ' + this.selectedTransmission.label + ''

      let formData = {
        phone: this.clearMask(this.phone),
        name: this.name,
        city: this.$store.state.city.value,
        url: this.url,
        caption: 'Трейд-ин',
        form_id: 'models__traid-in__calculate',
        comment: comment,
        form_type: 1,
        utm: this.utm
      };

      axios.post(
        process.env.apiUrl + '/api/send_contact_form',
        formData
      ).then((response) => {}).catch(error => {
        this.error = true;
        this.clearInput();
        return {};
      });

      axios.post(
        process.env.crmUrl + '/ajax/calculateService',
        data
      ).then((response) => {
        this.pricesRange.good = this.$options.filters.formatPrice(response.data['Цены'][2]['R2D2Продажа'])
        this.pricesRange.fine = this.$options.filters.formatPrice(response.data['Цены'][1]['R2D2Продажа'])
        this.pricesRange.ideal = this.$options.filters.formatPrice(response.data['Цены'][0]['R2D2Продажа'])

        this.isLoading = false
        this.status = true
        this.show('form-evaluate')
        this.sendGoals('model_traid-in_online-button')
      })

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
    },

    digitsValidation(evt) {
      this.clearData(5)
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
        evt.preventDefault();
      } else {
        return true;
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


  computed: {
    isButtonDisabled: function() {
      if (this.isLoading) {
        return true;
      } else {
        return !this.status;
      }
    },
    getCode() {
      return Math.random().toString(36).slice(-6);
    },
    rateCar() {
      if (this.pricesRange.good === '1 000' && this.pricesRange.fine === '1 000' && this.pricesRange.ideal === '1 000') {
        return 'Оценка не произведена'
      }
      return this.pricesRange.ideal === this.pricesRange.good && this.pricesRange.ideal === this.pricesRange.fine ? this.pricesRange.good : 'идеальное - ' + this.pricesRange.ideal + 'руб., отличное - ' + this.pricesRange.fine + 'руб., хорошее - ' + this.pricesRange.good + 'руб.'
    },
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
    },
    mileage: {
      get: function () {
        this.selectedMileage = this.selectedMileage.replace(/\s/gi, '')
        this.selectedMileage = this.selectedMileage.replace(/[а-я]/gi, '')
        if (this.selectedMileage.length >= 9) {
          this.selectedMileage = this.selectedMileage.substr(0,8)
        }
          return this.$options.filters.formatPrice(this.selectedMileage) ? this.$options.filters.formatPrice(this.selectedMileage) + ' км' : ''
      },
      set: function(newValue) {
        newValue = newValue.replace(/\s/gi, '')
        newValue = newValue.replace(/[а-я]/gi, '')

        if (newValue.length === this.selectedMileage.length) {
          newValue = newValue.slice(0,-1)
        }
        this.selectedMileage = newValue
      }
    },
    url: function () {
      return {
        href: window.location.href,
        search: window.location.search
      };
    },
  },

  mounted() {
    if (this.$cookies.get("bp_uid") !== undefined) {
      this.utm = this.decodeCookie(this.$cookies.get("bp_uid"));
    }

    this.city = this.$store.state.city.label;
  },
  created() {
    let model = 'xray'
    let type = 'xray'
    if(this.$route.params.models) {
      model = this.$route.params.models
      type = this.$route.params.model.replace("-", "_")
    }

    if (model === 'vesta' ||
        model === 'xray' ||
        model === 'largus' ||
        model === 'niva'
    ) {
      this.backgroundClassPrimary = 'color-secondary-background'
      this.backgroundClassSecondary = 'color-primary-background'
    }

    this.path = {
      title: this.model + ' ' + this.type,
      desktop: '/images/trade-in-form/' + model + '/' + type + '/photo_desktop.png',
      mobile: '/images/trade-in-form/' + model + '/' + type + '/photo_mobile.png',
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

<style scoped lang="scss">
@import "./assets/scss/_colors.scss";

  .trade-in__wrapper {
    padding: 17px 0 0;
    border-radius: 10px;
    position: relative;
    margin: 30px 15px;

    @media (min-width: 1000px) {
      padding: 0;
    }
  }

  .trade-in__container {
    position: relative;
    z-index: 1;
    overflow: unset;
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
        top: 0px;
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
    line-height: 26px;
    //font-family: "Factor A";

    @media (min-width: 1000px) {
      text-align: left;
      max-width: 370px;
    }
  }

  .trade-in__advantages {
    color: white;
    font-size: 15px;
    max-width: 350px;
    width: 80%;
    margin: 50px auto 30px;
    line-height: 20px;

    @media (min-width: 1367px) {
      position: absolute;
      top: -16px;
      right: 33px;
      padding: 45px 45px 40px 43px;
      font-size: 18px;
      max-width: 500px;
      background-image: url("../../static/images/credit-section/advantages-wrap.svg");
      background-size: 100% 100%;
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
/*    background: url("~static/images/trade-in-form/bg-layer-mob.svg") no-repeat;
    background-size: cover;*/
    padding: 50px 0 30px;

    @media (min-width: 1000px) {
/*      background: url("~static/images/trade-in-form/bg-layer.svg") no-repeat;
      background-size: cover;*/
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
    max-width: 276px;

    @media (min-width: 1000px) {
      max-width: 340px;
    }

    &:hover {
      box-shadow: 0 3px 5px rgba(255, 255, 255, .3);
    }
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
      grid-template-columns: repeat(2, 1fr);
      padding: 0 20px;
      max-width: 1090px;
      margin: auto;
      grid-gap: 20px 30px;

      input, select {
        width: 100%;
        margin-bottom: 0;
        max-width: unset;
      }
    }

    @media (min-width: 1367px) {
      grid-template-columns: repeat(3, 1fr);
      padding: 0;
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

  .select-field.disabled {
    opacity: .7;
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

  input.v-select {
    font-size: 24px;

    &:focus + .select-field__placeholder{
      transition: .2s ease;
      font-size: 12px;
      transform: unset;
      top: 15px;
      left: 19px;
    }
  }


</style>

<style lang="scss">
  .vs__selected-options {
    white-space: nowrap;
  }
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

  .v-select-field {
    &.vs--disabled .vs__clear,
    &.vs--disabled .vs__dropdown-toggle,
    &.vs--disabled .vs__open-indicator,
    &.vs--disabled .vs__search,
    &.vs--disabled .vs__selected {
      background-color: transparent;
    }

    &.vs--disabled {
      background: rgba(222, 215, 215, 0.2);

    }
  }
</style>


<style lang="scss">
.range-field__wrap {

  .vue-slider {
    background: none;

    .vue-slider-rail {
      background: none;
    }

    .vue-slider-process {
      background: white;
    }

    &:hover {
      .vue-slider-rail {
        background: none;
      }

      .vue-slider-process {
        background: white;
      }
    }

    .vue-slider-dot-handle {
      border: none;
      top: 6px;
      left: 3px;
      width: 12px;
      height: 12px;
      background: white;
      box-shadow: none;

      &:after {
        display: none;
      }
    }

    .vue-slider-mark-label {
      color: white;
      font-family: "Factor A";
      margin: 7px 0 0;
    }

    .vue-slider-mark {
      &:first-child {
        left: 1% !important;
      }

      &:last-child {
        left: 99% !important;
      }
    }
  }
}

.v-select-field {
  .vs__dropdown-toggle {
    border: none;
  }

  .vs__selected {
    padding: 5px 0 0;
    color: white;
    font-family: 'Factor A';
  }

  .vs__dropdown-menu {
    font-family: "Factor A";
    font-size: 14px;
    padding-top: 0;

    li {
      border-bottom: 1px solid rgba(0, 0, 0, .1);
      padding: 10px;
    }
  }

  .vs__search {
    color: white;
    font-family: "Factor A";
    font-weight: 500;
    padding: 5px 0 0;
    margin: 4px 2px 0;
    font-size: 24px;
  }
}

.v-select-field__bold-text {
  font-weight: 700;
  font-size: 1.1em;
  color: #514EA1;
}

.v-select-field__more {
  font-weight: 400;
  font-size: 14px;
}

</style>
