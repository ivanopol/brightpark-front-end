<template>
    <section class="block form baraban-form" >
        <form action="#" :id="form_id" method="POST" name="feedback" @submit="send" v-show="!btn_disabled" :data-goal="goal">
<!--            <input :id="form_id + '_input_name'" type="text" class="" v-show="!btn_disabled" name="name" v-model="name" placeholder="Имя" required>-->

          <label class="form__input-wrapper">
            <span class="form__input-wrapper__svg">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M8 0.83168C6.19455 0.83168 4.75078 2.19922 4.75078 3.86293C4.75078 5.52665 6.19455 6.89419 8 6.89419C9.80545 6.89419 11.2492 5.52665 11.2492 3.86293C11.2492 2.19922 9.80545 0.83168 8 0.83168ZM3.88592 3.86293C3.88592 1.71909 5.73882 0 8 0C10.2612 0 12.1141 1.71909 12.1141 3.86293C12.1141 6.00677 10.2612 7.72587 8 7.72587C5.73882 7.72587 3.88592 6.00677 3.88592 3.86293ZM8 10.1698C4.86643 10.1698 2.16725 11.6538 0.801379 13.8011C0.676758 13.997 0.410576 14.0587 0.206845 13.9388C0.00311314 13.819 -0.0610185 13.563 0.0636026 13.3671C1.59875 10.9537 4.58928 9.33816 8 9.33816C11.4107 9.33816 14.4012 10.9537 15.9364 13.3671C16.061 13.563 15.9969 13.819 15.7932 13.9388C15.5894 14.0587 15.3232 13.997 15.1986 13.8011C13.8328 11.6538 11.1336 10.1698 8 10.1698Z" fill="#393840"/>
              </svg>
            </span>

            <input :id="form_id + '_input_name'" type="text" class="" name="name" v-show="!btn_disabled"
                   v-model="name" placeholder="Имя" required>
          </label>

          <label class="form__input-wrapper">
            <span class="form__input-wrapper__svg">
              <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.76471C0 0.790086 0.735055 0 1.64179 0H9.35821C10.2649 0 11 0.790086 11 1.76471V16.2353C11 17.2099 10.2649 18 9.35821 18H1.64179C0.735055 18 0 17.2099 0 16.2353V1.76471ZM1.64179 0.882353C1.18842 0.882353 0.820896 1.2774 0.820896 1.76471V16.2353C0.820896 16.7226 1.18842 17.1176 1.64179 17.1176H9.35821C9.81158 17.1176 10.1791 16.7226 10.1791 16.2353V1.76471C10.1791 1.2774 9.81158 0.882353 9.35821 0.882353H9.0709C8.78972 1.13186 8.65124 1.64678 8.5732 2.22721C8.51161 2.68523 8.16277 3.04412 7.73223 3.04412H3.26777C2.83723 3.04412 2.48839 2.68523 2.4268 2.22721C2.34876 1.64678 2.21028 1.13186 1.9291 0.882353H1.64179ZM3.0246 1.12619C3.13192 1.43995 3.19627 1.78126 3.23926 2.101C3.24307 2.12937 3.25516 2.14863 3.26452 2.15787C3.26653 2.15986 3.26909 2.16176 3.26909 2.16176H7.73091C7.73091 2.16176 7.73347 2.15986 7.73548 2.15787C7.74484 2.14863 7.75693 2.12937 7.76074 2.101C7.80374 1.78126 7.86808 1.43995 7.97541 1.12619C8.00238 1.04733 8.03373 0.965262 8.0705 0.882353H2.9295C2.96627 0.965262 2.99762 1.04733 3.0246 1.12619Z" fill="#393840"/>
                  <path d="M4.02239 1.54412C4.02239 1.37356 4.15102 1.23529 4.3097 1.23529H5.62313C5.78181 1.23529 5.91045 1.37356 5.91045 1.54412C5.91045 1.71468 5.78181 1.85294 5.62313 1.85294H4.3097C4.15102 1.85294 4.02239 1.71468 4.02239 1.54412Z" fill="#393840"/>
                  <path d="M6.23881 1.54412C6.23881 1.37356 6.36744 1.23529 6.52612 1.23529C6.6848 1.23529 6.81343 1.37356 6.81343 1.54412C6.81343 1.71468 6.6848 1.85294 6.52612 1.85294C6.36744 1.85294 6.23881 1.71468 6.23881 1.54412Z" fill="#393840"/>
                </g>
              </svg>
            </span>

            <the-mask :id="form_id + '_input_phone'" pattern=".{18,}" :disabled='btn_disabled'
                      mask="+# (###)-###-##-##" v-model="phone" type="tel" required="true" placeholder="Телефон"></the-mask>
          </label>
