import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Network, Protocol } from '../types';

export const getBitcoinAPI = (
  hostname: string,
  network: Network,
  protocol: Protocol,
  config?: AxiosRequestConfig,
): AxiosInstance => {
  let path;

  if (['signet', 'testnet', 'liquidtestnet'].includes(network)) {
    path = `/${network}`;
  } else if (network === 'mainnet') {
    path = '';
  } else if (network === 'liquidmainnet') {
    path = '/liquid';
  } else {
    throw Error('invalid network');
  }

  return axios.create({
    baseURL: `${protocol}://${hostname}${path}/api/`,
    ...config,
  });
};
