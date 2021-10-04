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
      bodies: [],
    }
  },
  async fetch() {

    let bodies = await fetch(
        process.env.apiUrl + `/api/bodies?&model=${this.$route.params.models}&type=${this.$route.params.model}`
    ).then(res => res.json())


    bodies.forEach((element) => {
      element.image = '/images/models/' + this.$route.params.models + '/' + element.path + '.png'
      element.is_active = this.$route.params.model === element.path ? true : false
    })

    this.bodies = bodies
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
