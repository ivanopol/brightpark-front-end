<template>
  <section class="advantages-cards">
    <ul class="advantages-cards__list">
      <li 
        class="advantages-cards__list__item"
        v-for="item in items"
        :key="items.indexOf(item)"
      >
        <img :src="item.path" :alt="item.text">

        <p>
          {{ item.text }}
        </p>
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  props: {
    items: Array,
  },


}
</script>

<style scoped lang="scss">

  .advantages-cards__list {
    font-size: 22px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      row-gap: 30px;
    }

    @media (max-width: 530px) {
      grid-template-columns: 1fr;
    }
  }

  .advantages-cards__list__item {
    display: flex;
    align-items: center;
    font-size: inherit;
    margin: auto;

    img {
      width: 80px;
      height: 80px;
    }

    p {
      font-size: 1em;
      font-family: "Bright Park Display";
      margin-left: 15px;
      max-width: 150px;
    }
  }
</style>