<!--            <the-mask :id="form_id + '_input_phone'" pattern=".{18,}" :disabled='btn_disabled' mask="+# (###)-###-##-##" v-model="phone" type="tel" required="true" placeholder="Телефон"></the-mask>-->
            <div class="control-group">
                <label :for="form_id + '_checkbox_personal_data'" class="control control-checkbox">Я согласен на <a :href="'/' + $store.state.city.value + '/privacy'" target="_blank">обработку персональных данных</a>
                    <input type="checkbox" :id="form_id + '_checkbox_personal_data'" v-model='status' >
                    <div class="control_indicator"></div>
                </label>
            </div>

            <button :id="form_id + '_button'" :click="send" :class="{preloader : blocked}" class="event" v-bind:disabled="isButtonDisabled">{{button_text}}</button>
            <div class="validation-message-wrap">
                <div class="model-choose-text warning validation-message" v-show="error">
                    <p>Введите 11-значный номер!</p>
                </div>
                <div class="model-choose-text success validation-message" v-show="success">
                    <p>Заявка отправлена!</p>
                </div>
            </div>
            <div class="baraban-form-bottom-title">
              <span>при покупке автомобиля в кредит</span>
            </div>
        </form>

        <div class="result" v-show="btn_disabled">
            <p>Мы скоро позвоним <br>
                и расскажем, <br>
                как получить подарок</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'FormBaraban',
        props:{
          sendForm: {
            default: false,
          },
        },
        data: function () {
            return {
                success: false,
                error: false,
                name: '',
                phone: '',
                btn_disabled: false,
                button_text: "Крутить барабан",
                form_title: "Барабан",
                form_id: this.$store.state._page + '__baraban_',
                status: true,
                isLoading: false,
                blocked: false,
                form_type: 1,
                goal: 'baraban',
                isProduction: process.env.NODE_ENV === 'production',
            };
        },
        computed: {
            url: function () {
                return window.location;
            },
            isButtonDisabled: function () {
              if (this.isLoading) {
                return true;
              } else {
                return !this.status;
              }
            },
        },

        watch: {
          sendForm: function() {
            if (this.sendForm) {
              let formData = {
                "phone": this.clearMask(this.phone),
                "name": this.name,
                "responsible_id": this.$store.state.city.bitrix_responsible_id,
                "city": this.$store.state.city.value,
                "url": this.url,
                "caption": this.form_title,
                "form_type": this.form_type,
                "gift": this.$store.state.gift,
              };

              this.$axios(
                {
                  method: 'post',
                  url: process.env.apiUrl + '/api/send_contact_form',
                  data: formData
                })
                .then((response) => {
                  this.clearInput();
                  this.success = true;
                  this.blocked = false;
                  this.status = true;
                  this.btn_disabled = true;
                  this.sendGoals(this.goal);
                  return {};
                }).catch((error) => {
                this.error = true;
                this.clearInput();
                return {};
              })
            }
          },
        },

        methods: {
            send: function (event) {
                event.preventDefault();
                this.blocked = true;
                this.isLoading = true;
                // генерируем событие 'twist' (крутить)
                this.$emit('twist', true);
            },
            sendGoals: function (goal) {
                if (goal && this.isProduction) {
                    let ym_ids = this.getCountersIds();
                    let goalArr = goal.match(/^(.+?):(.+?)$/);
                    let target_goal = goalArr === null ? goal : goalArr[2];

                    ym_ids.forEach(function (item, i, arr) {
                        window["yaCounter" + item].reachGoal(target_goal);
                    });
                }
              return {};
            },
            getCountersIds: function () {
                var id_list = [];
                window.ym.a.forEach(function(item){
                    id_list.push(item[0]);
                });
                return id_list;
            },
            clearInput: function () {
                this.phone = null;
                this.name = null;
              return {};
            },

            clearMask: function(value) {
              return value.replace(/\D/g,'');
            },

            showModal: function() {
              return {};
            },

            attachHandler: function () {
                function attachHandler(el, evtname, fn) {
                    if (el) {
                        if (el.addEventListener) {
                            el.addEventListener(evtname, fn.bind(el), false);
                        } else if (el.attachEvent) {
                            el.attachEvent('on' + evtname, fn.bind(el));
                        }
                    }
                }

                attachHandler(window, "load", function () {
                    var ele = document.querySelector("input[id=" + this.form_id + "_input_phone]");
                    attachHandler(ele, "invalid", function () {
                        this.setCustomValidity("Please enter at least 5 characters.");
                        this.setCustomValidity("");
                    });
                });
              return {};
            }
        },
        mounted() {
        },
        beforeMount() {
          this.attachHandler();
        },
    }
</script>
<style lang="scss" scoped>
    @import "~assets/scss/_controls.scss";

    @media only screen and (max-width: 580px) {
        .baraban-block.swap {
            flex-direction: column;

            .result {
                margin-top: 60px;
            }
        }
    }

    form button.preloader:disabled {
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        color: rgba(255,255,255,0);
        background-color: #FF8351!important;
        &:after {
            content: "";
            background: url(/images/icons/animations/dots.svg) no-repeat center center;
            z-index: 10;
            height: 18px;
            display: block;
            position: absolute;
            margin: 0 auto;
            left: 0;
            right: 0;
            top: 14px;
        }
    }


    .baraban-form {
        &-bottom-title span {
          text-align: center;
          margin-top: 15px;
          display: block;
        }

        .result {
            text-align: center;
        }

        #warning,
        #success {
            text-align: center;
            line-height: 1.2;
            margin: 18px auto;
            border-radius: 8px;
            padding: 15px;
            font-size: 16px;
            max-width: 340px;

        }

        #warning {
            p {
                color: #ff7777;
            }
        }

        #success {
            background-color: #dafbcc;

            p {
                margin: 0 !important;
                color: #30c130;
            }
        }

        &.form {
            button {
                margin-top: 30px;
            }
        }

        p.form-title {
            color: #000;
            margin-bottom: 30px;
            font-family: PragmaticaLightCBold, Helvetica, sans-serif;
            text-transform: uppercase;
            text-align: center;
            font-size: 24px;
            line-height: 1.3;
        }

        @media only screen and (min-width: 580px) {
            p.form-title {
                color: #000;
                margin-bottom: 30px;
                font-size: 34px;
            }
        }

        @media only screen and (min-width: 1367px) {

        }

        form {
            margin-bottom: 40px;
        }
        .block-text {
            padding-top: 30px;
            padding-right: 50px;
        }

        .validation-message-wrap {
            height: auto;

            #success,
            #error {
                margin-bottom: 0;
            }
        }
    }

  .form__input-wrapper {
    margin-bottom: 10px;
  }
</style>
