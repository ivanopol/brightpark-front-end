<template>
<div class="new-lead">
  <div class="new-lead__head">
    <h4 class="new-lead__title color-primary-color">{{form_title}}</h4>

    <p class="new-lead__desc">
      В&nbsp;ближайшее время мы&nbsp;свяжемся с&nbsp;вами, уточним все детали заявки,а также ответим на&nbsp;все возникшие у&nbsp;вас вопросы
    </p>
  </div>

  <form
    :id="form_id"
    class="new-lead__body"
    action="#"
    method="POST"
    name="feedback"
    @submit="send"
    :data-goal="goal"
  >
    <div class="new-lead__field">
      <input type="text" name="name" v-model="name">

      <span class="new-lead__field__placeholder" :class="[name !== '' ? activePlaceholder : '']">
        Ваше имя
      </span>
    </div>

    <div class="new-lead__field">
      <the-mask
        :id="form_id + '_input_phone'"
        pattern=".{18,}"
        mask="+# (###)-###-##-##"
        v-model="phone"
        type="tel"
        required="true"
      ></the-mask>

      <span class="new-lead__field__placeholder" :class="[phone !== '' ? activePlaceholder : '']">
        Телефон для связи
      </span>
    </div>


    <button
      type="submit"
      class="new-lead__body__submit color-primary-background"
    >
      Оставить заявку
    </button>

    <p class="new-lead__body__copies">
      Нажимая кнопку «Оставить заявку», вы соглашаетесь с <span class="color-primary-color">условиями обработки и хранения персональных данных</span>
    </p>
  </form>


</div>
</template>

<script>
export default {
  name: "FormLeadNew",
  props: {
    button_text: {
      default: "Записаться",
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
    goal_call: {
      default: "zvonok",
      type: String
    },
    comment: {
      default: '',
      type: String
    }
  },
  data: function () {
    return {
      name: '',
      phone: '',
      activePlaceholder: 'active',
    }
  },
  computed: {
    url: function () {
      return {
        href: window.location.href,
        search: window.location.search
      };
    },
  },
  methods: {
    focusedInput (field) {
      if (field === 'name') {
        this.name = ' ';
      } else if (field === 'phone') {
        this.phone = ' ';
      }
    },

    bluredInput (field) {
      if (field === 'name') {
        this.name = '';
      } else if (field === 'phone') {
        this.phone = '';
      }
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
}
</script>

<style scoped lang="scss">
@import "./assets/scss/_colors.scss";

.new-lead {
  padding: 45px 60px;
  background: white;
  max-width: 570px;
  width: 100%;
}

.new-lead__body__submit {
  color: white;
  text-transform: uppercase;
  height: 60px;
  width: 100%;
  max-width: unset;
  font-size: 14px;
}


.new-lead__head {
  text-align: center;
}

.new-lead__title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
  font-family: "Bright Park Display";
}

.new-lead__desc {
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 22px;
  color: rgba(0, 0, 0, .7);
  font-family: "Factor A";
}

.new-lead__field {
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }

  input {
    max-width: unset;
    height: 100%;
    display: block;
    font-size: 24px;
    color: #514EA1;
    font-weight: 500;
    font-family: "Factor A";
    background: white;
    flex: 1;
    padding: 25px 15px 5px;
    box-sizing: border-box;

    &:focus + .new-lead__field__placeholder {
      transition: .2s ease;
      font-size: 12px;
      top: 5px;
    }

  }
}

.new-lead__field__placeholder {
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

.new-lead__body {
  width: 100%;
}

.new-lead__body__copies {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-family: "Factor A";
  text-align: center;
  margin-top: 18px;
  span {
    font-weight: 700;
    display: inline-block;
  }
}
</style>
