<template>
<section class="equipments">
  <div class="container equipments__container">
    <div class="equipments__wrapper">
      <h2 class="equipments__heading">
        Комплектации и цены
      </h2>

      <div class="equipments__items">
        <div class="equipments__items__item" v-for="param in params" :key="param.id">
          <div class="equipments__items__item__option">
            <h5>Двигатель</h5>
            <p>{{param.engine}} <span>{{param.flap}}</span></p>
          </div>

          <div class="equipments__items__item__option">
            <h5>Мощность</h5>
            <p>{{param.capacity}}</p>
          </div>

          <div class="equipments__items__item__option">
            <h5>Коробка передач</h5>
            <p>{{param.transmission}}</p>
          </div>

          <div class="equipments__items__item__option">
            <h5>Комплектация</h5>
            <p>{{param.title}}</p>
          </div>

          <div class="equipments__items__item__option">
            <h5>Цена</h5>
            <p class="equipments__items__item__option__price color-primary-color">{{param.price | formatPrice}} ₽</p>
          </div>

          <div class="equipments__items__item__option">
            <ButtonNew
              buttonColor="color-secondary-background"
              :button-text="'Выбрать'"
              :height="'100%'"
              class="equipments__items__item__option__button"
              @click.native="show(
                    'Комплектации и цены',
                    $store.state._page + '__modal-banner-new_',
                    1,
                    'model_complectations_modal-request',
                    $store.state.car.model_full + '. Двигатель: ' + param.engine + ', ' + param.flap + ', Мощность: ' + param.capacity + ', Коробка передач: '
                    + param.transmission + ', Комплектаци: ' + param.title + ', Цена: ' + param.price + ' руб.'
                  )"
            />
          </div>
        </div>
      </div>


      <LinkNew
        class="equipments__button"
        button-text="Скачать прайс-лист"
        :path="path"
        :with_icon='true'
      />
    </div>
  </div>
  <modal name="form-complectation" height="auto" :adaptive="true" class="models-banner__modal">
    <div :id="form_id + '_close'" class="close event" @click="hide"></div>
    <FormLeadNew
      :form_title="form_title"
      :form_id="form_id"
      :form_type="form_type"
      :goal="goal"
      :comment="comment"
    />
  </modal>
</section>
</template>

<script>
import format_price from "@/mixins/format_price";

export default {
  mixins: [format_price],
  name: "ModelsEquipments",

  props: {
    complectations: {
      default: {},
      type: Object
    }
  },
  data: function () {
    return {
      params: {},
      path: '',
      form_id: '',
      form_title: '',
      form_type: 1,
      goal: '',
      comment: '',
    }
  },
  methods: {
    show(title, form_id, form_type, goal, comment) {
      this.form_title = title;
      this.form_id = form_id;
      this.form_type = form_type; // 1 - обычная форма, 2 - форма сервиса
      this.goal = goal;
      this.comment = comment;
      this.$modal.show("form-complectation");
    },
    hide() {
      this.$modal.hide("form-complectation");
    },
  },
  created() {
    switch(this.$route.params.model) {
      case 'drive-active':
        this.params = this.complectations.drive_active
        this.path = '/files/complectations_granta_drive_active.pdf'
        break;
      case 'hatchback':
        this.params = this.complectations.hatchback
        this.path = '/files/complectations_granta_hatchback.pdf'
        break;
      case 'liftback':
        this.params = this.complectations.liftback
        this.path = '/files/complectations_granta_liftback.pdf'
        break;
      case 'sedan':
        this.params = this.complectations.sedan
        this.path = '/files/complectations_granta_sedan.pdf'
        break;
      case 'universal':
        this.params = this.complectations.universal
        this.path = '/files/complectations_granta_universal.pdf'
        break;
    }
  }
}
</script>

<style scoped lang="scss">
  @import "./assets/scss/_colors.scss";

  .equipments {
    background: rgba(81, 78, 161, 0.05);
  }

  .equipments__container {
    overflow: unset;
  }

  .equipments__wrapper {
    padding: 56px 20px 30px;

    @media (min-width: 1000px) {
      padding: 56px 0 30px;
    }
  }

  .equipments__heading {
    text-transform: none;
    font-family: "Bright Park Display";
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: 1000px) {
      font-size: 36px;
      margin-bottom: 35px;
    }
  }
  .equipments__items__item {
    background: white;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 25px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 15px;
    border: 2px solid white;
    &:last-child {
      margin-bottom: 10px;
    }

    &.best-price {
      border-color: #FFCA0D;
      position: relative;

      &:after {
        content: 'Лучшая цена';
        color: white;
        background: #FFCA0D;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 10px;
        font-family: "Factor A";
        padding: 4px 13px;
        position: absolute;
        top: -18px;
        left: 24px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
      }
    }

    @media (min-width: 1367px) {
      grid-template-columns: 160px 160px 180px 300px 140px 100px;
      padding: 20px;
      transition: .2s ease;
      position: relative;

      &:hover {
        transition: .2s ease;
        box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1), 0px 15px 30px -10px rgba(0, 0, 0, 0.15);
        z-index: 2;
      }
    }
  }

  .equipments__items__item__option {
    font-family: "Factor A";
    letter-spacing: 0.05em;
    h5 {
      text-transform: uppercase;
      font-weight: bold;
      color: rgba(0, 0, 0, .5);
      font-size: 11px;
      margin-bottom: 5px;
    }

    p {
      font-weight: 500;
      font-family: "Factor A";
      font-size: 15px;
      color: #000;

      span {
        color: rgba(0, 0, 0, .5);
      }

      &.equipments__items__item__option__price {
        font-size: 24px;
      }
    }

    @media (min-width: 1000px) {
      align-self: center;

      h5 {
        display: none;
      }

      p {
        font-weight: 400;
        font-size: 20px;
      }
    }
  }

  .equipments__items__item__option__button {
    font-size: 11px;
    height: 100%;
  }

  .equipments__button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    padding: 10px 15px;
    background: #5CBE86;
    border: none;
    width: 100%;
    font-family: 'Factor A';
    letter-spacing: 0.05em;
    border-radius: 5px;
    cursor: pointer;
    height: 65px;
    margin-top: 30px;

    svg {
      margin-right: 6px;
    }

    @media (min-width: 1000px) {
      margin: 30px auto 0;
      max-width: 380px;
    }
  }
</style>
