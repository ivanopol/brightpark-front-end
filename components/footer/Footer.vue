<template>
    <footer class="block footer theme-01" v-bind:class="[ footer_class ]" itemscope itemtype="http://schema.org/Organization">
        <span class="hidden" itemprop="name">Брайт Парк</span>
        <span class="hidden" itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
            <img loading=lazy itemprop="contentUrl" src="~static/images/logo_bright_park_02.svg" alt="Logo">
            <meta itemprop="width" content="1007">
            <meta itemprop="height" content="125">
        </span>
        <span class="hidden"><link itemprop="url" :href="'https://brightpark.ru/' + $store.state.city.value"></span>
        <span class="hidden">
            <div itemscope itemtype="http://schema.org/AutoDealer">
                <span itemprop="email">{{$store.state.city.email}}</span>
                <time itemprop="openingHours" :datetime="$store.state.city.opening_hours.days.en + ', ' + $store.state.city.opening_hours.hours">{{$store.state.city.opening_hours.days.ru}}, {{$store.state.city.opening_hours.hours}}</time>
            </div>
        </span>

        <section class="footer__contact">

            <img src="~static/images/3d-decor.png" alt="" class="footer__contact__decor">

            <div class="container footer__contact__container">
                <h2 class="footer__contact__title">
                    Брайт Парк всегда на связи
                </h2>

                <p class="footer__contact__desc">
                    Наш менеджер с&nbsp;удовольствием ответит на&nbsp;ваши вопросы по&nbsp;телефону&nbsp;<PhoneSelection class-list="block calltouch_phone" style="display: inline-block;"/>
                </p>

                <div class="footer__contact__info">
                    <p>
                        Брайт парк ближе, чем кажется
                        <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                            {{$store.state.city.address}}
                        </span>
                        <span itemprop="openingHours" :datetime="$store.state.city.opening_hours.days.en + ', ' + $store.state.city.opening_hours.hours">
                            Ждем вас ежедневно с {{$store.state.city.opening_hours.hours_split.from}} до {{$store.state.city.opening_hours.hours_split.to}}
                        </span>
                    </p>
                </div>

                <button
                    type="button"
                    class="footer__contact__btn"
                    @click="show('Заказать звонок', 'footer-order-call', 'Заказать звонок', 1, 'goal_hz' ,'form-callback5')"
                >
                    Заказать звонок
                </button>

            </div>
        </section>

        <YandexMapComponent v-if="with_map"
                                :button="ym_button"
                                :btn_class="ym_btn_class"
                                :prefix="'service__'"
        ></YandexMapComponent>
        <modal name="form-callback-footer" height="auto" :adaptive="true" @before-open="beforeOpen">
            <div class="close" @click="hide"></div>
            <FormBuy2Component :cities="cities"
                                 :form_title="form_title"
                                 :form_id="form_id"
                                 :button_text="button_text"
                                 :form_type="form_type"
                                 :goal="goal">
            </FormBuy2Component>
        </modal>

        <modal name="form-callback5" height="auto" :adaptive="true" class="models-banner__modal">
            <div :id="form_id + '_close'" class="close event" @click="hide('form-callback5')"></div>
            <FormLeadNew
                form_title="Заказать звонок"
                :form_id="form_id"
                button_text="Заказать звонок"
            />
        </modal>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        props: {
            cities: {
                type: Object
            },
            coordinates: {
                type: Array
            },
            goal_call: {
                default: '',
                type: String
            },
            ym_button: {
               default: false,
               type: Boolean
            },
            ym_btn_class: {
                default: '',
                type: String
            },
            footer_class: {
                default: '',
                type: String
            },
            page: {
                default: '',
                type: String
            },
            with_map: {
                default: true,
                type: Boolean
            }
        },
        data: function () {
            return {
                mobile: false,
               // modalWidth: window.innerWidth -20,
                form_id: '',
                form_title: '',
                button_text: '',
                form_type: 1,
                goal: '',
            };
        },
        methods: {
            beforeOpen (event) {
            },
            show (title, form_id, button_text, form_type, goal, form_name) {
                this.form_title = title;
                this.form_id = form_id;
                this.button_text = button_text;
                this.form_type = form_type; // 1 - обычная форма, 2 - форма сервиса
                this.goal = goal;
                this.$modal.show(form_name);
            },
            hide (form_name) {
                this.$modal.hide(form_name);
            },
            sendGoals: function (goal) {
                if (goal) {
                    let ym_ids = this.getCountersIds();
                    let goalArr = goal.match(/^(.+?):(.+?)$/);
                    let target_goal = goalArr === null ? goal : goalArr[2];

                    ym_ids.forEach(function (item, i, arr) {
                        window["yaCounter" + item].reachGoal(target_goal);
                    });
                }
            },
            getCountersIds: function () {
                var id_list = [];

              if (typeof window['ym'] !== "undefined") {
                window.ym.a.forEach(function(item){
                  id_list.push(item[0]);
                });
              }

              return id_list;
            },
            handleResize: function () {
                this.mobile = document.documentElement.clientWidth <= 580;
            },
        },
        components: {},
        mounted() {
            this.mobile = document.documentElement.clientWidth <= 580;
            window.addEventListener("resize", this.handleResize);
        },
        created () {
          //  this.modalWidth = window.innerWidth -20
        },
    }
