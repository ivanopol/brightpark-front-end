<template>
  <section class="credit">
    <div class="container credit__container">
      <div class="credit__head">
        <div class="credit__inner">
          <img src="~static/images/credit-section/granta.png" alt="granta" class="credit__inner__car">

          <div class="credit__inner__text">
            <h2 class="credit__inner__title">
              Рассчитайте кредит на&nbsp;покупку LADA Granta
            </h2>

            <p class="credit__inner__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere massa nam facilisi sed vestibulum.
            </p>
          </div>

          <AdvantagesListMini
            :advantages="['12 банков-партнеров', 'Одобрение по кредиту 30 минут', 'Вероятность одобрения 96%']"
            :tick-color="'#fff'"
            class="credit__advantages"
          />
        </div>
      </div>

      <div class="credit__body">
        <div class="select-field">
          <p class="range-field__placeholder select-field__placeholder" :class="[equipment !== '' ? activePlaceholder : '']">
            Выберите комплектацию
          </p>

<!--          <select v-model="equipment" class="input-field">-->
<!--            <option value="519000">Standart</option>-->
<!--            <option value="569000">Comfort</option>-->
<!--          </select>-->

          <v-select
            :options="params"
            :get-option-label="(option) => option.price.toLocaleString('ru-RU') + ' ₽'"
            class="v-select-field"
            v-model="equipment"
          >
            <template #option="{ title, transmission, price, capacity }">
              <span class="v-select-field__bold-text">
                {{ price.toLocaleString('ru-RU') }}&nbsp;₽
              </span>
              <br />
              {{ title }} / {{ transmission }} / {{ capacity }}
            </template>
          </v-select>
        </div>

        <div class="range-field">
          <div class="range-field__input">
            <p class="range-field__placeholder" :class="[firstPaymentPercent !== '' ? activePlaceholder : '']">
              Первоначальный взнос
            </p>

            <input
              type="text"
              name="firstPayment"
              class="input-field"
              min="0"
              :max="Math.round(carPrice /2)"
              @:keyup="inputChangePayment($event)"
              v-model="firstPayment">
          </div>

          <div class="range-field__wrap">
            <vue-slider v-model="firstPaymentPercent"
                        ref="firstPayment"
                        @change="changeFirstPayment($event)"
                        :height="6"
                        :interval="1"
                        :dotSize="25"
                        :drag-on-click="true"
                        :min="sliderOne.min"
                        :max="sliderOne.max"
                        :tooltip-formatter="formatter1" />
          </div>

          <span class="range-field__result">
            {{ firstPaymentPercent }}&nbsp;%
          </span>
        </div>

        <div class="range-field">
          <div class="range-field__input">
            <p class="range-field__placeholder" :class="[period !== '' ? activePlaceholder : '']">
              Срок погашения в месяцах
            </p>

            <input
              type="text"
              name="period"
              class="input-field"
              v-model="period">
          </div>

          <div class="range-field__wrap">
            <vue-slider v-model="period"
                        @change="changeFirstPayment"
                        :height="6"
                        :interval="1"
                        :dotSize="25"
                        :drag-on-click="true"
                        :min="sliderTwo.min"
                        :max="sliderTwo.max"
                        />
          </div>
        </div>

        <div class="select-field">
          <p class="range-field__placeholder select-field__placeholder" :class="[creditPercent !== '' ? activePlaceholder : '']">
            Выберите банк и программу
          </p>

<!--          <select v-model="creditPercent" class="input-field">-->
<!--            <option value="11,5">ПАО "Совкомбанк"</option>-->
<!--            <option value="9,5">Comfort</option>-->
<!--          </select>-->

          <v-select
            :options="banks"
            :get-option-label="(option) => option.percent + ' ' + option.bank"
            class="v-select-field"
            v-model="creditPercent"
            @input="changeBank"
          >
            <template #option="{ program, bank, percent }">
              <span class="v-select-field__bold-text">
                {{ percent }}
              </span> - {{ program }}
              <br />
              {{ bank }}
            </template>
          </v-select>
        </div>
      </div>

      <div class="credit__bottom">
        <div class="credit__bottom__payment">
          <p class="credit__bottom__payment__heading">
            Ваш ежемесячный платёж составит
          </p>

          <p class="credit__bottom__payment__price">
            5 013 ₽
          </p>
        </div>

       <div class="credit__bottom__button__wrap">
         <ButtonNew
           :button-text="'оставить заявку'"
           class="credit__button"
         />

         <p class="credit__bottom__warning">
           Расчет ежемесячного платежа, сформированный при помощи кредитного калькулятора, является предварительным
         </p>
       </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'
import CheckIcon from '~/components/icons/CheckIcon.vue';
import axios from "axios";

