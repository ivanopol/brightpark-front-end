<template>
  <div :class="'wrapper ' + $store.state._background">
    <client-only>
      <TabBar />
      <HeaderSticky2 />
    </client-only>
    <Header3 />
    <Nuxt keep-alive />
    <Footer :page="$store.state._page" />
    <client-only>
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
      is_new_header: false,
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
    if (this.$route.params.city === 'perm' || this.$route.params.city === 'magnitogorsk') {
      this.is_new_header = true
    }
  }
}
</script>

<style lang="scss"></style>
