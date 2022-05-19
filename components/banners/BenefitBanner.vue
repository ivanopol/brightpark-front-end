<template>
  <div>
    <section class="benefit-banner">
      <div class="container benefit-banner__container">
        <div class="benefit-banner__wrapper color-primary-background">
          <img :src="path.mobile" :alt="path.title" class="benefit-banner__pic" loading="lazy">

          <div class="benefit-banner__text">
            <h2>Выгода 350 000 ₽ на покупку новой LADA {{model}} в кредит!</h2>
          </div>

          <ButtonNew
            buttonColor="color-secondary-background"
            class="benefit-banner__signup"
            :button-text="'Успей купить'"
            :button-type="'button'"
            @click.native="show(
                    'Оставить заявку',
                    $store.state._page + '__modal-models-benefit_',
                    1,
                    'model_benefit_modal-request'
                  )"
          />
        </div>
      </div>
    </section>

    <modal name="form-benefit" height="auto" :adaptive="true" class="benefit-modal">
      <div :id="form_id + '_close'" class="close event" @click="hide"></div>
      <FormLeadNew
        :form_id="form_id"
        :form_title="form_title"
        :form_type="form_type"
        :goal="goal"
      />
    </modal>
  </div>
</template>

<script>
export default {
  name: 'BenefitBanner',
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
      this.$modal.show("form-benefit");
      /*      () => {
             callibriInit();
           }*/
    },
    hide() {
      this.$modal.hide("form-benefit");
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
  @import "../../assets/scss/colors";

  .benefit-banner__wrapper {
    padding: 30px 20px 40px;
    position: relative;

    @media (min-width: 1367px) {
      display: flex;
      padding: 30px 40px 30px 200px;
    }
  }

  .benefit-banner__pic {
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

  .benefit-banner__text {
    color: white;
    text-align: center;
    margin: 24px 0;

    h2 {
      text-transform: unset;
      font-size: 24px;
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
        font-size: 24px;
      }
    }
  }

  .benefit-banner__signup {
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
