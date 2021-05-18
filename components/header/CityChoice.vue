<template>
  <div class="logo-city" v-bind:class="{ 'active': opened }" v-click-outside="hide" v-on:click="opened = !opened">
    {{$store.state.city.label}}

    <transition name="fade">
      <div class="logo-city__list" v-if="opened">
        <a :href="'/' + city.url" v-for="city in cities" :key="city.value" class="logo-city__list__item event">
          {{ city.label }}
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: "CityChoice",
  data: function () {
    return {
      cities: {},
      opened: false
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
    },
    hide () {
      this.opened = false
    }
  },
  watch: {

  },
  mounted: function () {
    this.popupItem = this.$el
    this.makeCitiesList()
  },
  directives: {
    ClickOutside
  }
}
</script>

<style scoped lang="scss">
.logo-city {
  font-size: 14px;
  padding: 10px 10px 10px 10px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;

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

  &:hover {
    color: #FF8351;

    &::after {
      content: '';
      border: 5px solid transparent;
      border-top: 5px solid #FF8351;
      margin-top: 5px;
      margin-left: 5px;
    }
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
  top: 35px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  z-index: 10;
  border-radius: 6px;
  min-width: 135px;

  &__item {
    font-weight: normal;
    color: #000;
    width: auto;
    display: block;
    padding: 10px;
    white-space: nowrap;
    transition: 0.15s linear;

    &:hover {
      color: #FF8351;
    }
  }
}

@media only screen and (max-width: 900px) {
  .logo-city {
    font-size: 13px;
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
