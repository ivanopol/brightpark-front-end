<template>
<nav class="models">
  <div class="container color-svg-decor">
    <ul class="models__list">
      <li v-for="model in models" :key="model.id">
        <a :href="'/' + $store.state.city.value + model.path"
           :id="$store.state._page + '__models__list__' + model.name.toLowerCase()"
           class="event"
           :class="[model.is_active ? 'nuxt-link-active' : '']"
        >
          <span>
            {{ model.name }}
          </span>
        </a>
      </li>

    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: "ModelsListNew",

  data: function () {
    return {
      models: [
        {
          id: '0',
          name: 'Granta',
          path: '/granta/sedan',
          is_active: false,
        },

        {
          id: '1',
          name: 'Vesta',
          path: '/vesta/sedan',
          is_active: false,
        },

        {
          id: '2',
          name: 'XRAY',
          path: '/xray/xray',
          is_active: false,
        },

        {
          id: '3',
          name: 'Largus',
          path: '/largus/universal',
          is_active: false,
        },
        {
          id: '4',
          name: 'Niva Legend',
          path: '/niva-legend/three-doors',
          is_active: false,
        },
        {
          id: '5',
          name: 'Niva',
          path: '/niva/travel',
          is_active: false,
        },
      ],
    }
  },
  async fetch() {
    let modelId = this.models.find(model => model.name.toLowerCase().replace(' ', '-') === this.$route.params.models).id
    this.models[modelId].is_active = true
  },
}
</script>

<style scoped lang="scss">
@import "./assets/scss/_colors.scss";

.models {
  display: none;

  @media (min-width: 1024px) {
    display: block;
    border-top: 1px solid #D9DADA;
    width: 100%;
    padding: 17px 0;

    .container {
      overflow: visible;
      position: relative;
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
              bottom: -17px;
              width: 100%;
              height: 3px;
            }
          }
        }

        &:hover {
          color: #514EA1;
          transition: .2s ease;
        }

      }
    }
  }
}
</style>
