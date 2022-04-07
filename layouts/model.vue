<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only placeholder="Загрузка...">
      <TabBar />
      <HeaderSticky2/>
    </client-only>
    <Header3/>
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
  data: function () {
    return {
      is_new_header: false,
    }
  },
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
  created() {
    if (this.$route.params.city === 'perm' || this.$route.params.city === 'magnitogorsk') {
      this.is_new_header = true
    }
  }
}
</script>

<style lang="scss"></style>
