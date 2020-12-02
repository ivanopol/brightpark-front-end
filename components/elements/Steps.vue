<template>
    <section class="steps-wrap">
        <div class="model-choose-text">
            <h1 v-if="car_model">Подберите выгодные условия на LADA {{car_model}} {{car_type}} в {{$store.state.city.dative}}</h1>
            <p v-else-if="!car_model">Подберите выгодные условия на LADA в {{$store.state.city.dative}}</p>
        </div>


        <div class="car-choose_wrap" v-if="!car_model">
            <div class="dropdown-group">
                <v-select id="select_auto" class="select_wrap event"
                          :searchable=false
                          :multiple=false
                          :options="car_list"
                          placeholder="Выберите автомобиль"
                          taggable v-model="selected_auto"
                          v-on:input="selectAuto()">
                    <div class="spinner" v-show="mutableLoading">Загрузка...</div>
                    <div slot="no-options">Нет совпадений</div>
                </v-select>
            </div>
        </div>

        <div class="buy-steps-wrapper">
            <div class="buy-step-block">
                <div :id="prefix + 'steps__rate-a-car'" class="divided event" v-on:click.prevent="gradeShow(0)" :class="[ grade == 0 || grade == 1 ? 'buy-step-circle-colored' : 'buy-step-circle' ]">
                    <p class="buy-step-number bubble">1</p>
                </div>
                <p class="buy-step-text">Оцените автомобиль</p>
            </div>

            <div class="buy-step-block">
                <div :id="prefix + 'steps__сalculate-payment'" class="divided event" v-on:click.prevent="gradeShow(2)" :class="[ grade == 2 || grade == 3? 'buy-step-circle-colored' : 'buy-step-circle' ]">
                    <p class="buy-step-number bubble">2</p>
                </div>
                <p class="buy-step-text">Рассчитайте платеж</p>
            </div>

            <div class="buy-step-block" >
                <div :id="prefix + 'steps__fill-form'" class="buy-step-circle divided event" v-on:click.prevent="gradeShow(4)" :class="[ grade == 4 ? 'buy-step-circle-colored' : 'buy-step-circle' ]">
                    <p class="buy-step-number bubble">3</p>
                </div>
                <p class="buy-step-text">Заполните форму</p>
            </div>
        </div>

       <div class="steps-notification">
         <p class="steps-notification__text">
           Оцените свой авто и рассчитайте оптимальные условия оплаты
           <span style="display: inline-block;">(шаг {{ stepNumber }} из 3)</span>
         </p>
       </div>

        <div class="progressbar-wrapper">
          <div class="progressbar-line" :class="[ grade === 1 || grade === 2 || grade === 3 ? 'step2' : '', grade === 4 ? 'step4' : '' ]">

            <span class="progressbar-text" v-if="!grade">
              Осталось всего 2 шага до получения выгодных условий
            </span>

            <span class="progressbar-text" v-if="grade === 1 ">
              Мы готовы выкупить ваш автомобиль на 10% дороже рынка при обмене на новенькую LADA
            </span>

            <span class="progressbar-text" v-if="grade === 2">
              Вы у цели! Закрепите выгодные условия
            </span>

          </div>

        </div>

        <div class="option-text step-null" v-if="!grade">
            <p>Имеете ли вы автомобиль на обмен?</p>
            <ul>
                <li>
                  <img loading=lazy src="/images/icons/checkbox-green.svg" class="check check-green" alt="Обмен для всех. Принимаем автомобили любых марок и в любом состоянии.">
                  <span>
                    Скидка при обмене 40 000 руб.
                  </span>
                </li>

                <li>
                  <img loading=lazy src="/images/icons/checkbox-green.svg" class="check check-green" alt="У нас все честно. Справедливая цена и никаких скрытых комиссий.">
                  <span>
                    Оценка на 7% выше рынка
                  </span>
                </li>

                <li>
                  <img loading=lazy src="/images/icons/checkbox-green.svg" class="check check-green" alt="АВТОВАЗ отменил субсидию при обмене, но мы доплатим от автоцентра до 40 000 рублей">
                  <span>
                    Пакет доп.оборудования со скидкой 80%
                  </span>
                </li>
            </ul>
        </div>

        <section class="buttons_other mt-20" v-if="!grade">
            <div class="item-buttons-other">
                <a href="#" :id="prefix + 'do-you-have-an-exchange-car__rate-a-car'" class="btn btn-primary event" v-on:click.prevent="gradeShow(1)">Да, оценить мой автомобиль</a>
                <a href="#" :id="prefix + 'do-you-have-an-exchange-car__no-car'" class="btn btn-secondary event" v-on:click.prevent="gradeShow(5)">У меня нет автомобиля</a>
            </div>
        </section>

        <div v-if="grade === 1">
            <Classified />
        </div>

        <div v-if="grade === 1">
            <div class="button-wrapper-row">
                <a :id="prefix + 'what-is-your-car__cash'" class="btn btn-half-secondary event"
                   v-on:click.prevent="gradeShow(3)">Наличный расчет</a>
                <a :id="prefix + 'what-is-your-car__credit'" class="btn btn-half-primary event"
                   v-on:click.prevent="gradeShow(2)">В кредит</a>
            </div>
        </div>

        <div v-if="grade === 5">
            <div class="button-wrapper-row">
                <a :id="prefix + 'сhoose-favorable-conditions__cash'" class="btn btn-half-secondary event"
                   v-on:click.prevent="gradeShow(3)">Наличный расчет</a>
                <a :id="prefix + 'сhoose-favorable-conditions__credit'" class="btn btn-half-primary event"
                   v-on:click.prevent="gradeShow(2)">В кредит</a>
            </div>
        </div>

        <div class="" v-if="grade === 3">
            <div class="model-choose-text center" v-if="surchargeText"><p>Ваша доплата составит</p></div>
            <div class="your-surcharge" v-if="surchargeText">от {{surcharge | formatPrice}} руб.</div>
            <div class="model-choose-text2"><p>В Брайт Парке выгодные условия при покупке за наличные!</p></div>
            <div class="conditions">
                <ul>
                    <li><CheckIcon /> <span>Личный менеджер</span></li>
                    <li><CheckIcon /> <span>ОСАГО в подарок</span></li>
                    <li><CheckIcon /> <span>Дополнительное оборудование и аксессуары со скидкой 50%</span></li>
                </ul>
            </div>
        </div>
        <RangeSlider v-if="grade === 2"
                     :car_price='car_price'
                     :prefix="prefix">
        </RangeSlider>
        <FormBuyComponent v-if="grade === 4"
                          :form_id="form_id"
                          :form_title="'<span class=\'c_orange\'>Заполните</span> форму'"
                          :goal="goal">
        </FormBuyComponent>

        <div class="buttons_other" v-if="grade === 2">
            <div class="item-buttons-other">
                <a href="#" :id="prefix + 'credit__fix-conditions'" class="btn btn-primary event" v-on:click.prevent="gradeShow(4)">Закрепить условия</a>
            </div>
        </div>

        <div class="buttons_other" v-if="grade === 3">
            <div class="item-buttons-other">
                <a href="#" :id="prefix + 'cash__fix-conditions'" class="btn btn-primary event" v-on:click.prevent="gradeShow(4)">Закрепить условия</a>
            </div>
        </div>


    </section>
