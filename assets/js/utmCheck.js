import axios from "axios";
var uniqid = require('uniqid');

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
    this.config = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };
    this.newVisit = false
    this.cookieLifetime = 60 * 30
  }

  /* Определяем тип переходаЖ внутренний или внешний */
  isInternalTransition() {
    return this.servicesRegExp.test(this.referrer) //|| this.referrer === undefined
  }

  fillInUtm () {
    for (let key in this.utm) {
      if (this.route.query.hasOwnProperty(key)) {
        this.utm[key] = decodeURI(this.route.query[key])
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

  encodeCookie(obj) {
    return btoa(unescape(encodeURIComponent(obj)))
  }

  decodeCookie(obj) {
    return JSON.parse(decodeURIComponent(escape(atob(obj))))
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
    this.app.$cookies.set('bp_uid', this.encodeCookie(JSON.stringify(data)), {
      path: '/',
      maxAge: this.cookieLifetime
    })
  }

  refreshUtmCookie() {
    if (this.app.$cookies.get('bp_uid') !== undefined) {
      let data = this.app.$cookies.get('bp_uid')
      this.app.$cookies.set('bp_uid', data, {
        path: '/',
        maxAge: this.cookieLifetime
      })
    }
  }

  async saveUtm(data) {
    await axios.post(process.env.apiUrl + '/api/save_utm', data, this.config).then((response) => {
      console.log(response.data)
    })
  }

  getUserId() {
    let bp_uid = ''

    if (this.app.$cookies.get('bp_uuid') === undefined) {
      bp_uid = uniqid('bp_uid')
      this.app.$cookies.set('bp_uuid', bp_uid, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365
      })
    } else {
      bp_uid = this.app.$cookies.get('bp_uuid')
    }

    return bp_uid
  }
}




