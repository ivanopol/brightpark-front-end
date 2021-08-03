<template>
  <section class="warranty">
    <div class="container warranty__container">
      <div class="warranty__preview">
        <img src="~static/images/warranty/warranty-granta.png" alt="">
      </div>

      <div class="warranty__text">
        <h2 class="warranty__heading">
          Гарантия 3 года
        </h2>

        <p class="warranty__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae est, fringilla elementum, tristique a quam metus diam integer.
          Sagittis facilisi dictum dignissim suspendisse nunc, ut arcu nullam. Sollicitudin amet, erat ipsum, commodo viverra enim sagittis.
          Neque in nunc faucibus fringilla consequat tristique.
        </p>

        <advantages-list-mini
          class="warranty__advantages"
          :advantages="['12 банков-партнеров', 'Одобрение по кредиту 30 минут', 'Вероятность одобрения 96%']"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ModelsWarranty"
}
</script>

<style scoped lang="scss">

  .warranty {
    padding-top: 30px;
  }

  .warranty__preview {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 200px;
      margin-left: 70px;
    }
  }

  .warranty__heading {
    font-family: "Bright Park Display";
    font-size: 28px;
    text-align: center;
    text-transform: unset;
    margin-bottom: 16px;
  }

  .warranty__desc {
    font-size: 16px;
    font-family: "Factor A";
    line-height: 24px;
    font-weight: 400;
    color: rgba(0, 0, 0, .7);
  }

  .warranty__container {
    padding: 0 20px;
  }

  .warranty__advantages {
    color: #514EA1;
    font-size: 18px;
  }
</style>