</template>

<script>
    export default {
        name: 'Steps',
        props: {
          car_model: {
            default: ''
          },
          car_type: {
            default: ''
          },
          car_attrs: {
          },
          form_id: {
            default: ''
          },
          goal: {
            default: ''
          },
          prefix: {
            default: ''
          },
        },
        data: () => ({
            grade: 0,
            surcharge: 0,
            surchargeText: false,
            date: '',
            selected_auto: null,
            car_price: 0,
            car_list: [],
        }),
        filters: {
            formatPrice: function(price) {
                if (!parseInt(price)) { return "";}
                if(price > 999) {
                    var priceString = (price / 1).toFixed(0);
                    var priceArray = priceString.split("").reverse();
                    var index = 0;
                    while (priceArray.length > index + 3) {
                        priceArray.splice(index+3, 0, " ");
                        index +=4;
                    }
                    return priceArray.reverse().join("");
                } else {
                    return (price / 1).toFixed(0);
                }
            }
        },

        computed: {
          stepNumber() {
            switch (this.grade) {
              case 0:
                return 1;
              case 1:
                return 1;
              case 2:
                return 2;
              case 3:
                return 2;
              case 4:
                return 3;
              case 5:
                return 1;

            }
          },
        },

        methods: {
            selectAuto() {
                this.surcharge = this.selected_auto.code;
                this.car_price = this.selected_auto.code;
                return {}
            },
            mutableLoading() {
                return {}
            },
            gradeShow: function (grade) {
                this.grade = grade;
                this.changeHash(this.grade);

                if (this.grade === 5) {
                  this.deleteCookie('trade_in_price');
                }

                if (this.getCookie('trade_in_price') != null && this.getCookie('trade_in_price') > 0) {
                    this.surcharge = this.surcharge - this.getCookie('trade_in_price');
                    this.surchargeText = true;
                }
                return {}
            },
            changeHash: function (grade) {
                switch (grade) {
                    case 0:
                        window.location.hash = '#start';
                        break;
                    case 1:
                        window.location.hash = '#estimation';
                        break;
                    case 2:
                        window.location.hash = '#credit';
                        break;
                    case 3:
                        window.location.hash = '#cash';
                        break;
                    case 4:
                        window.location.hash = '#end';
                        break;
                    case 5:
                        window.location.hash = '#no-car';
                        break;
                }
              return {}
            },
            changeGrade: function (hash) {
                switch (hash) {
                    case '#start':
                        this.grade = 0;
                        break;
                    case '#estimation':
                        this.grade = 1;
                        break;
                    case '#credit':
                        this.grade = 2;
                        break;
                    case '#cash':
                        this.grade = 3;
                        break;
                    case '#end':
                        this.grade = 4;
                        break;
                    case '#no-car':
                        this.grade = 5;
                        break;
                    default:
                        this.grade = 0;
                        break;
                }
              return {}
            },
            getDate: function() {
                var now = new Date();
                now.setDate(now.getDate() + 3);
                var month = now.getMonth() + 1;
                if (month < 10) {
                    month = '0' + month;
                }
                this.date = now.getDate() + "/" + month;
              return {}
            },
            getCookie(name) {
                let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
                if (match) return match[2];
                return {}
            },
            setCookie(price) {
                let current_date = new Date();
                current_date.setTime(current_date.getTime() + 3600 );
                let cookieexpire = current_date.toLocaleString();

                document.cookie = "trade_in_price=" + price + ";expires=" + cookieexpire + "path=/";
                return {}
            },
            deleteCookie(name) {
                this.setCookie(0)
            },
        },
        mounted() {
            this.getDate();
            this.deleteCookie();
            this.changeGrade(window.location.hash);
            let self = this;
            let handle = function (event) {
                self.changeGrade(window.location.hash);
            };

            window.addEventListener("popstate", handle, false);
        },
        async fetch() {
          if (!this.car_model && !this.car_type && !this.car_attrs) {

            const data = await fetch(
              process.env.apiUrl + `/api/get_cars_list`
            ).then(res => res.json())

            if (data.status === 'OK') {
              this.car_list = data.car_list;
              this.selected_auto = data.car_list[0];
              this.surcharge = data.car_list[0].code;
              this.car_price = data.car_list[0].code;
            }
          } else if (this.car_attrs) {
            this.surcharge = this.car_attrs.special_price
            this.car_price = this.car_attrs.price
          } else {
            this.surcharge = 0;
            this.car_price = 0;
          }
          return {}
        }
    };
