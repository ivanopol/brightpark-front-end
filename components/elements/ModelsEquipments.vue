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
            <p class="equipments__items__item__option__price">{{param.price | formatPrice}} ₽</p>
          </div>

          <div class="equipments__items__item__option">
            <ButtonNew
              :button-text="'Выбрать'"
              :height="'100%'"
              class="equipments__items__item__option__button"
              @click.native="show(
                    'Комплектации и цены',
                    $store.state._page + '__modal-banner-new_',
                    1,
                    'complectations'
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
    <FormLeadNew />
  </modal>
</section>
</template>

<script>
import format_price from "@/mixins/format_price";

export default {
  mixins: [format_price],
  name: "ModelsEquipments",

  data: function () {
    return {
      params: {},
      path: '',
      form_id: ''
    }
  },
  methods: {
    show(title, form_id, form_type, goal) {
      this.form_title = title;
      this.form_id = form_id;
      this.form_type = form_type; // 1 - обычная форма, 2 - форма сервиса
      this.goal = goal;

      //  console.log(this.$modal);
      this.$modal.show("form-complectation");
      /*      () => {
             callibriInit();
           }*/
    },
    hide() {
      this.$modal.hide("form-complectation");
    },
  },
  async fetch() {
    let complectations = {
      drive_active: [
        {
          id: 1,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5МТ',
          title: 'Comfort Light',
          price: 719900,
        },
        {
          id: 2,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5МТ',
          title: 'Comfort',
          price: 726900,
        },
      ],
      hatchback: [
        {
          id: 1,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5МТ',
          title: 'Classic',
          price: 577500,
        },
        {
          id: 2,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5МТ',
          title: 'Comfort Light',
          price: 618500,
        },
        {
          id: 3,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5МТ',
          title: 'Comfort',
          price: 625500,
        },
        {
          id: 4,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '98 л.с.',
          transmission: '4AТ',
          title: 'Comfort',
          price: 715500,
        },
        {
          id: 5,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '98 л.с.',
          transmission: '4AТ',
          title: 'Luxe',
          price: 759800,
        },
      ],
      liftback: [
        {
          id: 1,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Standard',
          price: 553900,
        },
        {
          id: 2,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Classic',
          price: 582500,
        },
        {
          id: 3,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Comfort Light',
          price: 623500,
        },
        {
          id: 4,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Comfort',
          price: 630500,
        },
        {
          id: 5,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: '#CLUB',
          price: 652900,
        },
        {
          id: 6,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Luxe',
          price: 674800,
        },
        {
          id: 7,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5MT',
          title: 'Comfort Light',
          price: 648500,
        },
        {
          id: 8,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5MT',
          title: 'Comfort',
          price: 655500,
        },
        {
          id: 9,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5MT',
          title: '#CLUB',
          price: 677900,
        },
        {
          id: 10,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5MT',
          title: 'Luxe',
          price: 699800,
        },
        {
          id: 11,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '98 л.с.',
          transmission: '4AT',
          title: 'Comfort',
          price: 720500,
        },
        {
          id: 12,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '98 л.с.',
          transmission: '4AT',
          title: 'Luxe',
          price: 764800,
        },
      ],
      sedan: [
        {
          id: 1,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Standard',
          price: 531900,
        },
        {
          id: 2,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Classic',
          price: 562500,
        },
        {
          id: 3,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Comfort Light',
          price: 603500,
        },
        {
          id: 4,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Comfort',
          price: 610500,
        },
        {
          id: 5,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: '#CLUB',
          price: 632900,
        },
        {
          id: 6,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Luxe',
          price: 654800,
        },
        {
          id: 7,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5MT',
          title: 'Comfort Light',
          price: 628500,
        },
        {
          id: 8,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5MT',
          title: 'Comfort',
          price: 635500,
        },
        {
          id: 9,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5MT',
          title: '#CLUB',
          price: 657900,
        },
        {
          id: 10,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5MT',
          title: 'Luxe',
          price: 679800,
        },
        {
          id: 11,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '98 л.с.',
          transmission: '4AT',
          title: 'Comfort Light',
          price: 693500,
        },
        {
          id: 12,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '98 л.с.',
          transmission: '4AT',
          title: 'Comfort',
          price: 700500,
        },
        {
          id: 13,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '98 л.с.',
          transmission: '4AT',
          title: 'Luxe',
          price: 744800,
        },
      ],
      universal: [
        {
          id: 1,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Standard',
          price: 560900,
        },
        {
          id: 2,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Classic',
          price: 589500,
        },
        {
          id: 3,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Comfort Light',
          price: 630500,
        },
        {
          id: 4,
          engine: '1,6 л',
          flap: '8-кл.',
          capacity: '90 л.с.',
          transmission: '5MT',
          title: 'Comfort',
          price: 637500,
        },
        {
          id: 5,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5MT',
          title: 'Comfort',
          price: 662500,
        },
        {
          id: 6,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '106 л.с.',
          transmission: '5MT',
          title: 'Luxe',
          price: 706800,
        },
        {
          id: 7,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '98 л.с.',
          transmission: '4AT',
          title: 'Comfort',
          price: 727500,
        },
        {
          id: 8,
          engine: '1,6 л',
          flap: '16-кл.',
          capacity: '98 л.с.',
          transmission: '4AT',
          title: 'Luxe',
          price: 771800,
        },
      ]
    }

    switch(this.$route.params.model) {
      case 'drive-active':
        this.params = complectations.drive_active
        this.path = '/files/complectations_granta_drive_active.pdf'
        break;
      case 'hatchback':
        this.params = complectations.hatchback
        this.path = '/files/complectations_granta_hatchback.pdf'
        break;
      case 'liftback':
        this.params = complectations.liftback
        this.path = '/files/complectations_granta_liftback.pdf'
        break;
      case 'sedan':
        this.params = complectations.sedan
        this.path = '/files/complectationss_granta_sedan.pdf'
        break;
      case 'universal':
        this.params = complectations.universal
        this.path = '/files/complectations_granta_universal.pdf'
        break;
    }
  }
}
</script>

<style scoped lang="scss">

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

    @media (min-width: 1000px) {
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
        color: #514EA1;
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
