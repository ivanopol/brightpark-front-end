<template>
  <section class="warranty">
    <div class="container warranty__container">
      <div class="warranty__preview">
        <img :src="path + filename" alt="">
      </div>

      <div class="warranty__text">
        <h2 class="warranty__heading">
          Гарантия 3 года
        </h2>

        <p class="warranty__desc">
          Брайт Парк является официальным дилером  LADA и оказывает услуги по  сервисному, кузовному и гарантийному обслуживанию автомобилей LADA.
        </p>

        <advantages-list-mini
          class="warranty__advantages color-primary-color"
          :advantages="['Принятие решения в день обращения', 'Сертифицированные специалисты', 'Более 50 000 запасных частей в наличии', 'Бесплатная диагностика машины при обращении']"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModelsWarranty",
  props: {
    model: String,
    type: String,
  },
  data: function () {
    return {
      path: '/images/warranty/',
      filename: '',
    }
  },
  created() {
    this.filename = this.$route.params.models +  '/' + this.$route.params.model + '.png'
  },
}
</script>

<style scoped lang="scss">
  @import "./assets/scss/_colors.scss";

  .warranty {
    padding-top: 30px;

    @media (min-width: 1000px) {
      margin-top: 40px;
    }
  }

  .warranty__preview {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 200px;
      margin-left: 70px;
    }

    @media (min-width: 1000px) {
      flex: .45;

      img {
        max-width: 510px;
        margin-left: 0;
        width: 100%;
      }
    }
  }

  .warranty__heading {
    font-family: "Bright Park Display";
    font-size: 28px;
    text-align: center;
    text-transform: unset;
    margin-bottom: 16px;

    @media (min-width: 1000px) {
      text-align: left;
      font-size: 36px;
      margin-top: 20px;
    }
  }

  .warranty__desc {
    font-size: 16px;
    font-family: "Factor A";
    line-height: 24px;
    font-weight: 400;
    color: rgba(0, 0, 0, .7);

    @media (min-width: 1000px) {
      font-size: 18px;
    }
  }

  .warranty__container {
    padding: 0 20px;

    @media (min-width: 1000px) {
      display: flex;
    }
  }

  .warranty__advantages {
    font-size: 18px;
    margin-top: 20px;
  }

  .warranty__text {
    @media (min-width: 1000px) {
      margin-top: 20px;
      flex: .55;
    }
  }
</style>
