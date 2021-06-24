<template>
  <form
    action="#"
    :id="form_id"
    method="POST"
    class="feedback__form"
    name="feedback"
    @submit="send"
    :data-goal="goal"
  >
    <label class="form__input-wrapper">
      <span class="form__input-wrapper__svg">
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 0.83168C6.19455 0.83168 4.75078 2.19922 4.75078 3.86293C4.75078 5.52665 6.19455 6.89419 8 6.89419C9.80545 6.89419 11.2492 5.52665 11.2492 3.86293C11.2492 2.19922 9.80545 0.83168 8 0.83168ZM3.88592 3.86293C3.88592 1.71909 5.73882 0 8 0C10.2612 0 12.1141 1.71909 12.1141 3.86293C12.1141 6.00677 10.2612 7.72587 8 7.72587C5.73882 7.72587 3.88592 6.00677 3.88592 3.86293ZM8 10.1698C4.86643 10.1698 2.16725 11.6538 0.801379 13.8011C0.676758 13.997 0.410576 14.0587 0.206845 13.9388C0.00311314 13.819 -0.0610185 13.563 0.0636026 13.3671C1.59875 10.9537 4.58928 9.33816 8 9.33816C11.4107 9.33816 14.4012 10.9537 15.9364 13.3671C16.061 13.563 15.9969 13.819 15.7932 13.9388C15.5894 14.0587 15.3232 13.997 15.1986 13.8011C13.8328 11.6538 11.1336 10.1698 8 10.1698Z"
            fill="#393840"
          />
        </svg>
      </span>

      <input
        :id="form_id + '_input_name'"
        type="text"
        class=""
        name="name"
        v-model="name"
        placeholder="Имя"
        required
      />
    </label>

    <label class="form__input-wrapper">
      <span class="form__input-wrapper__svg">
        <svg
          width="11"
          height="18"
          viewBox="0 0 11 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1.76471C0 0.790086 0.735055 0 1.64179 0H9.35821C10.2649 0 11 0.790086 11 1.76471V16.2353C11 17.2099 10.2649 18 9.35821 18H1.64179C0.735055 18 0 17.2099 0 16.2353V1.76471ZM1.64179 0.882353C1.18842 0.882353 0.820896 1.2774 0.820896 1.76471V16.2353C0.820896 16.7226 1.18842 17.1176 1.64179 17.1176H9.35821C9.81158 17.1176 10.1791 16.7226 10.1791 16.2353V1.76471C10.1791 1.2774 9.81158 0.882353 9.35821 0.882353H9.0709C8.78972 1.13186 8.65124 1.64678 8.5732 2.22721C8.51161 2.68523 8.16277 3.04412 7.73223 3.04412H3.26777C2.83723 3.04412 2.48839 2.68523 2.4268 2.22721C2.34876 1.64678 2.21028 1.13186 1.9291 0.882353H1.64179ZM3.0246 1.12619C3.13192 1.43995 3.19627 1.78126 3.23926 2.101C3.24307 2.12937 3.25516 2.14863 3.26452 2.15787C3.26653 2.15986 3.26909 2.16176 3.26909 2.16176H7.73091C7.73091 2.16176 7.73347 2.15986 7.73548 2.15787C7.74484 2.14863 7.75693 2.12937 7.76074 2.101C7.80374 1.78126 7.86808 1.43995 7.97541 1.12619C8.00238 1.04733 8.03373 0.965262 8.0705 0.882353H2.9295C2.96627 0.965262 2.99762 1.04733 3.0246 1.12619Z"
              fill="#393840"
            />
            <path
              d="M4.02239 1.54412C4.02239 1.37356 4.15102 1.23529 4.3097 1.23529H5.62313C5.78181 1.23529 5.91045 1.37356 5.91045 1.54412C5.91045 1.71468 5.78181 1.85294 5.62313 1.85294H4.3097C4.15102 1.85294 4.02239 1.71468 4.02239 1.54412Z"
              fill="#393840"
            />
            <path
              d="M6.23881 1.54412C6.23881 1.37356 6.36744 1.23529 6.52612 1.23529C6.6848 1.23529 6.81343 1.37356 6.81343 1.54412C6.81343 1.71468 6.6848 1.85294 6.52612 1.85294C6.36744 1.85294 6.23881 1.71468 6.23881 1.54412Z"
              fill="#393840"
            />
          </g>
        </svg>
      </span>

      <the-mask
        :id="form_id + '_input_phone'"
        pattern=".{18,}"
        mask="+# (###)-###-##-##"
        v-model="phone"
        type="tel"
        required="true"
        placeholder="Телефон"
      ></the-mask>
    </label>

    <label class="form__input-wrapper" v-if="is_comment">
      <span class="form__input-wrapper__svg">
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.35 0.7C4.05361 0.7 0.7 3.51786 0.7 6.85C0.7 10.1821 4.05361 13 8.35 13C8.95118 13 9.53574 12.9442 10.0963 12.8388L10.2709 12.8059L10.4005 12.9276C11.1665 13.6467 11.7887 14.0887 12.4589 14.3891C12.8935 14.5839 13.3572 14.7233 13.9071 14.8363C13.6752 14.5545 13.4828 14.2783 13.327 13.9856C13.033 13.4331 12.8804 12.8435 12.8087 12.0788L12.7883 11.8614L12.9745 11.7475C14.8333 10.6105 16 8.82666 16 6.85C16 3.51786 12.6464 0.7 8.35 0.7ZM0 6.85C0 3.00244 3.80984 0 8.35 0C12.8902 0 16.7 3.00244 16.7 6.85C16.7 9.04976 15.4422 10.984 13.5284 12.2258C13.6006 12.8173 13.7312 13.255 13.9449 13.6567C14.187 14.1114 14.5469 14.5418 15.0997 15.1048L15.8218 15.8401L14.8013 15.6966C13.7534 15.5492 12.9346 15.3695 12.1726 15.0279C11.4494 14.7037 10.7964 14.2426 10.0507 13.558C9.50131 13.6511 8.93245 13.7 8.35 13.7C3.80984 13.7 0 10.6976 0 6.85Z"
              fill="#3E3F43"
            />
            <path
              d="M5.34998 6.84998C5.34998 7.12612 5.12612 7.34998 4.84998 7.34998C4.57383 7.34998 4.34998 7.12612 4.34998 6.84998C4.34998 6.57383 4.57383 6.34998 4.84998 6.34998C5.12612 6.34998 5.34998 6.57383 5.34998 6.84998Z"
              fill="#3E3F43"
            />
            <path
              d="M8.84998 6.84998C8.84998 7.12612 8.62612 7.34998 8.34998 7.34998C8.07383 7.34998 7.84998 7.12612 7.84998 6.84998C7.84998 6.57383 8.07383 6.34998 8.34998 6.34998C8.62612 6.34998 8.84998 6.57383 8.84998 6.84998Z"
              fill="#3E3F43"
            />
            <path
              d="M12.35 6.84998C12.35 7.12612 12.1261 7.34998 11.85 7.34998C11.5738 7.34998 11.35 7.12612 11.35 6.84998C11.35 6.57383 11.5738 6.34998 11.85 6.34998C12.1261 6.34998 12.35 6.57383 12.35 6.84998Z"
              fill="#3E3F43"
            />
          </g>
        </svg>
      </span>

      <textarea
        name="comment"
        :id="form_id + '_input_comment'"
        placeholder="Комментарий"
        v-model="comment"
      ></textarea>
    </label>

    <v-select
      :searchable="false"
      :options="['Автомобили', 'Сервис']"
      placeholder="Цель вашего обращения?"
      v-if="!is_comment"
      class="form__select"
      taggable
      v-model="selectedOption"
    >
    </v-select>

    <div class="control-group">
      <label
        :for="form_id + '_checkbox_personal_data'"
        class="control control-checkbox"
        >Я согласен на
        <a
          :href="'/' + $store.state.city.value + '/privacy'"
          class="event"
          target="_blank"
          >обработку персональных данных</a
        >
        <input
          type="checkbox"
          :id="form_id + '_checkbox_personal_data'"
          v-model="status"
        />
        <div class="control_indicator"></div>
      </label>
    </div>

    <button
      :id="form_id + '_button'"
      :click="send"
      class="event feedback__form__submit"
      :class="{ preloader: isLoading }"
      v-bind:disabled="isButtonDisabled"
    >
      {{ button_text }}
    </button>

    <PhoneSelection :id="form_id + '_call'"
                    :goal="goal_call"
                    class="callibri_phone btn-position event feedback__form__call"
                    text="Позвонить"/>
