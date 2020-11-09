<template>
  <div class="scripts" v-html="$store.state.city.begin_script" v-if="isProduction"/>
</template>

<script>
export default {
  data: function () {
    return {
      isProduction: process.env.NODE_ENV === 'production'
    }
  }
}
</script>
