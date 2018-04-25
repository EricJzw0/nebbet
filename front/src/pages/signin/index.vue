<template>
  <div class="container">

    <div class="main-background-desk" v-if="!browserInfo.mobile">
      <router-link to="/">
        <img class="back-button" src="../../assets/back_button.png"/>
      </router-link>

      <img class="sign-in-title" src="../../assets/sign_in_title.png"/>

      <div class="username-section">
        <input class="username-input" v-model="username" type="text" placeholder="请输入账号"/>
      </div>

      <div class="password-section">
        <input class="password-input" v-model="password" type="password" placeholder="请输入密码"/>
      </div>

      <img class="sign-in-button" v-on:click="signin" src="../../assets/sign_in_button.png"/>

      <router-link to="/signup/">
        <img class="sign-up-button" src="../../assets/register_hint_icon.png"/>
      </router-link>

    </div>
  </div>
</template>

<script>
var Account = require("nebulas").Account;
  export default {
    name: "index",
    data: function () {
      return {
        browserInfo: {mobile: false},
        username: "",
        password: ""
      }
    },
    methods: {
      $ready(fn) {
        if (process.env.NODE_ENV === 'production') {
          return this.$nextTick(fn);
        }
        setTimeout(() => {
          this.$nextTick(fn);
        });
      },
      signin: function() {
        this.$http.post('http://0.0.0.0:8000/api/user/login', {
          username: this.username,
          password: this.password
        }).then(function(response){
          this.$store.commit('setPrivateKey', response.data.private_key)
          this.$router.go(-1)
        });
      },
      getBrowserInfo() {
        var u = navigator.userAgent, app = navigator.appVersion;
        this.browserInfo = {//移动终端浏览器版本信息
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('iPad') > -1, //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
        console.log(this.browserInfo);
        console.log("!!!!!!!!!!!!!!!!!!!!!!");
      },
    },
    mounted() {
      this.$nextTick(function () {
        this.getBrowserInfo();
        this.getDeviceRatio();
      });
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "./index.scss";
</style>
