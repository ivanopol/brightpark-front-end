<template>
<section class="services">
  <div class="container services__container">
    <div class="services__inner">
      <div class="services__item">
        <h5 class="services__item__title">
          Сервисное обслуживание
        </h5>

        <img src="~static/images/services/bg-1.png" alt="" class="services__item__bg">

        <a :href="'/' + $store.state.city.value + '/service'" class="event services__item__link" target="_blank"></a>
      </div>

      <div class="services__item">
        <h5 class="services__item__title">
          Кредитование
        </h5>

        <img src="~static/images/services/bg-2.png" alt="" class="services__item__bg">

        <a :href="'/' + $store.state.city.value + '/credit'" class="event services__item__link" target="_blank"></a>
      </div>

      <div class="services__item">
        <h5 class="services__item__title">
          Оценка и&nbsp;выкуп
          вашего&nbsp;авто
        </h5>

        <img src="~static/images/services/bg-3.png" alt="" class="services__item__bg">

        <a :href="'/' + $store.state.city.value + '/credit?car_model=Vesta&car_type=Седан'" class="event services__item__link" target="_blank"></a>
      </div>

      <div class="services__item">
        <h5 class="services__item__title">
          Запчасти
          для&nbsp;авто
        </h5>

        <img src="~static/images/services/bg-4.png" alt="" class="services__item__bg">

        <a href="https://shop.brightpark.ru/" class="event services__item__link" target="_blank"></a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "ServicesNew"
}
</script>

<style scoped lang="scss">

  .services__inner {
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1367px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  .services__container {
    overflow: unset;
  }

  .services__item {
    padding: 29px;
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.1), 0px 16px 16px rgba(0, 0, 0, 0.05), 0px 20px 60px -40px rgba(0, 0, 0, 0.15);
    position: relative;
    width: 90%;
    min-height: 265px;
    margin: 0 auto 30px;
    overflow: hidden;
    max-width: 500px;

    @media (min-width: 1367px) {
      transition: .2s ease-out;
      min-height: 300px;

      &:hover {
        transform: scale(1.1);
        transition: .2s ease-in;
      }
    }

    &:hover {
      .services__item__title {
        color: #FF8351;
        transition: .4s ease;
      }
    }
  }

  .services__item__bg {
    position: absolute;
    bottom: 0;
    right: 0;
    pointer-events: none;
  }

  .services__item__title {
    font-family: "Bright Park Display";
    font-size: 24px;
    transition: .4s ease;
    max-width: 190px;
  }

  .services__item__link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
</style>
