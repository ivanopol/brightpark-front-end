<template>
  <div>
    <section class="test-drive-banner">
      <div class="container test-drive-banner__container">
        <div class="test-drive-banner__wrapper">
          <img :src="path.mobile" :alt="path.title" class="test-drive-banner__pic">

          <div class="test-drive-banner__text">
            <h2>Испытай новую LADA Granta в деле!</h2>
            <p>Ощутите преимущества новой LADA {{this.$store.state.car.model_full}} на собственном опыте</p>
          </div>

          <ButtonNew
            class="test-drive-banner__signup"
            :button-text="'Записаться на тест-драйв'"
            :button-type="'button'"
            @click.native="show(
                    'Записаться на тест-драйв',
                    $store.state._page + '__modal-models-test-drive_',
                    1,
                    'test_drive'
                  )"
          />
        </div>
      </div>
    </section>

    <modal name="form-callback3" height="auto" :adaptive="true" class="test-drive-modal">
      <div :id="form_id + '_close'" class="close event" @click="hide"></div>
      <FormTestDriveOrder
        :form_id="form_id"
        :goal="goal"
      />
    </modal>
  </div>
</template>

<script>
export default {
  name: 'TestDriveBanner',

  data: function () {
    return {
      form_id: "",
      form_title: "",
      form_type: 1,
      goal: "",
      path: {},
      images: {
        granta: {
          'drive-active': {
            title: 'Granta Drive Active',
            mobile: '/images/credit-section/granta/drive_active/photo_mobile.png',
          },
          sedan: {
            title: 'Granta Седан',
            mobile: '/images/credit-section/granta/sedan/photo_mobile.png',
          },
          liftback: {
            title: 'Granta Лифтбек',
            mobile: '/images/credit-section/granta/liftback/photo_mobile.png',
          },
          hatchback: {
            title: 'Granta Хэтчбэк',
            mobile: '/images/credit-section/granta/hatchback/photo_mobile.png',
          },
          universal: {
            title: 'Granta Хэтчбэк',
            mobile: '/images/credit-section/granta/universal/photo_mobile.png',
          },
        }
      },
    }
  },

  methods: {
    show(title, form_id, form_type, goal) {
      this.form_title = title;
      this.form_id = form_id;
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
  },
  created() {
    this.path = this.images[this.$route.params.models][this.$route.params.model]
  }
}
</script>

<style lang="scss" scoped>
  .test-drive-banner__wrapper {
    background-color: #514EA1;
    padding: 30px 20px 40px;
    position: relative;

    @media (min-width: 1367px) {
      display: flex;
      padding: 30px 40px 30px 200px;
    }
  }

  .test-drive-banner__pic {
    display: block;
    margin: auto;
    width: 100%;
    max-width: 305px;

    @media (min-width: 1000px) {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      left: -120px;
    }
  }

  .test-drive-banner__text {
    color: white;
    text-align: center;
    margin: 24px 0;

    h2 {
      text-transform: unset;
      font-size: 28px;
      font-family: 'Bright Park Display';
      margin-bottom: 9px;
    }

    p {
      font-family: 'Factor A';
      font-size: 16px;
    }

    @media (min-width: 1367px) {
      text-align: left;
      margin: 0;

      h2 {
        font-size: 32px;
      }
    }
  }

  .test-drive-banner__signup {
    height: 50px;
    max-width: 280px;
    font-size: 13px;
    margin: auto;

    @media (min-width: 1367px) {
      margin: 0 0 0 auto;
    }
  }
</style>
