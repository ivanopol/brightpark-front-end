<template>
  <section class="theme-05-special">
    <FormGift
      class='special-form'
      form_title='Оставить заявку'
      button_text='Отправить'
      goal=""
      form_title_special=''
      :form_type="1"
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
