<template>
  <a  class="event color-secondary-background" target="_blank" :href="path" @click="sendGoals">
    <svg v-if="with_icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.1667 1C9.33333 1 8.77778 1.83333 8.77778 3.22222C8.77778 7.94444 14.3333 16 19.3333 16C20.1667 16 21 15.4444 21 14.6111C21 13.7778 20.1667 12.9444 17.9444 12.9444C12.6667 12.9444 1 16.5556 1 19.6111C1 20.1667 1.55556 21 2.66667 21C6 21 11.5556 10.1667 11.5556 3.22222C11.5556 2.11111 11 1 10.1667 1Z" stroke="white" stroke-width="1.5"/>
    </svg>
    {{ buttonText }}
  </a>
</template>

<script>
export default {
  name: "LinkNew",
  props: {
    with_icon: {
      default: false,
      type: Boolean
    },
    path: {
      default: '',
      type: String
    },
    buttonText: {
      default: '',
      type: String
    },
    width: {
      type: String
    },
    buttonHeight: {
      type: String
    },
    buttonColor: {
      type: String,
      default: '#5CBE86',
    },
    goal: {
      default: '',
      type: String,
    }
  },
  data: function () {
    return {
      isProduction: process.env.NODE_ENV === 'production',
    }
  },
  methods: {
    sendGoals: function() {
      if (this.goal && this.isProduction) {
        let goal = this.goal
        let ym_ids = this.getCountersIds();
        let goalArr = goal.match(/^(.+?):(.+?)$/);
        let target_goal = goalArr === null ? goal : goalArr[2];

        ym_ids.forEach(function(item) {
          window["yaCounter" + item].reachGoal(target_goal);
        });
      }
      return {};
    },
    getCountersIds: function() {
      var id_list = [];

      window.ym.a.forEach(function(item) {
        id_list.push(item[0]);
      });
      return id_list;
    },
  }
}
</script>

<style scoped lang="scss">
@import "./assets/scss/_colors.scss";

a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  text-transform: uppercase;
  color: white;
  padding: 10px 15px;
  background: none;
  border: none;
  width: 100%;
  font-family: 'Factor A';
  letter-spacing: 0.05em;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
    transition: .2s ease;
  }

  svg {
    margin-right: 6px;
  }
}

</style>
