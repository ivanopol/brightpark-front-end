<template>
    <header  @scroll="handleScroll" :class="{show : scrolled}">
        <div class="logo-wrap" :class="theme">
            <div class="logo-bright-park">
                <nuxt-link id="common__header-sticky__bp-logo" class="event" :to="'/' + $store.state.city.value">
                    <LogoBrightParkSun />
                </nuxt-link>
            </div>
            <span class="logo-wrap__city" v-if="!this.switch">{{ $store.state.car.model_full | formating }}</span>
            <span class="logo-wrap__city" v-else>
              {{ $store.state.city.label }}
            </span>
            <nuxt-link id="model__header-sticky__find-price"
                       class="event model__header-sticky__btn"
                       style="/*margin-left: auto;*/"
                       :to="$store.state.car.url">Узнать цену</nuxt-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderStickyModel",
        props: {
            theme: {
                default: 'light',
                type: String
            },
            car: {
                type: Object
            }
        },
        data: function () {
            return {
              scrolled: false,
              switch: false,
            };
        },
        filters: {
            formating: function (value) {
                switch (value) {
                    case 'Granta Drive Active':
                        value = 'Drive Active';
                    break;
                }

                return value;
            }
        },
        methods: {
            handleScroll () {
                this.scrolled = window.scrollY > 78;
            }
        },
        mounted () {
          setTimeout(() => {
            this.switch = true
          }, 6000);
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
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
            margin-top: -60px;
            opacity: 1;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);

            .logo-wrap {
                opacity: 1;
            }
        }

        &.absolute {
            position: absolute;
        }

        .logo-wrap {
            padding: 10px 10px 6px;
            display: flex;
            justify-content: space-between;
/*            display: grid;
            grid-template-columns: 1fr 1fr 1fr;*/
            align-items: center;
            opacity: 0;
            -webkit-transition: opacity ease-in 0.1s;
            -moz-transition: opacity ease-in 0.1s;
            -o-transition: opacity ease-in 0.1s;
            transition: opacity ease-in 0.1s;
            width: 100%;
            max-width: 960px;
            margin: 0 auto;

            .logo-bright-park {
                height: 25px;
                display: flex;
                justify-content: flex-start;
                align-items: center;


                a {
                    display: block;
                    float:left;
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
                    width: auto;
                }
                .logo-lada {
                    width: 16%;
                }
            }

            span {
                display: inline-block;
                font-weight: bold;
                font-size: 19px;
            }

            a.btn-small {
                color: #fff;
                font-size: 14px;
                padding: 6px 15px;
                border-radius: 20px;
                display: inline-block;
                text-transform: uppercase;
            }

            @media only screen and (max-width: 340px) {
                span {
                    font-size: 14px;
                    white-space: nowrap;
                    max-width: 50%;
                    overflow: hidden;

                }

                a.btn-small {
                    font-size: 12px;
                    white-space: nowrap;
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

    .model__header-sticky__btn {
      @include basic-button($bgColor: $secondary-color,
                            $width: 150px,
                            $height: 26px,
                            $textTransform: uppercase,
                            $fz: 14px);
    }

/*  .logo-wrap__city {
    text-align: center;
  }*/
</style>
