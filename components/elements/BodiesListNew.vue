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
        transition: .2s ease;

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
}
</style>
