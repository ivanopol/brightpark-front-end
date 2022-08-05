<template>
  <section class="theme-05-special">
    <h3>{{ phone }}</h3>
    <h3>{{ date }}</h3>
    <h3>{{ title }}</h3>
    <h3>{{ name }}</h3>
    <FormLeadNew
      class='special-form'
      form_title='Оставить заявку'
      :needCity='true'
      goal="viber_mailing"
      form_title_special='Заявка с вайбера/сервис'
      :form_type="5"
    />
  </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data: function () {
    return {
      phone : '',
      date : '',
      title : '',
      name : ''
    }
  },
  created() {
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

  }
})
</script>


<style lang="scss" scoped>
@import "./assets/scss/_colors.scss";

.special-form {
  color: $purple;
  margin: auto;
}
</style>
