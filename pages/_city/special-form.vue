<template>
  <section class="theme-05-special">
    <FormLeadNew
      class='special-form'
      form_title='Оставить заявку'
      :needCity='true'
      goal="viber_mailing"
    />
  </section>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>
@import "./assets/scss/_colors.scss";

.special-form {
  color: $purple;
  margin: auto;
}
</style>