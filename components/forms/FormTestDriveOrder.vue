<template>
  <div class="test-drive">
    <h4 class="test-drive__heading" v-text="form_title"/>
    <form
      action="#"
      class="test-drive__form"
      @submit="send"
      method="POST"
      :id="form_id"
      :data-goal="goal"
    >
      <input
        type="text"
        placeholder="Ваше имя"
        name="name"
        v-model="fields.name"
        required
      />
      <the-mask
        :id="form_id + '_input_phone'"
        pattern=".{18,}"
        mask="+# (###)-###-##-##"
        v-model="fields.phone"
        type="tel"
        required="true"
        placeholder="Номер телефона"
      ></the-mask>

      <div class="test-drive__form__row">
        <v-date-picker
          v-model="fields.date"
          :input-debounce="500"
          :locale="calendarLocale"
          class="test-drive__form__row__date"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input
              class="bg-white border px-2 py-1 rounded"
              :value="inputValue"
              v-on="inputEvents"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"
              />
            </svg>
          </template>
        </v-date-picker>

        <the-mask
          type="text"
          placeholder="Удобное время"
          pattern=".{5,}"
          :masked="true"
          mask="##:##"
          v-model="fields.time"
        />
      </div>

      <div class="test-drive__form__select-wrap">
        <v-select
          class="test-drive__form__select"
          :options="cars"
          placeholder="Выберите автомобиль"
          taggable
          v-model="fields.car"
          :searchable="false"
          :multiple="false"
        >
        </v-select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
          />
        </svg>
      </div>

      <button class="test-drive__form__submit">
        Записаться
      </button>

      <p class="test-drive__form__privacy">
        Нажимая на кнпоку "Записаться", вы соглашаетесь с
        <span>
          <a :href="'/' + $store.state.city.value + '/privacy'" class="event" target="_blank">Политикой конфиденциальности</a>
        </span>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormTestDriveOrder",
  props: {
    form_id: {
      default: "form",
      type: String
    },
    form_title: {
      default: "Записаться на тест-драйв",
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
  data: function() {
    return {
      success: false,
      error: false,
      calendarLocale: 'ru-RU',
      selectedCar: "",
      bitrix_responsible: "",
      status: true,
      cars: [
        "Granta SD AT",
        "Largus Cross",
        "Vesta Cross SW",
        "X-RAY Cross AT",
        "NIVA"
      ],
      fields: {
        name: "",
        phone: "",
        date: new Date(),
        time: "",
        car: "",
      },
      utm: {},
    }
  },
  computed: {
    url: function() {
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
    send: function(event) {
      event.preventDefault();

      let formData = {
        phone: this.clearMask(this.fields.phone),
        name: this.fields.name,
        city: this.$store.state.city.value,
        url: this.url,
        caption: this.form_title,
        form_id: this.form_id,
        date: this.fields.date.toLocaleDateString('ru-RU', {
          day : 'numeric',
          month : 'long',
          year : 'numeric'
        }),
        time: this.fields.time,
        car: this.fields.car,
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
    clearInput: function() {
      this.phone = null;
      this.name = null;
      this.date = null;
      this.time = null;
      this.car = null;
      return {};
    },

    clearMask: function(value) {
      return value.replace(/\D/g, "");
    },

    showModal: function() {
      return {};
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
  },
  beforeMount() {
    this.attachHandler();
  }
};
</script>

<style lang="scss">
.test-drive {
  padding: 30px 50px;
  background: white;
  box-shadow: 0 0 15px 10px rgba(37, 37, 37, 0.3);
  max-width: 600px;
  width: 100%;
}

.test-drive__heading {
  font-size: 26px;
  text-align: left;

  @media (max-width: 500px) {
    font-size: 20px;
  }
}

.test-drive__form {
  margin-top: 25px;
  input {
    width: 100%;
    max-width: unset;
    background: white;
    font-size: 16px;

    &::placeholder {
      color: black;
    }

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
}

.test-drive__form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  width: 100%;

  @media (max-width: 500px) {
    display: block;
  }
}

.test-drive__form__select {
  height: 48px;
  width: 100%;
  color: black;
  font-size: 16px;
  position: relative;

  .vs__dropdown-toggle {
    height: 100%;
    border-color: #e9e9e9;
  }

  input[type="search"] {
    width: 0;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
}

.test-drive__form__select-wrap {
  position: relative;
  width: 100%;
  svg {
    position: absolute;
    right: 10px;
    width: 15px;
    height: 15px;
    top: 50%;
    transform: translate(0, -50%);

    path {
      fill: rgb(199, 196, 196);
    }
  }
}

.test-drive__form__row__date {
  position: relative;
  display: block;
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

.test-drive__form__submit {
  width: 200px;
  background: #ffca0d;
  color: #514ea1;
  transition: 0.2s;
  margin: 20px 0 10px;

  &:hover {
    opacity: 0.6;
    transition: 0.2s;
    background: #ffca0d;
  }
}

.test-drive__form__privacy {
  font-size: 12px;

  span {
    display: inline-block;
  }

  a {
    color: black;
    text-decoration: underline;
  }
}
</style>
