<template>
  <button :type="buttonType" :style="{ backgroundColor: buttonColor }">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ButtonNew",
  props: {
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
    buttonType: {
      type: String
    },
  },

  data: function () {
    return {

    }
  },
}
</script>

<style scoped lang="scss">

button {
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
    opacity: .8;
    transition: .2s ease;
  }
}

</style>
