export type FeesMempoolBlocks = {
  blockSize: number;
  blockVSize: number;
  nTx: number;
  totalFees: number;
  medianFee: number;
  feeRange: number[];
};

export type FeesRecommended = {
  fastestFee: number;
  halfHourFee: number;
  hourFee: number;
  minimumFee: number;
};

export type FeeInstance = {
  getFeesRecommended: () => Promise<FeesRecommended>;
  getFeesMempoolBlocks: () => Promise<FeesMempoolBlocks[]>;
  getCPFP: (params: { txid: string }) => Promise<FeesMempoolBlocks[]>;
};
