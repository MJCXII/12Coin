const { Blockchain, Transaction } = require("./blockchain");

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate("INSERT_PRIVATE_KEY");
const myWalletAddress = myKey.getPublic("hex");

let TWXIIVECoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "PUBLIC_KEY_RECIPIENT", 10);
tx1.signTransaction(myKey);
TWXIIVECoin.addTransaction(tx1);

console.log("\n Starting the miner..");
TWXIIVECoin.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of Wallet is",
  TWXIIVECoin.getBalanceOfAddress(myWalletAddress)
  );

