import { UtmCheck } from '@/assets/js/utmCheck.js'

export default async ({ req, route }) => {
  const excludes = [
   // 'localhost',
    'brightpark.ru',
  ]
  let utmObj = new UtmCheck(req, route, excludes)

  // Если внутренний переход, то выходим
  if (utmObj.isInternalTransition() || utmObj.hasUtmCookie()) {
    console.log('Return (Удалить)')
    return false
  }

  let utm = utmObj.createUtm()
  utmObj.createUtmCookie(utm)
}
