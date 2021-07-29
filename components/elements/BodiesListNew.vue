<template>
<nav class="models">
  <div class="container">
    <ul class="models__list">
      <li>
        <nuxt-link to="drive-active">
          <img src="~static/images/models/da.png" alt="">

          <span>
            Drive Active
          </span>
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="hatchback">
          <img src="~static/images/models/hatchback.png" alt="">

          <span>
            Хэтчбэк
          </span>
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="liftback">
          <img src="~static/images/models/liftback.png" alt="">

          <span>
            Лифтбек
          </span>
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="sedan">
          <img src="~static/images/models/da.png" alt="">

          <span>
            Седан
          </span>
        </nuxt-link>
      </li>

      <li>
        <nuxt-link to="universal">
          <img src="~static/images/models/da.png" alt="">

          <span>
            Универсал
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: "BodiesListNew",
  models: [
    {
      id: '0',
      name: 'Drive Active',
      path: '/drive-active'
    },

    {
      id: '1',
      name: 'Седан',
      path: '/sedan'
    },

    {
      id: '2',
      name: 'Хэтчбэк',
      path: '/hatchback'
    },

    {
      id: '3',
      name: 'Лифтбэк',
      path: '/liftback'
    },

    {
      id: '4',
      name: 'Niva',
      path: '/niva'
    },

    {
      id: '5',
      name: '4x4',
      path: '/4x4'
    },
  ],
}
</script>

<style scoped lang="scss">
.models {
  display: none;

  @media (min-width: 1024px) {
    display: block;
    border-top: 1px solid #D9DADA;
    border-bottom: 1px solid #D9DADA;
    width: 100%;
    padding: 12px 0;

    .container {
      overflow: visible;
    }
  }
}

@media (min-width: 1024px) {
  .models__list {
    display: flex;

    li {
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Factor A';
        font-weight: 500;
        color: #000;
        font-size: 16px;

        &.nuxt-link-active {
          color: #514EA1;

          span {
            position: relative;

            &:after {
              content: "";
              display: block;
              background-color: #514EA1;
              position: absolute;
              bottom: -13px;
              width: 100%;
              height: 3px;
            }
          }
        }

        span {
          margin-top: 11px;
        }
      }
    }
  }
}
</style>
