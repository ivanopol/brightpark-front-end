<template>
  <div id="snow"></div>
</template>

<script>
import config from '../../nuxt.config'

export default {
  mounted() {
    if (!config.snow) {
      return false;
    }
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
      particlesJS("snow", {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
              "enable": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 300,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": false
            },
            "onclick": {
              "enable": false
            },
            "resize": false
          }
        },
        "retina_detect": true
      });
    }
    document.head.append(script);

  }
}
</script>

<style lang="scss">
#snow {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1000;
}
</style>
