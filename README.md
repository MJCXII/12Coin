# TWXIIVECoin

🚀 Developing a new Cryptocurrency with Blockchain

## What is TWXIIVECoin?

TWXIIVECoin is open and available to everyone.
<br/>
All you need is a wallet to take part in this journey.

TWXIIVECoin (XII) is a peer-to-peer cryptocurrency set up by Max Clarke and Jason Rowsell.

<details>
  <summary>:zap: <strong>User Interface</strong></summary>
  <br/>
  React application that allows you to interact with a blockchain. You can see the blocks on chain, see transaction within them and even create new transactions and mine blocks.

## 👀 Live demo
**[Check it out here.](#)** You can create transactions, mine blocks and explore your own blockchain.

## 🏁 Getting Started <a name = "getting_started"></a>
Get a copy of the SavjeeCoin front-end running on your local machine (for playing around, testing or development).

```
git clone https://github.com/MJCXII/TWXIIVECoin.git
```

Install the dependencies:
```
cd TWXIIVECoin
npm install
```

Run the application:
```
npm start
```

At this point the application should be running on your machine on [http://localhost:3000](http://localhost:3000)

</details>

<details>
  <summary>:zap: <strong>Backend</strong></summary>
  
## Features

* Proof-of-work algorithm
* Verify blockchain (to prevent tampering)
* Generate wallet (private/public key)
* Sign transactions

## 🏁 Getting Started <a name = "getting_started"></a>

### Install library
```
npm install --save TWXIIVECoin
```

### Generate a keypair
To make transactions on this blockchain you need a keypair. The public key becomes your wallet address and the private key is used to sign transactions.

```js
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.genKeyPair();
```

The `myKey` object now contains your public & private key:

```js
console.log('Public key:', myKey.getPublic('hex'));
console.log('Private key:', myKey.getPrivate('hex'));
```

### Create a blockchain instance
Now you can create a new instance of a Blockchain:

```js
const {Blockchain, Transaction} = require('TWXIIVECoin');

const myChain = new Blockchain();
```

### Adding transactions
```js
// Transfer 100 coins from my wallet to "toAddress"
const tx = new Transaction(myKey.getPublic('hex'), 'toAddress', 100);
tx.signTransaction(myKey);

myChain.addTransaction(tx);
```

To finalize this transaction, we have to mine a new block. We give this method our wallet address because we will receive a mining reward:

```js
myChain.minePendingTransactions(myKey.getPublic('hex'));
```
</details>

*Notes: Working on React site on 'frontend' branch, navbar progress*
