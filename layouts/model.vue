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
  created() {
  }
}
</script>

<style lang="scss"></style>
