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

        <ul class="warranty__advantages">
          <li class="warranty__advantages__item">
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 10L4 13L16 1" stroke="#514EA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p>
              12 банков-партнеров
            </p>
          </li>

          <li class="warranty__advantages__item">
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 10L4 13L16 1" stroke="#514EA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p>
              Одобрение по кредиту 30 минут
            </p>
          </li>

          <li class="warranty__advantages__item">
            <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 10L4 13L16 1" stroke="#514EA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p>
              Вероятность одобрения 96%
            </p>
          </li>
        </ul>
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

  .warranty__advantages__item {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }

    p {
      font-size: 18px;
      font-weight: 500;
    }
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
    margin-top: 20px;
  }
  .warranty__advantages__item {
    margin-bottom: 15px;
    p {
      color: #514EA1;
      font-size: 16px;
      font-family: "Factor A";
    }
  }
</style>
