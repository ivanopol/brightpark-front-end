<template>
  <div :class="'service-online-registration ' + style">
    <div class="service-online-registration__wrapper">
      <div class="service-online-registration__content">
        <div class="service-online-registration__row service-online-registration__header">
          <p class="service-online-registration__title">Онлайн запись на сервис</p>
          <p class="service-online-registration__desc">Оставьте заявку на ремонт и обслуживание автомобиля в 3 шага - это займет не более 1 минуты</p>
        </div>
        <div class="service-online-registration__row">

        </div>
        <div class="service-online-registration__row">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceOnlineRegistration",
  props: {
    style: {
      default: 'purple',
      type: String
    }
  },
  data: function () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .purple {
    .service-online-registration__wrapper {
      background-color: #504ea0;
    }
  }

  .service-online-registration {
    &__wrapper {
      width: 100%;
      margin: 0 auto;

      @media only screen and (min-width: 900px) {
        & {
          max-width: 1440px;
        }
      }
    }

    &__content {
      width: 60%;
      padding: 40px 0 40px 60px;
      box-sizing: border-box;
    }

    &__row {

    }

    &__header {
      color: #fff;
      text-align: left;
    }

    &__title {
      font-size: 32px;
      font-family: 'Bright Park Display';
      margin-bottom: 15px;
    }

    &__desc {
      font-size: 16px;
      font-family: 'Factor A';
    }
  }
</style>
