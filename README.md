# Mempool JS API

NPM package module for Mempool APIs.

Documentation: [https://mempool.space/api](https://mempool.space/api)

## Installation

Install the npm module.

```shell
pnpm add @allstake/mempool.js
````

## Usage
```js
import connectMempool from '@allstake/mempool.js';

const mempool = connectMempool({
  protocol: 'https', // optional, defaults to http for localhost, otherwise https
  hostname: 'mempool.space',
  network: 'testnet', // 'signet' | 'testnet' | 'mainnet',
  config: { // optional axios request config to add to requests
    headers: {
      authorization: 'authorization token',
    },
  },
});
```

## License
[MIT](https://choosealicense.com/licenses/mit)
