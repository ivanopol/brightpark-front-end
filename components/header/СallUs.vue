<template>
  <div class="call-us__wrap"
       v-bind:class="{ 'active': opened }"
       v-click-outside="hide"
       v-on:click="opened = !opened" >
    <span class="call-us__wrap__title">
      Звоните нам
      <call-us-icon class="call-us__wrap__title__icon"/>
    </span>

    <transition name="fade">
      <div class="call-us__list" v-if="opened">
        <a :href="'tel:' + phone.number_nick"
           v-for="phone in phones"
           :key="phone.id"
           class="call-us__list__item event"
           v-bind:class="{ callibri_tel: phone.is_replacement }"
        >
          <p class="call-us__list__item__title">{{ phone.title }}</p>

          <span>
            <img :src="'/images/icons/header/' + phone.icon + '.svg'"
                 :alt="phone.title"
                 class="call-us__list__item__icon"
            >
            <span class="call-us__list__item__phone">{{ phone.number }}</span>
          </span>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: "CallUs",
  data: function () {
    return {
      phones: [
        {
          id: 1,
          title: 'Отдел продаж',
          icon: 'sales_department',
          number: '+7 342 214-84-00',
          number_nick: '+73422148400',
          is_replacement: true
        },
        {
          id: 2,
          title: 'Сервис',
          icon: 'service_department',
          number: '+7 342 234-56-79',
          number_nick: '+73422345679',
          is_replacement: false
        },
        {
          id: 3,
          title: 'Другие вопросы',
          icon: 'other_questions',
          number: '+7 342 214-84-00',
          number_nick: '+73422148400',
          is_replacement: false
        }
      ],
      opened: false
    };
  },
  methods: {
    hide () {
      this.opened = false
    }
  },
  mounted () {
    this.popupItem = this.$el
  },
  directives: {
    ClickOutside
  }
}
</script>

<style scoped lang="scss">

.call-us__wrap {
  position: relative;
  font-size: 16px;
}

.call-us__wrap__title {
  display: flex;
  align-items: center;
}

.call-us__wrap__title__icon {
  margin-left: 9px;
}

.call-us__list {
  position: absolute;
  left: 0;
  right: 0;
  top: 35px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  z-index: 10;
  border-radius: 6px;
  padding: 24px 24px 24px 46px;
  min-width: 200px;
}

.call-us__list__item {
  display: block;
  margin-bottom: 15px;

  &.callibri_tel {
    text-decoration: none;
  }

  &:last-child {
    margin-bottom: 0;

    .call-us__list__item__phone {
      border-bottom: unset;
      padding-bottom: 0;
    }
  }

  span {
    display: block;
  }
}


.call-us__list__item__title {
  font-size: 0.813em;
  margin-bottom: 6px;
  font-weight: 400;
  color: rgba(0, 0, 0, .35);
}

.call-us__list__item__phone {
  font-size: 1em;
  color: #000;
  border-bottom: 1px dashed rgba(0, 0, 0, .35);
  padding-bottom: 11px;
}

.call-us__list__item__icon {
  position: absolute;
  left: 17px;
}
</style>
