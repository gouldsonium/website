<template>
  <div class="welcome" @mousemove="handleMove" @touchmove="handleTouch">
    <div id="left-side" class="side">
      <img id="left-image" src="/logos/color-no-bg.svg" alt="">
    </div>
    <div id="right-side" class="side">
      <img id="right-image" src="/logos/black-no-bg.svg" alt="">
    </div>
    <Arrow />
  </div>
</template>

<script>
import Arrow from '../components/TheHomeArrow.vue';

export default {
  components: {
    Arrow
  },
  methods: {
    handleMove(e){
      const left = document.getElementById("left-side");
      left.style.width = `${e.clientX / window.innerWidth * 100}%`;
    },
    handleTouch(event) {
      const left = document.getElementById("left-side");
      var e = event.touches[0]
      left.style.width = `${e.clientX / window.innerWidth * 100}%`;
    }
  }
}
</script>

<style scoped>
.welcome{
  cursor: default;
  height: 100vh;
}
.side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
#left-side {
  background-color: #222831;
  width: 57%;
  z-index: 10;
}
#right-side {
  background-color: #ffa500;
}
img{
  height: 40vh;
  top: 0;
  width: 100vw;
  max-height: none;
  max-width: none;
  padding: 5px 10px 0 10px;
}
</style>