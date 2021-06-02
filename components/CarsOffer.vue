<template>
  <section class="cars-offer">
    <div class="container">
      <div class="cars-offer__content">
        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="../static/images/cars-offer/vesta-bg.jpg" alt="Vesta" />
          </div>

          <div class="cars-offer__content__item__car">
            <img src="../static/images/cars-offer/vesta.png" alt="Vesta" />
          </div>
          <h4 class="cars-offer__content__item__title">
            <nuxt-link
              :to="
                '/' + $store.state.city.value + '/' + 'vesta' + '/' + 'sedan'
              "
              :id="$store.state._page + '__models__' + 'vesta'"
              class="event"
            >
              Vesta
            </nuxt-link>
          </h4>

          <div class="cars-offer__content__item__info">
            <p class="cars-offer__content__item__info__price">
              от 733 900 ₽
            </p>

            <nuxt-link class="cars-offer__content__item__info__credit" :to="'/' + $store.state.city.value + '/' + 'credit'">
              <span>кредит от 5 511 ₽/мес.</span>*
            </nuxt-link>

            <button
              class="cars-offer__content__item__info__test-drive"
              type="button"
              v-on:click.prevent="
                show(
                  'Записаться на тест-драйв',
                  $store.state._page + '__modal-models-test-drive_',
                  'Записаться',
                  1,
                  'test_drive'
                )
              "
            >
              Записаться на тест-драйв
            </button>

            <p class="cars-offer__content__item__info__credit-info">
              * Процентная ставка 8,25% годовых, при первоначальном взносе 40%,
              срок 3 года. ПАО Совком Банк.
            </p>
          </div>
        </div>

        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="../static/images/cars-offer/granta-bg.jpg" alt="Granta" />
          </div>

          <div class="cars-offer__content__item__car">
            <img src="../static/images/cars-offer/granta.png" alt="Granta" />
          </div>
          <h4 class="cars-offer__content__item__title">
            <nuxt-link
              :to="
                '/' + $store.state.city.value + '/' + 'granta' + '/' + 'sedan'
              "
              :id="$store.state._page + '__models__' + 'granta'"
              class="event"
            >
              Granta
            </nuxt-link>
          </h4>

          <div class="cars-offer__content__item__info">
            <p class="cars-offer__content__item__info__price">
              от 504 900 ₽
            </p>

            <nuxt-link class="cars-offer__content__item__info__credit" :to="'/' + $store.state.city.value + '/' + 'credit'">
              <span>кредит от 3 842 ₽/мес.</span>*
            </nuxt-link>

            <button
              class="cars-offer__content__item__info__test-drive"
              type="button"
              v-on:click.prevent="
                show(
                  'Записаться на тест-драйв',
                  $store.state._page + '__modal-models-test-drive_',
                  'Записаться',
                  1,
                  'test_drive'
                )
              "
            >
              Записаться на тест-драйв
            </button>

            <p class="cars-offer__content__item__info__credit-info">
              * Процентная ставка 8,25% годовых, при первоначальном взносе 40%,
              срок 3 года. ПАО Совком Банк.
            </p>
          </div>
        </div>

        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="../static/images/cars-offer/xray-bg.jpg" alt="Xray" />
          </div>

          <div class="cars-offer__content__item__car">
            <img src="../static/images/cars-offer/xray.png" alt="xray" />
          </div>
          <h4 class="cars-offer__content__item__title">
            <nuxt-link
              :to="'/' + $store.state.city.value + '/' + 'xray' + '/' + 'cross'"
              :id="$store.state._page + '__models__' + 'xray'"
              class="event"
            >
              Xray
            </nuxt-link>
          </h4>

          <div class="cars-offer__content__item__info">
            <p class="cars-offer__content__item__info__price">
              от 691 900 ₽
            </p>

            <nuxt-link class="cars-offer__content__item__info__credit" :to="'/' + $store.state.city.value + '/' + 'credit'">
              <span>кредит от 5 205 ₽/мес.</span>*
            </nuxt-link>

            <button
              class="cars-offer__content__item__info__test-drive"
              type="button"
              v-on:click.prevent="
                show(
                  'Записаться на тест-драйв',
                  $store.state._page + '__modal-models-test-drive_',
                  'Записаться',
                  1,
                  'test_drive'
                )
              "
            >
              Записаться на тест-драйв
            </button>

            <p class="cars-offer__content__item__info__credit-info">
              * Процентная ставка 8,25% годовых, при первоначальном взносе 40%,
              срок 3 года. ПАО Совком Банк.
            </p>
          </div>
        </div>

        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="../static/images/cars-offer/largus-bg.jpg" alt="Largus" />
          </div>

          <div class="cars-offer__content__item__car">
            <img src="../static/images/cars-offer/largus.png" alt="Largus" />
          </div>
          <h4 class="cars-offer__content__item__title">
            <nuxt-link
              :to="
                '/' +
                  $store.state.city.value +
                  '/' +
                  'largus' +
                  '/' +
                  'universal'
              "
              :id="$store.state._page + '__models__' + 'largus'"
              class="event"
            >
              Largus
            </nuxt-link>
          </h4>

          <div class="cars-offer__content__item__info">
            <p class="cars-offer__content__item__info__price">
              от 702 900 ₽
            </p>

            <nuxt-link
              class="cars-offer__content__item__info__credit"
              :to="'/' + $store.state.city.value + '/' + 'credit'"
            >
              <span>кредит от 5 285 ₽/мес.</span>*
            </nuxt-link>

            <button
              class="cars-offer__content__item__info__test-drive"
              type="button"
              v-on:click.prevent="
                show(
                  'Записаться на тест-драйв',
                  $store.state._page + '__modal-models-test-drive_',
                  'Записаться',
                  1,
                  'test_drive'
                )
              "
            >
              Записаться на тест-драйв
            </button>

            <p class="cars-offer__content__item__info__credit-info">
              * Процентная ставка 8,25% годовых, при первоначальном взносе 40%,
              срок 3 года. ПАО Совком Банк.
            </p>
          </div>
        </div>

        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="../static/images/cars-offer/travel-bg.jpg" alt="Niva" />
          </div>

          <div class="cars-offer__content__item__car">
            <img src="../static/images/cars-offer/travel.png" alt="Niva" />
          </div>

          <h4 class="cars-offer__content__item__title">
            <nuxt-link
              :to="
                '/' + $store.state.city.value + '/' + 'niva' + '/' + 'travel'
              "
              :id="$store.state._page + '__models__' + 'niva'"
              class="event"
            >
              Niva Travel
            </nuxt-link>
          </h4>

          <div class="cars-offer__content__item__info">
            <p class="cars-offer__content__item__info__price">
              от 779 900 ₽
            </p>

            <nuxt-link
              class="cars-offer__content__item__info__credit"
              :to="'/' + $store.state.city.value + '/' + 'credit'"
            >
              <span>кредит от 5 846 ₽/мес.</span>*
            </nuxt-link>

            <button
              class="cars-offer__content__item__info__test-drive"
              type="button"
              v-on:click.prevent="
                show(
                  'Записаться на тест-драйв',
                  $store.state._page + '__modal-models-test-drive_',
                  'Записаться',
                  1,
                  'test_drive'
                )
              "
            >
              Записаться на тест-драйв
            </button>

            <p class="cars-offer__content__item__info__credit-info">
              * Процентная ставка 8,25% годовых, при первоначальном взносе 40%,
              срок 3 года. ПАО Совком Банк.
            </p>
          </div>
        </div>

        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="../static/images/cars-offer/legend-bg.jpg" alt="Legend" />
          </div>

          <div class="cars-offer__content__item__car">
            <img src="../static/images/cars-offer/legend.png" alt="Legend" />
          </div>

          <h4 class="cars-offer__content__item__title">
            <nuxt-link
              :to="
                '/' +
                  $store.state.city.value +
                  '/' +
                  '4x4' +
                  '/' +
                  'three-doors'
              "
              :id="$store.state._page + '__models__' + '4x4'"
              class="event"
            >
              legend
            </nuxt-link>
          </h4>

          <div class="cars-offer__content__item__info">
            <p class="cars-offer__content__item__info__price">
              от 619 900 ₽
            </p>

            <nuxt-link
              class="cars-offer__content__item__info__credit"
              :to="'/' + $store.state.city.value + '/' + 'credit'"
            >
              <span>кредит от 4 680 ₽/мес.</span>*
            </nuxt-link>

            <button
              class="cars-offer__content__item__info__test-drive"
              type="button"
              v-on:click.prevent="
                show(
                  'Записаться на тест-драйв',
                  $store.state._page + '__modal-models-test-drive_',
                  'Записаться',
                  1,
                  'test_drive'
                )
              "
            >
              Записаться на тест-драйв
            </button>

            <p class="cars-offer__content__item__info__credit-info">
              * Процентная ставка 8,25% годовых, при первоначальном взносе 40%,
              срок 3 года. ПАО Совком Банк.
            </p>
          </div>
        </div>
      </div>
    </div>

    <modal name="form-callback3" height="auto" :adaptive="true">
      <div :id="form_id + '_close'" class="close event" @click="hide"></div>
      <FormBuy2Component
        :form_title="form_title"
        :form_id="form_id"
        :button_text="button_text"
        :form_type="form_type"
        :goal="goal"
      >
      </FormBuy2Component>
    </modal>
  </section>
