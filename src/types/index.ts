import {
  WsInstance,
  TxInstance,
  AddressInstance,
  BlockInstance,
  DifficultyInstance,
  FeeInstance,
  LightningInstance,
  MempoolInstance,
} from './bitcoin';
import { AxiosRequestConfig } from 'axios';

export type Protocol = 'http' | 'https';

export type Network =
  | 'signet'
  | 'testnet'
  | 'mainnet'
  | 'liquidtestnet'
  | 'liquidmainnet';

export type MempoolSdkConfig = {
  hostname?: string;
  network?: Network;
  protocol?: Protocol;
  config?: AxiosRequestConfig;
};

export type MempoolSdk = {
  bitcoin: {
    addresses: AddressInstance;
    blocks: BlockInstance;
    difficulty: DifficultyInstance;
    fees: FeeInstance;
    lightning: LightningInstance;
    mempool: MempoolInstance;
    transactions: TxInstance;
    websocket: WsInstance;
  };
};

export * from './bitcoin';
