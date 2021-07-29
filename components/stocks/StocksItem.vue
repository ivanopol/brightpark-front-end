<template>
  <div class="container p-top-90">
    <div class="stocks-wrapper">
      <h1 v-html="data.title" />
      <div class="stocks-one">
        <div class="stocks-one-img">
          <img loading=lazy :src="data.preview" :alt="data.text_short">
        </div>
        <div class="stocks-dates" v-if="data.date_begin && data.date_end">
          <p>С {{data.date_begin | humanDate}} до {{data.date_end | humanDate}}</p>
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
  filters: {
    humanDate: function (value) {
      let date = new Date(Date.parse(value))

      date = date.toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).replace(/\s*г\./, "")

      return date
    }
  }
}
</script>

<style lang="scss" scoped>
  .stocks-one-body b,
  .stocks-one-body strong {
    font-weight: bold;
  }

  .stocks-dates {
    padding: 15px 0 0;
    max-width: 650px;
    margin: 0 auto;
    line-height: 1.4;
    font-size: 80%;
    color: #666;
  }

  @media only screen and (max-width: 699px) {
    .stocks-dates {
      padding: 15px 30px 0
    }
  }
</style>