</template>

<script>
export default {
  name: "CarsOffer",
  data: function() {
    return {
      models: [],
      form_id: "",
      form_title: "",
      button_text: "",
      form_type: 1,
      goal: ""
    };
  },
  filters: {
    correction: function(value) {
      let tmp_value = value;
      if (tmp_value === "4x4 | Legend") {
        tmp_value = "Legend";
      }

      return tmp_value;
    }
  },

  mounted() {
    console.log(this.$store.state);
  },

  async fetch() {
    const models = await fetch(
      process.env.apiUrl + `/api/models_list`
    ).then(res => res.json());

    this.models = this.models.concat(models);
  },

  methods: {
    show(title, form_id, button_text, form_type, goal) {
      this.form_title = title;
      this.form_id = form_id;
      this.button_text = button_text;
      this.form_type = form_type; // 1 - обычная форма, 2 - форма сервиса
      this.goal = goal;

      //  console.log(this.$modal);
      this.$modal.show("form-callback3");
      /*      () => {
             callibriInit();
           }*/
    },
    hide() {
      this.$modal.hide("form-callback3");
    },
    created() {
      //  this.modalWidth = window.innerWidth -20
    }
  }
};
</script>

<style scoped lang="scss">
.cars-offer__content__item {
  width: 100%;
  max-width: 320px;
  height: 250px;
  box-shadow: 0 0 12px rgba(37, 37, 37, 0.3);
  position: relative;
  margin-bottom: 25px;
  overflow: hidden;
  display: flex;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.01);
    transition: 0.2s ease;
    .cars-offer__content__item__car {
      transition: 0.8s ease;
      left: 20px;
    }
  }

  @media (min-width: 768px) {
    max-width: unset;
  }
}
.cars-offer__content__item__bg {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: -1;
  img {
    width: 100%;
    height: 225px;
  }
}

