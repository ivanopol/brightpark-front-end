<template>
  <ul class="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">
    <li v-for="(breadcrumb, i) in breadcrumbs" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
      <nuxt-link :to="'/' + $store.state.city.value + getUrl(breadcrumb)" itemprop="item"><span itemprop="name" v-html="breadcrumb.title"></span></nuxt-link>
      <meta itemprop="position" :content="i + 1" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    breadcrumbs: {
      default: [],
      type: Array
    }
  },
  methods: {
    getUrl: function(breadcrumb) {
      return breadcrumb.url ? '/' + breadcrumb.url : ''
    }
  }
}
</script>
