<template>
<div class="evaluate">
  <img src="~static/images/evaluate-img.png" alt="" class="evaluate__decor">


  <h4 class="evaluate__title">
    Оценка вашего автомобиля
  </h4>

  <div class="evaluate__car-info">
    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Марка автомобиля
      </h5>

      <p class="evaluate__car-info__item__value">
        {{ mark }}
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Модель автомобиля
      </h5>

      <p class="evaluate__car-info__item__value">
        {{ model }}
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Пробег автомобиля, км
      </h5>

      <p class="evaluate__car-info__item__value">
        {{ mileage }}
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Поколение
      </h5>

      <p class="evaluate__car-info__item__value">
        {{ modification }}
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Год выпуска
      </h5>

      <p class="evaluate__car-info__item__value">
        {{ year }}
      </p>
    </div>

    <div class="evaluate__car-info__item">
      <h5 class="evaluate__car-info__item__heading">
        Коробка передач
      </h5>

      <p class="evaluate__car-info__item__value">
        {{ transmission }}
      </p>
    </div>

  </div>



  <div class="evaluate__car__prices">

    <p class="evaluate__car__prices__description" v-if="values > 0">
      Предварительная стоимость
      <span>В зависимости от состояния автомобиля</span>
    </p>

    <div v-if="values === 0" class="evaluate__car__prices__range_no_car">
      <p>Не&nbsp;удалось провести оценку для указанного автомобиля.
      Загрузите фото автомобиля и&nbsp;краткое описание через наши каналы:</p>
      <ul class="socials_list">
<!--        <li>
          <a class="event" :href="'tg://msg?text=' + encodeURI(message) + '&to=' + messangerPhone2" target="_blank">
            <img src="~static/images/icons/socials/telegram.svg" alt="Telegram">
          </a>
        </li>-->
        <li>
          <a class="event" :href="'viber://chat?number=%2B' + messangerPhone" target="_blank">
            <img src="~static/images/icons/socials/viber.svg" alt="Viber">
          </a>
        </li>
        <li>
          <a class="event" :href="'https://wa.me/' + messangerPhone2 + '?text=' + encodeURI(message)" target="_blank">
            <img src="~static/images/icons/socials/whatsapp.svg" alt="WhatsApp">
          </a>
        </li>
      </ul>
      <p>вы&nbsp;получите оценку в&nbsp;течение 3&nbsp;минут.</p>
    </div>

    <p class="evaluate__car__prices__range" v-else-if="values === 1">
      до {{ priceGood }} ₽*
    </p>

    <div class="evaluate__car__prices__range" v-else-if="values === 2">
      <div class="evaluate__car__prices__range__condition evaluate__car__prices__range__condition-perfect">
        <p>
          идеальное
        </p>

        <span>
          до {{ pricePerfect }}&nbsp;₽
        </span>
      </div>

      <div class="evaluate__car__prices__range__condition evaluate__car__prices__range__condition-excellent">
        <p>
          отличное
        </p>

        <span>
          до {{ priceExcellent }}&nbsp;₽
        </span>
      </div>

      <div class="evaluate__car__prices__range__condition evaluate__car__prices__range__condition-good">
        <p>
          хорошее
        </p>

        <span>
          до {{ priceGood }}&nbsp;₽
        </span>
      </div>
    </div>

    <p class="evaluate__car__prices__warning" v-if="values > 0">
      * — Расчет является ориентировочным, более точный расчет производится в салоне при осмотре автомобиля.
    </p>
  </div>

  <div class="evaluate__car__form-wrapper">

    <img src="~static/images/coins.png" alt="" class="evaluate__car-info__form__coins">

    <form class="evaluate__car__form"
          :id="form_id"
          action="#"
          method="POST"
          name="feedback"
          @submit="send"
          :data-goal="goal"
    >

      <div class="evaluate__car__form__grid">
        <h5 class="evaluate__car__form__heading">
          Хотите + 10 000&nbsp;₽ к&nbsp;оценочной стоимости?
        </h5>

        <p class="evaluate__car__form__description">
          Оставьте ваши контактные данные, вам перезвонит специалист и&nbsp;назовет код, при предъявлении которого, мы&nbsp;добавим 10&nbsp;000 рублей к&nbsp;оценочной стоимости вашего авто в&nbsp;салоне.
        </p>

        <div class="evaluate__car__form__field">
          <input type="text" v-model="name">

          <span class="field-placeholder" :class="[name !== '' ? 'active' : '']">
            Ваше имя
          </span>
        </div>

        <div class="evaluate__car__form__field">
          <the-mask
              :id="form_id + '_input_phone'"
              pattern=".{18,}"
              mask="+# (###)-###-##-##"
              v-model="phone"
              type="tel"
              required="true"
          ></the-mask>

          <span class="field-placeholder" :class="[phone !== '' ? 'active' : '']">
            Контактный телефон
          </span>
        </div>
      </div>

      <ButtonNew
        button-text="Получить код"
        class="evaluate__form__submit"
        :class="{ preloader: isLoading }"
        v-bind:disabled="isButtonDisabled"
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
    year: Number,
    transmission: String,
    priceGood: String,
    priceExcellent: String,
    pricePerfect: String,
    form_id: {
      default: "models__modal-car-appraisal_",
      type: String
    },
    form_title: {
      default: "Оценка вашего автомобиля",
      type: String
    },
    is_comment: {
      default: false,
      type: Boolean
    },
    form_type: {
      default: 1,
      type: Number
    },
    goal: {
      default: "",
      type: String
    },
    comment: {
      default: "",
      type: String
    }
  },

  data: function() {
    return {
      status: true,
      isLoading: false,
      result: false,
      name: '',
      phone: '',
      messangerPhone: '79223066403',
      messangerPhone2: '79638761452',
      isProduction: process.env.NODE_ENV === 'production',
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
            this.$modal.hide('form-evaluate');
            document.body.style.overflow = 'unset';
            this.$emit('result', true);
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
    decodeCookie(obj) {
      return JSON.parse(decodeURIComponent(escape(atob(obj))));
    }
  },
  mounted() {
    if (this.$cookies.get("bp_uid") !== undefined) {
      this.utm = this.decodeCookie(this.$cookies.get("bp_uid"));
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
    message: function () {
      return 'Привет, оцените автомобиль:\n' +
                    this.mark + ' ' + this.model + ' ' + this.modification + '\n' +
                    'пробег: ' + this.mileage + ' км \n' +
                    'год: ' + this.year + '\n' +
                    'коробка передач: ' + this.transmission
    },
    values: function() {
      if (this.priceGood === '1 000' && this.priceExcellent === '1 000' && this.pricePerfect === '1 000') {
        return 0
      }
      return this.priceGood === this.priceExcellent && this.priceGood === this.pricePerfect ? 1 : 2
    },
    url: function () {
      return {
        href: window.location.href,
        search: window.location.search
      };
    },

    priceFromChanged() {
      return this.priceFrom.toLocaleString('ru-RU');
    },

    priceToChanged() {
      return this.priceTo.toLocaleString('ru-RU');
    }
  }
}
</script>

<style scoped lang="scss">
.evaluate {
  background: white;
  padding: 48px 0 0;

  @media (min-width: 1024px) {
    max-width: 970px;
    width: 100%;
    position: relative;
  }
}

.evaluate__decor {
  display: none;

  @media (min-width: 1024px) {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    pointer-events: none;
  }
}

.evaluate__title {
  color: #514EA1;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: "Bright Park Display";
  padding: 0 20px;

  @media (min-width: 1024px) {
    padding-left: 300px;
    margin-bottom: 30px;
  }
}

.evaluate__car-info__item {
  margin-bottom: 20px;
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
}

.evaluate__car-info {
  padding: 0 20px;

  @media (min-width: 1024px) {
    padding-left: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
  }
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

  @media (min-width: 1024px) {
    padding-left: 300px;
    padding-right: 20px;
  }
}

.evaluate__car__prices__description {
  color: #514EA1;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  font-family: "Bright Park Display";
  span {
    font-size: 14px;
    font-weight: 500;
    font-family: "Factor A";
    color: rgba(0, 0, 0, .5);
    margin-top: 5px;
    display: block;
  }

  @media (min-width: 1024px) {
    text-align: left;

    span {
      padding-left: 2px;
    }
  }
}

.evaluate__car__prices__range {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: #514EA1;
  font-family: "Factor A";
  margin: 15px 0;


  @media (min-width: 1024px) {
    text-align: left;
    font-size: 30px;
    display: flex;
  }
}

.evaluate__car__prices__range_no_car {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #514EA1;
  font-family: "Factor A";
  margin: 15px 0;


  @media (min-width: 1024px) {
    line-height: 1.4;
    text-align: left;
    font-size: 18px;
    width: 80%;
  }

  .socials_list {
    display: flex;
    justify-content: center;
    li {
      margin: 10px 10px 5px 0;
      img {
        width: 50px;
      }
    }

    @media (min-width: 1367px) {
      justify-content: unset;
    }
  }
}


.evaluate__car__prices__warning {
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, .5);
  font-family: "Factor A";
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
    max-width: 370px;
  }
}

