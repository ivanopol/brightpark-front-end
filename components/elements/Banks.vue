<template>
    <div class="container_bg_gray">
        <section class="banks-logos container">
            <h2>Банки-Партнеры</h2>
            <ul>
                <li>
                    <img loading=lazy :id="$store.state._page + '__banks__ph-bank'" class="event" src="~static/images/banks/rn.png" alt="PH Банк"
                    v-on:click.prevent="show('Узнать про кредит', $store.state._page + '__modal-banks-ph-bank_', 'Отправить', 1, 'credit')">
                </li>
                <li>
                    <img loading=lazy :id="$store.state._page + '__banks__vtb'" class="event" src="~static/images/banks/vtb.png" alt="ВТБ"
                    v-on:click.prevent="show('Узнать про кредит', $store.state._page + '__modal-banks-vtb_', 'Отправить', 1, 'credit')">
                </li>
                <li>
                    <img loading=lazy :id="$store.state._page + '__banks__setelem'" class="event" src="~static/images/banks/setelem.png" alt="Сетелем"
                    v-on:click.prevent="show('Узнать про кредит', $store.state._page + '__modal-banks-setelem_', 'Отправить', 1, 'credit')">
                </li>
                <li>
                    <img loading=lazy :id="$store.state._page + '__banks__sovkombank'" class="event" src="~static/images/banks/sovkom.png" alt="СовкомБанк"
                    v-on:click.prevent="show('Узнать про кредит', $store.state._page + '__modal-banks-sovkombank_', 'Отправить', 1, 'credit')">
                </li>
                <li>
                    <img loading=lazy :id="$store.state._page + '__banks__uralsib'" class="event" src="~static/images/banks/uralsib.png" alt="УРАЛСИБ"
                    v-on:click.prevent="show('Узнать про кредит', $store.state._page + '__modal-banks-uralsib_', 'Отправить', 1, goal)">
                </li>
                <li>
                    <img loading=lazy :id="$store.state._page + '__banks__rusfinance'" class="event" src="~static/images/banks/rusfinance.png" alt="РУСФИНАНС БАНК"
                    v-on:click.prevent="show('Узнать про кредит', $store.state._page + '__modal-banks-rusfinance_', 'Отправить', 1, goal)">
                </li>
                <li>
                    <img loading=lazy :id="$store.state._page + '__banks__rosgosstrakh'" class="event" src="~static/images/banks/rostrah.png" alt="Росгосстрах Банк"
                    v-on:click.prevent="show('Узнать про кредит', $store.state._page + '__modal-banks-rosgosstrakh_', 'Отправить', 1, goal)">
                </li>
                <li>
                    <img loading=lazy :id="$store.state._page + '__banks__tinkoff'" class="event" src="~static/images/banks/tinkoff.png" alt="Тинькофф"
                    v-on:click.prevent="show('Узнать про кредит', $store.state._page + '__modal-banks-tinkoff_', 'Отправить', 1, goal)">
                </li>
            </ul>
        </section>
        <modal name="form-credit-banks" height="auto" :adaptive="true">
            <div :id="form_id + '_close'" class="close event" @click="hide"></div>
            <FormBuy2Component   :form_title="form_title"
                                 :form_id="form_id"
                                 :button_text="button_text"
                                 :form_type="form_type"
                                 :goal="goal">
            </FormBuy2Component>
        </modal>
    </div>
</template>

<script>
    export default {
        name: "Banks",
        props: ['cities'],
        data: function () {
            return {
                //modalWidth: window.innerWidth -20,
                form_id: '',
                form_title: '',
                button_text: '',
                form_type: 1,
                goal: 'credit',
            }
        },
        methods: {
            show (title, form_id, button_text, form_type, goal) {
                this.form_title = title;
                this.form_id = form_id;
                this.button_text = button_text;
                this.form_type = form_type; // 1 - обычная форма, 2 - форма сервиса
                this.goal = goal;
                this.$modal.show('form-credit-banks');
/*                () => {
                    callibriInit();
                }*/
            },
            hide () {
                this.$modal.hide('form-credit-banks');
            },
        },
        created () {
          //  this.modalWidth = window.innerWidth -20
        },
        computed: {
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .banks-logos {
        & {
            padding-bottom: 30px;
        }

        h2 {
            font-family: PragmaticaLightCBold, Helvetica, sans-serif;
            text-align: center;
            margin: 60px auto;
            padding: 0 20px;
            span {
                display: inline-block;
            }
        }

        ul {
            display: flex;
            flex-flow: wrap;
            justify-content: center;
            padding: 0 15px;
            li {
                cursor: pointer;
                width: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 25px;
                max-width: 195px;

                img {
                    width: 90%;
                    max-width: 140px;
                }
            }
        }

        @media only screen and (min-width: 580px) {
            & {
                padding-bottom: 20px;
            }

            h2 {
                margin: 80px auto;
            }

            ul {

                li {
                    width: 23%;
                    margin-bottom: 30px;
                }
            }
        }

        @media only screen and (min-width: 1366px) {
            ul {

                li {
                    width: 23%;
                    margin-bottom: 60px;
                    max-width: unset;
                    img {
                        width: 75%;
                        max-width: unset;
                    }
                }
            }
        }
    }
</style>
