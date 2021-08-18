<template>
  <a :style="{ backgroundColor: buttonColor }" class="event" target="_blank" :href="path">
    {{ buttonText }}
  </a>
</template>

<script>
export default {
  name: "ButtonNew",
  props: {
    path: {
      default: '',
      type: String
    },
    buttonText: {
      default: 'Ыы',
      type: String
    },
    width: {
      type: String
    },
    buttonHeight: {
      type: String
    },
    buttonColor: {
      type: String,
      default: '#5CBE86',
    },
  },

  data: function () {
    return {

    }
  },
}
</script>

<style scoped lang="scss">

a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  padding: 10px 15px;
  background: none;
  border: none;
  width: 100%;
  font-family: 'Factor A';
  letter-spacing: 0.05em;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
    transition: .2s ease;
  }
}

</style>
