<template>
    <header  @scroll="handleScroll" :class="{show : scrolled}">
        <div class="logo-wrap" :class="theme">
            <span class="logo-wrap-left">
                <div class="logo-bright-park">
                    <nuxt-link id="common__header-sticky__bp-logo" class="event" :to="'/' + $store.state.city.value">
                      <logo-bright-park-sun :theme="theme" v-if="isMobile"></logo-bright-park-sun>
                      <logo-bright-park :theme="theme" v-else></logo-bright-park>
                    </nuxt-link>
                </div>
                <city-choice />
            </span>

            <div class="header-contacts">
              <span class="header-contacts-address">{{$store.state.city.address | address}}</span>
              <span class="header-contacts-phone">
                <PhoneSelection class-list="callibri_phone_service"/>
              </span>
            </div>

            <div class="logo-lada" v-if="!button">
              <!-- <logo-lada :theme="theme"></logo-lada> -->
              <a :href="ladaLink" class="logo-lada__link">
                <img src="~/static/images/lada-logotop.png" alt="lada" width="60" class="logo-lada__link__img">
                <logo-lada :theme="theme" class="logo-lada__link__img-mobile"></logo-lada>
              </a>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderSticky",
        props: {
            theme: {
                default: 'light',
                type: String
            },
            button: {
              default: false,
              type: Boolean
            }
        },
        data: function () {
            return {
                scrolled: false,
                isMobile: false
            };
        },
        methods: {
            handleScroll () {
                this.scrolled = window.scrollY > 78;
            },
            handleType: function () {
              this.isMobile = window.innerWidth < 900;
            }
        },
        filters: {
          address: function (value) {
            if (!value) return ''
            value = value.toString()

            let parts = value.split(', ')
            let city = parts.shift()

            if (city === 'г. Москва') {
              parts = ['Симферопольское ш., 22, стр. 5']
            } else {
              parts[0] = parts[0].replace('ул.', '')
            }
            return parts.join(', ')
          },
          phone: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.replace(/-/g, ' ')
          }
        },
        mounted () {
            this.handleType()
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener("resize", this.handleType);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },

        computed: {
          ladaLink() {
            switch(this.$store.state.city.value) {
              case 'perm':
                return 'https://perm.lada.ru'
                break;

              case 'moscow':
                return 'https://brightpark-btmk.lada.ru'
                break;

              case 'magnitogorsk':
                return 'http://brightpark-inkomservice.lada.ru'
                break;

              case 'rostov-na-donu':
                return 'https://brightpark-dfm.lada.ru/';
                break;

              case 'yekaterinburg':
                return 'https://ekb.lada.ru/';
                break;

              case 'volgograd':
                return 'https://brightpark-amk.lada.ru/';
                break;
            }
          },
        }
    }
</script>

<style scoped lang="scss">
header {
  z-index: 20;
  width: 100%;
  margin-top: -110px;
  position: fixed;
  -webkit-transition: all ease-in 0.2s;
  -moz-transition: all ease-in 0.2s;
  -o-transition: all ease-in 0.2s;
  transition: all ease-in 0.2s;
  height: 100px;
  background-color: #fff;
  display: flex;
  align-items: flex-end;
  &.show {
    margin-top: -55px;
    opacity: 1;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);

    .logo-wrap {
      opacity: 1;
      align-items: center;
    }
  }
  &.absolute {
    position: absolute;
  }
  .logo-wrap {
    padding: 10px 15px 6px;
    display: flex;
    justify-content: space-between;
    opacity: 0;
    -webkit-transition: opacity ease-in 0.1s;
    -moz-transition: opacity ease-in 0.1s;
    -o-transition: opacity ease-in 0.1s;
    transition: opacity ease-in 0.1s;
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    &-left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .header-contacts {
      font-size: 14px;
      font-weight: bold;
      display: flex;
      align-items: center;

      &-address {
        padding-right: 20px;
        border-right: 2px solid #FF8351;
      }

      &-phone {
        padding-left: 20px;
        cursor: pointer;
        a {
          color: #000;
          text-decoration: none;
        }
        & a:hover {
          color: #FF8351;
          opacity: 1;
        }
      }

      @media only screen and (max-width: 900px) {
        & {
          font-size: 13px;
        }

        &-address {
          padding-right: 0;
          border-right: none;
          display: none;
        }

        &-phone {
          padding-left: 0;
        }
      }

      @media only screen and (min-width: 1367px) {
        & {
          font-size: 16px;
        }
      }
    }


    .logo-city {
      margin-left: 10px;
      font-size: 14px;
    }
    .logo-bright-park {
      min-width: 120px;
      width: 35%;
      height: 25px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      a {
        display: block;
        float:left;
        height: 100%;
      }
    }

    @media only screen and (max-width: 900px) {
      .logo-bright-park {
        min-width: unset;
        width: auto;
      }
    }

    @media only screen and (min-width: 580px) {
      .logo-bright-park {
        width: auto;
      }
    }
    .logo-lada {
      width: 16%;
      height: 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    @media only screen and (min-width: 1366px) {
      .logo-bright-park {
        //    width: 25%;
      }
      .logo-city {
        margin-left: 15px;
        font-size: 16px;
      }
      .logo-lada {
        width: 16%;
      }
    }
    .model-button {
      width: 60%;
      height: 25px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        display: inline-block;
        font-weight: bold;
        font-size: 14px;
        margin-right: 10px;
        margin-top: 2px;
      }
      a {
        background-color: #FF8351;
        color: #fff;
        font-size: 14px;
        padding: 7px 15px 3px;
        border-radius: 20px;
        display: inline-block;
        text-transform: uppercase;
      }
    }
    &.dark {
      padding-bottom: 10px;
      background-color: #000;
    }
    &.light {
      background-color: #fff;
    }
  }
  @media only screen and (min-width: 1367px) {
    &.show {
      margin-top: -40px;
    }
    .logo-wrap {
      max-width: 1200px;
      padding: 16px 15px 13px;
      .logo-bright-park {
        height: 30px;
      }
      .logo-wrap-row {
        padding: 20px 0 0;
      }
      .model-button {
        height: 30px;
        span {
          font-size: 16px;
        }
      }
    }
  }
  .lada-line {
    background: url(/images/lada_line.svg) no-repeat;
    width: 100%;
    height: 100%;
    min-height: 31px;
    background-size: 101%;
    p {
      padding-top: 15px;
      padding-right: 15px;
      text-align: right;
      font-weight: bold;
    }
  }
}

.logo-lada__link {
  display: flex;

  .logo-lada__link__img {
    display: none;

    @media (min-width: 768px) {
      width: 150px;
      display: block;
    }

    @media (min-width: 900px) {
      width: 175px;
    }
  }

  .logo-lada__link__img-mobile {
    width: 100%;
    @media (min-width: 768px) {
      display: none;
    }
  }
}
</style>
