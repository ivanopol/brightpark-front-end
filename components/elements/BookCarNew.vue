<template>
<section class="book">
  <div class="container book__container">
    <div class="book__inner">
      <div class="book__text">
        <h2 class="book__title">
          Забронируйте свой автомобиль
        </h2>

        <p class="book__desc">
          Оставьте свои контакты, менеджер свяжется с вами в ближайшее время
        </p>
      </div>

      <form class="book__form">
        <div class="book__form__fields">
          <div class="book__form__field">
            <p class="book__form__field__placeholder" :class="[name !== '' ? activePlaceholder : '']">
              Ваше имя
            </p>

            <input type="text" v-model="name" @focus="focusedInput('name')" @blur="bluredInput('name')">
          </div>

          <div class="book__form__field">
            <p class="book__form__field__placeholder" :class="[phone !== '' ? activePlaceholder : '']">
              Номер телефона
            </p>

            <input type="text" v-model="phone" @focus="focusedInput('phone')" @blur="bluredInput('phone')">
          </div>

        </div>

        <ButtonNew
          :button-text="buttonText"
          class="book__form__submit"
        />
      </form>

      <img src="~static/images/consult_block/girl.png" alt="" class="book__inner__girl">
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "BookCarNew",

  data: function () {
    return {
      buttonText: 'Оставить заявку',
      phone: '',
      name: '',
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
.book__form__fields {
  @media (min-width: 1024px) {
    display: grid;
    max-width: 570px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
    width: 100%;
  }
}

.book__inner {
  background: #514EA1;
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
    font-size: 14px;
    top: 12px;
    transition: .2s ease;
  }
}

.book__form__submit {
  height: 60px;

  @media (min-width: 1024px) {
    margin: 20px 0 0;
    max-width: 270px;
  }
}

.book__inner__girl {
  pointer-events: none;
  max-width: 200px;
  position: absolute;
  right: 0;
  top: -20px;
  display: none;
  @media (min-width: 1024px) {
    max-width: 450px;
    bottom: 0;
    display: block;
    top: unset;
  }
}
</style>