export default {
  name: "CreditNew",

  components: {
    VueSlider,
    CheckIcon
  },

  props: {
    equipments: Object
  },

  data: function () {

    return {
      equipment: '',
      activePlaceholder: 'active',
      firstPaymentPercent: 45,
      creditPercent: '',
      sliderOne:
        {
          min: 0,
          max: 90
        },

      sliderTwo:
        {
          min: 12,
          max: 60
        },
      formatter1: '{value}%',
      carPrice: 500000,
      period: 24,
     // periodText: '5 месяцев',
      firstPayment: null,
      mounthlyPayment: '',
      bankPercent: 0,
      params: '',

      banks: [
        {
          bank: 'Сетелем банк',
          program: 'Авто Лайт ( Каско, СЖ )',
          percent: '11.5%',
          percentNum: 11.5,
          period: {
            min: 24,
            max: 84,
          },

          firstPayment: 10,
        },

        {
          bank: 'Сетелем банк',
          program: 'Автолайт ( Каско )',
          percent: '11.5%',
          percentNum: 11.5,
          period: {
            min: 24,
            max: 84,
          },

          firstPayment: 10,
        },

        {
          bank: 'Сетелем банк',
          program: 'Автолайт: без каско',
          percent: '13.5%',
          percentNum: 13.5,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 10,
        },

        {
          bank: 'Сетелем банк',
          program: 'Автолайт промо',
          percent: '12.5%',
          percentNum: 12.5,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 10,
        },

        {
          bank: 'Сетелем банк',
          program: 'Драйв А: с каско',
          percent: '14.9%',
          percentNum: 14.9,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 0,
        },

        {
          bank: 'Сетелем банк',
          program: 'Лайт ( Каско, СЖ )',
          percent: '7.5%',
          percentNum: 7.5,
          period: {
            min: 24,
            max: 60,
          },
          firstPayment: 20,
        },

        {
          bank: 'ВТБ Банк',
          program: 'Автодрайв партнер мастер 125 ( КАСКО )',
          percent: '7.5%',
          percentNum: 7.5,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 10,
        },

        {
          bank: 'ВТБ Банк',
          program: 'Автодрайв  мастер 97',
          percent: '12.5%',
          percentNum: 12.5,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 10,
        },

        {
          bank: 'ВТБ Банк',
          program: 'Экстралайт',
          percent: '0.7%',
          percentNum: 0.7,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 20,
        },

        {
          bank: 'ВТБ Банк',
          program: 'АвтоГигант (ДЛЯ КОРПОРАТИВНЫХ КЛИЕНТОВ)',
          percent: '0.1%',
          percentNum: 0.1,
          period: {
            min: 24,
            max: 60,
          },
          firstPayment: 20,
        },

        {
          bank: 'Росбанк',
          program: 'СПЕЦ Промо ВАЗ',
          percent: '13.5%',
          percentNum: 13.5,
          period: {
            min: 36,
            max: 48,
          },
          firstPayment: 10,
        },

        {
          bank: 'Росбанк',
          program: 'СПЕЦ Промо ВАЗ',
          percent: '11.9%',
          percentNum: 11.9,
          period: {
            min: 36,
            max: 48,
          },
          firstPayment: 10,
        },

        {
          bank: 'Росбанк',
          program: 'СПЕЦ Промо ВАЗ',
          percent: '11.5%',
          percentNum: 11.5,
          period: {
            min: 60,
            max: 84,
          },
          firstPayment: 10,
        },

        {
          bank: 'Росбанк',
          program: 'СПЕЦ Промо ВАЗ',
          percent: '10.9%',
          percentNum: 10.9,
          period: {
            min: 60,
            max: 84,
          },
          firstPayment: 10,
        },


        {
          bank: 'Совком Банк',
          program: 'Лада Финанс Спешл',
          percent: '8.99%',
          percentNum: 8.99,
          period: {
            min: 36,
            max: 60,
          },
          firstPayment: 20,
        },

        {
          bank: 'Совком Банк',
          program: 'Лада Финанс',
          percent: '12.5%',
          percentNum: 12.5,
          period: {
            min: 24,
            max: 72,
          },
          firstPayment: 0,
        },

        {
          bank: 'РН Банк',
          program: 'Lada Promo',
          percent: '11%',
          percentNum: 11,
          period: {
            min: 36,
            max: 84,
          },
          firstPayment: 10,
        },

        {
          bank: 'РН Банк',
          program: 'Lada Promo',
          percent: '10%',
          percentNum: 10,
          period: {
            min: 36,
            max: 84,
          },
          firstPayment: 20,
        },

        {
          bank: 'РН Банк',
          program: 'Lada Promo',
          percent: '9%',
          percentNum: 9,
          period: {
            min: 36,
            max: 84,
          },
          firstPayment: 30,
        },

        {
          bank: 'РН Банк',
          program: 'Lada Classic',
          percent: '14.5%',
          percentNum: 14.5,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 10,
        },

        {
          bank: 'РН Банк',
          program: 'Lada Classic',
          percent: '13.5%',
          percentNum: 13.5,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 20,
        },

        {
          bank: 'РН Банк',
          program: 'Lada Classic',
          percent: '12.5%',
          percentNum: 12.5,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 30,
        },

        {
          bank: 'РН Банк',
          program: 'Lada Classic',
          percent: '17%',
          percentNum: 17,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 10,
        },

        {
          bank: 'РН Банк',
          program: 'Lada Classic',
          percent: '16%',
          percentNum: 16,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 20,
        },

        {
          bank: 'РН Банк',
          program: 'Lada Classic',
          percent: '15%',
          percentNum: 15,
          period: {
            min: 24,
            max: 84,
          },
          firstPayment: 30,
        },
      ]
    }
  },

  methods: {
    inputChangePayment(event) {
      const target = event.target;
      console.log(target);
      target.value = target.value.replace(/[^\d]/g,'');

      if (parseInt(target.value) > parseInt(Math.round(this.carPrice / 2))) {
        target.value = Number(Math.round(this.carPrice / 2)).toLocaleString('ru');
        this.firstPayment = target.value.replace(' ', '');
        this.firstPaymentPercent = Math.round(this.firstPayment / this.carPrice * 100);
        this.calculateMonthlyPayment();
      } else {
        target.value = Number(target.value).toLocaleString('ru');
        this.firstPayment = target.value.replace(' ', '');
        this.firstPaymentPercent = Math.round(this.firstPayment / this.carPrice * 100);
        this.calculateMonthlyPayment();
      }
    },

    changePeriodSlider() {
      const target = document.querySelector('input[name="period"]');
      target.value = this.period;
      this.calculateMonthlyPayment();
    },

    changeFirstPayment() {
      this.firstPayment = Math.round(this.carPrice / 100 * this.firstPaymentPercent);
      const target = document.querySelector('input[name="firstPayment"]');
      target.value = Number(this.firstPayment).toLocaleString('ru');

      //let percent_from_value = Math.round(this.firstPayment / this.carPrice * 100);

      //this.trigger = percent_from_value < 15;
      this.calculateMonthlyPayment();
    },

    calculateMonthlyPayment() {
      let debt = this.carPrice - this.firstPayment;

      if (this.credit_programs !== undefined && this.credit_programs !== null) {

        for (let i = 0; i <= this.credit_programs.length; i++) {
          if (this.credit_programs[i] !== undefined) {
            let monthlyPercentRate = this.credit_programs[i]['percent_rate'] / 12 / 100;
            let mathPow1 = Math.pow(1 + monthlyPercentRate, this.period);
            let res1 = monthlyPercentRate * mathPow1;
            let res2 = mathPow1 - 1;
            let annualCoefficient = (res1 / res2);
            // this.credit_programs[i]['monthly_payment'] = Math.round(debt * annualCoefficient);
            this.mounthlyPayment = Math.round(debt * annualCoefficient);
          }
        }
      }
    },

    changeBank(data) {
      console.log(data);
      this.sliderOne.min = data.firstPayment;
      this.$refs.firstPayment.setValue(data.firstPayment + 5);

      this.sliderTwo.min = data.period.min;
      this.sliderTwo.max = data.period.max;

      this.bankPercent = data.percentNum;
    }
  },

  computed: {
    periodText() {
      return `${this.period} месяцев`
    }
  },

  mounted() {
    this.firstPayment = Math.round(this.carPrice / 100 * this.firstPaymentPercent);

    axios.get(this.host_url + '/api/get_credit_programs')
      .then((response) => {
        this.credit_programs = response.data;

        if (this.getCookie('trade_in_price') != null && this.getCookie('trade_in_price') > 0) {
          this.firstPayment = this.getCookie('trade_in_price');
          this.firstPaymentPercent = Math.round(this.firstPayment / this.car_price * 100);

          if (this.firstPaymentPercent > this.sliderOne.max) {
            this.firstPayment = Math.round(this.car_price / 2);
          }
          this.calculatePercentFromTradeInPrice();
          this.calculateMonthlyPayment();
        } else {
          this.changeFirstPayment();
          this.calculateMonthlyPayment();
        }
      }).catch(error => {
      // console.log(error)
    });
  },

  filters: {
    formatPrice: function (price) {
      if (!parseInt(price)) {
        return "";
      }
      if (price > 999) {
        var priceString = (price / 1).toFixed(0);
        var priceArray = priceString.split("").reverse();
        var index = 0;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, " ");
          index += 4;
        }
        return priceArray.reverse().join("");
      } else {
        return (price / 1).toFixed(0);
      }
    }
  },

  created() {
    switch(this.$route.params.model) {
      case 'drive-active':
        this.params = this.equipments.drive_active
        break;
      case 'hatchback':
        this.params = this.equipments.hatchback
        break;
      case 'liftback':
        this.params = this.equipments.liftback
        break;
      case 'sedan':
        this.params = this.equipments.sedan
        break;
      case 'universal':
        this.params = this.equipments.universal
        break;
    }
  }
}
</script>

