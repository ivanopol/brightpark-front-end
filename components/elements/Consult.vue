<template>
  <section class="consult">
    <img
      src="../../static/images/consult_block/girl.png"
      alt=""
      class="consult__girl"
    />
    <img
      src="../../static/images/consult_block/texture-mob.png"
      alt=""
      class="consult__texute_mobile"
    />
    <img
      src="../../static/images/consult_block/texture.png"
      alt=""
      class="consult__texture"
    />

    <header class="consult__head">
      <h3>
        Проконсультируем по всем вопросам!
      </h3>

      <p>
        Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время.
      </p>
    </header>

    <form class="consult__form">
      <div class="consult__form__fields">
        <div class="consult__form__part">
          <input type="text" placeholder="Имя" />

          <the-mask
            :id="form_id + '_input_phone'"
            pattern=".{18,}"
            mask="+# (###)-###-##-##"
            type="tel"
            required="true"
            placeholder="Телефон"
          ></the-mask>
        </div>

        <div class="consult__form__part">
          <textarea name="comment" placeholder="Комментарий"></textarea>
        </div>
      </div>


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

      <button class="consult__form__submit" v-bind:disabled="isButtonDisabled">
        Отправить заявку
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Consult",

  data: function() {
    return {
      status: true,
    }
  },

  computed: {
    isButtonDisabled: function() {
      return !this.status;
    }
  },

};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_controls.scss";

.consult {
  background: #504ea0;
  padding: 30px 90px;
  position: relative;

  @media (max-width: 768px) {
    padding: 30px;
  }
}

.consult__head {
  color: white;
  margin-bottom: 20px;

  h3 {
    text-align: left;
    text-transform: unset;
    margin-bottom: 3px;
    font-size: 30px;
    font-family: "Bright Park Display";
  }

  p {
    font-size: 14px;
    font-family: "Factor A";
  }

  @media (max-width: 650px) {
    h3 {
      font-size: 26px;
      line-height: 1;
      margin-bottom: 5px;
    }
  }
}

.consult__form__fields {
  display: flex;

  input,
  textarea {
    font-size: 14px;
    display: block;
    background: none;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    font-family: "Factor A";

    &::placeholder {
      color: white;
    }
  }

  input {
    height: 40px;
    width: 250px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  textarea {
    width: 330px;
    height: 100%;
    resize: none;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;

    input {
      width: 330px;
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 12px;
      }
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    input,
    textarea {
      width: 100%;
    }
  }
}
.consult__form__part {
  width: fit-content;
  margin: 0;

  &:first-child {
    margin-right: 20px;
  }

  @media (max-width: 650px) {
    &:first-child {
      margin-right: 0;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
  }
}

.consult__girl {
  position: absolute;
  right: 95px;
  bottom: 0;
  width: 365px;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 1366px) {
    display: none;
  }
}

.consult__texture {
  position: absolute;
  right: 0;
  bottom: 0;
  pointer-events: none;
  width: 400px;

  @media (max-width: 1366px) {
    width: 348px;
  }

  @media (max-width: 860px) {
    display: none;
  }
}

.consult__texute_mobile {
  display: none;

  @media (max-width: 860px) {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    pointer-events: none;
    width: 300px;
  }
}

.consult__form__submit {
  border-radius: 5px;
  color: #504ea0;
  background: #ffca0d;
  width: 250px;
  font-size: 16px;
  margin: 20px 0 0;
  transition: 0.2s;
  font-family: "Bright Park Display";

  &:hover {
    transition: 0.2s;
    opacity: 0.6;
  }

  @media (max-width: 650px) {
    margin: auto;
    width: 330px;
    z-index: 1;
    position: relative;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
}

.control-group {
  width: 100%;
  margin: 15px 0;
  max-width: unset;


  .control {
    color: white;
    a {
      color: white;
      border-color: white;
    }
  }
}
</style>
