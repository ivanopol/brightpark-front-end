<template>
<div class="modal-thanks">
  <h4 class="modal-thanks__title">
    Спасибо за доверие!
  </h4>

  <p class="modal-thanks__description">
    В&nbsp;ближайшее время мы&nbsp;свяжемся с&nbsp;вами, уточним все детали заявки,а также ответим на&nbsp;все возникшие у&nbsp;вас вопросы
  </p>
</div>
</template>

<script>
export default {
  name: "ModalThanks"
}
</script>

<style scoped lang="scss">
.modal-thanks {
  padding: 55px 59px;
  background: white;
  border-radius: 10px;
  max-width: 570px;
  width: 100%;
  box-shadow: 0px 15px 45px rgba(0, 0, 0, 0.25);
  text-align: center;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-thanks__title {
  font-size: 36px;
  color: #514EA1;
  margin-bottom: 15px;
  font-family: "Bright Park Display";
}

.modal-thanks__description {
  font-size: 18px;
  font-family: "Factor A";
  color: rgba(0, 0, 0, .7);
}
</style>
