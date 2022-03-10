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
      <div class="call-us__list" v-show="opened">
        <a :href="'tel:' + phone.number_nick"
           v-for="phone in phones"
           :key="phone.id"
           class="call-us__list__item event"
           v-bind:class="{ callibri_phone : phone.is_replacement }"
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
      phones: [],
      phones_list: {
        'perm': [
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
            number: '+7 342 214-84-01',
            number_nick: '+73422148401',
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
        'magnitogorsk': [
          {
            id: 1,
            title: 'Отдел продаж',
            icon: 'sales_department',
            number: '+7 351 958-56-58',
            number_nick: '+73519585658',
            is_replacement: true
          },
          {
            id: 2,
            title: 'Сервис',
            icon: 'service_department',
            number: '+7 351 951-58-56',
            number_nick: '+73519515856',
            is_replacement: false
          },
          {
            id: 3,
            title: 'Другие вопросы',
            icon: 'other_questions',
            number: '+7 351 958-56-58',
            number_nick: '+73519585658',
            is_replacement: false
          }
        ],
        'rostov-na-donu': [
          {
            id: 1,
            title: 'Отдел продаж',
            icon: 'sales_department',
            number: '+7 863 308-94-88',
            number_nick: '+78633089488',
            is_replacement: true
          },
          {
            id: 2,
            title: 'Сервис',
            icon: 'service_department',
            number: '+7 863 310-94-86',
            number_nick: '+78633109486',
            is_replacement: false
          },
          {
            id: 3,
            title: 'Другие вопросы',
            icon: 'other_questions',
            number: '+7 863 308-94-88',
            number_nick: '+78633089488',
            is_replacement: false
          }
        ],
        'yekaterinburg': [
          {
            id: 1,
            title: 'Отдел продаж',
            icon: 'sales_department',
            number: '+7 343 385-03-85',
            number_nick: '+73433850385',
            is_replacement: true
          },
          {
            id: 2,
            title: 'Сервис',
            icon: 'service_department',
            number: '+7 343 385-03-95',
            number_nick: '+73433850395',
            is_replacement: false
          },
          {
            id: 3,
            title: 'Другие вопросы',
            icon: 'other_questions',
            number: '+7 343 385-03-85',
            number_nick: '+73433850385',
            is_replacement: false
          }
        ],
        'volgograd': [
          {
            id: 1,
            title: 'Отдел продаж',
            icon: 'sales_department',
            number: '+7 844 252-54-52',
            number_nick: '+78442525452',
            is_replacement: true
          },
          {
            id: 2,
            title: 'Сервис',
            icon: 'service_department',
            number: '+7 844 252-54-62',
            number_nick: '+78442525462',
            is_replacement: false
          },
          {
            id: 3,
            title: 'Другие вопросы',
            icon: 'other_questions',
            number: '+7 844 252-54-52',
            number_nick: '+78442525452',
            is_replacement: false
          }
        ],
        'moscow': [
          {
            id: 1,
            title: 'Отдел продаж',
            icon: 'sales_department',
            number: '+7 495 145-88-45',
            number_nick: '+74951458845',
            is_replacement: true
          },
          {
            id: 2,
            title: 'Сервис',
            icon: 'service_department',
            number: '+7 495 145-87-45',
            number_nick: '+74951458745',
            is_replacement: false
          },
          {
            id: 3,
            title: 'Другие вопросы',
            icon: 'other_questions',
            number: '+7 495 145-88-45',
            number_nick: '+74951458845',
            is_replacement: false
          }
        ],
      },
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
  created() {
    this.phones = this.phones_list[this.$route.params.city]
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

  &:hover .call-us__list__item__phone {
    color: #e95909;
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
