<template>
  <section className="theme-05-special">
    <div class="container">
      <div class="block-one" v-show="success">
        <h1>Спасибо за ответ!</h1>
        <p>Наш специалист перезвонит в ближайшее время!</p>
      </div>

      <div class="block-one" v-show="error">
        <h1>Что-то пошло не так!</h1>
        <p>Наши специалисты скоро решать проблему!</p>
      </div>

      <div class="block-one" v-show="!valid">
        <h1>Что-то пошло не так!</h1>
        <p>Данные не переданы!</p>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  layout: 'without_footer',
  data: function () {
    return {
      phone: '',
      date: '',
      title: '',
      name: '',
      success: false,
      error: false,
      valid: true
    }
  },
  methods: {
    createLead: function () {
      let formData = {
        name: this.name,
        phone: this.phone,
        date: this.date,
        form_type: 6,
        form_id: 'viber-service',
        goal: 'viber_mailing',
        caption: this.title,
        city: this.$store.state.city.value,
        url: this.url
      }

      this.$axios({
        method: "post",
        url: process.env.apiUrl + "/api/send_contact_form",
        data: formData
      }).then(response => {
        this.success = true
      }).catch(error => {
        this.error = true
        return {};
      });
    }
  }, computed: {
    url: function () {
      return {
        href: window.location.href,
        search: window.location.search
      };
    }
  },

  mounted() {
    if (this.$route.query.phone !== undefined) {
      this.phone = this.$route.query.phone
    }

    if (this.$route.query.dateMailing !== undefined) {
      this.date = this.$route.query.dateMailing
    }

    if (this.$route.query.titleMailing !== undefined) {
      this.title = this.$route.query.titleMailing
    }

    if (this.$route.query.name !== undefined) {
      this.name = this.$route.query.name
    }

    if (this.phone) {
      this.createLead()
    } else {
      this.valid = false
    }
  }
})
</script>


<style lang="scss" scoped>
@import "./assets/scss/_colors.scss";

.special-form {
  color: $purple;
  margin: auto;
}

.block-one {
  padding: 30px;
  line-height: 1.4;

  p {
    text-align: center;
    margin-bottom: 15px;
  }
}

@media only screen and (min-width: 700px) {

  .block-one {
    padding: 30px 0;
    max-width: 650px;
    margin: 0 auto;

    p {
      margin-bottom: 15px;
    }
  }
}
</style>
