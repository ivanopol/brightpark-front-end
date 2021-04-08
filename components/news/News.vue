<template>
  <div class="container p-top-90">
    <div class="news">
      <h1>Новости Брайт Парка в {{ $store.state.city.city_dative }}</h1>
      <div v-for="item in news" :key="item.id" class="news-row">
        <nuxt-link :to="'/' + $store.state.city.value + '/news/' + item.slug"
                   :id="'news__news-one__title-' + item.id"
                   class="news-title event" v-html="item.title"></nuxt-link>
        <div class="news-content">
          <div class="news-img">
            <nuxt-link :to="'/' + $store.state.city.value + '/news/' + item.slug"
                       :id="'news__news-one__image-' + item.id"
                       class="event">
              <img loading=lazy :src="item.preview" :alt="item.text_short" />
            </nuxt-link>
          </div>
          <div class="news-text-wrap">
            <div class="news-text" v-html="item.text_short" />
            <div class="news-button">
              <nuxt-link :id="'news__news-one__button-' + item.id"
                         :to="'/' + $store.state.city.value + '/news/' + item.slug"
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
  name: "News",
  data: function () {
    return {
      news: []
    }
  },
  async fetch() {
    this.news = await fetch(
      process.env.apiUrl + `/api/news?&city_id=` + this.$store.state.city.city_id
    ).then(res => res.json())
  }
}
</script>

<style>

</style>
