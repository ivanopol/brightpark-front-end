<template>
<section class="book">
  <div class="container book__container">
    <div class="book__inner color-primary-background">
      <div class="book__text">
        <h2 class="book__title">
          {{form_title}}
        </h2>

        <p class="book__desc">
          Оставьте свои контакты, менеджер свяжется с вами в ближайшее время
        </p>
      </div>

      <form
        class="book__form"
        :id="form_id"
        action="#"
        method="POST"
        name="feedback"
        @submit="send"
        :data-goal="goal"
      >
        <div class="book__form__fields">
          <div class="book__form__field">
            <input type="text" v-model="name">

            <p class="book__form__field__placeholder" :class="[name !== '' ? activePlaceholder : '']">
              Ваше имя
            </p>
          </div>

          <div class="book__form__field">
            <the-mask
              :id="form_id + '_input_phone'"
              pattern=".{18,}"
              mask="+# (###)-###-##-##"
              v-model="phone"
              type="tel"
              required="true"
            ></the-mask>

            <p class="book__form__field__placeholder" :class="[phone !== '' ? activePlaceholder : '']">
              Номер телефона
            </p>

<!--            <input type="text" v-model="phone" @focus="focusedInput('phone')" @blur="bluredInput('phone')">-->
          </div>

        </div>

        <ButtonNew
          buttonColor="color-secondary-background"
          :button-text="buttonText"
          class="book__form__submit"
          :class="{ preloader: isLoading }"
          v-bind:disabled="isButtonDisabled"
        />
      </form>

      <img src="~static/images/book-car-figure.png" alt="Фон Оставьте свои контакты" class="book__inner__figure" loading="lazy">
      <img src="~static/images/book-girl.png" alt="Оставьте свои контакты" class="book__inner__girl-mob" loading="lazy">
      <img src="~static/images/book-girl-desk.png" alt="Оставьте свои контакты" class="book__inner__girl" loading="lazy">

    </div>

    <modal name="thanks-modal" height="auto" :adaptive="true" class="thanks-modal">
      <div id="thanks_modal_close" class="close event" @click="hide('thanks-modal')"></div>
      <ModalThanks />
    </modal>
  </div>
</section>
</template>

<script>
export default {
  name: "BookCarNew",

  data: function () {
    return {
      status: true,
      isLoading: false,
      result: false,
      buttonText: 'Забронировать',
      phone: '',
      name: '',
      activePlaceholder: 'active',
      form_id: 'models__book-your-car_',
      form_title: 'Забронируйте свой автомобиль',
      form_type: 1,
      goal: 'model_book_request',
      utm: '',
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
    url: function () {
      return {
        href: window.location.href,
        search: window.location.search
      };
    },
  },
  methods: {
    show(modal) {
      this.$modal.show(modal);
      document.body.style.overflow = 'hidden';
    },

    hide(modal) {
      this.$modal.hide(modal);
      document.body.style.overflow = 'unset';
    },
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

          this.$modal.show('thanks-modal');
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

    decodeCookie(obj) {
      return JSON.parse(decodeURIComponent(escape(atob(obj))));
    },
  },
  mounted() {
    if (this.$cookies.get("bp_uid") !== undefined) {
      this.utm = this.decodeCookie(this.$cookies.get("bp_uid"));
    }
  },

}
</script>

<style scoped lang="scss">
@import "./assets/scss/_colors.scss";

.book__form__fields {
  @media (min-width: 1024px) {
    display: grid;
    max-width: 570px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    width: 100%;
  }
}

.book__container {
  overflow: unset;
}

.book__text {
  position: relative;
  z-index: 1;
}

.book__inner {
  padding: 35px 20px;
  position: relative;

  @media (min-width: 1024px) {
    padding: 58px;
  }
}
.book__title {
  font-family: "Bright Park Display";
  font-size: 28px;
  color: white;
  text-transform: unset;

  @media (min-width: 1024px) {
    font-size: 36px;
  }
}

.book__desc {
  font-family: "Factor A";
  font-size: 16px;
  line-height: 22px;
  color: white;
  margin-top: 7px;
}

.book__form {
  margin-top: 25px;
}

.book__form__fields {
  width: 100%;

  @media (min-width: 1024px) {
    margin: 0;
  }
}

.book__form__field {
  position: relative;
  input {
    height: 60px;
    margin-bottom: 10px;
    padding: 10px 27px 0;
    color: white;
    font-weight: 500;
    font-size: 18px;
    border: none;
    background: rgba(255, 255, 255, .2);
    width: 100%;
    max-width: unset;
    font-family: 'Factor A';

    &:focus + .book__form__field__placeholder {
      font-size: 12px;
      top: 16px;
      left: 26px;
      transition: .2s ease;
    }
  }
}

.book__form__field__placeholder {
  position: absolute;
  left: 27px;
  top: 43%;
  transform: translate(0, -50%);
  color: white;
  font-size: 18px;
  transition: .2s ease;
  pointer-events: none;
  font-family: "Factor A";

  &.active {
    font-size: 12px;
    top: 16px;
    left: 26px;
    transition: .2s ease;
  }
}

.book__form__submit {
  position: relative;
  height: 60px;

  @media (min-width: 1024px) {
    margin: 20px 0 0;
    max-width: 270px;
  }

  &:hover {
    box-shadow: 0 3px 5px rgba(255, 255, 255, .3);
  }
}

.book__inner__girl {
  display: none;

  @media (min-width: 1024px) {
    max-width: 380px;
    bottom: -60px;
    display: block;
    right: 0;
    position: absolute;
    pointer-events: none;
  }
}

.book__inner__girl-mob {
  pointer-events: none;
  max-width: 170px;
  position: absolute;
  right: -26px;
  top: -42px;
  @media (min-width: 1024px) {
    display: none;
  }
}

.book__inner__figure {
  display: none;

  @media (min-width: 1367px) {
    position: absolute;
    pointer-events: none;
    bottom: 0;
    right: 0;
    height: 100%;
    display: block;
  }
}
</style>
