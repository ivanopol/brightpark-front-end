<template>
  <div>
    <div class="not-found">
      <div class="img-wrapper">
        <span>Упс!</span>
        <img src="/images/404.svg" alt="Ошибка 404, страница не найдена">
      </div>
      <div class="message-wrapper">
        <div class="message-text">Извините,<br> страница не найдена.</div>
        <a id="404__button__main" :href="'/' + $store.state.city.value" class="btn btn-primary btn-position white event">Перейти на главную страницу</a>
      </div>
    </div>
    <Footer
    :page="$store.state._page"
    :with_map='false'/>
    <ModelsList/>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error_layout',
  async asyncData(context) {
    context.store.commit('set_page', '404')
    context.store.commit('set_bg', '')
    return {}
  },
}
</script>
