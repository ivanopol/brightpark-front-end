
export const state = () => ({
  city: {},
  cities: {},
  models: {},
  models_full: {},
  car: {},
  max_credit_period: 60,
  _model: {
    slug: '',
    title: '',
  },
  _background: '',
  _page: '',
  _footer: true,
})

export const mutations = {
  set_city(state, city) {
    state.city = city
  },
  set_cities(state, cities) {
    state.cities = cities
  },
  set_models(state, models) {
    state.models = models
  },
  set_models_full(state, models) {
    state.models_full = models
  },
  set_car(state, car) {
    state.car = car
  },
  set_bg(state, bg) {
    state._background = bg
  },
  set_page(state, page) {
    state._page = page
  },
  show_footer(state, value) {
    state._footer = value
  },
  set_model(state, model) {
    state._model.slug = model.slug
    state._model.title = model.title
  }
}
