import serveStatic from 'serve-static'
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
    apiUrl: process.env.API_URL || 'http://localhost:8081'
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
      {
        hid: 'calltouch',
        body: true,
        charset: 'utf-8',
        innerHTML: `
        var path = window.location.pathname.substr(1);
        var segment_arr = path.split('/', 1);
        var city = segment_arr[0];
        var this_city = '';
        var keys_arr = {
          perm: 't14l517r',
          moscow: '9f1rg9h6',
          magnitogorsk: '8tyke07v',
          'rostov-na-donu': '9fgxhgc0',
          yekaterinburg: '7acf9qow',
          volgograd: 'q7xgnhor'
        };

        for (var key in keys_arr) {
          if (key === city) {
            this_city = keys_arr[key];
          }
        }

        if (this_city) {
          setTimeout(() => {
            (function(w,d,n,c){
            w.CalltouchDataObject=n;
            w[n]=function(){
            w[n]['callbacks'].push(arguments)
            };
            if(!w[n]['callbacks']){
            w[n]['callbacks']=[]
            }
            w[n]['loaded']=false;
            if(typeof c!=='object'){
            c=[c]
            }
            w[n]['counters']=c;
            for(var i=0;i<c.length;i+=1){
            p(c[i])
            }
            function p(cId){
            var a=d.getElementsByTagName('script')[0],s=d.createElement('script'),i=function(){
            a.parentNode.insertBefore(s,a)
            };
            s.type='text/javascript';
            s.async=true;
            s.src='https://mod.calltouch.ru/init.js?id='+cId;
            if(w.opera=='[object Opera]'){
            d.addEventListener('DOMContentLoaded',i,false)
            }else{
            i()
            }}})(window,document,'ct', this_city);
          }, 2000)
        }
      `
      }
    ],

    __dangerouslyDisableSanitizers: ['script'],
    }),
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
      'redirects'
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
  serverMiddleware: [
    //'~/serverMiddleware/redirects.js'
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
