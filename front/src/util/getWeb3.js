import Web3 from 'web3'

/*
* 1. Check for injected web3 (mist/metamask)
* 2. If metamask/mist create a new web3 instance and pass on result
* 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
* 4. Get user account from metamask
* 5. Get user balance
*/

let getWeb3 = new Promise(function (resolve, reject) {
  // Check for injected web3 (mist/metamask)
  var web3js = window.web3;

  if (typeof web3js !== 'undefined') {
    var web3 = new Web3(web3js.currentProvider);

    // var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/vbOvlwwjM1k0Fmu9XXWd"));

    // console.log("first");
    console.log(web3);
    console.log(web3.eth);
    console.log(web3.eth.accounts)
    // console.log(web3.isConnected());
    // console.log("***************");

    resolve({
      injectedWeb3: web3.isConnected(),
      web3() {
        return web3
      }
    })
  } else {
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')) GANACHE FALLBACK
    // reject(new Error('Unable to connect to Metamask'))
    // var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/vbOvlwwjM1k0Fmu9XXWd"));
    //
    // // console.log("second");
    // // console.log(web3);
    // resolve({
    //   injectedWeb3: web3.isConnected(),
    //   web3() {
    //     return web3
    //   }
    // })

  }

  console.log("first");
  console.log(result);
  console.log(resolve);

})
  .then(result => {
    return new Promise(function (resolve, reject) {
      // Retrieve network ID
      console.log("second");
      console.log(result);
      console.log(resolve);

      result.web3().version.getNetwork((err, networkId) => {
        if (err) {
          // If we can't find a networkId keep result the same and reject the promise
          reject(new Error('Unable to retrieve network ID'))
        } else {
          // Assign the networkId property to our result and resolve promise
          result = Object.assign({}, result, {networkId})
          resolve(result)
        }
      })
    })
  })
  .then(result => {
    return new Promise(function (resolve, reject) {
      // Retrieve coinbase
      console.log("third 333");
      console.log(result);
      console.log(resolve);

      var web3 = result.web3();


      result.web3().eth.getCoinbase((err, coinbase) => {
        if (err) {
          console.log(web3.eth.register('0xf17f52151ebef6c7334fad080c5704d77216b732'));
          console.log(web3.eth);


          // reject(new Error('Unable to retrieve coinbase'));

        } else {
          result = Object.assign({}, result, {coinbase})
          resolve(result)
        }
      })
    })
  })
  .then(result => {
    return new Promise(function (resolve, reject) {
      // Retrieve balance for coinbase

      console.log("fourth");
      console.log(result);
      console.log(resolve);

      result.web3().eth.getBalance(result.coinbase, (err, balance) => {
        if (err) {
          reject(new Error('Unable to retrieve balance for address: ' + result.coinbase))
        } else {
          result = Object.assign({}, result, {balance})
          resolve(result)
        }
      })
    })
  }).catch(result => {
    console.log("error!!! *********")
    console.log(result);
  });

export default getWeb3