<style scoped lang="scss">

select {
  option {
    color: black;
  }
}
.credit {
  background: #514EA1;
  padding: 15px 0;

  @media (min-width: 1024px) {
    padding: 30px 0;
  }
}

.credit__head {
  @media (min-width: 1024px) {
    min-height: 310px;
    padding-left: 200px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, .4);
    margin-bottom: 60px;
  }
}

.credit__container {
  @media (min-width: 1024px) {
    overflow: unset;
  }
}



.credit__inner__car {
  max-width: 375px;
  display: block;
  margin: auto;

  @media (min-width: 1024px) {
    position: absolute;
    left: -460px;
    max-width: 700px;
    top: 10px;
  }
}

.credit__inner__text {
  padding: 0 20px;

  @media (min-width: 1024px) {
    max-width: 465px;
    width: 100%;
    padding: 0;
  }
}

.credit__inner__title {
  color: white;
  font-size: 28px;
  text-transform: unset;
  font-family: "Bright Park Display";
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
    font-size: 36px;
  }
}

.credit__inner__desc {
  font-size: 16px;
  line-height: 26px;
  color: white;
  text-align: center;
  margin-top: 10px;

  @media (min-width: 1024px) {
    text-align: left;
  }
}

.credit__advantages {
  color: white;
  font-size: 18px;
  margin: 20px auto;
  border-top: 1px solid rgba(255, 255, 255, .35);
  border-bottom: 1px solid rgba(255, 255, 255, .35);
  padding: 30px 35px 15px;

  @media (min-width: 1024px) {
    position: absolute;
    right: 0px;
    top: 47%;
    transform: translate(0, -50%);
  }
}

