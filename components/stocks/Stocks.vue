<template>
  <div class="container p-top-90">
    <div class="news">
      <h1>Акции Брайт Парка в {{ $store.state.city.dative }}</h1>

      <section class="news__content">
        <article class="news__content__item" v-for="item in stocks" :key="item.id">
          <div class="news__content__item__image">
            <nuxt-link :to="'/' + $store.state.city.value + '/stocks/' + item.slug"
                       :id="'stocks__stocks-one__image-' + item.id"
                       class="event">
              <img loading=lazy :src="item.preview" :alt="item.text_short" />
            </nuxt-link>
          </div>

          <div class="news__content__item__text">
            <h2>
              <nuxt-link
                :to="'/' + $store.state.city.value + '/stocks/' + item.slug"
                :id="'stocks__stocks-one__title-' + item.id"
                class="stocks-title event"
                v-html="item.title"
              >
              </nuxt-link>
            </h2>
            <p class="news__content__item__text__dates" v-if="item.date_begin && item.date_end">
              С {{item.date_begin | humanDate}} до {{dateNow()}}
            </p>
            <p class="news__content__item__text__desc" v-html="item.text_short"></p>
          </div>
        </article>
      </section>
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
  },
  methods: {
    dateNow: function() {
      let dateNow = new Date(Date.now())
      let date = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, 0)

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
.news__content {
  padding: 0 5px;

  @media (min-width: 992px)  {
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    grid-gap: 25px 15px;
  }
}

.news__content__item {
  margin-bottom: 40px;

  @media (min-width: 992px) {
    margin-bottom: 0;
    height: 100%;
    display: flex;
    flex-direction: column;

    &:hover {
      .news__content__item__text {
        transition: .2s ease;
        box-shadow: 0 10px 10px rgba(31, 31, 31, 0.1);
      }
    }
  }
}
.news__content__item__image {
  img {
    max-width: 100%;
  }
}

.news__content__item__text {
  border: 1px solid #eee;
  border-top: none;
  padding: 15px 10px;
  margin-top: -3px;
  h2 {
    padding: 0;
    margin-bottom: 15px;
    a {
      font-size: 16px;
      padding: 0;
    }
  }

  @media (min-width: 992px) {
    height: 100%;
    transition: .2s ease;
  }
}

.news__content__item__text__dates {
  font-size: 14px;
}

.news__content__item__text__desc {
  font-size: 14px;
  margin-top: 15px;
  color: rgba(28, 27, 27, 0.5);
  line-height: 1.25;

}
</style>
