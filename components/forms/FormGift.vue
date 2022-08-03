<template>
<div class="gift">
  <div class="gift__head">
    <div v-if="!result">
      <h4 class="gift__title color-primary-color" >{{form_title}}</h4>
      <p class="gift__desc" v-if="!result">
        В&nbsp;ближайшее время мы&nbsp;свяжемся с&nbsp;вами, уточним все детали заявки,а также ответим на&nbsp;все возникшие у&nbsp;вас вопросы
      </p>
    </div>

    <div v-else-if="result">
      <h4 class="gift__title color-primary-color" >Благодарим Вас за&nbsp;обращение</h4>
      <p class="gift__desc">
        Мы&nbsp;свяжемся в&nbsp;Вами в&nbsp;ближайшее время
      </p>
    </div>
  </div>

  <form v-if="!result"
    :id="form_id"
    class="gift__body"
    action="#"
    method="POST"
    name="feedback"
    @submit="send"
    :data-goal="goal"
  >
    <div class="gift__field">
      <input type="text" name="name" v-model="fields.name">

      <span class="gift__field__placeholder" :class="[fields.name !== '' ? activePlaceholder : '']">
        Ваше имя
      </span>
    </div>

    <div class="gift__field">
      <the-mask
        :id="form_id + '_input_phone'"
        pattern=".{18,}"
        mask="+# (###)-###-##-##"
        v-model="fields.phone"
        type="tel"
        required="true"
      ></the-mask>

      <span class="gift__field__placeholder" :class="[fields.phone !== '' ? activePlaceholder : '']">
        Телефон для связи
      </span>
    </div>

    <div class="gift__field">
      <div class="gift__field__row-double">
        <div class="gift__field">
          <v-date-picker
            :popover="{ visibility: 'click' }"
            :min-date='new Date()'
            v-model="fields.date"
            :input-debounce="500"
            :locale="calendarLocale"
            class="gift__form__row__date"
          >
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="bg-white border px-2 py-1 rounded"
                :value="inputValue"
                v-on="inputEvents"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"
                />
              </svg>
            </template>
          </v-date-picker>

          <span class="gift__field__placeholder" :class="[fields.date !== null ? activePlaceholder : '']">
            Дата
          </span>
        </div>

        <div class="gift__field">
          <the-mask
            type="text"
            pattern=".{5,}"
            :masked="true"
            mask="##:##"
            v-model="fields.time"
          />

          <span class="gift__field__placeholder" :class="[fields.time !== '' ? activePlaceholder : '']">
            Удобное время
          </span>
        </div>

      </div>
    </div>

    <div class="gift__field gift__field-block">

<!--      <label :id="prefix + 'credit-program__' + credit_program['title_en']" class="control control-radio event" :for="'credit-program__' + credit_program['title_en']" @click="handleCreditProgram(index)">{{credit_program['name']}} <span
        class="program-cost">{{credit_program['monthly_payment'] | formatPrice}}</span> руб./мес
        <input :id="'credit-program__' + credit_program['title_en']" :value="'p_' + index" type="radio" name="program" v-model="picked">
        <div class="control_indicator"></div>
      </label>-->
      <span class="gift__field__heading">
        Выберите подарок
      </span>

      <div class="gift__radios">
        <label class="control control-radio">
          <input name="gift" type="radio" value="Сигнализация" v-model="fields.gift">
          <span class="program-cost">Сигнализация</span>
          <span class="control_indicator"></span>
        </label>

        <label class="control control-radio">
          <input name="gift" type="radio" value="Антикор + тонировка + коврики" v-model="fields.gift">
          <span class="program-cost">Антикор + тонировка + коврики</span>
          <span class="control_indicator"></span>
        </label>
      </div>
    </div>

    <button
      type="submit"
      class="gift__body__submit color-primary-background"
      :class="{ preloader: isLoading }"
      v-bind:disabled="isButtonDisabled"
    >
      {{ button_text }}
    </button>

    <p class="gift__body__copies">
      Нажимая кнопку «Оставить заявку», вы соглашаетесь с <span class="color-primary-color">условиями обработки и хранения персональных данных</span>
    </p>
  </form>

</div>
</template>