.evaluate__car__form-wrapper {
  background: url("~static/images/trade-in-form/bg-layer-mob.svg") no-repeat;
  background-size: cover;
  padding: 70px 0;
  position: relative;
  margin-top: 50px;

  @media (min-width: 1024px) {
    padding: 80px 99px 50px;
    background: url("~static/images/trade-in-form/bg-layer.svg") no-repeat;
    background-size: cover;
  }
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

    &:focus + .field-placeholder {
      font-size: 12px;
      top: 10px;
      transition: .2s ease-in;
    }
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
  pointer-events: none;

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

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
}

.evaluate__car-info__form__coins {
  position: absolute;
  right: 0;
  top: 0;

  @media (min-width: 1024px) {
    right: 50%;
    top: -15px;
  }
}

.evaluate__car__form__description {
  font-size: 14px;
  font-family: "Factor A";
  margin-bottom: 24px;
  color: white;
  line-height: 20px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
}

.evaluate__form__submit {
  height: 60px;
  font-size: 14px;
}

.evaluate__car__form__grid {
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    row-gap: 25px;
  }
}

.evaluate__car__prices__range__condition {
  font-family: "Factor A";
  margin: 15px 0;
  p {
    text-transform: uppercase;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 12px;
    color: rgba(0, 0, 0, .5);
  }

  span {
    font-weight: 700;
    font-size: 26px;
  }

  &.evaluate__car__prices__range__condition-good {
    span {
      color: #EE6723;
    }
  }


  &.evaluate__car__prices__range__condition-excellent {
    span {
      color: #514EA1;
    }
  }

  &.evaluate__car__prices__range__condition-perfect {
    span {
      color: #5CBE86;
    }
  }

  @media (min-width: 1367px) {
    margin: 0 25px 0 0;
  }
}
</style>
