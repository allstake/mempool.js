import { MempoolSdkConfig, MempoolSdk } from './types';
import {
  useWebsocket,
  useTransactions,
  useMempool,
  useLightning,
  useFees,
  useDifficulty,
  useBlocks,
  useAddresses,
} from './app';
import { getBitcoinAPI } from './services';

export const initMempoolSdk = ({
  hostname = 'mempool.space',
  network = 'mainnet',
  protocol = hostname === 'localhost' ? 'http' : 'https',
  config,
}: MempoolSdkConfig): MempoolSdk => {
  const apiBitcoin = getBitcoinAPI(hostname, network, protocol, config);

  return {
    bitcoin: {
      addresses: useAddresses(apiBitcoin),
      blocks: useBlocks(apiBitcoin),
      difficulty: useDifficulty(apiBitcoin),
      fees: useFees(apiBitcoin),
      lightning: useLightning(apiBitcoin),
      mempool: useMempool(apiBitcoin),
      transactions: useTransactions(apiBitcoin),
      websocket: useWebsocket(hostname, network, protocol),
    },
  };
};

export * from './app';
export * from './services';
export * from './types';
