export default async ({ app, req, route }) => {
  const isReq = req !== 'undefined'
  const ip = isReq ? req.connection.remoteAddress || req.socket.remoteAddress : ''
  const referrer = req.headers.referer !== 'undefined' ? req.headers.referer : ''
  const route_has_utm = !!Object.keys(route.query).length;
  const excludes = [
    'localhost',
    'brightpark.ru',
  ]
  const servicesRegExp = new RegExp(excludes.join('|'), 'i');

  let utmObj = {
    utm_medium: '',
    utm_source: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    block: '',
    source: '',
    yclid: '',
  }


/*  if (servicesRegExp.test(referrer))  {
    return false
  }*/
/*  console.log(isReq)
  console.log(req.connection.remoteAddress)
  console.log(referrer)
  console.log(servicesRegExp.test(referrer))
  console.log(createUtm(utmObj))*/


  function fillInUtm () {
    for (let key in utm) {
      if (route.query.hasOwnProperty(key)) {
        utm[key] = route.query[key]
      }
    }
  }

  function verifyUrl (url) {
    let organic_domains_list = [
      'https://yandex.ru/',
      'https://www.google.com/',
      'https://go.mail.ru/',
      'https://www.bing.com/',
      'https://nova.rambler.ru/search',
    ]

    let url_parts = url.split('?')
    url = url_parts[0]

    return organic_domains_list.includes(url)
  }

  function getOrganicSource(url) {
    let url_parts = url.split('//')
    let url_tmp = url_parts[1].split('/')
    return url_tmp[0].replace(/nova\.|go\.|www\.|\.ru|\.com/g, '')
  }

  function createUtm(utm) {
    if (route_has_utm) {
      fillInUtm()
    } else {
      if (!referrer) {
        utm.utm_medium = '(none)'
        utm.utm_source = '(direct)'
        utm.utm_campaign = '(none)'
        utm.utm_content = 'typein'
        utm.utm_term = '(none)'
        utm.block = '(none)'
        utm.source = '(none)'
        utm.yclid = '(none)'
      } else if (referrer) {
        let is_organic = verifyUrl(referrer)

        if (is_organic) {
          utm.utm_medium = 'organic'
          utm.utm_source = getOrganicSource(referrer)
          utm.utm_campaign = '(none)'
          utm.utm_content = 'organic'
          utm.utm_term = '(none)'
          utm.block = '(none)'
          utm.source = '(none)'
          utm.yclid = '(none)'
        } else {
          utm.utm_medium = 'referral'
          utm.utm_source = referrer
          utm.utm_campaign = '(none)'
          utm.utm_content = 'referral'
          utm.utm_term = '(none)'
          utm.block = '(none)'
          utm.source = '(none)'
          utm.yclid = '(none)'
        }
      }
    }
    return utm
  }


  //console.log(app.$cookies.getAll())
}
