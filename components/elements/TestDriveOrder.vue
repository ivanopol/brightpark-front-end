<template>
  <div class="test-drive">
    <h4 class="test-drive__heading">
      Записаться на тест-драйв
    </h4>
    <form class="test-drive__form">
      <input type="text" placeholder="Ваше имя">
      <input type="text" placeholder="Номер телефона">

      <div class="test-drive__form__row">
        <input type="text" placeholder="Удобный день">

        <the-mask type="text" placeholder="Удобное время" pattern=".{5,}"
            mask="##:##" />
      </div>
    </form>
  </div>
</template>


<script>
export default {
  
}
</script>


<style lang="scss">
  .test-drive {
    padding: 30px 50px;
    background: white;
  }

  .test-drive__heading {
    font-size: 26px;
    text-align: left;
  }
</style>