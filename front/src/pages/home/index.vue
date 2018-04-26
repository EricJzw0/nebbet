<template>

  <div class="container">
    <div class="main-background-desk" v-if="!browserInfo.mobile">
      <img class="back-button" src="../../assets/back_button.png"/>
      <img class="sign-out-button" v-on:click="signout" src="../../assets/sign_out_button.png"/>
      <img class="address-button" v-on:click="fetchAddress" src="../../assets/address_button.png"/>
      <img class="banner" src="../../assets/banner_animation.gif"/>

      <div class="randomize-section">
        <div class="machine machine-first">
          <img class="bottom-layer" src="../../assets/machine_background.png"/>
          <div id="machine-first-real-desk" class="randomizeMachine">
            <div><img src="../../assets/element_1.png"/></div>
            <div><img src="../../assets/element_2.png"/></div>
            <div><img src="../../assets/element_3.png"/></div>
            <div><img src="../../assets/element_4.png"/></div>
            <div><img src="../../assets/element_5.png"/></div>
            <div><img src="../../assets/element_6.png"/></div>
            <div><img src="../../assets/element_7.png"/></div>
            <div><img src="../../assets/element_8.png"/></div>
            <div><img src="../../assets/element_9.png"/></div>
            <div><img src="../../assets/element_10.png"/></div>
            <div><img src="../../assets/element_11.png"/></div>
            <div><img src="../../assets/element_12.png"/></div>
            <div><img src="../../assets/element_13.png"/></div>
            <div><img src="../../assets/element_14.png"/></div>
            <div><img src="../../assets/element_15.png"/></div>
            <div><img src="../../assets/element_16.png"/></div>
            <div><img src="../../assets/element_17.png"/></div>
            <div><img src="../../assets/element_18.png"/></div>
            <div><img src="../../assets/element_19.png"/></div>
          </div>
          <img class="top-layer" src="../../assets/machine_toplayer_left.png"/>
        </div>
        <div class="machine machine-second">
          <img class="bottom-layer" src="../../assets/machine_background.png"/>
          <div id="machine-second-real-desk" class="randomizeMachine">
            <div><img src="../../assets/element_1.png"/></div>
            <div><img src="../../assets/element_2.png"/></div>
            <div><img src="../../assets/element_3.png"/></div>
            <div><img src="../../assets/element_4.png"/></div>
            <div><img src="../../assets/element_5.png"/></div>
            <div><img src="../../assets/element_6.png"/></div>
            <div><img src="../../assets/element_7.png"/></div>
            <div><img src="../../assets/element_8.png"/></div>
            <div><img src="../../assets/element_9.png"/></div>
            <div><img src="../../assets/element_10.png"/></div>
            <div><img src="../../assets/element_11.png"/></div>
            <div><img src="../../assets/element_12.png"/></div>
            <div><img src="../../assets/element_13.png"/></div>
            <div><img src="../../assets/element_14.png"/></div>
            <div><img src="../../assets/element_15.png"/></div>
            <div><img src="../../assets/element_16.png"/></div>
            <div><img src="../../assets/element_17.png"/></div>
            <div><img src="../../assets/element_18.png"/></div>
            <div><img src="../../assets/element_19.png"/></div>
          </div>
          <img class="top-layer" src="../../assets/machine_toplayer_middle.png"/>
        </div>
        <div class="machine machine-third">
          <img class="bottom-layer" src="../../assets/machine_background.png"/>
          <div id="machine-third-real-desk" class="randomizeMachine">
            <div><img src="../../assets/element_1.png"/></div>
            <div><img src="../../assets/element_2.png"/></div>
            <div><img src="../../assets/element_3.png"/></div>
            <div><img src="../../assets/element_4.png"/></div>
            <div><img src="../../assets/element_5.png"/></div>
            <div><img src="../../assets/element_6.png"/></div>
            <div><img src="../../assets/element_7.png"/></div>
            <div><img src="../../assets/element_8.png"/></div>
            <div><img src="../../assets/element_9.png"/></div>
            <div><img src="../../assets/element_10.png"/></div>
            <div><img src="../../assets/element_11.png"/></div>
            <div><img src="../../assets/element_12.png"/></div>
            <div><img src="../../assets/element_13.png"/></div>
            <div><img src="../../assets/element_14.png"/></div>
            <div><img src="../../assets/element_15.png"/></div>
            <div><img src="../../assets/element_16.png"/></div>
            <div><img src="../../assets/element_17.png"/></div>
            <div><img src="../../assets/element_18.png"/></div>
            <div><img src="../../assets/element_19.png"/></div>
          </div>
          <img class="top-layer" src="../../assets/machine_toplayer_right.png"/>
        </div>
      </div>

      <div class="balance-section">
        <img class="balance-bg" src="../../assets/balance_section.png"/>
      </div>
      <div class="cost-section">
        <img class="cost-bg" src="../../assets/cost_section.png"/>
      </div>
      <div class="button-section">
        <img class="recharge-button" v-on:click="recharge" src="../../assets/recharge_button.png"/>
        <img class="withdraw-button" v-on:click="withdraw" src="../../assets/withdraw_button.png"/>
      </div>
      <img class="start-button" src="../../assets/start_button.png" v-on:click="play" 
           v-bind:style="{bottom:startButtonBottom+'rem'}"/>
    </div>


    <div class="main-background" v-if="browserInfo.mobile">
      <div class="top-button-section">
        <img class="back-button" src="../../assets/back_button.png"/>
        <img class="sign-out-button" v-on:click="signout" src="../../assets/sign_out_button.png"/>
        <img class="address-button" v-on:click="fetchAddress" src="../../assets/address_button.png"/>
      </div>
      <img class="banner" src="../../assets/banner_animation.gif"/>
      <div class="randomize-section">

        <div class="machine machine-first">
          <img class="bottom-layer" src="../../assets/machine_background.png"/>
          <div id="machine-first-real" class="randomizeMachine">
            <div><img src="../../assets/element_1.png"/></div>
            <div><img src="../../assets/element_2.png"/></div>
            <div><img src="../../assets/element_3.png"/></div>
            <div><img src="../../assets/element_4.png"/></div>
            <div><img src="../../assets/element_5.png"/></div>
            <div><img src="../../assets/element_6.png"/></div>
            <div><img src="../../assets/element_7.png"/></div>
            <div><img src="../../assets/element_8.png"/></div>
            <div><img src="../../assets/element_9.png"/></div>
            <div><img src="../../assets/element_10.png"/></div>
            <div><img src="../../assets/element_11.png"/></div>
            <div><img src="../../assets/element_12.png"/></div>
            <div><img src="../../assets/element_13.png"/></div>
            <div><img src="../../assets/element_14.png"/></div>
            <div><img src="../../assets/element_15.png"/></div>
            <div><img src="../../assets/element_16.png"/></div>
            <div><img src="../../assets/element_17.png"/></div>
            <div><img src="../../assets/element_18.png"/></div>
            <div><img src="../../assets/element_19.png"/></div>
          </div>
          <img class="top-layer" src="../../assets/machine_toplayer_left.png"/>
        </div>
        <div class="machine machine-second">
          <img class="bottom-layer" src="../../assets/machine_background.png"/>
          <div id="machine-second-real" class="randomizeMachine">
            <div><img src="../../assets/element_1.png"/></div>
            <div><img src="../../assets/element_2.png"/></div>
            <div><img src="../../assets/element_3.png"/></div>
            <div><img src="../../assets/element_4.png"/></div>
            <div><img src="../../assets/element_5.png"/></div>
            <div><img src="../../assets/element_6.png"/></div>
            <div><img src="../../assets/element_7.png"/></div>
            <div><img src="../../assets/element_8.png"/></div>
            <div><img src="../../assets/element_9.png"/></div>
            <div><img src="../../assets/element_10.png"/></div>
            <div><img src="../../assets/element_11.png"/></div>
            <div><img src="../../assets/element_12.png"/></div>
            <div><img src="../../assets/element_13.png"/></div>
            <div><img src="../../assets/element_14.png"/></div>
            <div><img src="../../assets/element_15.png"/></div>
            <div><img src="../../assets/element_16.png"/></div>
            <div><img src="../../assets/element_17.png"/></div>
            <div><img src="../../assets/element_18.png"/></div>
            <div><img src="../../assets/element_19.png"/></div>
          </div>
          <img class="top-layer" src="../../assets/machine_toplayer_middle.png"/>
        </div>
        <div class="machine machine-third">
          <img class="bottom-layer" src="../../assets/machine_background.png"/>
          <div id="machine-third-real" class="randomizeMachine">
            <div><img src="../../assets/element_1.png"/></div>
            <div><img src="../../assets/element_2.png"/></div>
            <div><img src="../../assets/element_3.png"/></div>
            <div><img src="../../assets/element_4.png"/></div>
            <div><img src="../../assets/element_5.png"/></div>
            <div><img src="../../assets/element_6.png"/></div>
            <div><img src="../../assets/element_7.png"/></div>
            <div><img src="../../assets/element_8.png"/></div>
            <div><img src="../../assets/element_9.png"/></div>
            <div><img src="../../assets/element_10.png"/></div>
            <div><img src="../../assets/element_11.png"/></div>
            <div><img src="../../assets/element_12.png"/></div>
            <div><img src="../../assets/element_13.png"/></div>
            <div><img src="../../assets/element_14.png"/></div>
            <div><img src="../../assets/element_15.png"/></div>
            <div><img src="../../assets/element_16.png"/></div>
            <div><img src="../../assets/element_17.png"/></div>
            <div><img src="../../assets/element_18.png"/></div>
            <div><img src="../../assets/element_19.png"/></div>
          </div>
          <img class="top-layer" src="../../assets/machine_toplayer_right.png"/>
        </div>
      </div>

      <div class="bill-first-section">
        <div class="balance-section">
          <img class="balance-bg" src="../../assets/balance_section.png"/>
        </div>
        <img class="recharge-button" v-on:click="recharge" src="../../assets/recharge_button.png"/>
      </div>

      <div class="bill-second-section">
        <div class="cost-section">
          <img class="cost-bg" src="../../assets/cost_section.png"/>
        </div>
        <img class="withdraw-button" v-on:click="withdraw" src="../../assets/withdraw_button.png"/>
      </div>

      <img class="start-button" v-on:click="play" src="../../assets/start_button.png"
           v-bind:style="{bottom:startButtonBottom+'rem'}"/>

    </div>
  </div>
