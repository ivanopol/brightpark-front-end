<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only placeholder="Загрузка...">
      <TabBar />
      <HeaderSticky />
    </client-only>
    <Header />
    <Nuxt />
    <Footer :page="$store.state._page" />
    <client-only placeholder="Загрузка...">
      <ScrollEvents />
      <ButtonEvents />
    </client-only>
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
}
</script>

<style lang="scss"></style>
