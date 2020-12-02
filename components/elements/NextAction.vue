<template>
    <section class="block next_action">
        <div class="block-text">
            <h2><span class="c_orange">Ваше</span> следующее действие</h2>
        </div>
        <ul>
            <li>
              <a id="model__next-action__test-drive" class="btn event" href="#" v-on:click.prevent="show('Записаться на тест-драйв', 'model__modal-next-action-test-drive_', 'test_drive')">Записаться на тест-драйв</a>
            </li>
            <li>
                <nuxt-link id="model__next-action__count-payment" class="btn event" :to="'/' + $store.state.city.value + '/credit'">Рассчитать кредит</nuxt-link>
            </li>
            <li>
                <nuxt-link id="model__next-action__estimate-car" class="btn event" :to="$nuxt.$route.path + '/model-details#estimation'">Оценить свой автомобиль</nuxt-link>
            </li>
            <li>
                <a id="model__next-action__get-offer" class="btn event" href="#" v-on:click.prevent="show('Получить спецпредложение', 'model__modal-next-action-get-offer_', 'specialoffer')">Получить спецпредложение</a>
            </li>
        </ul>
        <modal name="form-callback" height="auto" :adaptive="true">
            <div :id="form_id + '_close'" class="close event" @click="hide"></div>
            <FormBuy2Component :form_title="form_title"
                               :form_id="form_id"
                               :goal="goal">
            </FormBuy2Component>
        </modal>
    </section>
</template>

<script>
    export default {
        name: "NextActions",
        data: function () {
            return {
                form_title: '',
                form_id: '',
                goal: '',
            };
        },
        methods: {
            close: function() {
                return this.open = false;
            },
            show (title, form_id, goal) {
                this.form_title = title;
                this.form_id = form_id;
                this.goal = goal;
                this.$modal.show('form-callback');
            },
            hide () {
                this.$modal.hide('form-callback');
            },
        },
    }
</script>

<style lang="scss">
    @import "~assets/scss/modal.scss";

    .next_action {
        color: #fff;
        background-color: #000; //#0e0e0e;
        text-align: center;
        padding: 0 0 50px;

        h2 {
            span {
                display: inline;
            }
        }

        ul {
            /*        padding-top: 30px;
                    padding-bottom: 20px;*/

            li {
                margin-bottom: 25px;

                a {
                    width: 80vw;
                    max-width: 340px;
                }

                &:last-child {
                    margin-bottom:0;
                }
            }
        }
    }

    @media only screen and (min-width: 580px) {
        .next_action {
            padding: 0 0 70px;
        }
    }
</style>
