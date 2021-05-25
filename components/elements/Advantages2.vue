<template>
  <div id="advantages2" class="container">
    <ul>
      <li v-for="advantage in advantages" :key="advantage.id">
        <div class="img-wrap">
          <img :src="path + advantage.src" :alt="advantage.clearText">
        </div>
        <div class="text-wrap" v-html="advantage.text"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: '/images/icons/advantages/',
      advantages: [
        {
          id: 1,
          src: 'cars.png',
          text: '500 авто с&nbsp;ПТС в&nbsp;наличии',
          clearText: '500 авто с ПТС в наличии',
        },
        {
          id: 2,
          src: 'calculator.png',
          text: '15&nbsp;минут на&nbsp;одобрение кредита',
          clearText: '15 минут на одобрение кредита',
        },
        {
          id: 3,
          src: 'tablet.png',
          text: '98% одобренных кредитов',
          clearText: '98% одобренных кредитов',
        },
        {
          id: 4,
          src: 'clock.png',
          text: '1&nbsp;час обмен авто на&nbsp;новую LADA',
          clearText: '1 час обмен авто на новую LADA',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    margin: 44px 0;

    li {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;

      .img-wrap {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 80%;
        }
      }

      .text-wrap {
        margin: 0 15px;
        line-height: 1.2;
        font-size: 1rem;
      }
    }
  }

  @media only screen and (min-width: 901px) and (max-width: 1000px) {
    ul {
      margin-left: 20px;
      margin-right: 20px;
      li .img-wrap img {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    #advantages2 {
      display: none;
    }
  }
</style>
