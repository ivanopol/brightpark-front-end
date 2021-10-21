<template>
  <section class="order-call" :class="backgroundClassSecondary">
    <svg width="200" height="203" viewBox="0 0 200 203" fill="none" xmlns="http://www.w3.org/2000/svg" class="order-call__decor">
      <path d="M33.3875 156.178L200 203V0L12.8319 44.9948C3.85682 47.1524 -1.58805 54.8934 0.413581 62.6501L21.7037 145.153C23.0389 150.327 27.48 154.518 33.3875 156.178Z" :class="fillClassSecondary"/>
    </svg>

    <img src="~static/images/order-call-girl.png" alt="" class="order-call__girl">


    <div class="order-call__head">
      <h2 class="order-call__heading">
        {{form_title}}
      </h2>

      <p class="order-call__desc">
        Оставте заявку на звонок, мы свяжемся с вами в ближайшее время и ответим на все, возникшие у вас вопросы
      </p>
    </div>

    <form
      class="order-call__body"
      :id="form_id"
      action="#"
      method="POST"
      name="feedback"
      @submit="send"
      :data-goal="goal"
    >
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
        />
        <span class="input-field__placeholder" :class="[phone !== '' ? 'active' : false]">Контактный телефон</span>
      </div>

      <ButtonNew
              :buttonColor="backgroundClassPrimary"
              :button-text="buttonText"
              class="order-call__submit"
              :class="{ preloader: isLoading }"
              v-bind:disabled="isButtonDisabled"
              >
      </ButtonNew>
    </form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      status: true,
      isLoading: false,
      buttonText: 'Заказать звонок',
      name: '',
      phone: '',
      form_id: 'models__order-call_',
      form_title: 'Заказать звонок',
      form_type: 1,
      goal: 'model_order_call',
      comment: '',
      utm: '',
      backgroundClassPrimary: 'color-primary-background',
      backgroundClassSecondary: 'color-secondary-background',
      fillClassSecondary: 'color-primary-fill',
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
      this.phone = '';
      this.name = '';
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
  created() {
/*    if (this.$route.params.models === 'vesta' || this.$route.params.models === 'xray') {
      this.backgroundClassPrimary = 'color-secondary-background'
      this.backgroundClassSecondary = 'color-primary-background'
      this.fillClassSecondary = 'color-secondary-fill'
    }*/
  },
}
</script>


<style lang="scss" scoped>
.order-call {
  padding: 30px 10px;
  position: relative;
  @media (min-width: 1367px) {
    padding: 35px 40px;
    border-radius: 10px;
    margin-top: 45px;
  }
}

.order-call__heading {
  margin-bottom: 10px;
  font-family: "Bright Park Display";
  font-size: 28px;
  font-weight: 700;
  text-transform: none;
  color: white;

  @media (min-width: 1367px) {
    font-size: 32px;
  }
}

.order-call__desc {
  color: white;
  font-size: 16px;
  font-family: 'Factor A', sans-serif;

  @media (min-width: 1367px) {
    font-size: 12.5px;
  }
}

.order-call__decor {
  position: absolute;
  right: -130px;
  top: -100px;

  @media (min-width: 1367px) {
    top: unset;
    bottom: -7px;
    right: 0;
  }
}

.order-call__head {
  position: relative;
  z-index: 1;
}

.order-call__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 991.97px) {
    flex-direction: row;
    column-gap: 10px;
  }

  @media (min-width: 1367px) {
    column-gap: 30px;
  }
}

.input-field {
  position: relative;
  max-width: 340px;
  width: 100%;
  margin: 0 0 15px;

  input {
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
    margin: 0;

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

  @media (min-width: 991.97px) {
    margin-bottom: 0;
  }

  @media (min-width: 1367px) {
    max-width: 270px;
  }
}

.input-field__placeholder {
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

  .order-call__submit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 340px;
    width: 100%;
    height: 60px;
    border-radius: 5px;
    border: none;
    font-family: "Factor A";
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    margin: 0;

    @media (min-width: 1367px) {
      max-width: 270px;
    }
  }

  .order-call__girl {
    display: none;

    @media (min-width: 1367px) {
      display: block;
      pointer-events: none;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
</style>
