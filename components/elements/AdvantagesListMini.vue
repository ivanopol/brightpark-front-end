<template>
  <ul class="advantages">
    <li class="advantages__item" v-for="advantage in advantages" :key="advantages.indexOf(advantage)">
      <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10L4 13L16 1" :stroke="tickColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <p>
        {{ advantage }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AdvantagesListMini",

  props: {
    tickColor: {
      default: '#514EA1',
      type: String,
    },

    advantages: {
      type: Array,
    }
  },

  data: function() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">

.advantages__item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  p {
    color: inherit;
    font-family: "Factor A";
    font-size: inherit;
    font-weight: 500;
  }

  svg {
    margin-right: 10px;
    align-self: start;
    flex-shrink: 0;
  }
}
</style>
