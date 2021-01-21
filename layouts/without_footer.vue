<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only placeholder="Загрузка...">
      <TabBar />
      <HeaderSticky />
    </client-only>
    <Header />
    <Nuxt />
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
     //   { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' } // Debug панель
      ],
      link: [{ rel: 'canonical', href: canonical }]
    }
  },
  mounted() {
    console.log('referrer: \'' + document.referrer + '\'')
  },
  watch: {
    $route () {
      console.log('route changed', this.$route)
    }
  },
}
</script>

<style lang="scss"></style>
