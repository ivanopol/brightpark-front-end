
const isDev = process.env.NODE_ENV !== 'production'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  ...(!isDev && {
    modern: 'client'
  }),
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    apiUrl: process.env.API_URL || 'http://localhost:8080'
  },
  head: {
    title: '',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
      {name: 'msapplication-TileColor', content: '#ffffff'},
      {name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png'},
      {name: 'theme-color', content: '#ffffff'},
      {name: 'yandex-verification', content: 'b3d9ee8d4fb4066b'},
      {name: 'author', content: 'Брайт Парк'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png'},
      {rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png'},
      {rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png'},
      {rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png'},
      {rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png'},
      {rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png'},
      {rel: 'icon', type: 'image/png', sizes: '36x36', href: '/favicon/android-icon-36x36.png'},
      {rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon/android-icon-48x48.png'},
      {rel: 'icon', type: 'image/png', sizes: '72x72', href: '/favicon/android-icon-72x72.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/android-icon-96x96.png'},
      {rel: 'icon', type: 'image/png', sizes: '144x144', href: '/favicon/android-icon-144x144.png'},
      {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-icon-192x192.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png'},
      {rel: 'manifest', href: '/favicon/manifest.json'}
    ],
    ...(!isDev && {
      script: [
        { hid: 'google-tm', body: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-144189432-5', async: true},
        {
          hid: 'yandex-maps',
          body: true,
          src: 'https://api-maps.yandex.ru/2.1/?apikey=e65fea9d-e8a0-479d-b21a-35637fdc6c6c&lang=ru_RU&init=onload',
          async: true
        },
        {
          hid: 'yandex-metrika', body: true, innerHTML: `
         (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
          ym(54496129, 'init', {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
      `
        },
        {
          hid: 'jivosite', body: true, innerHTML: `
          var tag_body = document.getElementsByTagName("body")[0];
          var jivosite = document.createElement('script');
          jivosite.src = '//code.jivosite.com/widget/H95FUE1JmR';
          jivosite.async = true;
          var jivosite_custom = document.createElement('script');
          jivosite_custom.innerHTML = 'function jivo_onLoadCallback(){' +
           'jivo_api.setUserToken(yaCounter54496129.getClientID());' +
           '}';
          tag_body.appendChild(jivosite);
          tag_body.appendChild(jivosite_custom);
      `
        },
        {
          hid: 'y-clients',
          body: true,
          innerHTML: `
           var tag_body = document.getElementsByTagName('body')[0];
          if (window.location.pathname === '/perm/service' || window.location.pathname === '/perm') {
            var tag_body = document.getElementsByTagName('body')[0];
            // YClients
            var yclients = document.createElement('script');
            yclients.type = 'text/javascript';
            yclients.src = 'https://w385915.yclients.com/widgetJS';
            yclients.charset = 'UTF-8';
            var page = '';
            switch (window.location.pathname) {
              case '/perm/service':
                page = 'service';
                break;
              case '/perm':
                page = 'main';
                break;
            }
            var yc_button = document.createElement('a');
            yc_button.href = '#';
            yc_button.className = 'ms_booking yc_button event';
            yc_button.id = page + '__online-appointment__button';
            yc_button.innerHTML = 'Запись на сервис';
            yc_button.setAttribute('onclick', 'sendGoals(\"online-zapis\");');
            // /YClients
            tag_body.appendChild(yclients);
            tag_body.appendChild(yc_button);
          }
          function sendGoals(goal) {
            if (goal) {
              let ym_ids = getCountersIds();
              let goalArr = goal.match(/^(.+?):(.+?)$/);
              let target_goal = goalArr === null ? goal : goalArr[2];
              ym_ids.forEach(function (item, i, arr) {
                window['yaCounter' + item].reachGoal(target_goal);
              });
            }
          }
          function getCountersIds() {
            var id_list = [];
            window.ym.a.forEach(function(item){
              id_list.push(item[0]);
            });
            return id_list;
          }
        `
        }
      ]
    }),
    ...(!isDev && {
      noscript: [
        {
          hid: 'yandex-metrika-no-script',
          body: true,
          innerHTML: `<div><img src="https://mc.yandex.ru/watch/54496129" style="position:absolute; left:-9999px;" alt="" /></div>`
        }
      ],
    }),
    __dangerouslyDisableSanitizers: ['script', 'noscript'],

  },
  rootDir: __dirname,

  /*
  ** Global CSS
  */
  css: [
    'reset-css/reset.css',
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/jsonld.js',
    '~/plugins/vue-the-mask.js',
    '~/plugins/vue-js-modal.js',
    '~/plugins/vue-select.js',
    { src: '~/plugins/vue-budger-accordion', ssr: false,  runtimeCompiler: true},
    { src: '~/plugins/vue-observe-visibility.js', ssr: false },
  ],

  router: {
   // trailingSlash: false,
    middleware: [
      'location',
      'trailingSlashRedirect',
    ]
  },

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      "cookie-universal-nuxt",
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }],
      "@nuxtjs/style-resources",
      "@nuxtjs/axios",
  ],


  axios: {
/*    proxy: true,
    debug:true*/
  },

  proxy: {
    '/api/': process.env.API_URL || 'http://localhost:8080'
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  }
}
