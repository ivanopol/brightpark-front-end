<template>
  <div class="logo-city" v-bind:class="{ 'active': show }" v-on:click="show = !show">
    {{$store.state.city.label}}

    <transition name="fade">
      <div class="logo-city__list" v-if="show">
        <a :href="'/' + city.url" v-for="city in cities" :key="city.value" class="logo-city__list__item event">
          {{ city.label }}
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CityChoice",
  data: function () {
    return {
      cities: {},
      show: false
    };
  },
  methods: {
    makeCitiesList: function () {
      let cities_list = this.$store.state.cities.filter((el) => {
        return el.value !== this.$store.state.city.value
      })

      this.cities = cities_list.map(function(city) {
        let segments = window.location.pathname.slice(1).split('/');
        segments[0] = city.value;
        city['url'] = segments.join('/');
        return city
      })
    }
  },
  mounted: function () {
    this.makeCitiesList()
  }
}
</script>

<style scoped lang="scss">
.logo-city {
  font-size: 14px;
  padding: 10px 20px 10px 10px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    border: 5px solid transparent;
    border-top: 5px solid black;
    margin-top: 5px;
    margin-left: 5px;
  }

  &.active::after {
    content: '';
    opacity: 0;
    margin-top: 5px;
    margin-left: 5px;
    display: block;
    width: 10px;
    height: 10px;
  }
}

.logo-city.active::after {
  content: '';
  border: none;
}

.logo-city__list {
  position: absolute;
  left: 0;
  right: 0;
  top: 30px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  z-index: 10;
  border-radius: 6px;
  min-width: 135px;

  &__item {
    font-weight: normal;
    color: #666;
    width: auto;
    display: block;
    padding: 10px;
    white-space: nowrap;

    &:hover {
      color: #000;
    }
  }
}

@media only screen and (min-width: 1367px) {
  .logo-city {
    padding-left: 15px;
    font-size: 16px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
