<template>
  <div>
    <div class="scripts-common" v-if="isProduction">
      <!-- Yandex.Maps counter -->
      <script src="https://api-maps.yandex.ru/2.1/?apikey=e65fea9d-e8a0-479d-b21a-35637fdc6c6c&lang=ru_RU&init=onload"
              type="text/javascript">
      </script>
      <!-- /Yandex.Maps counter -->

      <!-- Yandex.Metrika counter -->
      <script type='text/javascript' >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
        ym(54496129, 'init', {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      </script>
      <noscript><div><img src='https://mc.yandex.ru/watch/54496129' style='position:absolute; left:-9999px;' alt='' /></div></noscript>
      <!-- /Yandex.Metrika counter -->

      <!-- Jivosite -->
      <script src="//code.jivosite.com/widget.js" jv-id="H95FUE1JmR" async></script>
      <script>
        function jivo_onLoadCallback(){
          jivo_api.setUserToken(yaCounter54496129.getClientID());
        }
      </script>
      <!-- /Jivosite -->

      <!-- YClients -->
      <script src="https://w385915.yclients.com/widgetJS" charset="UTF-8" defer v-if="isPerm"></script>
      <a href="" class="ms_booking yc_button" v-if="isPerm">Запись на сервис</a>
      <!-- /YClients -->

    </div>
    <div class="scripts-city" v-html="$store.state.city.begin_script" v-if="isProduction"/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isProduction: false, // process.env.NODE_ENV === 'production'
      isPerm: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isProduction = true
    }, 2000)
    if (window.location.pathname === '/perm/service' || window.location.pathname === '/perm') {
      this.isPerm = true
    }
  }
}
</script>
