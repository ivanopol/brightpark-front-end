<template>
  <a href="#" class="dropdown" v-bind:class="{ 'active': opened }" v-click-outside="hide" v-on:click="opened = !opened">Купить
    <transition name="fade">
      <ul class="" v-if="opened">
        <li v-for="model in $store.state.models_full" v-bind:key="model.id">
          <a :id="'common__menu__' + model.model_slug" class="event" :href="'/' + $store.state.city.value + '/' + model.model_slug + '/' + model.type_slug" itemprop="url">
            <div class="title bubble" >LADA {{ model.title }}</div>
          </a>
        </li>
      </ul>
    </transition>
  </a>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: "MenuDropdown",
  data: function () {
    return {
      models: this.$store.state.models_full,
      opened: false
    };
  },
  filters: {},
  methods: {
    hide () {
      this.opened = false
    }
  },
  created: function() {

  },
  mounted: function () {
    let tmp = [this.models[1], this.models[2]]
    this.models[1] = this.models[4]
    this.models[2] = this.models[5]
    this.models[4] = tmp[0]
    this.models[5] = tmp[1]

    this.popupItem = this.$el
  },
  directives: {
    ClickOutside
  }
}
</script>

<style scoped lang="scss">

a.dropdown {
  transition: unset;
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    border: 5px solid transparent;
    border-top: 5px solid black;
    margin-top: 3px;
    margin-left: 5px;
    display: block;
    position: absolute;
    right: -13px;
  }
  &:hover {
    color: #FF8351;

    &::after {
      content: '';
      border: 5px solid transparent;
      border-top: 5px solid #FF8351;
      margin-top: 3px;
      margin-left: 5px;
    }
  }

  ul {
    position: absolute;
    display: inline-table;
    left: 0;
    right: 0;
    top: 30px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);
    z-index: 10;
    border-radius: 6px;
    min-width: 135px;

    li {
      a {
        text-transform: none;
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
  }
}

a {
  color: #000;

  transition: 0.15s linear;

  &:hover {
    color: #FF8351;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
