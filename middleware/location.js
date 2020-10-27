import axios from 'axios';

export default async ({ app, store, redirect, route }) => {
  const route_segments = route.path.split('/').filter(Boolean)
  var route_city = route_segments[0]
  route_city = route_city === undefined ? '' : route_city
  var cookie = app.$cookies.get('bp-city') === undefined ? '' : app.$cookies.get('bp-city')

  const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
  };

  if (route.path === '/' && !cookie)
  {
    await axios.get(process.env.apiUrl + '/api/get_cities?&city=' + route_city, config).then((response) => {
      if ( response.data.status === 'OK') {
        store.commit('set_city', response.data.cities.active)
        store.commit('set_cities', response.data.cities.list)
        store.commit('set_models', response.data.models)
        store.commit('set_models_full', response.data.models_full)

        const data = {
          city: store.state.city,
          list: store.state.cities,
          models: store.state.models,
          models_full: store.state.models_full,
        }


        app.$cookies.set('bp-city', data, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
      }
      return {}
    }).catch(function (error) {})
    return redirect('/' + store.state.city.value)
  } else if (route.path === '/' && cookie) {
    return redirect('/' + cookie.city.value)
  }

  if (!cookie) {
    return await axios.get(process.env.apiUrl + '/api/get_cities?&city=' + route_city, config).then((response) => {
      if (response.data.status === 'OK') {
        store.commit('set_city', response.data.cities.active)
        store.commit('set_cities', response.data.cities.list)
        store.commit('set_models', response.data.models)
        store.commit('set_models_full', response.data.models_full)

        const data = {
          city: store.state.city,
          list: store.state.cities,
          models: store.state.models,
          models_full: store.state.models_full,
        }

        app.$cookies.set('bp-city', data, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
      } else if (response.data.status === 'ERROR') {
        return false;
      }
      return {}
    }).catch(function (error) {})

  }

  if (cookie) {
    const cities = app.$cookies.get('bp-city')

    if (cities.city.value === route_city) {
      store.commit('set_city', cities.city)
      store.commit('set_cities', cities.list)
      store.commit('set_models', cities.models)
      store.commit('set_models_full', cities.models_full)
      return {}
    } else {
       return await axios.get(process.env.apiUrl + '/api/get_cities?&city=' + route_city, config).then((response) => {
        if (response.data.status === 'OK') {
          store.commit('set_city', response.data.cities.active)
          store.commit('set_cities', response.data.cities.list)
          store.commit('set_models', response.data.models)
          store.commit('set_models_full', response.data.models_full)

          const data = {
            city: store.state.city,
            list: store.state.cities,
            models: store.state.models,
            models_full: store.state.models_full,
          }

          app.$cookies.set('bp-city', data, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
          })
        } else if (response.data.status === 'ERROR') {
          return false;
        }
        return {}
      }).catch(function (error) {})
    }
  }
}
