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
import { initMempoolSdk } from '@allstake/mempool.js';

const mempool = initMempoolSdk({
  hostname: 'mempool.space',
  network: 'testnet',
  protocol: 'https',
  config: {
    headers: {
      authorization: '<Authorization Token>',
    },
  },
});
```

## License
[MIT](https://choosealicense.com/licenses/mit)