<!--    <a
      :id="form_id + '_call'"
      :href="'tel:' + $store.state.city.phone"
      :data-goal="goal_call"
      @click="sendGoals(goal_call)"
      class="callibri_phone btn-position event feedback__form__call"
      >Позвонить</a
    >-->

    <div class="validation-message-wrap">
      <div class="model-choose-text warning validation-message" v-show="error">
        <p>Введите 11-значный номер!</p>
      </div>
      <div
        class="model-choose-text success validation-message"
        v-show="success"
      >
        <p>Заявка отправлена!</p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormCommon",
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
    }
  },
  data: function() {
    return {
      success: false,
      error: false,
      name: "",
      phone: "",
      status: true,
      isLoading: false,
      comment: "",
      bitrix_responsible: "", // $store.state.city.bitrix_responsible_id,
      city: "", // $store.state.city.value,
      utm: {},
      selectedOption: null
    };
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
      this.comment = null;
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

<style lang="scss" scoped>
@import "./assets/scss/_controls.scss";

form button.preloader:disabled {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  color: rgba(255, 255, 255, 0);
  background-color: $main-color !important;
  &:after {
    content: "";
    background: url(~static/images/icons/animations/dots.svg) no-repeat center
      center;
    z-index: 10;
    height: 18px;
    display: block;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 14px;
  }
}

.warning,
.success {
  text-align: center;
  line-height: 1.2;
  margin: 18px auto;
  border-radius: 8px;
  padding: 15px;
  font-size: 16px;
  max-width: 340px;
}

.warning {
  p {
    color: #ff7777;
  }
}

.success {
  background-color: #dafbcc;

  p {
    margin: 0 !important;
    color: #30c130;
  }
}

.validation-message-wrap {
  height: auto;

  .success,
  .error {
    margin-bottom: 0;
  }
}

.feedback__form__submit {
  @include basic-button(
    $width: 80%,
    $maxWidth: 340px,
    $height: 48px,
    $fz: 16px
  );

  @media screen and (min-width: 768px) {
    max-width: unset;
  }
}

.feedback__form__call {
  @include basic-button(
    $width: 80%,
    $maxWidth: 340px,
    $height: 48px,
    $bgColor: $secondary-color,
    $fz: 16px
  );

  @media screen and (min-width: 768px) {
    max-width: unset;
  }
}
</style>

<style lang="scss">
.form__select {
  grid-area: comment;
  height: 48px;
  background: #f8f8f8;
  font-size: 16px;
  color: rgba(57, 56, 64, 1);

  .vs__dropdown-toggle {
    height: 48px;
    padding: 0;
    border-color: #e9e9e9;
    background: #f8f8f8;
  }

  .vs__selected {
    top: 0;
    bottom: 0;
  }

  .vs__dropdown-menu {
    background: #f8f8f8;
    box-shadow: 0 -1px 3px rgba(37, 37, 37, 0.15);
    border-color: #e9e9e9;
  }

  .vs__search {
    color: #757575;
    border: none;
  }
}
</style>
