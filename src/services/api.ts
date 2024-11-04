import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Network } from '../types';

const getEndpoint = (
  hostname: string,
  network: Network,
  ssl: boolean,
): string => {
  let path: string;

  if (['signet', 'testnet', 'testnet4', 'liquidtestnet'].includes(network)) {
    path = `/${network}`;
  } else if (network === 'mainnet') {
    path = '';
  } else if (network === 'liquidmainnet') {
    path = '/liquid';
  } else {
    throw Error('invalid network');
  }

  return `${ssl ? 'https' : 'http'}://${hostname}${path}/api`;
};

export const getBitcoinAPI = (
  hostname: string,
  network: Network,
  ssl: boolean,
  config?: AxiosRequestConfig,
): AxiosInstance => {
  const endpoint = getEndpoint(hostname, network, ssl);

  return axios.create({
    baseURL: endpoint,
    ...config,
  });
};
