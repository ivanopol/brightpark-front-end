<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only placeholder="Загрузка...">
      <TabBar />
      <HeaderSticky />
    </client-only>
    <Header2 />
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
import HeaderSticky from "@/components/header/HeaderSticky";
export default {
  components: {HeaderSticky},
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
}
</script>

<style lang="scss"></style>
