<template>
<div class="new-lead">
  <div class="new-lead__head">
    <h4 class="new-lead__title">
      Оставить заявку
    </h4>

    <p class="new-lead__desc">
      В&nbsp;ближайшее время мы&nbsp;свяжемся с&nbsp;вами, уточним все детали заявки,а также ответим на&nbsp;все возникшие у&nbsp;вас вопросы
    </p>
  </div>

  <form class="new-lead__body">
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
      class="new-lead__body__submit"
    >
      Оставить заявку
    </button>

    <p class="new-lead__body__copies">
      Нажимая кнопку «Оставить заявку», вы соглашаетесь с <span>условиями обработки и хранения персональных данных</span>
    </p>
  </form>


</div>
</template>

<script>
export default {
  name: "FormLeadNew",

  data: function () {
    return {
      name: '',
      phone: '',
      activePlaceholder: 'active'
    }
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
    }
  }
}
</script>

<style scoped lang="scss">
.new-lead {
  padding: 45px 60px;
  background: white;
  max-width: 570px;
  width: 100%;
}

.new-lead__body__submit {
  background: #514EA1;
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
  color: #514EA1;
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
    color: #514EA1;
    display: inline-block;
  }
}
</style>