</template>
<script>
  import '../../libs/jquery.slotmachine'

  var HttpRequest = require("nebulas").HttpRequest;
  var Neb = require("nebulas").Neb;
  var Account = require("nebulas").Account;
  var Transaction = require("nebulas").Transaction;
  var neb = new Neb();
  neb.setRequest(new HttpRequest("https://testnet.nebulas.io"));

  export default {
    name: 'home',
    data: function () {
      return {
        startButtonBottom: 0,
        browserInfo: {mobile: false},
        privateKey: this.$store.state.privateKey, 
        account: null,
        machine1: null,
        machine2: null,
        machine3: null,
        contract_address: "n1ioRmsrUBuiCk74V8C5Sgz8ywdxyKAkNeh",
        numbers: [-1, -1, -1],
        disabled: false
      }
    },

    components: {},
    methods: {
      $ready(fn) {
        if (process.env.NODE_ENV === 'production') {
          return this.$nextTick(fn);
        }
        setTimeout(() => {
          this.$nextTick(fn);
        });
      },
      fetchBalance: function() {
        var that = this
        neb.api.getAccountState(that.account.getAddressString()).then(function(state) {
          that.balance = state.balance
        })
      },
      fetchAddress: function() {
        console.log(this.address)
        return this.address
      },
      getDeviceRatio(event) {
        const heightPerWidth = (document.documentElement.clientHeight / document.documentElement.clientWidth - 1.256) * 750.0 / 40 - 3.325;
        this.startButtonBottom = heightPerWidth / 2
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
      },
      isSufficient: function() {
        if (this.balance < 20000) {
          console.log("insufficent balance")
        }
        console.log(this.balance)
        return this.balance > 20000;
      },
      signout: function() {
        this.privateKey = null
      },
      isSignin: function() {
        if (this.privateKey !== null) {
          return true
        }
        return false
      },
      recharge: function() {
        console.log(this.address)
      },
      withdraw: function() {
        var value = '666'
        var that = this
        neb.api.getAccountState(that.account.getAddressString()).then(function (state) {
          var testnetchainID = 1001
          var tx = new Transaction({
            chainID: testnetchainID,
            from: that.account,
            // FIXME: user input
            to: that.contract_address,
            value: value,
            nonce: parseInt(state.nonce) + 1,
            gasPrice: 1000000,
            gasLimit: 2000000,
          })
          tx.signTransaction()
          neb.api.sendRawTransaction(tx.toProtoString()).then(function (resp) {
            console.log(resp)
          })
        }).catch(function (err) {
          console.log(err)
        })
      },
      transcationState: function(txhash, onComplete, onError) {
        var that = this
        neb.api.getTransactionReceipt({hash: txhash}).then(function (resp) {
          onComplete(resp)
        }, function (resp) {
          onError(resp)
        })
      },
      play: function() {
        if (this.disabled) {
          return
        }
        if (!this.isSignin()) {
          this.$router.push('/signin')
        } else {
          this.fetchBalance()
          if (!this.isSufficient()) {
            this.recharge()
          } else {
            this.roll()
            this.pay()
          }
        }
      },
      roll: function() {
        var that = this
        this.disabled = true
        this.machine1.settings.randomize = function () {
          return that.numbers[0];
        };
        this.machine2.settings.randomize = function () {
          return that.numbers[1];
        };
        this.machine3.settings.randomize = function () {
          return that.numbers[2];
        };
        that.machine1.shuffle();
        this.s2 = setTimeout(function () {
          that.machine2.shuffle();
        }, 500);
        this.s3 = setTimeout(function () {
          that.machine3.shuffle();
        }, 1000);
      },
      stop: function() {
        clearTimeout(this.s2)
        clearTimeout(this.s3)
        this.machine1.stop()
        this.machine2.stop()
        this.machine3.stop()
        this.disabled = false
      },
      pay: function () {
        var value = "666"
        var that = this
        neb.api.getAccountState(that.account.getAddressString()).then(function (state) {
            var testnetchainID = 1001
            var tx = new Transaction({
              chainID: testnetchainID,
              from: that.account,
              to: that.contract_address,
              value: value,
              nonce: parseInt(state.nonce) + 1,
              gasPrice: 1000000,
              gasLimit: 2000000,
              contract: {
                function: "play",
                args: ""
              }
            })
            tx.signTransaction()
            neb.api.sendRawTransaction(tx.toProtoString()).then(function (resp) {
                var txhash = resp.txhash
                that.txhash = txhash
                console.log(txhash)
                that.query(txhash)
            })
        }).catch(function (err) {
            console.log(err)
        })
      },
      query: function (txhash) {
        var that = this
        that.transcationState(txhash, function(resp) {
          console.log(resp)
          neb.api.call({
            chainID: 1001,
            from: that.address,
            to: that.contract_address,
            value: 0,
            gasPrice: 1000000,
            gasLimit: 2000000,
            contract: {
              function: "query",
              args: JSON.stringify([txhash])
            }
          }).then(function(resp) {
            console.log(resp)
            if (resp.result === "null") {
              if (resp.execute_err === "") {
                setTimeout(function() {
                  that.query(txhash)
                }, 1000)
              } else {
                that.stop()
              }
            } else {
              var result = JSON.parse(resp.result)
              that.numbers = result.numbers
              that.gain = result.gain
              console.log(that.numbers)
              that.stop()
            }
          })
        }, function (resp) {
          that.stop()
        })
      }
    },
    beforeCreate() {
    },
    mounted() {
      this.$nextTick(function () {
        window.addEventListener('resize', this.getDeviceRatio);
        this.getBrowserInfo();
        this.getDeviceRatio();
      });

      var that = this;

      if (that.privateKey !== null) {
        that.account = new Account(that.privateKey)
        that.address = that.account.getAddressString()
        that.fetchBalance()
      }

      this.$ready(() => {
        if (that.browserInfo.mobile) {
          that.machine1 = $("#machine-first-real").slotMachine({
            active: 0,
            delay: 1000
          });
          that.machine2 = $("#machine-second-real").slotMachine({
            active: 1,
            delay: 1000
          });
          that.machine3 = $("#machine-third-real").slotMachine({
            active: 2,
            delay: 1000
          });
        }
        else {
          that.machine1 = $("#machine-first-real-desk").slotMachine({
            active: 0,
            delay: 1000,
          });
          that.machine2 = $("#machine-second-real-desk").slotMachine({
            active: 1,
            delay: 1000
          });
          that.machine3 = $("#machine-third-real-desk").slotMachine({
            active: 2,
            delay: 1000
          });
        }
        function onComplete(active) {
          if (that.browserInfo.mobile) {
            switch (this.element[0].id) {
              case 'machine-first-real':
                console.log("1:  " + this.active);
                break;
              case 'machine-second-real':
                console.log("2:  " + this.active);
                break;
              case 'machine-third-real':
                console.log("3:  " + this.active);
                break;
            }
          }
          else {
            switch (this.element[0].id) {
              case 'machine-first-real-desk':
                console.log("1:  " + this.active);
                break;
              case 'machine-second-real-desk':
                console.log("2:  " + this.active);
                break;
              case 'machine-third-real-desk':
                console.log("3:  " + this.active);
                break;
            }
          }
        }
      });
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.getDeviceRatio)
    }
  }
</script>
<style>
  @import "../../libs/jquery.slotmachine.css";
</style>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "./index.scss";
</style>
