<template>
    <section class="block form form-modal">
        <div class="block-text">
            <p class="form-title">{{form_title}}</p>
        </div>
        <FormCommon :button_text="button_text"
                     :form_title="form_title"
                     :is_comment="is_comment"
                     :form_id="form_id"
                     :form_type="form_type"
                     :goal="goal"
                      :class_list="class_list"
        />
    </section>
</template>

<script>
    export default {
        name: 'FormInline',
        props: {
            class_list: {
              default: "",
              type: String
            },
            button_text: {
                default: "Записаться",
                type: String
            },
            form_title: {
                default: "Расширенный тест-драйв в Брайт парке",
                type: String
            },
            form_id: {
                default: 'form',
                type: String
            },
            is_comment: {
                default: true,
                type: Boolean
            },
            form_type: {
                default: 1,
                type: Number
            },
            goal: {
                default: '',
                type: String
            },
        },
        methods: {
        },
        mounted() {
        //  callibriInit()
        }
    }
</script>

<style lang="scss" scoped>
    #form_test-drive2 button {
        margin-top: 25px;
    }

    .form-modal {
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
        }
    }
</style>
