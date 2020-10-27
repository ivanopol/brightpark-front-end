<template>
  <div class="container p-top-90">
    <div class="stocks-wrapper">
      <h1 v-html="data.title" />
      <div class="stocks-one">
        <div class="stocks-one-img">
          <img :src="data.preview" :alt="data.text_short">
        </div>
        <div class="stocks-one-body" v-html="data.text" />
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: 'StockItem',
  props: {
    data: {
      default: {},
      type: Object
    }
  },
}
</script>
