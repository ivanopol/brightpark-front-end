<template>
</template>

<script>
export default {
  data: function () {
    return {
      isProduction: process.env.NODE_ENV === 'production',
      loadScripts: false,
      bots: [
          'rambler','googlebot','aport','yahoo','msnbot','turtle','mail.ru','omsktele',
          'yetibot','picsearch','sape.bot','sape_context','gigabot','snapbot','alexa.com',
          'megadownload.net','askpeter.info','igde.ru','ask.com','qwartabot','yanga.co.uk',
          'scoutjet','similarpages','oozbot','shrinktheweb.com','aboutusbot','followsite.com',
          'dataparksearch','google-sitemaps','appEngine-google','feedfetcher-google',
          'liveinternet.ru','xml-sitemaps.com','agama','metadatalabs.com','h1.hrn.ru',
          'googlealert.com','seo-rus.com','yaDirectBot','yandeG','yandex',
          'yandexSomething','Copyscape.com','AdsBot-Google','domaintools.com',
          'Nigma.ru','bing.com','dotnetdotcom', 'Chrome-Lighthouse'
      ]
    }
  },
  mounted() {
    let bots = this.bots.filter(function(item) {
      return window.navigator.userAgent.indexOf(item) + 1
    })

    const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent)

    let isBot = bots.length > 0
    let isloaded = document.querySelectorAll(".loading_scripts").length > 0;

    if (!isBot && !isloaded) {
      var tag_body = document.getElementsByTagName("body")[0]

      if (this.isProduction) {
        this.calltouchCity(this.$store.state.city.scripts.calltouch, tag_body)
        this.yaMetrika(tag_body)
        this.roiStat(tag_body)
      }

      setTimeout(() => {
        this.yaMaps(tag_body)

        if (this.isProduction) {
          if (this.$store.state.city.value === 'yekaterinburg') {
            this.ruTarget(tag_body)
          }

          this.jivosite(tag_body)
          this.googleAnalytics(tag_body)
          this.appendCityScripts(this.$store.state.city.scripts, tag_body)
          this.callibri(tag_body)
        }
      }, 2500)
    }

  },
  methods: {
    messangers (tag_body) {
      var messangers = document.createElement('script')
      messangers.className = 'loading_scripts'
      messangers.innerHTML = '(function(w,d,u){\n' +
        '                var s=d.createElement(\'script\');s.async=true;s.src=u+\'?\'+(Date.now()/60000|0);\n' +
        '                var h=d.getElementsByTagName(\'script\')[0];h.parentNode.insertBefore(s,h);\n' +
        '        })(window,document,\'https://team.brightpark.ru/upload/crm/site_button/loader_3_ljc1n8.js\');'

      tag_body.appendChild(messangers);
    },
    messangersMobile (tag_body) {
      var messangersMobile = document.createElement('script')
      messangersMobile.className = 'loading_scripts'
      messangersMobile.innerHTML = '(function(w,d,u){\n' +
        '                var s=d.createElement(\'script\');s.async=true;s.src=u+\'?\'+(Date.now()/60000|0);\n' +
        '                var h=d.getElementsByTagName(\'script\')[0];h.parentNode.insertBefore(s,h);\n' +
        '        })(window,document,\'https://team.brightpark.ru/upload/crm/site_button/loader_4_20je00.js\');'

      tag_body.appendChild(messangersMobile);
    },
    appendCityScripts (id, tag_body) {
      setTimeout(() => {
        this.yaMetrikaCity(id.ya_metrika, tag_body)
      }, 200)
      this.gTagCity(id.gtag, tag_body)
      this.facebookCity(id.facebook, tag_body)
      this.mailRuCity(id.mailru, tag_body)
      this.vkCity(id.vk, tag_body)
      this.tiktokCity(id.tiktok, tag_body)
    },
    callibri (tag_body) {
      let callibri = document.createElement('script')
      callibri.src = "//cdn.callibri.ru/callibri.js"
      callibri.type = "text/javascript"
      callibri.charset = "utf-8"
      callibri.async = true

      tag_body.appendChild(callibri)
    },
    ruTarget (tag_body) {
      var ru_target = document.createElement('script')
      ru_target.innerHTML = '(function(w, d, s, p) { var f = d.getElementsByTagName(s)[0], j = d.createElement(s); j.async = true; j.src = \'//cdn.rutarget.ru/static/tag/tag.js\'; f.parentNode.insertBefore(j, f); w[p] = {rtgNoSync: false, rtgSyncFrame: true}; })(window, document, \'script\', \'_rtgParams\');'
      tag_body.appendChild(ru_target)
    },
    yaMetrikaCity (id, tag_body) {
      var ya_metrika_city = document.createElement('script')
      ya_metrika_city.className = 'loading_scripts'
      ya_metrika_city.async = true
      ya_metrika_city.innerHTML = '(function(m, e, t, r, i, k, a) { m[i] = m[i] || function() {\n' +
        '    (m[i].a = m[i].a || []).push(arguments) };\n' +
        '    m[i].l = 1 * new Date();\n' +
        '    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a) })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n' +
        'ym(' + id + ', "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true });'
      ya_metrika_city.type = "text/javascript"

      var ya_metrika_noscript_city = document.createElement('noscript')
      ya_metrika_noscript_city.className = 'loading_scripts'
      ya_metrika_noscript_city.innerHTML = '<div><img src="https://mc.yandex.ru/watch/' + id + '" style="position:absolute; left:-9999px;" alt="" /></div>'
      tag_body.appendChild(ya_metrika_city)
      tag_body.appendChild(ya_metrika_noscript_city)
    },
    gTagCity (id, tag_body) {
      var google_gtag = document.createElement('script')
      google_gtag.className = 'loading_scripts'
      google_gtag.src = "https://www.googletagmanager.com/gtag/js?id=" + id
      google_gtag.async = true

      var google_script = document.createElement('script')
      google_script.className = 'loading_scripts'
      google_script.async = true
      google_script.innerHTML = "window.dataLayer = window.dataLayer || [];\n" +
      "function gtag() { dataLayer.push(arguments); } gtag(\"js\", new Date());\n" +
      "gtag(\"config\", \"" + id + "\");"

      tag_body.appendChild(google_gtag)
      tag_body.appendChild(google_script)
    },
    facebookCity (id, tag_body) {
      var facebook = document.createElement('script')
      facebook.className = 'loading_scripts'
      facebook.async = true
      facebook.innerHTML = '! function(f, b, e, v, n, t, s) { if (f.fbq) return;\n' +
        '    n = f.fbq = function() { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n;\n' +
        '    n.push = n;\n' +
        '    n.loaded = !0;\n' +
        '    n.version = "2.0";\n' +
        '    n.queue = [];\n' +
        '    t = b.createElement(e);\n' +
        '    t.async = !0;\n' +
        '    t.src = v;\n' +
        '    s = b.getElementsByTagName(e)[0];\n' +
        '    s.parentNode.insertBefore(t, s) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");\n' +
        'fbq("init", "' + id +'");\n' +
        'fbq("track", "PageView");'

      var facebook_noscript = document.createElement('noscript')
      facebook_noscript.className = 'loading_scripts'
      facebook_noscript.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=' + id +'&ev=PageView&noscript=1" />'

      tag_body.appendChild(facebook)
      tag_body.appendChild(facebook_noscript)
    },
    mailRuCity (id, tag_body) {
      var mailru = document.createElement('script')
      mailru.className = 'loading_scripts'
      mailru.type = "text/javascript"
      mailru.async = true
      mailru.innerHTML = 'var _tmr = window._tmr || (window._tmr = []);\n' +
        '_tmr.push({ id: "' + id + '", type: "pageView", start: (new Date()).getTime(), pid: "USER_ID" });\n' +
        '(function(d, w, id) { if (d.getElementById(id)) return; var ts = d.createElement("script");\n' +
        '    ts.type = "text/javascript";\n' +
        '    ts.async = true;\n' +
        '    ts.id = id;\n' +
        '    ts.src = "https://top-fwz1.mail.ru/js/code.js"; var f = function() { var s = d.getElementsByTagName("script")[0];\n' +
        '        s.parentNode.insertBefore(ts, s); }; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "topmailru-code");'

      var mailru_noscript = document.createElement('noscript')
      mailru_noscript.className = 'loading_scripts'
      mailru_noscript.innerHTML = '<div><img src="https://top-fwz1.mail.ru/counter?id=' + id + ';js=na" style="border:0;position:absolute;left:-9999px;" alt="Top.Mail.Ru" /></div>'

      tag_body.appendChild(mailru)
      tag_body.appendChild(mailru_noscript)
    },
    vkCity (id, tag_body) {
      var vk = document.createElement('script')
      vk.type = "text/javascript"
      vk.className = 'loading_scripts'
      vk.async = true
      vk.innerHTML = '! function() { var t = document.createElement("script");\n' +
        '    t.type = "text/javascript", t.async = !0, t.src = "https://vk.com/js/api/openapi.js?167", t.onload = function() { VK.Retargeting.Init("' + id + '"), VK.Retargeting.Hit() }, document.head.appendChild(t) }();'

      var vk_noscript = document.createElement('noscript')
      vk_noscript.className = 'loading_scripts'
      vk_noscript.innerHTML = '<img src="https://vk.com/rtrg?p=' + id + '" style="position:fixed; left:-999px;" alt="" />'

      tag_body.appendChild(vk)
      tag_body.appendChild(vk_noscript)
    },
    calltouchCity (id, tag_body) {
      var calltouch = document.createElement('script')
      calltouch.charset = "UTF-8"
      calltouch.className = 'loading_scripts'
      calltouch.async = true
      calltouch.innerHTML = '(function(w,d,n,c){w.CalltouchDataObject=n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)};s.type="text/javascript";s.async=true;s.src="https://mod.calltouch.ru/init.js?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window,document,"ct","' + id + '");'

      tag_body.appendChild(calltouch)
    },
    tiktokCity (id, tag_body) {
      if (!id) {
        return false
      }
      var tiktok = document.createElement('script')
      tiktok.type = "text/javascript"
      tiktok.className = 'loading_scripts'
      tiktok.async = true
      tiktok.innerHTML = '!function (w, d, t) {\n' +
        '\t\t  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};\n' +
        '\t\t\n' +
        '\t\t  ttq.load(\'' + id + '\');\n' +
        '\t\t  ttq.page();\n' +
        '\t\t}(window, document, \'ttq\');'
      tag_body.appendChild(tiktok);
    },
    yaMaps (tag_body) {
      var ya_maps = document.createElement('script')
      ya_maps.className = 'loading_scripts'
      ya_maps.src = "https://api-maps.yandex.ru/2.1/?apikey=e65fea9d-e8a0-479d-b21a-35637fdc6c6c&lang=ru_RU&init=onload";
      ya_maps.type = "text/javascript"

      tag_body.appendChild(ya_maps);
    },
    yaMetrika (tag_body) {
      var ya_metrika = document.createElement("script")
      ya_metrika.type = 'text/javascript';
      ya_metrika.async = true
      ya_metrika.className = 'loading_scripts'
      ya_metrika.innerHTML = '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n' +
        '            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n' +
        '        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n' +
        '\n' +
        '        ym(54496129, "init", {\n' +
        '            clickmap:true,\n' +
        '            trackLinks:true,\n' +
        '            accurateTrackBounce:true,\n' +
        '            webvisor:true\n' +
        '        });'

      var ya_metrika_noscript = document.createElement('noscript')
      ya_metrika_noscript.className = 'loading_scripts'
      ya_metrika_noscript.innerHTML = '<div><img src="https://mc.yandex.ru/watch/54496129" style="position:absolute; left:-9999px;" alt="" /></div>'

      tag_body.appendChild(ya_metrika)
      tag_body.appendChild(ya_metrika_noscript)
    },
    jivosite(tag_body) {
      var jivosite = document.createElement("script")
      jivosite.src = "//code.jivosite.com/widget/H95FUE1JmR"
      jivosite.className = 'loading_scripts'
      jivosite.id = 'jivosite'
      jivosite.async = true
      var jivosite_custom = document.createElement("script")
      jivosite_custom.className = 'loading_scripts'
      jivosite_custom.innerHTML = 'function jivo_onLoadCallback(){\n' +
        '            jivo_api.setUserToken(yaCounter54496129.getClientID());\n' +
        '        }'
      tag_body.appendChild(jivosite)
      tag_body.appendChild(jivosite_custom)
    },
    roiStat(tag_body) {
      var roiStat = document.createElement("script")
      roiStat.className = 'loading_scripts'
      roiStat.innerHTML = '(function(w, d, s, h, id) {    w.roistatProjectId = id; w.roistatHost = h;    var p = d.location.protocol == "https:" ? "https://" : "http://";    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);    var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);})(window, document, \'script\', \'cloud.roistat.com\', \'1b4950a1a14d1899c2e2a4c9bb8ea4d0\');'
      tag_body.appendChild(roiStat)
    },
    googleAnalytics(tag_body) {
      var gtag = document.createElement("script")
      gtag.className = 'loading_scripts'
      gtag.src = "https://www.googletagmanager.com/gtag/js?id=UA-144189432-5"
      gtag.async = true
      var gtag_script = document.createElement("script")
      gtag_script.className = 'loading_scripts'
      gtag_script.innerHTML = 'window.dataLayer = window.dataLayer || [];\n' +
        '        function gtag(){dataLayer.push(arguments);}\n' +
        '        gtag(\'js\', new Date());\n' +
        '\n' +
        '        gtag(\'config\', \'UA-144189432-5\');'
      tag_body.appendChild(gtag)
      tag_body.appendChild(gtag_script)
    },
    yClients(tag_body) {
      if (window.location.pathname === '/perm/service' || window.location.pathname === '/perm') {

        var yclients = document.createElement("script")
        yclients.className = 'loading_scripts'
        yclients.type = "text/javascript"
        yclients.src = "https://w385915.yclients.com/widgetJS"
        yclients.charset = "UTF-8"
        var page = ''
        switch (window.location.pathname) {
          case '/perm/service':
            page = 'service'
            break;
          case '/perm':
            page = 'main'
            break;
        }
        var yc_button = document.createElement("a")
        yc_button.href = "#"
        yc_button.className = "ms_booking yc_button event"
        yc_button.id = page + "__online-appointment__button"
        yc_button.innerHTML = "Запись на&nbsp;сервис"
        yc_button.setAttribute("onclick", "sendGoals('online-zapis');")
        // /YClients
        tag_body.appendChild(yclients)
        tag_body.appendChild(yc_button)
      }
    }
  },
}
</script>
