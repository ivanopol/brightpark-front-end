<template>
    <section :class="'block form retargeting-form ' + form_class">
        <div class="form-wrapper">
            <h3 v-html="form_title" v-if="form_title"></h3>
            <p class="pre-title" v-html="form_pre_title" v-if="form_pre_title"></p>
            <a :id="form_id + '__button'" class="btn btn-primary btn-position ms_booking event" >Записаться</a>
            <a :id="form_id + '__call'" :href="'tel:' + $store.state.city.phone" class="btn btn-primary calltouch_phone btn-position green event">Позвонить</a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'YclientsForm2',
    props: {
        button_text: {
            default: "Получить лучшие условия",
            type: String
        },
        form_title: {
            default: "<span class=\"c_orange\">Оставьте</span> заявку сейчас",
            type: String
        },
        form_pre_title: {
            default: "",
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
        form_class: {
            default: '',
            type: String
        },
        form_type: {
            default: 1,
            type: Number
        },
        goal: {
            default: '',
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>

.validation-message-wrap {
    height: 52px;
}
.retargeting-form {
    margin-bottom: 20px;

    .form-wrapper {
        padding: 0 0 8px;

        h3 {
            margin-bottom: 0;
        }

        .pre-title {
            color: #000;
            padding: 0 10px;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 0;
        }
    }

    @media only screen and (min-width: 580px) {
        .form-wrapper {
            padding: 40px 0;
            width: 450px;
            border-radius: 30px;
            box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.16), 0 0 30px 10px rgba(0, 0, 0, 0.08);
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
        margin-top: 20px;
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

@media only screen and (max-width: 580px) {
    .mobile_white_bg {
        background: #fff;
        padding: 40px 30px;
        border-radius: 20px;
        width: 90%;
        max-width: 340px;
        margin: 40px auto;

        h2 {
            color: #000;
        }

        .form-wrapper {
            padding: 0;
        }

        form {
            margin-bottom: 0;
        }

        form > * {
            width: 100%;
        }
    }
}
</style>
