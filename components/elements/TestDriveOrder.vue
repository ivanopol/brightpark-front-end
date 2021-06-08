<template>
  <div class="test-drive">
    <h4 class="test-drive__heading">
      Записаться на тест-драйв
    </h4>
    <form class="test-drive__form">
      <input type="text" placeholder="Ваше имя" />
      <the-mask
        :id="form_id + '_input_phone'"
        pattern=".{18,}"
        mask="+# (###)-###-##-##"
        v-model="phone"
        type="tel"
        required="true"
        placeholder="Номер телефона"
      ></the-mask>

      <div class="test-drive__form__row">
        <v-date-picker
          v-model="date"
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
          mask="##:##"
        />
      </div>

      <div class="test-drive__form__select-wrap">
        <v-select
          class="test-drive__form__select"
          :options="cars"
          placeholder="Выберите автомобиль"
          taggable
          v-model="selectedCar"
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
          <a href="https://brightpark.ru/perm/privacy" target="_blank">Политикой конфиденциальности</a>
        </span>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "TestDriveOrder",
  data: function() {
    return {
      date: new Date(),
      calendarLocale: 'ru-RU',
      selectedCar: "",

      cars: [
        "Granta SD AT",
        "Largus Cross",
        "Vesta Cross SW",
        "X-RAY Cross AT",
        "NIVA"
      ]
    };
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