.cars-offer__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 5px 0;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 50px 15px 0;
    grid-column-gap: 20px;
  }

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 50px 15px 0;
  }
}

.cars-offer__content__item__car {
  position: absolute;
  left: -50px;
  top: 0;
  width: 100%;
  transition: 0.8s ease-out;
  pointer-events: none;

  img {
    width: 80%;
    max-width: 290px;
  }
}

.cars-offer__content__item__title {
  color: #000;
  text-decoration: underline;
  font-weight: 400;
  position: absolute;
  top: 25px;
  right: 25px;

  a {
    transition: .2s;
    color: #000;
    text-transform: uppercase;
    font-size: 18px;
  }

  &:hover {
    a {
      color: #e95909;
      transition: .2s;
    }
  }
}

.cars-offer__content__item__info {
  align-self: flex-end;
  flex-direction: column;
  display: flex;
  padding: 15px 25px;
}

.cars-offer__content__item__info__price {
  font-size: 18px;
  font-weight: 700;
}

.cars-offer__content__item__info__credit {
  color: #e95909;
  margin: 8px 0 10px;
  font-weight: 400;
  font-size: 14px;
  transition: .2s;

  span {
    text-decoration: underline;
  }

  &:hover {
    opacity: .6;
    transition: .2s;
  }
}

.cars-offer__content__item__info__test-drive {
  font-weight: 300;
  color: #373737;
  text-decoration: underline;
  font-size: 14px;
  background: none;
  width: fit-content;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: .2s;

  &:hover {
    color: #e95909;
    transition: .2s;
  }
}

.cars-offer__content__item__info__credit-info {
  font-size: 8px;
  color: #373737;
  margin-top: 9px;
}
</style>
