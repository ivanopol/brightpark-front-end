export default async ({ app, store }) => {

  if (Object.keys(store.state._month).length === 0) {

    let months_list = {
      nominative: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
      accusative: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
      prepositional: ['январе', 'феврале', 'марте', 'апреле', 'мае', 'июне', 'июле', 'августе', 'сентябре', 'октябре', 'ноябре', 'декабре'],
    }

    let this_month = {
      nominative: months_list.nominative[new Date().getMonth()],
      accusative: months_list.accusative[new Date().getMonth()],
      prepositional: months_list.prepositional[new Date().getMonth()]
    }

    store.commit('set_month', this_month)
  }
}
