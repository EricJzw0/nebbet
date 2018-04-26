"use strict";

var BetContent = function (text) {
	if (text) {
        var o = JSON.parse(text);
		this.stake = new BigNumber(o.stake);
		this.numbers = o.numbers;
		this.gain = new BigNumber(o.gain);
	} else {
		this.stake = new BigNumber(0);
		this.numbers = [-1, -1, -1];
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
        var numbers = this._spin(tx);
        var amount = this._calculateGains(stake, numbers);
        var bet = new BetContent();
        bet.stake = stake;
		bet.numbers = numbers;
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

    _calculateGains: function (stake, numbers) {
		var rate = 0;
		var r1 = numbers[0];
		var r2 = numbers[1];
		var r3 = numbers[2];
		if (r1 === -1) {
			rate = 0;
		} else if (r1 === r2 && r2 === r3) {
			// Lucky number
			if (r1 === 7) {
				rate = 10;
			} else {
				rate = 5;
			}
		} else if (r1 === r2 || r1 === r3 || r2 === r3) {
			rate = 1.5;
		}
        return stake.times(rate);
    }
};

module.exports = BettingContract;