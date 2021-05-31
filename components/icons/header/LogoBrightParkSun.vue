<template>
    <svg class="bubble" version="1.1" id="bp_sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 18.8 10.4" style="enable-background:new 0 0 18.8 10.4;" xml:space="preserve">
        <title>Брайт Парк - официальный дилер LADA</title>
        <g class="colored">
            <rect class="st0 colored1" y="8.3"  width="3.9" height="2.1"/>
            <rect class="st0 colored2" x="3.1" y="2.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -1.6836 4.0984)"  width="2.1" height="3.9"/>
            <rect class="st0 colored3" x="8.3"  width="2.1" height="3.9"/>
            <rect class="st0 colored4" x="12.7" y="3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 1.4109 11.5753)"  width="3.9" height="2.1"/>
            <rect class="st0 colored5" x="14.9" y="8.3"  width="3.9" height="2.1"/>
        </g>
    </svg>
</template>

<script>
    export default {
        props: {}
    }
</script>

<style lang="scss" scoped>
    .colored1 {
      animation: coloring 10s linear infinite;
      animation-delay: .2s;
    }

    .colored2 {
      animation: coloring 10s linear infinite;
      animation-delay: .4s;
    }
    .colored3 {
      animation: coloring 10s linear infinite;
      animation-delay: .6s;
    }
    .colored4 {
      animation: coloring 10s linear infinite;
      animation-delay: .8s;
    }
    .colored5 {
      animation: coloring 10s linear infinite;
      animation-delay: 1s;
    }

    @keyframes coloring {
      0% {
        fill: rgb(238, 103, 35);
      }

      40% {
        fill: rgb(81, 78, 161);
      }

      60% {
        fill: rgb(92, 190, 134);
      }

      80% {
        fill: rgb(255, 202, 13);
      }

      100% {
        fill: rgb(238, 103, 35);
      }
    }

    #bp_sun {
        width: 35px;
    }

    @media only screen and (max-width: 340px) {
        #bp_sun {
            width: 30px;
        }
    }

    @media only screen and (min-width: 580px) {
        #bp_sun {
            width: 40px;
        }
    }
</style>
