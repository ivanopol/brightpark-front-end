<template>
  <span>
    <v-select id="select_auto" class="select_wrap event" :components="{OpenIndicator, Deselect}"
              :searchable=false
              :options="car_list"
              placeholder="Выберите автомобиль"
              taggable v-model="selected_auto"
              v-on:input="selectAuto()">
      <div class="spinner" v-show="mutableLoading">Загрузка...</div>
      <div slot="no-options">Нет совпадений</div>
    </v-select>
  </span>
</template>

<script>
export default {
  name: 'select_auto',
  data: () => ({
    Deselect: {
      render: createElement => createElement('span'),
    },
    OpenIndicator: {
      render: createElement => createElement('span', {class: {'toggle': true}}),
    },
    selected_auto: null,
    car_list: [],
    surcharge: 0,
  }),
  methods: {
    selectAuto() {
      this.surcharge = this.selected_auto.code;
      this.car_price = this.selected_auto.code;
      return {}
    },
    mutableLoading() {
      return {}
    },
  },
  async fetch() {
    const data = await fetch(
      process.env.apiUrl + `/api/get_cars_list`
    ).then(res => res.json())

    if (data.status === 'OK') {
      this.car_list = data.car_list;
      this.selected_auto = data.car_list[0];

    }
    return {}
  }
}
</script>

