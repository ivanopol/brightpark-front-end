<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only placeholder="Загрузка...">
      <TabBar />
      <HeaderSticky v-if="!is_perm"/>
      <HeaderSticky2 v-else />
    </client-only>
    <Header2 v-if="!is_perm"/>
    <Header3 v-else/>
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
  data: function () {
    return {
      is_perm: false,
    }
  },
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
  created() {
    if (this.$route.params.city === 'perm') {
      this.is_perm = true
    }
  }
}
</script>

<style lang="scss"></style>
