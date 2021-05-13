<template>
    <header :class="head_class">
        <div class="logo-wrap" :class="theme">
            <div class="container logo-wrap-row">
              <span class="logo-wrap-left">
                <div class="logo-bright-park">
                    <nuxt-link id="common__header__bp-logo" class="event" :to="'/' + $store.state.city.value">
                      <logo-bright-park-sun :theme="theme" v-if="isMobile"></logo-bright-park-sun>
                      <logo-bright-park :theme="theme" v-else></logo-bright-park>
                    </nuxt-link>
                </div>
                <span class="logo-city">{{$store.state.city.label}}</span>
              </span>
              <div class="header-contacts">
                <span class="header-contacts-address">{{$store.state.city.address | address}}</span>
                <span class="header-contacts-phone">{{$store.state.city.phone_format | phone}}</span>
              </div>
              <div class="logo-lada">
                  <logo-lada :theme="theme"></logo-lada>
              </div>
            </div>
        </div>
        <div class="lada-line" v-if="line">
            <p id="model-active" v-if="car">{{car.model_full}}</p>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            theme: {
                default: 'light',
                type: String
            },
            line: {
                default: true,
                type: Boolean
            },
            car: {
                default: null,
                type: Object
            },
            head_class: {
                default: '',
                type: String
            },
        },
        data: function () {
            return {
              isMobile: false
            };
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
        mounted: function() {
          this.handleType
          window.addEventListener("resize", this.handleType);
        },
        methods: {
            handleType: function () {
              this.isMobile = window.innerWidth < 900;
            }
        }
    }
</script>

<style scoped lang="scss">
.fixed {
  position: fixed;
}
header {
  z-index: 1;
  width: 100%;
  position: relative;
  margin-bottom: 26px;
  .logo-wrap {
    .logo-wrap-row {
      padding: 15px 15px 5px;
      display: flex;
      justify-content: space-between;
    }
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

        &:hover {
          color: #FF8351
        }
      }

      @media only screen and (max-width: 900px) {
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
      width: 49%;
      height: 25px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      -webkit-transition: all ease-out 0.3s;
      -moz-transition: all ease-out 0.3s;
      -o-transition: all ease-out 0.3s;
      transition: all ease-out 0.3s;
      a {
        display: block;
        float:left;
        height: 100%;
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
    @media only screen and (min-width: 1367px) {
      .logo-city {
        margin-left: 15px;
        font-size: 16px;
      }
      .logo-bright-park {
        // width: 25%;
      }
      .logo-lada {
        width: 16%;
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
  .lada-line {
    background: url(~static/images/lada-line.svg) no-repeat;
    width: 100%;
    height: 40px;
    margin-top: -2px;
    //  background-position: 100% -85px;
    position: absolute;
    left: 0;
    p {
      padding: 20px 20px 0;
      text-align: right;
      font-weight: bold;
    }
  }
  @media only screen and (max-width: 321px) {
    .logo-wrap-row {
      padding: 10px 10px 0 10px;
    }
    .lada-line {
      p {
        padding: 20px 10px 0 0;
        font-size: 0.9rem;
      }
    }
  }
  @media only screen and (min-width: 580px) {
    &.header-model {
      margin-bottom: 40px;
    }
    .lada-line {
      height: 100px;
      background: url(~static/images/lada-line.png) no-repeat;
      background-position: 100% -85px;
      p {
        padding-top: 30px;
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 1367px) {
    .lada-line {
      background: url(~static/images/lada-line-big.svg) no-repeat top center;
      background-position-x: -2px;
      background-size: 101%;
      max-width: 1980px;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      p {
        padding-top: 35px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 35px 0 0 20px;
      }
    }
  }
}
@media only screen and (min-width: 580px) {
  header {
    margin-bottom: 55px;
  }
}
@media only screen and (min-width: 1367px) {
  header {
    margin-bottom: 70px;
    .logo-wrap {
      .logo-bright-park {
        height: 35px;
      }
      .logo-wrap-row {
        padding: 20px 0 0;
      }
    }
  }
}
</style>
