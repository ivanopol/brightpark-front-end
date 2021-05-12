<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only placeholder="Загрузка...">
      <TabBar />
      <HeaderSticky />
    </client-only>
    <Header2 />
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
