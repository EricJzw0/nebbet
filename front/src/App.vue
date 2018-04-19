<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      this.setHtml();
      window.addEventListener('resize', this.setHtml);
    },
    methods: {
      setHtml(event) {
        var designWidth = 375, rem2px = 20;
        document.documentElement.style.fontSize =
          ((window.innerWidth / designWidth) * rem2px) + 'px';
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setHtml)
    },

  }
</script>


<style lang="scss" rel="stylesheet/scss">
  @import "./util/util.scss";

  #app
  {
    background-color: #F9DD95;
  }
</style>
