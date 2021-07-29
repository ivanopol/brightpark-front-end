<template>
<nav class="models">
  <div class="container">
    <ul class="models__list">
      <li v-for="model in models" :key="model.id">
        <nuxt-link :to="'/' + $store.state.city.value + '/' + model.path"
                   :id="$store.state._page + '__models__list__' + model.name.toLowerCase()"
                   class="event">
          <span>
            {{ model.name }}
          </span>
        </nuxt-link>
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
          path: '/granta'
        },

        {
          id: '1',
          name: 'Vesta',
          path: '/vesta'
        },

        {
          id: '2',
          name: 'XRAY',
          path: '/xray'
        },

        {
          id: '3',
          name: 'Largus',
          path: '/largus'
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
  },

}
</script>

<style scoped lang="scss">
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

      &:after {
        content: "";
        position: absolute;
        right: -350px;
        top: -17px;
        background: url("~static/images/decorations/models-decor.png") no-repeat;
        width: 576px;
        height: 249px;
        display: block;
      }
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
              bottom: -17px;
              width: 100%;
              height: 3px;
            }
          }
        }

      }
    }
  }
}
</style>
