<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only placeholder="Загрузка...">
      <TabBar />
      <HeaderStickyModel />
    </client-only>
    <HeaderNew :line="true" :car="$store.state.car" />
    <Nuxt keep-alive />
    <client-only placeholder="Загрузка...">
      <Scripts keep-alive/>
      <ScrollEvents />
      <ButtonEvents />
    </client-only>
    <Snow />
  </div>
</template>

<script>
import HeaderNew from "../components/header/HeaderNew";
export default {
  components: {HeaderNew},
  head () {
    const canonical = `${process.env.baseUrl}${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`
    return {
      script: [
      ],
      link: [{ rel: 'canonical', href: canonical }]
    }
  },
  watch: {
    $route () {
      let is_jivo_loaded = !!document.getElementById('jivosite')

      if (is_jivo_loaded) {
        jivo_init()
      }
    }
  },
}
</script>

<style lang="scss"></style>
