<template>
<nav class="models">
  <div class="container">
    <ul class="models__list">
      <li v-for="body in bodies" :key="body.id">
        <a :href="body.path" :class="[body.is_active ? 'nuxt-link-active' : '']">
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
          image: '/images/models/da.png',
          is_active: false,
        },
        {
          id: '1',
          name: 'Хэтчбэк',
          path: 'hatchback',
          image: '/images/models/hatchback.png',
          is_active: false,
        },
        {
          id: '2',
          name: 'Лифтбек',
          path: 'liftback',
          image: '/images/models/liftback.png',
          is_active: false,
        },
        {
          id: '3',
          name: 'Седан',
          path: 'sedan',
          image: '/images/models/sedan.png',
          is_active: false,
        },
        {
          id: '4',
          name: 'Универсал',
          path: 'universal',
          image: '/images/models/wagon.png',
          is_active: false,
        },

      ],
    }
  },
  async fetch() {
    let bodyId = this.bodies.find(body => body.path === this.$route.params.model).id
    this.bodies[bodyId].is_active = true
  },
}
</script>

<style scoped lang="scss">
.models {
  // display: none;

    padding-top: 20px;
    margin-bottom: -35px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
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

.models__list {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;

    li {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }

      img {
        max-width: 100px;
      }

      a {
        display: flex;
        width: 115px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Factor A';
        font-weight: 500;
        color: #000;
        font-size: 10px;
        transition: .2s ease;

        &.nuxt-link-active {
          color: #514EA1;

          span {
            position: relative;
            white-space: nowrap;

            &:after {
              content: "";
              display: block;
              background-color: #514EA1;
              position: absolute;
              bottom: -1px;
              width: 100%;
              height: 1px;
            }
          }
        }

        &:hover {
          color: #514EA1;
          transition: .2s ease;
        }

        span {
          margin-top: 11px;
        }
      }
    }
  }
@media (min-width: 1024px) {
  .models__list {
    overflow: unset;
    padding-bottom: 0;
    li {
      margin-right: 30px;

      img {
        max-width: 170px;
      }

      a {
        font-size: 16px;
        width: auto;

        &.nuxt-link-active {
          span {
            &:after {
              height: 3px;
              bottom: -13px;
            }
          }
        }
      }
    }
  }
}
</style>
