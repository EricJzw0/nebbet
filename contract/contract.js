"use strict";

var BetContent = function (text) {
	if (text) {
        var o = JSON.parse(text);
		this.stake = new BigNumber(o.stake);
		this.result = o.result;
		this.gain = new BigNumber(o.gain);
	} else {
		this.stake = new BigNumber(0);
		this.result = [-1, -1, -1];
		this.gain = new BigNumber(0);
	}
};

BetContent.prototype = {
	toString: function () {
		return JSON.stringify(this);
	}
};

var BettingContract = function () {
    LocalContractStorage.defineMapProperty(this, "betMap", {
		parse: function (text) {
			return new BetContent(text);
		},
		stringify: function (o) {
			return o.toString();
		}
	});
};

BettingContract.prototype = {
	init: function () {
	},

	play: function () {
        var tx = Blockchain.transaction.hash;
		var from = Blockchain.transaction.from;
		var value = Blockchain.transaction.value;
        var stake = new BigNumber(value);
        var result = this._spin(tx);
        var amount = this._calculateGains(stake, result);
        var bet = new BetContent();
        bet.stake = stake;
		bet.result = result;
		bet.gain = amount;
		this.betMap.put(tx, bet);
        if (amount === 0) {
            return;
        }
		var resp = Blockchain.transfer(from, amount);
		if (!resp) {
			throw new Error("transfer failed.");
		}
		Event.Trigger("transfer", {
			Transfer: {
				from: Blockchain.transaction.to,
				to: from,
				value: amount.toString()
			}
		});
	},

	balanceOf: function () {
		var from = Blockchain.transaction.from;
		return this.bankVault.get(from);
	},

	verifyAddress: function (address) {
		// 1-valid, 0-invalid
		var result = Blockchain.verifyAddress(address);
		return {
			valid: result == 0 ? false : true
		};
    },

    query: function (tx) {
        var bet = this.betMap.get(tx);
        return bet;
    },
    
    _spin: function (seed) {
		// FIXME
		var r1 = new BigNumber(seed.slice(0, 20), 16).mod(16).toNumber()
		var r2 = new BigNumber(seed.slice(20, 40), 16).mod(16).toNumber()
		var r3 = new BigNumber(seed.slice(40, 60), 16).mod(16).toNumber()
        return [r1, r2, r3];
    },

    _calculateGains: function (stake, result) {
        // TODO
        return stake.minus(10);
    }
};

module.exports = BettingContract;