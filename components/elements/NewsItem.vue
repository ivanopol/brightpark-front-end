<template>
  <div class="container p-top-90">
    <div class="news-wrapper">
      <h1 v-html="data.title" />
      <div class="news-one">
        <div class="news-one-img">
          <img :src="data.preview" :alt="data.text_short">
        </div>
        <div class="news-one-body" v-html="data.text" />
      </div>
    </div>
  </div>
</template>

<script >
export default {
  name: 'NewsItem',
  props: {
    data: {
      default: {},
      type: Object
    }
  },
}
</script>
