<template>
  <section class="cars-offer">
    <div class="container">
      <h2 class="cars-offer__heading">
        Выбери свой автомобиль
      </h2>
      <div class="cars-offer__content">
        <div class="cars-offer__content__item" v-for="car in cars" :key="car.id">
          <div class="cars-offer__content__item__bg">
            <img :src="'/images/cars-offer/' + car.model.slug + '-bg.jpg'" :alt="car.model.title" />
          </div>

          <div class="cars-offer__content__item__car">
            <a :href="'/' + $store.state.city.value + '/' + car.model.slug + '/' + car.type.slug"
               :id="$store.state._page + '__models__' + car.model.slug + '__img'"
               class="event"
            >
              <img :src="'/images/cars-offer/' + car.model.slug + '.png'" :alt="car.model.title" />
            </a>
          </div>
          <h4 class="cars-offer__content__item__title">
            <a :href="'/' + $store.state.city.value + '/' + car.model.slug + '/' + car.type.slug"
               :id="$store.state._page + '__models__' + car.model.slug"
               class="event"
            >
              {{car.model.title}}
            </a>
          </h4>

          <div class="cars-offer__content__item__info">
            <p class="cars-offer__content__item__info__price">
              от {{car.price | formatPrice}} ₽
            </p>

            <div class="cars-offer__content__item__info__buttons">
             <a v-if="car.credit > 0"
                class="cars-offer__content__item__info__credit"
                :href="'/' + $store.state.city.value + '/credit?car_model=' + car.model.title +'&car_type=' + car.type.title_ru"
              >
                <span>кредит от {{car.credit | formatPrice}} ₽/мес.</span>
              </a>


              <button v-if="car.credit > 0"
                class="cars-offer__content__item__informer"
                @click.prevent="showInformer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#575757"
                >
                  <path
                    fill="#999"
                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"
                  />
                </svg>
              </button>

              <div class="cars-offer__informer-wrap">
                <button
                  class="cars-offer__informer-wrap__close"
                  @click.prevent="closeInformer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"
                    />
                  </svg>
                </button>
                <p>
                  {{ informerText }}
                </p>
              </div>
            </div>

            <div class="cars-offer__content__item__info__buttons">
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
                ">
                Записаться на тест-драйв
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal name="form-callback3" height="auto" :adaptive="true" class="test-drive-modal">
      <div :id="form_id + '_close'" class="close event" @click="hide"></div>

      <FormTestDriveOrder
        :form_id="form_id"
        :goal="goal"
      />
    </modal>
  </section>
</template>

<script>
import format_price from "@/mixins/format_price";

export default {
  name: "CarsOffer",
  mixins: [format_price],
  data: function() {
    return {
      cars: [],
      form_id: "",
      form_title: "",
      button_text: "",
      form_type: 1,
      goal: "",
      informerText:
        "Расчет указанного ежемесячного платежа является предварительным и подлежит уточнению перед или непосредственно при заключении договоров кредитования/страхования, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 ч.2 Гражданского кодекса Российской Федерации. Для получения подробной информации обращайтесь в салоны Брайт Парка."
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
  },

  async fetch() {
    const cars = await fetch(
      process.env.apiUrl + `/api/cars_offer`
    ).then(res => res.json());

    this.cars = cars;
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
    },

    showInformer(event) {
      const target = event.target;
      const wrapper = target.closest("div");

      wrapper.querySelector(".cars-offer__informer-wrap").classList.add("show");
    },

    closeInformer(event) {
      const target = event.target;
      const informer = target.closest(".cars-offer__informer-wrap");

      informer.classList.remove("show");
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

  a {
    display: block;
    width: fit-content;
  }
  img {
    width: 100%;
    max-width: 290px;
    pointer-events: none;
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
    transition: 0.2s;
    color: #000;
    text-transform: uppercase;
    font-size: 18px;
  }

  &:hover {
    a {
      color: #e95909;
      transition: 0.2s;
    }
  }
}

.cars-offer__content__item__info {
  align-self: flex-end;
  flex-direction: column;
  display: flex;
  padding: 15px 25px;
  width: 100%;
}

.cars-offer__content__item__info__price {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
}

.cars-offer__content__item__info__credit {
  color: #e95909;
  margin: 8px 0 10px;
  font-weight: 400;
  font-size: 14px;
  transition: 0.2s;

  span {
    text-decoration: underline;
  }

  &:hover {
    opacity: 0.6;
    transition: 0.2s;
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
  transition: 0.2s;

  &:hover {
    color: #e95909;
    transition: 0.2s;
  }
}

.cars-offer__content__item__info__credit-info {
  font-size: 8px;
  color: #373737;
  margin-top: 9px;
}

.cars-offer__heading {
  margin-bottom: 10px;
  text-align: center;
  font-family: PragmaticaLightCBold, Helvetica, sans-serif;
  padding-top: 15px;
}

.cars-offer__content__item__info__buttons {
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 1366px) {
    position: static;
  }
}
.cars-offer__content__item__informer {
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;

    path {
      transition: 0.2s;
      fill:#b8b5b5;
    }
  }

  &:hover {
    svg {
      path {
        fill: #e95909;
        transition: 0.2s;
      }
    }
  }
}

.cars-offer__informer-wrap {
  background: white;
  border-radius: 5px;
  position: absolute;
  top: -180px;
  right: 0;
  max-width: 350px;
  width: 100%;
  font-size: 12px;
  padding: 15px 30px 10px 10px;
  box-shadow: 0 0 10px rgba(37, 37, 37, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: 0.2s;

  p {
    max-width: 320px;
  }

  &:after {
    content: "";
    position: absolute;
    border: 10px solid transparent;
    border-top: 10px solid #9c9b9b;
    bottom: -20px;
    right: 152px;
  }

  &.show {
    opacity: 1;
    visibility: visible;
    transition: 0.2s;
  }

  @media (max-width: 1366px) {
    &:after {
      display: none;
    }
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, .9);
  }
}

.cars-offer__informer-wrap__close {
  position: absolute;
  right: 8px;
  top: 10px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  svg {
    transition: 0.2s;
    width: 17px;
    height: 17px;
  }

  &:hover {
    svg {
      fill: #e95909;
      transition: 0.2s;
    }
  }
}

</style>

<style lang="scss">
.test-drive-modal {
  .vm--modal {
    overflow: unset;
  }
}
</style>
