<template>
  <a :href="'tel:' + phoneSelection(1)"
     :id="id"
     :class="classList"
     class="event"
     :data-goal="goal"
     @click="sendGoals(goal)"
  >{{phoneSelection(0)}}</a>
</template>

<script>
export default {
  name: "PhoneSelection",
  props: {
    id: {
      default: '',
      type: String
    },
    classList: {
      default: 'callibri_tel',
      type: String
    },
    text: {
      default: '',
      type: String
    },
    goal: {
      default: '',
      type: String
    }
  },
  methods: {
    sendGoals: function(goal) {
      if (goal) {
        let ym_ids = this.getCountersIds();
        if (ym_ids) {
          let goalArr = goal.match(/^(.+?):(.+?)$/);
          let target_goal = goalArr === null ? goal : goalArr[2];

          ym_ids.forEach(function (item) {
            window["yaCounter" + item].reachGoal(target_goal);
          });
        }
      }
      return {};
    },
    getCountersIds: function() {
      var id_list = [];

      if (window.hasOwnProperty('ym') && window.ym.hasOwnProperty('a')) {

        window.ym.a.forEach(function (item) {
          id_list.push(item[0]);
        });
      }
      return id_list;
    },
    phoneSelection: function (type) {
      let value = ''

      if (this.$store.state._page === 'service') {
        switch (this.$store.state.city.value) {
          case 'perm':
            value = type == 1 ? '73422148401' : '+7 (342) 214 84 01'
            break;

          case 'moscow':
            value = type == 1 ? '74951458745' : '+7 (495) 145 87 45'
            break;

          case 'magnitogorsk':
            value = type == 1 ? '73519515856' : '+7 (351) 951 58 56'
            break;

          case 'rostov-na-donu':
            value = type == 1 ? '78633109486' : '+7 (863) 310 94 86'
            break;

          case 'yekaterinburg':
            value = type == 1 ? '73433850395' : '+7 (343) 385 03 95'
            break;

          case 'volgograd':
            value = type == 1 ? '78442525462' : '+7 (844) 252 54 62'
            break;
        }
      } else {
        value = type == 1 ? this.$store.state.city.phone : this.$store.state.city.phone_format
      }

      if (type != 1 && this.text) {
        value = this.text
      }
      return value
    },
  }
}
</script>

<style scoped lang="scss">
  a {
    text-decoration: none;
  }
</style>
