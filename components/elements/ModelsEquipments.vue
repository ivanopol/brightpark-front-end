<template>
<section class="equipments">
  <h2 class="equipments__heading">
    Комплектации и цены
  </h2>

  <div class="equipments__items">
    <div class="equipments__items__item">
      <div class="equipments__items__item__option">
        <h5>
          Двигатель
        </h5>

        <p>
          1,6л
          <span>
            8-кл.
          </span>
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Мощность
        </h5>

        <p>
          90л.с
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Коробка передач
        </h5>

        <p>
          5MT
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Комплектация
        </h5>

        <p>
          Standart
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Цена
        </h5>

        <p class="equipments__items__item__option__price">
          519 000 ₽
        </p>
      </div>

      <div class="equipments__items__item__option">
        <ButtonNew :button-text="'Выбрать'" :height="'100%'" class="equipments__items__item__option__button"/>
      </div>
    </div>

    <div class="equipments__items__item">
      <div class="equipments__items__item__option">
        <h5>
          Двигатель
        </h5>

        <p>
          1,6л
          <span>
            8-кл.
          </span>
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Мощность
        </h5>

        <p>
          90л.с
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Коробка передач
        </h5>

        <p>
          5MT
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Комплектация
        </h5>

        <p>
          Standart
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Цена
        </h5>

        <p class="equipments__items__item__option__price">
          519 000 ₽
        </p>
      </div>

      <div class="equipments__items__item__option">
        <ButtonNew :button-text="'Выбрать'" :height="'100%'" class="equipments__items__item__option__button"/>
      </div>
    </div>

    <div class="equipments__items__item">
      <div class="equipments__items__item__option">
        <h5>
          Двигатель
        </h5>

        <p>
          1,6л
          <span>
            8-кл.
          </span>
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Мощность
        </h5>

        <p>
          90л.с
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Коробка передач
        </h5>

        <p>
          5MT
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Комплектация
        </h5>

        <p>
          Standart
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Цена
        </h5>

        <p class="equipments__items__item__option__price">
          519 000 ₽
        </p>
      </div>

      <div class="equipments__items__item__option">
        <ButtonNew :button-text="'Выбрать'" :height="'100%'" class="equipments__items__item__option__button"/>
      </div>
    </div>

    <div class="equipments__items__item best-price">
      <div class="equipments__items__item__option">
        <h5>
          Двигатель
        </h5>

        <p>
          1,6л
          <span>
            8-кл.
          </span>
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Мощность
        </h5>

        <p>
          90л.с
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Коробка передач
        </h5>

        <p>
          5MT
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Комплектация
        </h5>

        <p>
          Standart
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Цена
        </h5>

        <p class="equipments__items__item__option__price">
          519 000 ₽
        </p>
      </div>

      <div class="equipments__items__item__option">
        <ButtonNew :button-text="'Выбрать'" :height="'100%'" class="equipments__items__item__option__button"/>
      </div>
    </div>

    <div class="equipments__items__item">
      <div class="equipments__items__item__option">
        <h5>
          Двигатель
        </h5>

        <p>
          1,6л
          <span>
            8-кл.
          </span>
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Мощность
        </h5>

        <p>
          90л.с
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Коробка передач
        </h5>

        <p>
          5MT
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Комплектация
        </h5>

        <p>
          Standart
        </p>
      </div>

      <div class="equipments__items__item__option">
        <h5>
          Цена
        </h5>

        <p class="equipments__items__item__option__price">
          519 000 ₽
        </p>
      </div>

      <div class="equipments__items__item__option">
        <ButtonNew :button-text="'Выбрать'" :height="'100%'" class="equipments__items__item__option__button"/>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "ModelsEquipments"
}
</script>

<style scoped lang="scss">

  .equipments {
    background: rgba(81, 78, 161, 0.05);
    padding: 56px 20px 30px;
  }

  .equipments__heading {
    text-transform: none;
    font-family: "Bright Park Display";
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
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
  }

  .equipments__items__item__option__button {
    font-size: 11px;
    height: 100%;
  }
</style>
