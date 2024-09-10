export type Mempool = {
  count: number;
  vsize: number;
  total_fee: number;
  fee_histogram: number[];
};

export type MempoolInstance = {
  getMempool: () => Promise<Mempool[]>;
  getMempoolTxids: () => Promise<string[]>;
  getMempoolRecent: () => Promise<MempoolRecent[]>;
};

export type MempoolRecent = {
  txid: string;
  fee: number;
  vsize: number;
  value: number;
};
