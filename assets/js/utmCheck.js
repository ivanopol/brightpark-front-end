export class UtmCheck {
  constructor(app, req, route, excludes) {
    this.app = app
    this.route = route
    this.isReq = typeof req !== "undefined" && req !== null
    this.ip = this.isReq && req.connection !== 'undefined' ? req.connection.remoteAddress || req.socket.remoteAddress : ''
    this.referrer = this.isReq && req.headers.referer !== 'undefined' ? req.headers.referer : ''
    this.route_has_utm = !!Object.keys(route.query).length
    this.excludes = excludes
    this.servicesRegExp = new RegExp(this.excludes.join('|'), 'i')
    this.utm = {
      utm_medium: '',
      utm_source: '',
      utm_campaign: '',
      utm_content: '',
      utm_term: '',
      block: '',
      source: '',
      yclid: '',
    }
  }

  /* Определяем тип переходаЖ внутренний или внешний */
  isInternalTransition() {
    return this.servicesRegExp.test(this.referrer) //|| this.referrer === undefined
  }

  fillInUtm () {
    for (let key in this.utm) {
      if (this.route.query.hasOwnProperty(key)) {
        this.utm[key] = this.route.query[key]
      }
    }
  }

  verifyUrl (url) {
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

  getOrganicSource(url) {
    let url_parts = url.split('//')
    let url_tmp = url_parts[1].split('/')
    return url_tmp[0].replace(/nova\.|go\.|www\.|\.ru|\.com/g, '')
  }

  createUtm() {
    if (this.route_has_utm) {
      this.fillInUtm()
    } else {
      if (!this.referrer) {
        this.utm.utm_medium = '(none)'
        this.utm.utm_source = '(direct)'
        this.utm.utm_campaign = '(none)'
        this.utm.utm_content = 'typein'
        this.utm.utm_term = '(none)'
        this.utm.block = '(none)'
        this.utm.source = '(none)'
        this.utm.yclid = '(none)'
      } else if (this.referrer) {
        let is_organic = this.verifyUrl(this.referrer)

        if (is_organic) {
          this.utm.utm_medium = 'organic'
          this.utm.utm_source = this.getOrganicSource(this.referrer)
          this.utm.utm_campaign = '(none)'
          this.utm.utm_content = 'organic'
          this.utm.utm_term = '(none)'
          this.utm.block = '(none)'
          this.utm.source = '(none)'
          this.utm.yclid = '(none)'
        } else {
          this.utm.utm_medium = 'referral'
          this.utm.utm_source = this.referrer
          this.utm.utm_campaign = '(none)'
          this.utm.utm_content = 'referral'
          this.utm.utm_term = '(none)'
          this.utm.block = '(none)'
          this.utm.source = '(none)'
          this.utm.yclid = '(none)'
        }
      }
    }
    return this.utm
  }

  hasUtmCookie() {

  }

  createUtmCookie(data) {
   // console.log(JSON.stringify(data))
    this.app.$cookies.set('bp_uid', btoa(JSON.stringify(data)), {
      path: '/',
      maxAge: 60 * 30
    })
  }

  refreshUtmCookie() {
    if (this.app.$cookies.get('bp_uid') !== undefined) {
      let data = this.app.$cookies.get('bp_uid')
      this.app.$cookies.set('bp_uid', data, {
        path: '/',
        maxAge: 60 * 30
      })
    }
  }
}