</script>

<style lang="scss">
    .steps-wrap {
      max-width: 1200px;
      margin: 0 auto;
        h1 {
            font-family: PragmaticaLightCBold, Helvetica, sans-serif;
            font-weight: bold;
            text-align: left;
            font-size: 18px;
            line-height: 1.4;
            margin: 0 30px;
            text-transform: none;
        }

        .car-choose_wrap {
            max-width: 580px;
            margin: 30px auto 0;
            display: block;
        }

        .trigger-wrap {
            max-width: 600px;
        }

        .btn-half-primary,
        .btn-half-secondary {
            font-family: PragmaticaLightC, Helvetica, sans-serif;
            text-transform: uppercase;
            text-align: center;
            border: 2px solid #000;
            font-weight: bold;
            font-size: 14px;
            cursor:pointer;
        }

        .btn-half-secondary {
            background-color: transparent;
            color: #000;
        }

        .btn-half-primary {
            background-color: #FF8351;
            border: 2px solid #FF8351;
            color: #fff;
        }


        #client_price_form {
            margin: 0 30px;

            input {
               max-width: unset;
               width: 100%;
            }
        }

        .button-wrapper-row {
            margin: 50px 30px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            .btn {
              margin-bottom: 10px;
            }
          @media screen and (min-width: 630px) {
            flex-direction: row;
          }
        }

        .buttons_other {
            .item-buttons-other {
              text-align: center;
              display: flex;
              align-items: center;
              max-width: 700px;
              margin: 0 auto 40px;
              flex-direction: column;

                & > a {
                    margin-bottom: 15px;
                }

                .btn {
                    font-family: PragmaticaLightC, Helvetica, sans-serif;
                    width: 85.51vw;
                    padding: 14px 15px 10px;
                }

                .btn-primary {
                    border: 2px solid #FF8351;
                    color: #fff;
                    background-color: #FF8351;
                }

                .btn-secondary {
                    border: 2px solid #000;
                    color: #000;
                    background-color: transparent;
                }


              @media screen and (min-width: 630px) {
                flex-direction: row;
              }
            }
        }
    }

    @media only screen and (min-width: 580px) {
        #classified {
            max-width: 580px;
            margin: 0 auto;
        }
        .steps-wrap {

            h1 {
                text-align: center;
                font-weight: normal;
                font-size: 22px;
            }

            .button-wrapper-row {
                justify-content: center;

                a {
                    margin: 0 10px
                }
            }
        }

        .steps-wrap {
            .buttons_other {
                .item-buttons-other {
                    .btn {
                        width: 46%;
                        max-width: 320px;
                    }
                }
            }
        }
    }

    .conditions,
    .option-text {
        display: flex;
        flex-direction: column;
        padding: 0 30px;

        p {
            font-family: PragmaticaLightCBold, Helvetica, sans-serif;
            margin: 50px 30px 10px;
            text-align: left;
            font-size: 18px;
            font-weight: bold;
            line-height: 1.4;

          @media screen and (max-width: 500px) {
            margin: 10px 0 0 15px;
          }
        }
    }

    @media only screen and (min-width: 580px) {
        .option-text {
            p {
                text-align: center;
                font-weight: normal;
                font-size: 22px;
            }
        }
    }

    .option-text ul,
    .conditions ul {
       /* width: 75%;*/
        display: block;
        margin: 20px auto 40px;

      @media screen and (max-width: 500px) {
        margin-bottom: 10px;
      }
    }

    .option-text ul li,
    .conditions ul li {
        display: flex;
        align-items: center;
        line-height: 1.2;
        margin-bottom: 7px;
        &>span {
            display: block;
            margin-left: 10px;
        }

        i {
            color: #ff8351;
        }

        .check {
            width: 16px;
            height: 16px;
            min-width: 16px;
            min-height: 16px;
        }
    }

    @media only screen and (min-width: 580px) {
/*        .option-text ul {
            width: 100%;
        }*/

        .option-text,
        .conditions {
           /* width: 430px;*/
            margin: 10px auto 20px;

            ul {
                li {
                    font-size: 20px;

                    .check {
                        width: 26px;

                        &.check-green {
                            width: 16px;
                        }
                    }
                }
            }
        }
    }


    .your-surcharge {
        font-family: PragmaticaLightCBold, Helvetica, sans-serif;
        color: #FF8351;
        text-align: center;
        font-size: 30px;
        margin: 16px 0;
    }

    .progressbar-wrapper {
        text-align: center;
        width: 100%;
        margin: 0px auto 30px;

      @media screen and (max-width: 500px) {
        margin-bottom: 40px;
      }

        .progressbar-line {
            margin: 0 auto 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            position: relative;
            width: 100%;
            border: 2px solid #000;

            &::before {
                content: "";
                width: 33.3%;
                height: 100%;
                position: absolute;
                left: 0;
                background: rgb(255,131,81);
                background: url(/images/icons/progressbar.svg) repeat-x,linear-gradient(90deg, rgba(255,131,81,1) 0%, rgba(255,182,119,1) 70%);
                -webkit-transition: all ease-out 1s;
                -moz-transition: all ease-out 1s;
                -o-transition: all ease-out 1s;
                transition: all ease-out 1s;

            }

            &.step2::before {
                width: 66%;
            }

            &.step4::before {
                width: 100%;
            }

            .progressbar-text {
              position: relative;
            }
        }

        .progressbar-section-colored {
            border-radius: 0;
            width: 33%;
            height: 50px;
            background-color: #92d36e;
        }

        .progressbar-text {
            font-family: PragmaticaLightCBold, Helvetica, sans-serif;
            text-align: center;
            font-size: 12px;
            line-height: 18px;
            color: #000;
            text-shadow: 0 0 5px rgba(255, 255, 255, .6);
        }

        @media only screen and (min-width: 580px) and (max-width: 1099px) {
            .progressbar-text {
                font-size: 14px;
            }
        }

        @media only screen and (min-width: 1100px) {
            .progressbar-text {
                font-size: 18px;
            }
        }
    }


    .model-count-text {
        font-size: 20px;
        color: #ee6723
    }
    .trigger-wrap {
        p {
            line-height: 1.4;
            margin: 35px auto;
        }
    }

    .model-choose-text2 {
        font-family: PragmaticaLightCBold, Helvetica, sans-serif;
        text-align: left;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.4;
        margin: 0 50px;
    }

    .model-choose-text {
        font-family: PragmaticaLightCBold, Helvetica, sans-serif;
        font-weight: bold;
        text-align: left;
        font-size: 18px;
        line-height: 1.4;
        margin: 0 30px;
    }

    .buy-step-block {
        width: 25%;
    }

    .buy-step-circle {
        border-radius: 50%;
        border: 2px solid #000;
        width: 50px;
        height: 50px;
        background-color: #fff;
        z-index: 10;
        cursor: pointer;
    }

    .buy-step-circle-colored {
        border-radius: 50%;
        border: 2px;
        width: 50px;
        height: 50px;
        background-color: #ff8351;
        color: #fff;
    }

    .buy-step-number {
        font-size: 35px;
    }

    .buy-step-text {
        font-size: 16px;
        line-height: 1.2;
        display: block;
        color: #000000;
        text-align: center;
        height: 40px;

      @media screen and (max-width: 500px) {
        font-size: 12px;
      }
    }

    .buy-steps-wrapper {
        margin: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        max-width: 580px;

        &:before {
            content: '';
            position: absolute;
            height: 2px;
            display: block;
            top: 25%;
            left: 10%;
            right: 10%;
            margin: 0 auto;
            background-color: #000;
            z-index: -1;
        }
    }

    @media only screen and (min-width: 580px) {
        .model-choose-text2,
        .model-choose-text {
            font-weight: normal;
            font-size: 22px;
            text-align: center;
        }

        .buy-steps-wrapper {
            margin: 60px auto 80px;
            z-index: 1;
        }
    }

    @media only screen and (min-width: 800px) {
        .trigger-wrap {
            margin: 20px auto;
        }
    }

    @media only screen and (min-width: 1366px) {
        .buy-step-circle {
            width: 60px;
            height: 60px;
        }

        .buy-step-circle-colored {
            width: 60px;
            height: 60px;
        }

        .buy-step-number {
            font-size: 42px;
        }
    }

  .steps-notification {
    width: 100%;
    min-height: 50px;
    background: #586470;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 660px) {
      padding: 15px;
      font-size: 14px;
    }
  }

  #classified .option-text {
    margin-bottom: 20px;
  }
</style>