<script>
export default {
  name: "FormGift",
  props: {
    button_text: {
      default: "Оставить заявку",
      type: String
    },
    form_id: {
      default: "form",
      type: String
    },
    form_title: {
      default: "",
      type: String
    },
    form_title_special: {
      default: "",
      type: String
    },
    form_type: {
      default: 1,
      type: Number
    },
    goal: {
      default: "",
      type: String
    },
  },
  data: function () {
    return {
      calendarLocale: 'ru-RU',
      fields: {
        name: "",
        phone: "",
        date: new Date(),
        time: "",
        gift: "Сигнализация"
      },
      status: true,
      isLoading: false,
      result: false,
      activePlaceholder: 'active',
      isProduction: process.env.NODE_ENV === 'production',
    }
  },
  computed: {
    url: function () {
      return {
        href: window.location.href,
        search: window.location.search
      };
    },
    isButtonDisabled: function() {
      if (this.isLoading) {
        return true;
      } else {
        return !this.status;
      }
    },
  },
  methods: {
    focusedInput (field) {
      if (field === 'name') {
        this.fields.name = ' ';
      } else if (field === 'phone') {
        this.fields.phone = ' ';
      }
    },

    bluredInput (field) {
      if (field === 'name') {
        this.fields.name = '';
      } else if (field === 'phone') {
        this.fields.phone = '';
      }
    },

    send: function(event) {
      event.preventDefault();
      this.isLoading = true;


      let formData = {
        phone: this.clearMask(this.fields.phone),
        name: this.fields.name,
        date: this.fields.date.toLocaleDateString('ru-RU', {
          day : '2-digit',
          month : '2-digit',
          year : 'numeric'
        }),
        time: this.fields.time,
        city: this.$store.state.city.value,
        url: this.url,
        caption: this.form_title_special ? this.form_title_special : this.form_title,
        form_id: this.form_id,
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
          this.result = true
          return {};
        })
        .catch(error => {
          this.error = true;
          this.clearInput();
          return {};
        });
    },

    clearInput: function() {
      this.fields.phone = null;
      this.fields.name = null;
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

    attachHandler: function() {
      function attachHandler(el, evtname, fn) {
        if (el.addEventListener) {
          el.addEventListener(evtname, fn.bind(el), false);
        } else if (el.attachEvent) {
          el.attachEvent("on" + evtname, fn.bind(el));
        }
      }

      attachHandler(window, "load", () => {
        var ele = document.querySelector(
          "input[id=" + this.form_id + "_input_phone]"
        );
        attachHandler(ele, "invalid", function() {
          this.setCustomValidity("Please enter at least 5 characters.");
          this.setCustomValidity("");
        });
      });
      return {};
    },

    decodeCookie(obj) {
      return JSON.parse(decodeURIComponent(escape(atob(obj))));
    }
  },
  mounted() {
    if (this.$cookies.get("bp_uid") !== undefined) {
      this.utm = this.decodeCookie(this.$cookies.get("bp_uid"));
    }

    if (this.needCity) {
      this.makeCitiesList();
    }
  },
  beforeMount() {
    this.attachHandler();
  }
}
</script>

<style lang="scss">
@import "./assets/scss/_colors.scss";

form button {
  &:disabled {
    cursor: default;
  }

  &:not(:disabled):hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
    transition: .2s ease;
  }
  .preloader {
    color: rgba(255, 255, 255, 0);

    &:after {
      content: "";
      background: url(~static/images/icons/animations/dots-green.svg) no-repeat center center;
      z-index: 10;
      height: 18px;
      display: block;
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }
}

.gift {
  padding: 45px 60px;
  background: white;
  max-width: 570px;
  width: 100%;
}

.gift__body__submit {
  color: white;
  text-transform: uppercase;
  height: 60px;
  width: 100%;
  max-width: unset;
  font-size: 14px;
}


.gift__head {
  text-align: center;
  margin-bottom: 22px;
}

.gift__title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
  font-family: "Bright Park Display";

  @media (max-width: 500px) {
    font-size: 32px;
  }
}

.gift__desc {
  font-size: 18px;
  line-height: 26px;
  color: rgba(0, 0, 0, .7);
  font-family: "Factor A";
}

.gift__field {
  margin-bottom: 10px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;


  &-block {
    display: block;
  }

  &__row-double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    width: 100%;


    @media (max-width: 500px) {
      display: block;


    }
  }

  @media (max-width: 500px) {
    height: auto;
  }

  input, select {
    margin-bottom: 0px;
    border: 1px solid #E9E9E9;
    max-width: unset;
    width: 100%;
    height: 100%;
    display: block;
    font-size: 18px;
    color: #514EA1;
    font-weight: 500;
    font-family: "Factor A";
    background: white;
    flex: 1;
    padding: 25px 15px 5px;
    box-sizing: border-box;

    &::placeholder {
      font-size: 18px;
      color: rgba(0, 0, 0, 0.35);
    }

    &:focus + .gift__field__placeholder {
      transition: .2s ease;
      font-size: 12px;
      top: 5px;
    }

  }
}

.gift__field__placeholder {
  position: absolute;
  top: 18px;
  left: 15px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Factor A";
  color: rgba(0, 0, 0, .35);
  transition: .2s ease-out;
  pointer-events: none;

  &.active {
    transition: .2s ease;
    font-size: 12px;
    top: 5px;
  }
}

.gift__body {
  width: 100%;
}

.gift__body__copies {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-family: "Factor A";
  text-align: center;
  margin-top: 18px;
  margin-bottom: 0 !important;
  span {
    font-weight: 700;
    display: inline-block;
  }
}

.theme-05-special {
  .gift__desc {
    display: none;
  }
}

.gift__form__row__date {
  position: relative;
  display: block;
  width: 100%;
  svg {
    right: 10px;
    top: 50%;
    transform: translate(0, -82%);
    width: 15px;
    height: 15px;
    position: absolute;

    path {
      fill: rgb(199, 196, 196);
    }
  }
}

.gift__field__heading {
  margin-bottom: 15px;
  display: block;
  margin-top: 20px;
  font-size: 18px;
}
.gift__radios {
  display: flex;
  flex-direction: column;

  .control-radio {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: .9em;

    input {
      flex: unset;
      width: auto;
      height: auto;
      margin-right: 10px;
    }
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
}
</style>
