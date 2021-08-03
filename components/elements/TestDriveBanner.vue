<template>
  <section class="test-drive-banner">
    <div class="container test-drive-banner__container">
      <div class="test-drive-banner__wrapper">
        <img src="~static/images/models/da.png" alt="" class="test-drive-banner__pic">

        <div class="test-drive-banner__text">
          <h2>
            Испытай новую LADA Granta в деле!
          </h2>

          <p>
            Ощутите преимущества новой LADA Granta Седан на собственном опыте
          </p>
        </div>

        <ButtonNew
          class="test-drive-banner__signup"
          :button-text="'Записаться на тест-драйв'"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestDriveBanner'
}
</script>

<style lang="scss" scoped>
  .test-drive-banner__wrapper {
    background-color: #514EA1;
    padding: 30px 20px 40px;
    position: relative;

    @media (min-width: 1367px) {
      display: flex;
      padding: 30px 40px 30px 200px;
    }
  }

  .test-drive-banner__pic {
    display: block;
    margin: auto;
    width: 100%;
    max-width: 305px;

    @media (min-width: 1000px) {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      left: -120px;
    }
  }

  .test-drive-banner__text {
    color: white;
    text-align: center;
    margin: 24px 0;

    h2 {
      text-transform: unset;
      font-size: 28px;
      font-family: 'Bright Park Display';
      margin-bottom: 9px;
    }

    p {
      font-family: 'Factor A';
      font-size: 16px;
    }

    @media (min-width: 1367px) {
      text-align: left;
      margin: 0;

      h2 {
        font-size: 32px;
      }
    }
  }

  .test-drive-banner__signup {
    height: 50px;
    max-width: 280px;
    font-size: 13px;
    margin: auto;

    @media (min-width: 1367px) {
      margin: 0 0 0 auto;
    }
  }
</style>
