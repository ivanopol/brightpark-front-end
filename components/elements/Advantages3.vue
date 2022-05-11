<template>
  <section class="advantages">
    
    <picture>
      <source media="(min-width: 1367px)" srcset="../../static/images/car-decor.png">
      <img 
        src="../../static/images/car-decor-2.png" 
        alt="Автосалон «‎Брайт парк»‎ — Официальный дилер LADA"
        class="advantages__car"
      >
    </picture>

    <div class="container advantages__container">
      <div class="advantages__inner">
        <h2 class="advantages__title">
          Автосалон «‎Брайт парк»‎ —&nbsp;Официальный дилер LADA
        </h2>

        <AdvantagesListMini
          class="advantages__list" 
          :advantages="list"
        />
      </div>
    </div>

  
  </section>
</template>

<script>
export default {
  name: 'Advantages3',

  data() {
    return {
      list: ['Более 9 лет работы на автомобильном рынке',
             'Большой выбор автомобилей от завода',
             'Выгодные цены и комфортные условия покупки'],
      
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_colors.scss';

section.advantages {
  background-color: $yellow;
  position: relative;
  font-size: 42px;
  padding: 50px 0;

  @media (max-width: 1367px) {
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    font-size: 34px;
    padding: 0 15px;
  }
}


.advantages__inner {
  max-width: 650px;
  margin-left: auto;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1367px) {
    margin: auto;
  }
}

.advantages__title {
  font-size: 1em;
  color: $purple;
  text-transform: none;
  font-family: "Bright Park Display";

  @media (max-width: 768px) {
    font-size: 0.85em;
  }
}

.advantages__car {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  max-height: 350px;

  @media (max-width: 1367px) {
    position: static;
    transform: unset;
    display: block;
    margin: auto;
  }

  @media (max-width: 660px) {
    max-height: unset;
    width: 100%;
  }
}

.advantages__list {
  font-size: 0.47em;
  margin-top: 20px;
  color: $purple;

  .color-primary-stroke {
    stroke: $purple;
  }
}

</style>