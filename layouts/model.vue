<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only placeholder="Загрузка...">
      <TabBar />
      <HeaderStickyModel />
    </client-only>
    <Header :line="true" :head_class="'header-model'" :car="$store.state.car" />
    <Nuxt keep-alive />
    <Footer :page="$store.state._page" />
    <client-only placeholder="Загрузка...">
      <Scripts keep-alive/>
      <ScrollEvents />
      <ButtonEvents />
    </client-only>
    <Snow />
  </div>
</template>

<script>
export default {
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
  mounted() {
   // console.log(this.$route)
   // jivo_init()
    // console.log('referrer: \'' + document.referrer + '\'')
  },
  watch: {
    $route () {
      //jivo_init()
      jivo_onLoadCallback ("test")
      console.log('route changed', this.$route)
    }
  },
}
</script>

<style lang="scss"></style>
