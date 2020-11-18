const redirects = require('../301.json')

export default async ({ redirect, route }) => {

  var route_str = route.path.slice(1)
  var segments = route_str.split('/')
  var redirect_path = ''
  var segments_tmp = {}

  var city = segments.shift()

  if (!segments.length) {
    return {}
  }

  if (segments[segments.length - 1] === 'model_details') {
    segments_tmp = {
      models: segments[0],
      model:  segments[1]
    }

    segments[0] = '<models>'
    segments[1] = '<model>'
  }

  route_str = '/' + segments.join('/')

  var isRedirect = redirects.find(r => r.from === route_str)

  if (isRedirect) {

    if (segments_tmp.hasOwnProperty('models')) {
      isRedirect.to = isRedirect.to.replace('<models>', segments_tmp.models)
    }

    if (segments_tmp.hasOwnProperty('model')) {
      isRedirect.to = isRedirect.to.replace('<model>', segments_tmp.model)
    }

    redirect_path = '/' + city + isRedirect.to
    redirect(redirect_path)
  }
}
