<template>
  <div>
    <section class="benefit-banner-niva">
      <div class="container benefit-banner-niva__container">
        <div class="benefit-banner-niva__wrapper">
          <div class="benefit-banner-niva__text">
            <h2>Ежемесячный платеж</h2>
            <p class="text-price"><span class="test-mini">от</span> 4 735 ₽<span class="test-mini"> в мес</span></p>
          </div>

          <ButtonNew
            buttonColor="color-secondary-background"
            class="benefit-banner-niva__signup"
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
import format_price from "@/mixins/format_price";

export default {
  name: 'BenefitBanner',
  props: {
    model: String,
    type: String,
    credit: Number
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
  mixins: [format_price],
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
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/colors";

  .benefit-banner-niva__wrapper {
    background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('~static/images/benefit-banner/bg-mobile.jpg') #000 no-repeat 50% 50%;
    background-size: cover;
    padding: 30px 20px 40px;
    position: relative;

    @media (min-width: 980px) {
      background: url('~static/images/benefit-banner/bg-desktop.jpg') #000 no-repeat 50% 50%;
      //background-size: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 80px;
    }

    @media (min-width: 980px) and (max-width: 1366px) {
      padding: 30px 40px;
    }
  }

  .benefit-banner-niva__pic {
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

  .benefit-banner-niva__text {
    color: white;
    text-align: center;
    margin: 24px 0;

    @media (min-width: 980px) {
      text-align: left;
      margin: 0;

      h2 {
        font-size: 20px;
      }
    }

    h2 {
      font-size: 20px;
      font-family: 'Bright Park Display';
      font-weight: bold;
      margin-bottom: 9px;
      text-transform: uppercase;
    }

    p {
      font-family: 'Factor A';

      &.text-price {
        font-family: 'Bright Park Display';
        font-size: 38px;
        .test-mini {
          font-size: 14px;
        }
      }
      font-size: 16px;
    }
  }

  .benefit-banner-niva__signup {
    height: 50px;
    max-width: 280px;
    font-size: 13px;
    margin: auto;

    @media (min-width: 980px) {
      margin: 0 0 0 auto;
    }

    &:hover {
      box-shadow: 0 3px 5px rgba(255, 255, 255, .3);
    }
  }
</style>
