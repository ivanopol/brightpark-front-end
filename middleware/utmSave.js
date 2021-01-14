export default async ({ req, route }) => {
  const isReq = typeof req !== 'undefined'
  const ip = isReq ? req.connection.remoteAddress || req.socket.remoteAddress : ''
  const referrer = isReq ? req.headers.referer : ''
  const route_has_utm = !!Object.keys(route.query).length;

  let utm = {
    utm_medium: '',
    utm_source: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    block: '',
    source: '',
    yclid: '',
  }

  function filInUtm() {
    for (let key in utm) {
      if (route.query.hasOwnProperty(key)) {
        utm[key] = route.query[key]
      }
    }
  }

  function handleReferrer(referrer) {

  }

  if (route_has_utm) {
    filInUtm()
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
      /*      referrer: 'https://yandex.ru/'
            referrer: 'https://www.google.com/'
            referrer: 'https://go.mail.ru/'
            referrer: 'https://www.bing.com/'
            referrer: 'https://nova.rambler.ru/search'*/

      /*
      ?utm_medium=cpc&utm_source=yandex&utm_campaign=PRM__Poisk__Vesta__NEW%7C57675684&utm_content=dynamics%7Cgid%7C4403639191&utm_term=aid%7C10025877640.24231883151%7CЛаде%20Веста%20Купить%7Cnone.dvc%7Cdesktop.Пермь.&block=%7Cpos%7Cpremium.3&source=%7Csrc%7Csearch.none&yclid=18254561133121790562
      */
    }
  }

  console.log(utm)
}