.input-field, .v-select {
  height: 70px;
  border-radius: 5px;
  width: 100%;
  border: none;
  background: rgba(255, 255, 255, .2);
  color: white;
  padding-top: 22px;
  padding-left: 15px;
  font-size: 24px;
  font-weight: 500;

  .vs__dropdown-toggle {
    border: none;
  }

}

.credit__body {
  padding: 0 20px;

  @media (min-width: 1024px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
}

.range-field__input {
  position: relative;
}

.range-field__placeholder {
  color: white;
  font-weight: 500;
  font-size: 18px;
  position: absolute;
  top: 44%;
  left: 13px;
  transform: translate(0, -50%);
  font-family: "Factor A";
  pointer-events: none;

  &.active{
    transition: .2s ease;
    transform: scale(0.85);
    top: 16%;
    left: 0;
  }
}

.range-field__wrap {
  position: absolute;
  bottom: 0;
  width: 100%;

  .vue-slider-rail {
    background: none;
  }
}

.range-field {
  position: relative;
  padding-bottom: 15px;
}

.range-field__result {
  position: absolute;
  right: 20px;
  bottom: 30px;
  color: rgba(255, 255, 255, .5);
  font-size: 24px;
  font-weight: 300;
  font-family: "Factor A"
}

.select-field {
  position: relative;
  padding-bottom: 15px;
}

.credit__bottom {
  margin-top: 20px;
}

.credit__bottom__payment {
  text-align: center;
  color: white;
  font-family: "Factor A";
  font-size: 18px;
  font-weight: 500;

  @media (min-width: 1024px) {
    text-align: left;
  }
}

.credit__bottom__payment__price {
  font-size: 40px;
  margin-top: 10px;
}

.credit__button {
  height: 60px;
  max-width: 335px;
  margin: 20px auto 15px;

  @media (min-width: 1024px) {
    margin: 0;
  }
}

.credit__bottom__warning {
  font-size: 12px;
  text-align: center;
  font-family: "Factor A";
  color: rgba(255, 255, 255, .7);

  @media (min-width: 1024px) {
    text-align: left;
    margin-left: 20px;
  }
}

.credit__bottom {
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
}

.credit__bottom__button__wrap {
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
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

    li {
      border-bottom: 1px solid rgba(0, 0, 0, .5);
    }
  }
}

.v-select-field__bold-text {
  font-weight: 700;
  font-size: 1.1em;
  color: #514EA1;
}
</style>
