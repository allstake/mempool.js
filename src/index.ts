import { MempoolSdkConfig, MempoolSdk } from './types';
import {
  useWebsocket,
  useTransactions,
  useMempool,
  useFees,
  useDifficulty,
  useBlocks,
  useAddresses,
} from './app';
import { getBitcoinAPI } from './services';

export const initMempoolSdk = ({
  hostname = 'mempool.space',
  network = 'mainnet',
  ssl = hostname !== 'localhost',
  config,
}: MempoolSdkConfig): MempoolSdk => {
  const apiBitcoin = getBitcoinAPI(hostname, network, ssl, config);

  return {
    bitcoin: {
      addresses: useAddresses(apiBitcoin),
      blocks: useBlocks(apiBitcoin),
      difficulty: useDifficulty(apiBitcoin),
      fees: useFees(apiBitcoin),
      mempool: useMempool(apiBitcoin),
      transactions: useTransactions(apiBitcoin),
      websocket: useWebsocket(hostname, network, ssl),
    },
  };
};

export * from './app';
export * from './services';
export * from './types';
