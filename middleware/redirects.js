const redirects = require('../301.json')

export default async ({ redirect, route }) => {
  var route = route.path.slice(1)
  var segments = route.split('/')
  var redirect_path = ''

  var city = segments.shift()

  if (!segments.length) {
    return {}
  }

  route = '/' + segments.join('/')

  const isRedirect = redirects.find(r => r.from === route)

  if (isRedirect) {
    redirect_path = '/' + city + isRedirect.to
    redirect(redirect_path)
  }
}
