<template>
  <div class="arrow animated" ref="scrollArrow"></div>
</template>

<style scoped>
/* CSS remains the same */
.arrow {
  position: absolute;
  bottom: 17%;
  left: 50%;
  z-index: 10;
}
.arrow:before,
.arrow:after {
  content: '';
  position: absolute;
  top: 0;
  right: -24px;
  width: 30px;
  height: 7px;
  border-radius: 10px;
  display: block;
  background: #fff;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.arrow:after {
  right: inherit;
  left: -24px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.animated {
  -webkit-animation: bounce 3s infinite;
  animation: bounce 1.5s both infinite 5s;
  animation-delay: 5s;
}

@-webkit-keyframes bounce {
  0% { -webkit-transform: translateY(-60px); opacity: 0; }
  60% { opacity: 1; }
  100% { -webkit-transform: translateY(0px); opacity: 0; }
}

@-moz-keyframes bounce {
  0% { -webkit-transform: translateY(-60px); opacity: 0; }
  60% { opacity: 1; }
  100% { -webkit-transform: translateY(0px); opacity: 0; }
}

@-o-keyframes bounce {
  0% { -webkit-transform: translateY(-60px); opacity: 0; }
  60% { opacity: 1; }
  100% { -webkit-transform: translateY(0px); opacity: 0; }
}

@keyframes bounce {
  0% { -webkit-transform: translateY(-60px); opacity: 0; }
  60% { opacity: 1; }
  100% { -webkit-transform: translateY(0px); opacity: 0; }
}
</style>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const arrow = this.$refs.scrollArrow;
      if (arrow) {
        arrow.style.display = window.scrollY > 0 ? 'none' : '';
      }
    }
  }
}
</script>
