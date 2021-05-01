const {Blockchain, Transaction} = require('./blockchain');

let TWXIIVECoin = new Blockchain();
TWXIIVECoin.createTransaction(new Transaction("address1", "address2", 100));
TWXIIVECoin.createTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting the miner..");
TWXIIVECoin.minePendingTransactions("adams-address");

console.log(
  "\nBalance of adam is",
  TWXIIVECoin.getBalanceOfAddress("adams-address")
);

console.log("\n Starting the miner..");
TWXIIVECoin.minePendingTransactions("adams-address");

console.log(
  "\nBalance of adam is",
  TWXIIVECoin.getBalanceOfAddress("adams-address")
);
