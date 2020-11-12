<template>
  <div>
    <div class="scripts-common">
    </div>
    <div class="scripts-city" v-html="$store.state.city.begin_script" v-if="isProduction"/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isProduction: process.env.NODE_ENV === 'production'
    }
  },
  mounted() {

    setTimeout(() => {
      var tag_body = document.getElementsByTagName("body")[0];

      this.yaMetrika(tag_body)
      this.jivosite(tag_body)
      this.googleAnalytics(tag_body)
      this.yClients(tag_body)

      this.isProduction = true
    }, 2000)
  },
  methods: {
    yaMetrika (tag_body) {
      var ya_metrika = document.createElement("script");
      ya_metrika.type = 'text/javascript';
      ya_metrika.innerHTML = '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n' +
        '            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n' +
        '        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n' +
        '\n' +
        '        ym(54496129, "init", {\n' +
        '            clickmap:true,\n' +
        '            trackLinks:true,\n' +
        '            accurateTrackBounce:true,\n' +
        '            webvisor:true\n' +
        '        });';
      var ya_no_script = document.createElement("noscript");
      var ya_div = document.createElement("div");
      var ya_img = document.createElement("img");
      ya_img.src = "https://mc.yandex.ru/watch/54496129";
      ya_img.style = "position:absolute; left:-9999px;";
      ya_div.appendChild(ya_img);
      ya_no_script.appendChild(ya_div);

      tag_body.appendChild(ya_metrika);
      tag_body.appendChild(ya_no_script);
    },
    jivosite(tag_body) {
      var jivosite = document.createElement("script");
      jivosite.src = "//code.jivosite.com/widget/H95FUE1JmR";
      jivosite.async = true;
      var jivosite_custom = document.createElement("script");
      jivosite_custom.innerHTML = 'function jivo_onLoadCallback(){\n' +
        '            jivo_api.setUserToken(yaCounter54496129.getClientID());\n' +
        '        }';
      tag_body.appendChild(jivosite);
      tag_body.appendChild(jivosite_custom);
    },
    googleAnalytics(tag_body) {
      var gtag = document.createElement("script");
      gtag.src = "https://www.googletagmanager.com/gtag/js?id=UA-144189432-5";
      gtag.async = true;
      var gtag_script = document.createElement("script");
      gtag_script.innerHTML = 'window.dataLayer = window.dataLayer || [];\n' +
        '        function gtag(){dataLayer.push(arguments);}\n' +
        '        gtag(\'js\', new Date());\n' +
        '\n' +
        '        gtag(\'config\', \'UA-144189432-5\');';
      tag_body.appendChild(gtag);
      tag_body.appendChild(gtag_script);
    },
    yClients(tag_body) {
      if (window.location.pathname === '/perm/service' || window.location.pathname === '/perm') {

        var yclients = document.createElement("script");
        yclients.type = "text/javascript";
        yclients.src = "https://w385915.yclients.com/widgetJS";
        yclients.charset = "UTF-8";
        var page = '';
        switch (window.location.pathname) {
          case '/perm/service':
            page = 'service';
            break;
          case '/perm':
            page = 'main';
            break;
        }
        var yc_button = document.createElement("a");
        yc_button.href = "#";
        yc_button.className = "ms_booking yc_button event";
        yc_button.id = page + "__online-appointment__button";
        yc_button.innerHTML = "Запись на сервис";
        yc_button.setAttribute("onclick", "sendGoals('online-zapis');");
        // /YClients
        tag_body.appendChild(yclients);
        tag_body.appendChild(yc_button);
      }
    }
  },
}
</script>
