<template>
<nav class="models">
  <div class="container">
    <ul class="models__list">
      <li v-for="body in bodies" :key="body.id">
        <a :href="body.path">
          <img :src="body.image" :alt="body.name">
          <span>{{body.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: "BodiesListNew",
  data: function () {
    return {
      bodies: [
        {
          id: '0',
          name: 'Drive Active',
          path: 'drive-active',
          image: '/images/models/da.png'
        },
        {
          id: '1',
          name: 'Хэтчбэк',
          path: 'hatchback',
          image: '/images/models/hatchback.png'
        },
        {
          id: '2',
          name: 'Лифтбек',
          path: 'liftback',
          image: '/images/models/liftback.png'
        },
        {
          id: '3',
          name: 'Седан',
          path: 'sedan',
          image: '/images/models/da.png'
        },
        {
          id: '4',
          name: 'Универсал',
          path: 'universal',
          image: '/images/models/da.png'
        },

      ],
    }
  },
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
