<template>
  <section class="models-features">
    <h2 class="models-features__heading">
      Основные характеристики
    </h2>

    <div class="models-features__items">
      <div class="models-features__items__item">
        <div class="models-features__items__item__icon">
          <img src="~static/images/icons/models-features/body.svg" alt="">
        </div>

        <div class="models-features__items__item__text">
          <h5>
            Кузов
          </h5>

          <p>
            {{ body }}
          </p>
        </div>
      </div>

      <div class="models-features__items__item">
        <div class="models-features__items__item__icon">
          <img src="~static/images/icons/models-features/drive.svg" alt="">
        </div>

        <div class="models-features__items__item__text">
          <h5>
            Привод
          </h5>

          <p>
            {{ drive_type }}
          </p>
        </div>
      </div>

      <div class="models-features__items__item">
        <div class="models-features__items__item__icon">
          <img src="~static/images/icons/models-features/engine.svg" alt="">
        </div>

        <div class="models-features__items__item__text">
          <h5>
            объём двигателя
          </h5>

          <p>
            {{ engine }}
          </p>
        </div>
      </div>

      <div class="models-features__items__item">
        <div class="models-features__items__item__icon">
          <img src="~static/images/icons/models-features/transmission.svg" alt="">
        </div>

        <div class="models-features__items__item__text">
          <h5>
            коробка двигателя
          </h5>

          <p>
            {{ transmission }}
          </p>
        </div>
      </div>

      <div class="models-features__items__item">
        <div class="models-features__items__item__icon">
          <img src="~static/images/icons/models-features/seats.svg" alt="">
        </div>

        <div class="models-features__items__item__text">
          <h5>
            места
          </h5>

          <p>
            {{ seats }}
          </p>
        </div>
      </div>

      <div class="models-features__items__item">
        <div class="models-features__items__item__icon">
          <img src="~static/images/icons/models-features/fuel.svg" alt="">
        </div>

        <div class="models-features__items__item__text">
          <h5>
            расход топлива
          </h5>

          <p>
            {{ fuel }}
          </p>
        </div>
      </div>

      <div class="models-features__items__item">
        <div class="models-features__items__item__icon">
          <img src="~static/images/icons/models-features/fuel_type.svg" alt="">
        </div>

        <div class="models-features__items__item__text">
          <h5>
            топливо
          </h5>

          <p>
            {{ fuel_type }}
          </p>
        </div>
      </div>

      <div class="models-features__items__item">
        <div class="models-features__items__item__icon">
          <img src="~static/images/icons/models-features/speed.svg" alt="">
        </div>

        <div class="models-features__items__item__text">
          <h5>
            макс. скорость
          </h5>

          <p>
            {{ speed }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModelsFeatures",

  props: {
    body: {
      type: String,
      default: 'Седан'
    },

    drive_type: {
      type: String,
      default: 'Передний'
    },

    transmission: {
      type: String,
      default: 'MT / AT'
    },

    engine: {
      type: String,
      default: '1.6 л'
    },

    seats: {
      type: String,
      default: '5'
    },

    fuel_type: {
      type: String,
      default: 'Бензин'
    },

    fuel: {
      type: String,
      default: 'от 5,2л / 100км'
    },

    speed: {
      type: String,
      default: 'до 184 км/ч'
    }

  }
}
</script>

<style scoped lang="scss">
.models-features {
  padding: 40px 20px;
  border-top: 1px solid rgba(0, 0, 0, .15);
  border-bottom: 1px solid rgba(0, 0, 0, .15);
}

.models-features__heading {
  margin-bottom: 35px;
  font-family: "Bright Park Display";
  font-size: 28px;
  font-weight: 700;
  text-transform: none;
}

.models-features__items__item {
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
}

.models-features__items__item__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-right: 18px;
  img {
    width: 100%;
  }
}

.models-features__items__item__text {
  font-family: "Factor A";
  h5 {
    color: rgba(0, 0, 0, .5);
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  p {
    font-size: 20px;
    font-weight: 700;
  }
}

</style>
