<template>
  <section class="block block_5">
    <div class="block-text">
      <h2><span class="c_orange">Гарантия</span> 3 года</h2>
      <p>На&nbsp;вашу новенькую LADA {{ model_full }} действует расширенная гарантия 3&nbsp;года.</p>
    </div>
    <div class="photo_block container-max">
      <div class="feedback">
        <picture>
          <source srcset="/images/photos/feedback/feedback-desktop.jpg"
                  media="(min-width: 660px)">
          <img src="/images/photos/feedback/feedback_04.jpg" :alt="'На вашу новенькую' + model_full + ' действует расширенная гарантия 3 года.'">
        </picture>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Feedback",
  props: {
    model_full: {
      default: '',
      type: String
    }
  },
}
</script>
