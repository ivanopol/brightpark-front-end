<template>
  <button :type="buttonType"  :class="buttonColor" @click="sendGoals">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ButtonNew",
  props: {
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
    buttonType: {
      type: String
    },
    buttonColor: {
      default: 'color-primary-background',
      type: String
    },
    goal: {
      default: '',
      type: String
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

button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-transform: uppercase;
  color: white;
  padding: 10px 15px 6px;
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

  .preloader {
    color: rgba(255, 255, 255, 0);

    &:after {
      content: "";
      background: url(~static/images/icons/animations/dots-green.svg) no-repeat center center;
      z-index: 10;
      height: 18px;
      display: block;
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
  }
}

</style>
