<template>
  <div class="welcome" @mousemove="handleMove" @touchmove="handleTouch">
    <div id="left-side" class="side">
      <img id="left-image" src="/logos/color-no-bg.svg" alt="">
      <!-- <h2 class="title font-heading text-4xl xs:text-6xl sm:text-7xl">
        Empower your <br>
        <span class="fancy text-5xl xs:text-6xl sm:text-7xl">business</span>      
      </h2> -->
    </div>
    <div id="right-side" class="side">
      <img id="right-image" src="/logos/black-no-bg.svg" alt="">
      <!-- <h2 class="title font-heading text-4xl xs:text-6xl sm:text-7xl">
        Empower your <br>
        <span class="fancy text-5xl xs:text-6xl sm:text-7xl">software</span>     
      </h2> -->
    </div>
  </div>
</template>

<script>
export default {
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

.side .title {
  /* margin: 0px 10vw; */
  width: 100vw;
  text-align: center;
}

.side .fancy {
  font-family: 'Courgette', cursive;
  line-height: 0.8em;
  margin-top: 5px;
}

#left-side {
  background-color: #222831;
  width: 65%;
  z-index: 10;
}

#left-side .title {  
  color: white;  
}

#left-side .fancy {
  color: #ffa500;
}

#right-side {
  background-color: #ffa500;
}

#right-side .title {
  color: black;
}

#right-side .fancy {
  color: white;
}
img{
  height: 40vh;
  /* position: absolute; */
  top: 0;
  width: 100vw;
  max-height: none;
  max-width: none;
  padding: 5px 10px 0 10px;
}
</style>