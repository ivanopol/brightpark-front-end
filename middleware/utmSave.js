import { UtmCheck } from '@/assets/js/utmCheck.js'

export default async ({ app, req, route }) => {
  const excludes = [
    'localhost',
    'brightpark.ru',
  ]
  let utmObj = new UtmCheck(app, req, route, excludes)
  let data = {}

  // Если внутренний переход, то выходим
  if (utmObj.isInternalTransition() || utmObj.hasUtmCookie()) {
    utmObj.refreshUtmCookie()
    return false
  }

  const utm = utmObj.createUtm()
  const now = new Date();

  // Если нет куки, то создаем
  if (app.$cookies.get('bp_uid') === undefined) {
    let bp_uid = utmObj.getUserId()
    utmObj.newVisit = true

    data = {
      utm_medium: utm.utm_medium,
      utm_source: utm.utm_source,
      utm_campaign: utm.utm_campaign,
      utm_content: utm.utm_content,
      utm_term: utm.utm_term,
      block: utm.block,
      source: utm.source,
      yclid: utm.yclid,
      bp_uid: bp_uid,
      user_ip: utmObj.ip,
      date: now,
      city: route.params.city,
      path: route.path,
    }
  } else {
    data = utmObj.decodeCookie(app.$cookies.get('bp_uid'))
    data.date = now
    if (utm.utm_medium !== '(none)') {
      data.utm_medium = utm.utm_medium
      data.utm_source = utm.utm_source
      data.utm_campaign = utm.utm_campaign
      data.utm_content = utm.utm_content
      data.utm_term = utm.utm_term
      data.block = utm.block
      data.source = utm.source
      data.yclid = utm.yclid
    }
  }

  utmObj.createUtmCookie(data)

  if (utmObj.newVisit) {
    utmObj.saveUtm(data)
  }
}
