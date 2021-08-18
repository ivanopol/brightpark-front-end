<template>
  <section class="models-features">
    <div class="container models-features__container">
      <div class="models-features__wrap">
        <h2 class="models-features__heading">
          Основные характеристики
        </h2>

        <div class="models-features__items">
          <div class="models-features__items__item" v-for="param in params" :key="param.icon">
            <div class="models-features__items__item__icon">
              <img :src="'/images/icons/models-features/' + param.icon + '.svg'" :alt="param.title">
            </div>

            <div class="models-features__items__item__text">
              <h5>{{ param.title }}</h5>
              <p>{{ param.name }}</p>
            </div>
          </div>
        </div>

        <LinkNew
          class="models-features__button"
          :button-text="'все характеристики'"
          :path="path"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModelsFeatures",
  data: function () {
    return {
      params: {},
      path: '',
    }
  },
  async fetch() {
    let bodies = {
      drive_active: [
        {
          name: 'Drive Active',
          title: 'Кузов',
          icon: 'body'
        },
        {
          name: 'Передний',
          title: 'Привод',
          icon: 'drive',
        },
        {
          name: '1.6 л',
          title:'объём двигателя',
          icon: 'engine',
        },
        {
          name: 'МТ',
          title: 'коробка двигателя',
          icon: 'transmission',
        },
        {
          name: '5',
          title: 'места',
          icon: 'seats',
        },
        {
          name: 'Бензин',
          title: 'топливо',
          icon: 'fuel_type',
        },
        {
          name: 'от 5,2л / 100км',
          title: 'расход топлива',
          icon: 'fuel'
        },
        {
          name: 'до 184 км/ч',
          title: 'макс. скорость',
          icon: 'speed',
        },
      ],
        hatchback: [
        {
          name: 'Хэтчбек',
          title: 'Кузов',
          icon: 'body'
        },
        {
          name: 'Передний',
          title: 'Привод',
          icon: 'drive',
        },
        {
          name: '1.6 л',
          title:'объём двигателя',
          icon: 'engine',
        },
        {
          name: 'MT / AT',
          title: 'коробка двигателя',
          icon: 'transmission',
        },
        {
          name: '5',
          title: 'места',
          icon: 'seats',
        },
        {
          name: 'Бензин',
          title: 'топливо',
          icon: 'fuel_type',
        },
        {
          name: 'от 5,3л / 100км',
          title: 'расход топлива',
          icon: 'fuel'
        },
        {
          name: 'до 176 км/ч',
          title: 'макс. скорость',
          icon: 'speed',
        },
      ],
        liftback: [
        {
          name: 'Лифтбек',
          title: 'Кузов',
          icon: 'body'
        },
        {
          name: 'Передний',
          title: 'Привод',
          icon: 'drive',
        },
        {
          name: '1.6 л',
          title:'объём двигателя',
          icon: 'engine',
        },
        {
          name: 'MT / AT',
          title: 'коробка двигателя',
          icon: 'transmission',
        },
        {
          name: '5',
          title: 'места',
          icon: 'seats',
        },
        {
          name: 'Бензин',
          title: 'топливо',
          icon: 'fuel_type',
        },
        {
          name: 'от 5,2л / 100км',
          title: 'расход топлива',
          icon: 'fuel'
        },
        {
          name: 'до 183 км/ч',
          title: 'макс. скорость',
          icon: 'speed',
        },
      ],
        sedan: [
        {
          name: 'Седан',
          title: 'Кузов',
          icon: 'body'
        },
        {
          name: 'Передний',
          title: 'Привод',
          icon: 'drive',
        },
        {
          name: '1.6 л',
          title:'объём двигателя',
          icon: 'engine',
        },
        {
          name: 'MT / AT',
          title: 'коробка двигателя',
          icon: 'transmission',
        },
        {
          name: '5',
          title: 'места',
          icon: 'seats',
        },
        {
          name: 'Бензин',
          title: 'топливо',
          icon: 'fuel_type',
        },
        {
          name: 'от 5,2л / 100км',
          title: 'расход топлива',
          icon: 'fuel'
        },
        {
          name: 'до 184 км/ч',
          title: 'макс. скорость',
          icon: 'speed',
        },
      ],
        universal: [
        {
          name: 'Универсал',
          title: 'Кузов',
          icon: 'body'
        },
        {
          name: 'Передний',
          title: 'Привод',
          icon: 'drive',
        },
        {
          name: '1.6 л',
          title:'объём двигателя',
          icon: 'engine',
        },
        {
          name: 'MT / AT',
          title: 'коробка двигателя',
          icon: 'transmission',
        },
        {
          name: '5',
          title: 'места',
          icon: 'seats',
        },
        {
          name: 'Бензин',
          title: 'топливо',
          icon: 'fuel_type',
        },
        {
          name: 'от 5,2л / 100км',
          title: 'расход топлива',
          icon: 'fuel'
        },
        {
          name: 'до 182 км/ч',
          title: 'макс. скорость',
          icon: 'speed',
        },
      ],
    }

    switch(this.$route.params.model) {
      case 'drive-active':
        this.params = bodies.drive_active
        this.path = '/files/specifications_granta_drive_active.pdf'
        break;
      case 'hatchback':
        this.params = bodies.hatchback
        this.path = '/files/specifications_granta_hatchback.pdf'
        break;
      case 'liftback':
        this.params = bodies.liftback
        this.path = '/files/specifications_granta_liftback.pdf'
        break;
      case 'sedan':
        this.params = bodies.sedan
        this.path = '/files/specifications_granta_sedan.pdf'
        break;
      case 'universal':
        this.params = bodies.universal
        this.path = '/files/specifications_granta_universal.pdf'
        break;
    }
  },
  created() {
    console.log(this.params)
  }
}
</script>

<style scoped lang="scss">
.models-features__wrap {
  padding: 40px 20px 65px;
  border-top: 1px solid rgba(0, 0, 0, .15);
  border-bottom: 1px solid rgba(0, 0, 0, .15);
  position: relative;

  @media (min-width: 1000px) {
    padding-bottom: 90px;
  }
}

.models-features__container {
  overflow: unset;
}

.models-features__heading {
  margin-bottom: 35px;
  font-family: "Bright Park Display";
  font-size: 28px;
  font-weight: 700;
  text-transform: none;

  @media (min-width: 1000px) {
    text-align: center;
    font-size: 36px;
    margin-bottom: 45px;
  }
}

.models-features__items {
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 50px;
  }
}

.models-features__items__item {
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1000px) {
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

.models-features__button {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: -30px;
  width: 245px;
  height: 60px;
  font-size: 14px;
}

</style>
