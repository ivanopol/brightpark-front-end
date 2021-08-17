<template>
<div class="color-choose">
  <div class="color-choose__head">
    <svg width="135" height="40" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="color-choose__head__decor">
      <path d="M134.96 12.4913L133.259 0H-16.0462L-18.9156 14.4284C-19.2881 16.3014 -18.4034 18.2003 -16.7461 19.0855L19.3669 38.3736C22.2541 39.9156 25.5772 40.3798 28.7633 39.6861L131.676 17.2789C133.83 16.81 135.263 14.7202 134.96 12.4913Z" fill="#514EA1"/>
    </svg>
    <h3>
      Выберите цвет
    </h3>
  </div>

  <ul class="color-choose__list">
    <li
      v-for="color in colors"
      :key="color.id"
      @click="changeColor(color.id)"
      :class="[currentColor === color.id || activeColor === color.id ? 'active-color' : '']"
    >
      <div :class="'colors-choose__list__circle ' + color.class" />

      <p class="colors-choose__list__name">
        {{ color.title }}
      </p>
    </li>
  </ul>


</div>
</template>

<script>
export default {
  name: "colorChooseMobile",

  data: function() {
    return {
      currentImage: '',
      currentColor: '',
      colorClass: '',
    }
  },

  props: {
    colors: Array,
    activeColor: Number,
  },

  methods: {
    changeColor(color) {
      this.colors.forEach(el => {
        if (el.id == color) {
          this.currentImage = el.image;
          this.currentColor = el.id;
          this.colorClass = el.class;
        }
      })

      this.$emit('changeColor' , {
        image: this.currentImage,
        colorId: this.currentColor,
        colorClass: this.colorClass
      });
    }
  }
}
</script>

<style scoped lang="scss">

.color-choose__head {
  position: relative;
  height: 100px;
  padding-top: 47px;
  border-bottom: 1px solid #D9DADA;

  h3 {
    font-family: "Bright Park Display";
    text-transform: unset;
    font-weight: 700;
    font-size: 28px;
    text-align: center;
  }
}

.color-choose__list {
  padding: 0 20px;
  margin-top: 30px;

  li {
    margin-bottom: 10px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    cursor: pointer;

    &.active-color {
      .colors-choose__list__circle {
        position: relative;
        &:after {
          content: "";
          position: absolute;
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgN0wzIDlMMTEgMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==);
          background-size: cover;
          width: 16px;
          height: 13px;
          display: block;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}

.colors-choose__list__name {
  font-weight: 500;
  font-size: 16px;
  font-family: "Factor A";
}

.color-choose__head__decor {
  position: absolute;
  top: 0;
  left: 0px;
}

.colors-choose__list__circle {
  width: 60px;
  height: 60px;
  background: black;
  border-radius: 50%;
  margin-right: 18px;

  &.color- {
    &blue-planet {
      background-color: #0057ae;
    }

    &cornelian {
      background-color: #860e0c;
    }

    &white-cloud {
      background-color: #fefaf4;
    }

    &panther {
      background-color: #161313;
    }

    &riesling {
      background-color: #b4b2ae;
    }

    &techno {
      background-color: #aea297;
    }

    &borneo {
      background-color: #98a5ac;
    }

    &coriander {
      background-color: #857d7a;
    }

    &white-ice,
    &white-glacial {
      background-color: #ffffff;
    }

    &red-cornelian {
      background-color: #860E02;
    }

    &red-alloy {
      background-color: #B10121;
    }

    &angkor {
      background-color: #3F3A32;
    }

    &carfagen {
      background-color: #E8E5CD;
    }

    &daiving {
      background-color: #1449BF;
    }

    &phantom {
      background-color: #686866;
    }

    &pluton {
      background-color: #515958;
    }

    &maestro {
      background-color: #111112;
    }

    &platina {
      background-color: #C3C4C4;
    }

    &fiery-red {
      background-color: #DA0F23;
    }

    &basalt-gray {
      background-color: #A8B9A0;
    }

    &light-brown-cougar {
      background-color: #986F59;
    }

    &black-pearl {
      background-color: #1C1D1A;
    }

    &platina {
      background-color: #C3C4C4;
    }

    &white-cloud {
      background-color: #FEFAF4;
      border: 1px solid #F9F5F0;
    }

    &nessi-2 {
      background-color: #112717;
    }

    &panthera {
      background-color: #161313;
    }

    &benefis {
      background-color: #430D45;
    }

    &barokko {
      background-color: #850D34;
    }

    &terra {
      background-color: #6C2003;
    }

    &borneo-dark {
      background-color: #444E4E;
    }

    &snow-queen {
      background-color: #D0D8E2;
    }

    &coriander-dark {
      background-color: #706c62;
    }

    &camouflage-jungle {
      background-color: #1E4526;
    }

    &sky-blue {
      background-color: #1279BC;
    }

    &cashemer {
      background-color: #311500;
    }

    &amber {
      background-color: #FF9225;
    }

    &mars {
      background-color: #CB390A;
    }

    &extravaganza {
      background-color: #96011D;
    }

    &sochi {
      background-color: #1C3937;
    }

    &techno-2 {
      background-color: #BABABA;
    }

    &quartz {
      background-color: #858585;
    }

    &borneo-2 {
      background-color: #444E4E;
    }

    &black-mirror {
      background-color: #000;
    }

    &snow-queen-2 {
      background-color: #E2E8EC;
    }

    &wild-plum {
      background-color: #652A6D;
    }

    &iceberg {
      background-color: #FEFEFE;
    }

    &blue-planet {
      background-color: #0056ae;
    }
  }
}
</style>
