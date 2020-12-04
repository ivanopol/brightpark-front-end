<template>
  <section id="carcasses" class="carcasses_wrap">
    <div class="container" itemscope itemtype="http://schema.org/Product">
      <h1>LADA {{carcasses.title}} от официального дилера в {{$store.state.city.dative}}</h1>
      <ul class="carcasses-ul">
        <li v-for="carcass in carcasses.carcasses" :key="carcass.id">
          <div class="carcasses-list">
            <span class="hidden" itemprop="name">{{carcasses.title}} {{carcass.title_ru}}</span>
            <span class="hidden" itemprop="description" v-html="carcass.pivot.slogan"></span>
            <nuxt-link :to="'/' + $store.state.city.value + '/' + carcasses.slug + '/' + carcass.slug"
                       :id="'models__carcass-list__' + carcasses.slug + '-' + carcass.slug"
                       class="event" >
              <div class="carcasses-list-img bubble">
                <img loading=lazy class="bubble" itemprop="image" :src="carcass.pivot.image" :alt="carcasses.title + ' ' + carcass.title_ru">
              </div>
              <div class="carcasses-list-description bubble" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                <div class="carcasses-list-title bubble">
                  <span class="carcasses-list-title-el bubble" itemprop="name">{{carcasses.title}} {{carcass.title_ru}}</span>
                  <span itemprop="description" class="carcasses-list-title-slogan bubble" v-html="carcass.pivot.slogan"></span>
                </div>
                <div class="carcasses-list-prices" >
                  <span itemprop="price" class="carcasses-list-prices-new bubble">от <span>{{carcass.pivot.special_price | formatPrice}}</span> <span itemprop="priceCurrency" content="RUB">р.</span></span>
                  <span v-if="carcass.pivot.special_price !== carcass.pivot.price" class="carcasses-list-prices-old bubble">от <span>{{carcass.pivot.price | formatPrice}}</span> р.</span>
                </div>
                <div class="carcasses-list-button">
                  <span class="btn btn-primary btn-position green bubble">Подробнее</span>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
      </ul>
      <div class="text-after" v-html="carcasses.description"></div>
    </div>
  </section>
</template>

<script>
import format_price from "@/mixins/format_price";

export default {
  name: "Carcasses",
  mixins: [format_price],
  data: function () {
    return {
      carcasses: []
    }
  },
  async fetch() {
    const carcasses = await fetch(
      process.env.apiUrl + `/api/carcasses?model=${this.$route.params.models}&city=${this.$store.state.city.value}`
    ).then(res => res.json())
    this.$store.commit('set_model', carcasses[0])
    this.carcasses = carcasses[0]
  },
}
</script>

<style lang="scss">

</style>