</script>

<style scoped lang="scss">
@import '~/assets/scss/_colors.scss';

    .text-white {
      color: #000;
      font-weight: normal;
      text-decoration: none;
    }

    .container_bg_dark .text-white {
      color: #fff;
      font-weight: normal;
      text-decoration: none;
    }

    @media only screen and (min-width: 700px) and (max-width: 1365px) {
        .block {
            display: block;
        }
    }

    @media only screen and (min-width: 1366px) {
        .block {
           // display: unset;
        }
    }

    footer {
        &.block p {
            margin-bottom: 25px;
        }

        .footer-callback-wrap,
        .footer-call-wrap,
        .btn-place-wrap {
            margin-bottom: 40px;
        }

        h2 {
            span {
                display: inline;
            }
        }

        padding-bottom: 51px;

        .phone {
            border-bottom: 2px solid #b0c5dc;
            margin-bottom: -2px;
        }

        p {
            /*padding-top: 20px;*/
            font-family: PragmaticaLightCBold, Helvetica, sans-serif;
            font-size: 16px;
        }

        a {
            width: 80%;
        }

        @media only screen and (min-width: 580px) {
            a {
                width: auto;
            }


        }
    }

    @media only screen and (min-width: 1025px) {
        footer {
            padding-bottom:0;
        }
    }


    .footer__contact {
        background-color: $purple;
        padding: 70px 0;
        position: relative;

        @media (max-width: 992px) {
            padding: 50px 15px;
        }

        @media (max-width: 550px) {
            font-size: 14px;
        }
    }

    .footer__contact__title {
        font-size: 3.125em;
        text-transform: none;
        color: white;
        font-family: "Bright Park Display";
        text-align: left;
        margin-bottom: 20px;
    }

    .footer__contact__desc {
        font-family: "Bright Park Display";
        margin-bottom: 20px;
        color: white;
        max-width: 665px;
        font-size: 1.5em;

        a {
            color: $yellow;
            font-weight: 400;
        }
    }

    .footer__contact__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $yellow;
        color: $purple;
        border: none;
        font-family: "Bright Park Display";
        border-radius: 5px;
        padding: 15px 60px;
        font-size: 1.2em;
        cursor: pointer;
        transition: .2s;

        &:hover {
            opacity: .65;
            transition: .2s;
        }
    }

    .footer__contact__container {
        position: relative;
        padding-left: 85px;
        overflow: visible;

        @media (max-width: 1150px) {
            padding-left: 0;
        }
    }

    .footer__contact__info {
        background-image: url("../../static/images/credit-section/advantages-wrap.svg");
        background-size: 100% 100%;
        position: absolute;
        right: -100px;
        bottom: -50px;
        padding: 37px 120px;
        max-width: 614px;

        p {
            color: white;
            display: flex;
            flex-direction: column;
            margin-bottom: 0 !important;
            font-family: "Bright Park Display";
            font-size: 1.2em;

            span {
                font-weight: 400;
                font-family: 'Factor A';
                font-size: .9em;
            }
        }

        @media (max-width: 992px) {
            position: static;
            margin-left: -75px;
            margin-bottom: 25px;
        }

        @media (max-width: 550px) {
            padding: 0;
            margin-left: 0;
            background-image: unset;
        }
    }

    .footer__contact__decor {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        max-width: 350px;

        @media (max-width: 1150px) {
            display: none;
        }
    }
</style>
