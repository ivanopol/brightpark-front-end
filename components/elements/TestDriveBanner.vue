<template>
  <div>
    <section class="test-drive-banner">
      <div class="container test-drive-banner__container">
        <div class="test-drive-banner__wrapper color-primary-background">
          <img :src="path.mobile" :alt="path.title" class="test-drive-banner__pic">

          <div class="test-drive-banner__text">
            <h2>Испытай новую LADA {{model}} в деле!</h2>
            <p>Ощутите преимущества новой LADA {{carName}} на собственном опыте</p>
          </div>

          <ButtonNew
            buttonColor="color-secondary-background"
            class="test-drive-banner__signup"
            :button-text="'Записаться на тест-драйв'"
            :button-type="'button'"
            @click.native="show(
                    'Записаться на тест-драйв',
                    $store.state._page + '__modal-models-test-drive_',
                    1,
                    'model_test-drive_modal-request'
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
  props: {
    model: String,
    type: String,
  },
  data: function () {
    return {
      form_id: "",
      form_title: "",
      form_type: 1,
      goal: "",
      path: {},
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
  computed: {
    carName: function() {
      return this.model === this.type ? this.model : this.model + ' ' + this.type
    }
  },
  created() {
    this.path = {
      title: this.model + ' ' + this.type,
      mobile: '/images/credit-section/' + this.$route.params.models + '/' + this.$route.params.model.replace("-", "_") + '/photo_mobile.png',
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./assets/scss/_colors.scss";

  .test-drive-banner__wrapper {
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

    &:hover {
      box-shadow: 0 3px 5px rgba(255, 255, 255, .3);
    }
  }
</style>
