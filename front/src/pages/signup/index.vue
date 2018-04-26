<template>
  <div class="container">

    <div class="main-background-desk" v-if="!browserInfo.mobile">
      <router-link to="/">
        <img class="back-button" src="../../assets/back_button.png"/>
      </router-link>

      <img class="sign-in-title" src="../../assets/register_title.png"/>

      <div class="username-section">
        <input class="username-input" type="text" v-model="username" placeholder="请输入账号"/>
      </div>

      <div class="password-section">
        <input class="password-input" type="password" v-model="password" placeholder="请输入密码"/>
      </div>

      <div class="password-section">
        <input class="password-input" type="password" placeholder="请重复密码"/>
      </div>

      <img class="sign-in-button" v-on:click="signup" src="../../assets/finish_register.png"/>

      <router-link to="/signin/">
        <img class="sign-up-button" src="../../assets/already_have_account.png"/>
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
      signup: function () {
        var that = this;
        var account = Account.NewAccount();
        var privateKey = account.getPrivateKeyString();

        console.log(account);

        this.$http.post('http://127.0.0.1:8000/api/user/signup', {
          username: that.username,
          password: that.password,
          private_key: privateKey
        }).then(function (resp) {
          console.log(resp)
          this.$store.commit('setPrivateKey', privateKey)
          this.$router.push('/')
        })
      },
      getBrowserInfo: function () {
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
      },
      getDeviceRatio: function () {

      }
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
