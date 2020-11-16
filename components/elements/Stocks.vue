<template>
  <div class="container p-top-90">
    <div class="news">
      <h1>Акции Брайт Парка в {{ $store.state.city.dative }}</h1>
      <div v-for="item in stocks" :key="item.id" class="stocks-row">
        <nuxt-link :to="'/' + $store.state.city.value + '/stocks/' + item.slug"
                   :id="'stocks__stocks-one__title-' + item.id"
                   class="stocks-title event" v-html="item.title"></nuxt-link>
        <div class="stocks-content">
          <div class="stocks-img">
            <nuxt-link :to="'/' + $store.state.city.value + '/stocks/' + item.slug"
                       :id="'stocks__stocks-one__image-' + item.id"
                       class="event">
              <img loading=lazy :src="item.preview" :alt="item.text_short" />
            </nuxt-link>
          </div>
          <div class="stocks-text-wrap">
            <div class="stocks-text" v-html="item.text_short" />
            <div class="stocks-button">
              <nuxt-link :id="'stocks__stocks-one__button-' + item.id"
                         :to="'/' + $store.state.city.value + '/stocks/' + item.slug"
                         class="btn btn-primary event">Читать</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stocks",
  data: function () {
    return {
      stocks: []
    }
  },
  async fetch() {
    this.stocks = await fetch(
      process.env.apiUrl + `/api/stocks?&city_id=` + this.$store.state.city.city_id
    ).then(res => res.json())
  },
}
</script>

<style>

</style>
