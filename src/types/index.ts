import {
  WsInstance,
  TxInstance,
  AddressInstance,
  BlockInstance,
  DifficultyInstance,
  FeeInstance,
  MempoolInstance,
} from './bitcoin';
import { AxiosRequestConfig } from 'axios';

export type Network =
  | 'signet'
  | 'testnet'
  | 'testnet4'
  | 'mainnet'
  | 'liquidtestnet'
  | 'liquidmainnet';

export type MempoolSdkConfig = {
  hostname?: string;
  network?: Network;
  ssl?: boolean;
  config?: AxiosRequestConfig;
};

export type MempoolSdk = {
  bitcoin: {
    addresses: AddressInstance;
    blocks: BlockInstance;
    difficulty: DifficultyInstance;
    fees: FeeInstance;
    mempool: MempoolInstance;
    transactions: TxInstance;
    websocket: WsInstance;
  };
};

export * from './bitcoin';
