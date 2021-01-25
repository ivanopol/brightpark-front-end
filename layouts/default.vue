<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only placeholder="Загрузка...">
      <TabBar />
      <HeaderSticky />
    </client-only>
    <Header />
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
import HeaderSticky from "@/components/header/HeaderSticky";
import ScrollEvents from "@/components/events/ScrollEvents";
export default {
  components: {ScrollEvents, HeaderSticky},
  head () {
    const canonical = `${process.env.baseUrl}${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`
    return {
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
