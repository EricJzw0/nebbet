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

//      console.log("!!!!!!!!!!!!!!!!")
//      var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/vbOvlwwjM1k0Fmu9XXWd"));
//      console.log(web3)
//      console.log(web3.isConnected())
//      console.log("!!!!!!!!!!!!!!!! end end ")

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
