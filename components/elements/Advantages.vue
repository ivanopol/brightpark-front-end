<template>
  <div id="advantages" class="advantages_wrap">
    <h1>Автосалон &laquo;Брайт&nbsp;Парк&raquo;&nbsp;&mdash; официальный&nbsp;дилер LADA</h1>
    <p class="presentation">В&nbsp;&laquo;Брайт Парк&raquo;&nbsp;&mdash; широкий выбор автомобилей LADA от&nbsp;завода АвтоВАЗ, выгодные цены и&nbsp;все условия для комфортной и&nbsp;быстрой покупки. Компания работает в&nbsp;{{$store.state.city.dative}} и&nbsp;ещё 5&nbsp;регионах с&nbsp;2008&nbsp;года.</p>
<!--    <ul class="clarification">
      <li>
        <div class="advantage">
          <span class="value">500</span>
          <span class="text" ref="text_04">авто с&nbsp;ПТС в&nbsp;наличии</span>
          <span class="clarification-item">Подберем авто в&nbsp;нужной комплектации и&nbsp;цвете</span>
        </div>
      </li>
      <li>
        <div class="advantage">
          <span class="value">12</span>
          <span class="text" ref="text_01">банков-<br>партнеров</span>
          <span class="clarification-item">Одобрим кредит (средний показатель&nbsp;&mdash; 98%)</span>
        </div>
      </li>
      <li>
        <div class="advantage">
          <span class="value">15&nbsp;мин.</span>
          <span class="text" ref="text_02">на&nbsp;одобрение кредита</span>
          <span class="clarification-item">Сэкономим ваше время</span>
        </div>
      </li>
      <li>
        <div class="advantage">
          <span class="value">1&nbsp;час</span>
          <span class="text" ref="text_03">обмен авто на&nbsp;новенькую LADA</span>
          <span class="clarification-item">Без лишних документов и&nbsp;долгого ожидания</span>
        </div>
      </li>
    </ul>-->
  </div>
</template>

<script>
export default {
  name: "Advantages",
  props: {},
  data: function () {
    return {
    }
  },
  components: {},
  methods: {
    alignBlocks() {
      const text_blocks = this.$refs
      let max_height = 0;
      for (const [key, value] of Object.entries(text_blocks)) {
        value.style.height = 'auto'
      }
      for (const [key, value] of Object.entries(text_blocks)) {
        if (value.clientHeight > max_height) {
          max_height = value.clientHeight
        }
      }
      for (const [key, value] of Object.entries(text_blocks)) {
        value.style.height = max_height + 'px'
      }
    }
  },
  mounted () {
    this.alignBlocks()
    window.addEventListener('resize', this.alignBlocks)
  },

  destroyed () {
    window.removeEventListener('resize', this.alignBlocks)
  },
}
</script>

<style scoped lang="scss">
  ul.clarification {
    margin-bottom: 0;
  }
</style>
