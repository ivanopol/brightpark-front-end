<template>
  <div :class="'service-online-registration ' + theme">
    <div class="service-online-registration__wrapper">
      <div class="service-online-registration__content">
        <div class="service-online-registration__header">
          <p class="service-online-registration__title">Онлайн запись на сервис</p>
          <p class="service-online-registration__desc">Оставьте заявку на ремонт и обслуживание автомобиля в 3 шага - это займет не более 1 минуты</p>
          <ul class="service-online-registration__step-list">
            <li :class="{ active : step.active }" :key="step.number" v-for="step in steps">
              <span>{{ step.number }}</span>
            </li>
          </ul>
        </div>
        <div class="service-online-registration__body">
          <div class="service-online-registration__row">
            <div class="step-1" v-if="currentStep === 1">
              <div class="step__title">
                <p>Заполнение информации</p>
              </div>
              <div class="step-1__fields">

              </div>
            </div>

            <div class="step-2" v-else-if="currentStep === 2">
              <div class="step__title">
                <p>Выбор услуги и сервиса</p>
              </div>
              <div class="step-2__fields">

              </div>
            </div>

            <div class="step-3" v-else-if="currentStep === 3">
              <div class="step__title">
                <p>Выбор даты и времени</p>
              </div>
              <div class="step-3__fields">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceOnlineRegistration",
  props: {
    theme: {
      default: 'purple',
      type: String
    }
  },
  data: function () {
    return {
      currentStep: 1,
      steps: [
        {
          number: 1,
          active: true
        },
        {
          number: 2,
          active: false
        },
        {
          number: 3,
          active: false
        },
      ]
    }
  },
  methods: {
    setStep: function (step) {
      let number = step - 1
      this.clearSteps()
      this.steps[number].active = true
    },
    clearSteps: function () {
      this.steps.forEach((el, index) => {
        el.active = false
        this.currentStep = index + 1
      })
    }
  },
  mounted() {
    this.setStep(1)
  }
}
</script>

<style scoped lang="scss">
  .purple {
    .service-online-registration {
      &__wrapper {
        background-color: #504ea0;
        color: #fff;
        border-color: #fff;

      }

      &__step-list {
        li {
          border-color: #fff;

          &:after {
            background-color: #fff;
          }

          &.active {
            background-color: #FFCA0D;
            border-color: #FFCA0D;
          }
        }
      }
    }
  }

  .white {
    .service-online-registration {
      &__wrapper {
        background-color: #fff;
        color: #000;
        border-radius: 16px;
      }

      &__step-list {
        li {
          border-color: #000;

          &:after {
            background-color: #000;
          }

          &.active {
            color: #fff;
            background-color: #e95909;
            border-color: #e95909;
          }
        }
      }
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

    &__body {
    }

    &__header {
      text-align: left;
      margin-bottom: 30px;
    }

    &__row {

    }

    &__title {
      font-size: 32px;
      font-family: 'Bright Park Display';
      margin-bottom: 15px;
    }

    &__desc {
      font-size: 16px;
      line-height: 1.4;
      font-family: 'Factor A';
      margin-bottom: 30px;
    }

    &__step-list {
      font-family: PragmaticaLightC;
      font-size: 32px;
      display: flex;
      align-items: center;

      li {
        margin-right: 40px;
        border: 2px solid;
        padding: 10px 15px;
        line-height: 0.95em;
        border-radius: 15px;
        position: relative;
        box-sizing: border-box;

        span {
          display: block;
          margin-bottom: -5px;
        }

        &:after {
          content: '';
          position: absolute;
          width: 40px;
          height: 2px;
          right: -42px;
          background-color: #fff;
          top: 50%;
          transform: translate(0, -50%);
        }

        &:last-child {
         margin-right: 0;

          &:after {
            display: none;
          }
        }

        &.active {
          background-color: #FFCA0D;
          border-color: #FFCA0D;
        }
      }
    }

    .step__title {
      font-family: 'Bright Park Display';
    }
  }
</style>
