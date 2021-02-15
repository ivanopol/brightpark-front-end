import { UtmCheck } from '@/assets/js/utmCheck.js'
var uniqid = require('uniqid');

export default async ({ app, req, route }) => {
  const excludes = [
    'localhost',
    'brightpark.ru',
  ]
  let utmObj = new UtmCheck(app, req, route, excludes)
  let data = {}

  // Если внутренний переход, то выходим
  if (utmObj.isInternalTransition() || utmObj.hasUtmCookie()) {
    console.log('Return (Удалить)')
    utmObj.refreshUtmCookie()
    return false
  }

  const utm = decodeURI(utmObj.createUtm())

  // Если нет куки, то создаем
  if (app.$cookies.get('bp_uid') === undefined) {
    data = {
      utm: utm,
      bp_uid: uniqid('bp_uid'),
      user_ip: utmObj.ip,
      date: new Date()
    }
  } else {
    data = JSON.parse(atob(app.$cookies.get('bp_uid')))
    data.date = new Date()
    if (utm.utm_medium !== '(none)') {
      data.utm = utm
    }
  }
  console.log(data)
  utmObj.createUtmCookie(data)

 // console.log(JSON.parse(atob(app.$cookies.get('bp_uid'))))
}
