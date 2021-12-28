<template>
  <div class="container-big plate-new" v-observe-visibility="{ callback: visibilityChanged, intersection: { threshold: 0 }, }">
    <transition-group name="slide-fade" tag="div" v-on:enter="enter">
      <div v-bind:key="1" :class="{'slide-fade-enter-active' : show, 'slide-fade-leave-active slide-fade-leave-to' : !show}">
        <p>31 декабря салоны работают до 14:00, 1 января - выходной день, со 2 января работаем в обычном режиме.</p>
      </div>
    </transition-group>
<!--    <div class="plate-new__button-wrap">
      <a href="#" :class="'plate-button color-orange event'">Подробнее</a>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'PlateNew',
  data: function() {
    return {
      show: false
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      this.show = isVisible;
    },
    enter: function(el, done) {
      var that = this;
    },
  },
}
</script>

<style scoped lang="scss">
  .plate-new {
    background-color: #5bbd84;
    padding: 15px 40px;
  //  display: grid;
   // grid-template-columns: 1.5fr .5fr;

    p {
      font-family: 'Factor A';
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      cursor: default;
      user-select: none;
      line-height: 1.4;
    }
  }

  .container-big {
    overflow: hidden;
    max-width: 1440px;
    margin: 0 auto;
  }


  .plate-new__button-wrap {
    display: flex;
    justify-content: flex-end;
  }

  /* Анимации появления и исчезновения могут иметь */
  /* различные продолжительности и динамику.       */
  .slide-fade-enter-active {
    transition: all 1s ease;
  }
  .slide-fade-leave-active {
    transition: all 1.6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(-10px);
    opacity: 0;
  }

  .plate-button {
    font-family: 'Factor A';
    position: relative;
    color: #fff;
    font-weight: normal;
    text-decoration: underline;
    font-size: 16px;
    padding: 16px 47px;
    border-radius: 6px;
    background-color: #EE6723
  }

  @media only screen and (max-width: 580px) {
    .plate-new {
      padding: 10px 20px;

      p {
        font-size: 14px;
      }
    }
  }
</style>
