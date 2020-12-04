<template>
  <section id="models" class="models_wrap">
    <div class="container">
      <h2>Модели</h2>
      <ul>
        <li v-for="model in models" :key="model.id">
          <nuxt-link :to="'/' + $store.state.city.value + '/' + model.slug + '/' + model.types_preview[0].slug"
                     :id="$store.state._page + '__models__' + model.slug"
                     class="event">
              <div class="img_wrap">
                  <img loading=lazy :src="model.preview" :alt="model.title">
              </div>
              <div class="title">{{model.title}}</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModelsList",
  data: function () {
    return {
      models: []
    }
  },
  async fetch() {
     const models = await fetch(
      process.env.apiUrl + `/api/models_list`
    ).then(res => res.json())

    this.models = this.models.concat(models)
  }
}
</script>

<style scoped lang="scss">

</style>
