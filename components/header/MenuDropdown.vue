<template>
  <a href="#" class="dropdown colored" v-bind:class="{ 'active': opened }" v-click-outside="hide" v-on:click="opened = !opened">Модели
    <transition name="fade">
      <ul class="" v-if="opened">
        <li v-for="model in $store.state.models_full" v-bind:key="model.id">
          <a :id="'common__menu__' + model.model_slug" class="event" :href="'/' + $store.state.city.value + '/' + model.model_slug + '/' + model.type_slug" itemprop="url">
            <div class="title bubble" >{{model.title | correction}}</div>
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
      opened: false
    };
  },
  filters: {
    correction: function (value) {
      let tmp_value = value
      if (tmp_value === '4x4 | Legend') {
        tmp_value = 'Legend'
      }

      return tmp_value
    }
  },
  methods: {
    hide () {
      this.opened = false
    }
  },
  mounted: function () {
    this.popupItem = this.$el
  },
  directives: {
    ClickOutside
  }
}
</script>

<style scoped lang="scss">

.colored {
  animation: coloring 8s infinite;
  animation-duration: 8s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: coloring;
}

@keyframes coloring {
  0% {
    color: #ee6723;
    border-color: #ee6723;
  }

  33% {
    color: #514ea1;
    border-color: #514ea1;
  }

  66% {
    color: #5cbe86;
    border-color: #5cbe86;
  }

  100% {
    color: #ffca0d;
    border-color: #ffca0d;
  }
}

a.dropdown {
  transition: unset;
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    border: 5px solid transparent;
    border-top: 5px solid black;
    margin-top: 5px;
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
      margin-top: 5px;
      margin-left: 5px;
    }
  }

  ul {
    position: absolute;
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
