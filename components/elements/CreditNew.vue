<template>
  <section class="credit">
    <div class="container credit__container">
      <div class="credit__head">
        <div class="credit__inner">
          <img src="~static/images/credit-section/granta.png" alt="granta" class="credit__inner__car">

          <div class="credit__inner__text">
            <h2 class="credit__inner__title">
              Рассчитайте кредит на покупку LADA Granta
            </h2>

            <p class="credit__inner__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere massa nam facilisi sed vestibulum.
            </p>
          </div>

          <AdvantagesListMini
            :advantages="['12 банков-партнеров', 'Одобрение по кредиту 30 минут', 'Вероятность одобрения 96%']"
            :tick-color="'#fff'"
            class="credit__advantages"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CreditNew"
}
</script>

<style scoped lang="scss">
.credit {
  background: #514EA1;
  padding: 15px 0;
}



.credit__inner__car {
  max-width: 375px;
  display: block;
  margin: auto;
}

.credit__inner__text {
  padding: 0 20px;
}

.credit__inner__title {
  color: white;
  font-size: 28px;
  text-transform: unset;
  font-family: "Bright Park Display";
  text-align: center;
}

.credit__inner__desc {
  font-size: 16px;
  line-height: 26px;
  color: white;
  text-align: center;
  margin-top: 10px;
}

.credit__advantages {
  color: white;
  font-size: 18px;
  margin: 20px auto;
  border-top: 1px solid rgba(255, 255, 255, .35);
  border-bottom: 1px solid rgba(255, 255, 255, .35);
  padding: 30px 35px 15px;
}
</style>
