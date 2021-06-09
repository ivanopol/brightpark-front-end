<template>
  <section class="cars-offer">
    <div class="container">
      <h2 class="cars-offer__heading">
        Выбери свой автомобиль
      </h2>
      <div class="cars-offer__content">
        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="~static/images/cars-offer/vesta-bg.jpg" alt="Vesta" />
          </div>

          <div class="cars-offer__content__item__car">
            <nuxt-link
              :to="
                '/' + $store.state.city.value + '/' + 'vesta' + '/' + 'sedan'
              "
              :id="$store.state._page + '__models__' + 'vesta__img'"
              class="event"
            >
              <img src="~static/images/cars-offer/vesta.png" alt="Vesta" />
            </nuxt-link>
          </div>
          <h4 class="cars-offer__content__item__title">
            <nuxt-link
              :to="'/' + $store.state.city.value + '/' + 'vesta' + '/' + 'sedan'"
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

            <div class="cars-offer__content__item__info__buttons">
              <a
                class="cars-offer__content__item__info__credit"
                :href="
                '/' +
                  $store.state.city.value +
                  '/' +
                  'credit' +
                  '?car_model=Vesta&car_type=Седан'
              "
              >
                <span>кредит от 5 511 ₽/мес.</span>
              </a>


              <button
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
                "
              >
                Записаться на тест-драйв
              </button>
            </div>


          </div>
        </div>

        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="~static/images/cars-offer/granta-bg.jpg" alt="Granta" />
          </div>

          <div class="cars-offer__content__item__car">
            <nuxt-link
              :to="'/' + $store.state.city.value + '/' + 'granta' + '/' + 'sedan'"
              :id="$store.state._page + '__models__' + 'granta__img'"
              class="event"
            >
              <img src="~static/images/cars-offer/granta.png" alt="Granta" />
            </nuxt-link>
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

            <div class="cars-offer__content__item__info__buttons">
              <a
                class="cars-offer__content__item__info__credit"
                :href="
                '/' +
                  $store.state.city.value +
                  '/' +
                  'credit' +
                  '?car_model=Granta&car_type=Седан'
              "
              >
                <span>кредит от 3 842 ₽/мес.</span>
              </a>

              <button
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
                    fill="#575757"
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
                "
              >
                Записаться на тест-драйв
              </button>
            </div>


          </div>
        </div>

        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="~static/images/cars-offer/xray-bg.jpg" alt="Xray" />
          </div>

          <div class="cars-offer__content__item__car">
            <nuxt-link
              :to="'/' + $store.state.city.value + '/' + 'xray' + '/' + 'cross'"
              :id="$store.state._page + '__models__' + 'xray__img'"
              class="event"
            >
              <img src="~static/images/cars-offer/xray.png" alt="xray" />
            </nuxt-link>
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


            <div class="cars-offer__content__item__info__buttons">
              <a
                class="cars-offer__content__item__info__credit"
                :href="
                '/' +
                  $store.state.city.value +
                  '/' +
                  'credit' +
                  '?car_model=Xray&car_type=Cross'
              "
              >
                <span>кредит от 5 205 ₽/мес.</span>
              </a>

              <button
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
                    fill="#575757"
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
                "
              >
                Записаться на тест-драйв
              </button>
            </div>

          </div>
        </div>

        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="~static/images/cars-offer/largus-bg.jpg" alt="Largus" />
          </div>

          <div class="cars-offer__content__item__car">
            <nuxt-link
              :to="
                '/' +
                  $store.state.city.value +
                  '/' +
                  'largus' +
                  '/' +
                  'universal'
              "
              :id="$store.state._page + '__models__' + 'largus__img'"
              class="event"
            >
              <img src="~static/images/cars-offer/largus.png" alt="Largus" />
            </nuxt-link>
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

            <div class="cars-offer__content__item__info__buttons">
              <a
                class="cars-offer__content__item__info__credit event"
                :href="
                '/' +
                  $store.state.city.value +
                  '/' +
                  'credit' +
                  '?car_model=Largus&car_type=Universal'
              "
              >
                <span>кредит от 5 285 ₽/мес.</span>
              </a>

              <button
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
                    fill="#575757"
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
                "
              >
                Записаться на тест-драйв
              </button>
            </div>

          </div>
        </div>

        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="~static/images/cars-offer/travel-bg.jpg" alt="Niva" />
          </div>

          <div class="cars-offer__content__item__car">
            <nuxt-link
              :to="
                '/' + $store.state.city.value + '/' + 'niva' + '/' + 'travel'
              "
              :id="$store.state._page + '__models__' + 'niva__img'"
              class="event"
            >
              <img src="~static/images/cars-offer/travel.png" alt="Niva" />
            </nuxt-link>
          </div>

          <h4 class="cars-offer__content__item__title">
            <nuxt-link
              :to="'/' + $store.state.city.value + '/' + 'niva' + '/' + 'travel'"
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


            <div class="cars-offer__content__item__info__buttons">
              <a
                class="cars-offer__content__item__info__credit event"
                :href="
                '/' +
                  $store.state.city.value +
                  '/' +
                  'credit' +
                  '?car_model=Niva&car_type=Niva'
              "
              >
                <span>кредит от 5 846 ₽/мес.</span>
              </a>

              <button
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
                    fill="#575757"
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
                "
              >
                Записаться на тест-драйв
              </button>
            </div>
          </div>
        </div>

        <div class="cars-offer__content__item">
          <div class="cars-offer__content__item__bg">
            <img src="~static/images/cars-offer/legend-bg.jpg" alt="Legend" />
          </div>

          <div class="cars-offer__content__item__car">
            <nuxt-link
              :to="'/' + $store.state.city.value + '/' + '4x4' + '/' + 'three-doors'"
              :id="$store.state._page + '__models__' + '4x4'"
              class="event"
            >
              <img src="~static/images/cars-offer/legend.png" alt="Legend" />
            </nuxt-link>
          </div>

          <h4 class="cars-offer__content__item__title">
            <nuxt-link
              :to="'/' + $store.state.city.value + '/' + '4x4' + '/' + 'three-doors'"
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


            <div class="cars-offer__content__item__info__buttons">
              <a
                class="cars-offer__content__item__info__credit event"
                :href="
                '/' +
                  $store.state.city.value +
                  '/' +
                  'credit' +
                  '?car_model=4x4&car_type=3 дв.'
              "
              >
                <span>кредит от 4 680 ₽/мес.</span>
              </a>

              <button
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
                    fill="#575757"
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
                "
              >
                Записаться на тест-драйв
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal name="form-callback3" height="auto" :adaptive="true" class="test-drive-modal">
      <div :id="form_id + '_close'" class="close event" @click="hide"></div>
      <!--<FormBuy2Component
        :form_title="form_title"
        :form_id="form_id"
        :button_text="button_text"
        :form_type="form_type"
        :goal="goal"
      >
      </FormBuy2Component>  -->

      <FormTestDriveOrder
        :form_id="form_id"
        :goal="goal"
      />
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
      goal: "",

      informerText:
        "Расчет является приблизительным, произведен для автомобиля в базовой комплектации. Первоначальный взнос – 40 %. Срок кредита – 36 мес. Процентная ставка – 8,25% годовых. Кредитор - Совкомбанк (ПАО), Лицензия ЦБ РФ №963. Ставка действует при условии страхования имущества, жизни и здоровья заемщика в любых страховых компаниях, соответствующих требованиям Банка. Обеспечение по кредиту – залог приобретаемого автомобиля. Предложение ограничено. Не оферта. Подробности, сроки и условия уточняйте в автосалоне."
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
  font-size: 18px;
  font-weight: 700;
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
