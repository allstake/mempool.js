export type Adjustment = {
  progressPercent: number;
  difficultyChange: number;
  estimatedRetargetDate: number;
  remainingBlocks: number;
  remainingTime: number;
  previousRetarget: number;
  nextRetargetHeight: number;
  timeAvg: number;
  timeOffset: number;
  expectedBlocks: number;
};

export type Hashrate = {
  hashrates: HashRateData[];
  difficulty: DifficultyData[];
  currentHashrate: number;
  currentDifficulty: number;
};

export type HashRateData = {
  timestamp: number;
  avgHashrate: number;
};

export type DifficultyData = {
  time: number;
  height: number;
  difficulty: number;
  adjustment: number;
};

export type DifficultyInstance = {
  getDifficultyAdjustment: () => Promise<Adjustment>;
  getHashrate: (params: { interval: string }) => Promise<Hashrate>;
};
