<template>
  <section class="consult">
    <img
      src="../../static/images/consult_block/girl.png"
      alt=""
      class="consult__girl"
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
            v-model="phone"
            type="tel"
            required="true"
            placeholder="Телефон"
          ></the-mask>
        </div>

        <div class="consult__form__part">
          <textarea name="comment" placeholder="Комментарий"></textarea>
        </div>
      </div>

      <button class="consult__form__submit">
        Отправить заявку
      </button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Consult"
};
</script>

<style lang="scss" scoped>
.consult {
  background: #504ea0;
  padding: 30px 90px;
  position: relative;
}

.consult__head {
  color: white;
  margin-bottom: 20px;

  h3 {
    text-align: left;
    text-transform: unset;
    margin-bottom: 3px;
    font-size: 30px;
  }

  p {
    font-size: 14px;
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
}

.consult__form__part {
  width: fit-content;
  margin: 0;

  &:first-child {
    margin-right: 20px;
  }
}

.consult__girl {
  position: absolute;
  right: 95px;
  bottom: 0;
  width: 365px;
  z-index: 1;
  pointer-events: none;
}

.consult__texture {
  position: absolute;
  right: 0;
  bottom: 0;
  pointer-events: none;
  width: 400px;
}

.consult__form__submit {
  border-radius: 5px;
  color: #504ea0;
  background: #ffca0d;
  width: 250px;
  font-size: 16px;
  margin: 20px 0 0;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    opacity: 0.6;
  }
}
</style>
