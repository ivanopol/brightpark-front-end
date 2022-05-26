<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only>
      <TabBar />
      <HeaderSticky />
    </client-only>
    <HeaderService />
    <Nuxt />
    <client-only>
      <Scripts keep-alive/>
      <ScrollEvents />
      <ButtonEvents />
    </client-only>
    <Snow />
  </div>
</template>

<script>
export default {
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
  created() {
    if (this.$route.params.city === 'perm') {
      this.is_new_header = true
    }
  }
}
</script>

<style lang="scss"></style>
