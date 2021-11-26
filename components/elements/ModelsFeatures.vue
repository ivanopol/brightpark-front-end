<template>
  <section class="models-features">
    <div class="container models-features__container">
      <div class="models-features__wrap">
        <h2 class="models-features__heading">
          Основные характеристики
        </h2>

        <div class="models-features__items">
          <div class="models-features__items__item" v-for="feature in features" :key="feature.icon">
            <div class="models-features__items__item__icon">
              <img :src="'/images/icons/models-features/' + feature.icon + '.svg'" :alt="feature.title">
            </div>

            <div class="models-features__items__item__text">
              <h5>{{ feature.title }}</h5>
              <p>{{ feature.name }}</p>
            </div>
          </div>
        </div>

        <LinkNew
          class="models-features__button"
          :button-text="'все характеристики'"
          :path="path"
          goal="model_features_all-features"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModelsFeatures",
  props: {
    features: Array,
  },
  data: function () {
    return {
      path: '',
    }
  },
  created () {
    this.path = '/files/specifications_' + this.$route.params.models + '_' + this.$route.params.model.replace("-", "_") + '.pdf'
  },
}
</script>

<style scoped lang="scss">
.models-features__wrap {
  padding: 40px 20px 65px;
  border-top: 1px solid rgba(0, 0, 0, .15);
  border-bottom: 1px solid rgba(0, 0, 0, .15);
  position: relative;

  @media (min-width: 1000px) {
    padding-bottom: 90px;
  }
}

.models-features__container {
  overflow: unset;
}

.models-features__heading {
  margin-bottom: 35px;
  font-family: "Bright Park Display";
  font-size: 28px;
  font-weight: 700;
  text-transform: none;

  @media (min-width: 1000px) {
    text-align: center;
    font-size: 36px;
    margin-bottom: 45px;
  }
}

.models-features__items {
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 50px;
  }
}

.models-features__items__item {
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1000px) {
    margin-bottom: 0;
  }
}

.models-features__items__item__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-right: 18px;
  img {
    width: 100%;
  }
}

.models-features__items__item__text {
  font-family: "Factor A";
  h5 {
    color: rgba(0, 0, 0, .5);
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  p {
    font-size: 20px;
    font-weight: 700;
  }
}

.models-features__button {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: -30px;
  width: 245px;
  height: 60px;
  font-size: 14px;
}

</style>
