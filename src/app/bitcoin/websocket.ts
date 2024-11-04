import { WsInstance } from '../../types';
import {
  wsInit,
  wsWantData,
  wsStopData,
  wsTrackAddress,
  wsStopTrackingAddress,
  wsTrackAddresses,
  wsStopTrackingAddresses,
  wsTrackTransaction,
  wsStopTrackingTransaction,
  wsTrackRbfSummary,
  wsStopTrackingRbfSummary,
  wsTrackRbf,
  wsStopTrackingRbf,
  wsTrackMempoolBlock,
  wsStopTrackingMempoolBlock,
} from '../../services';

const getEndpoint = (
  hostname: string,
  network: string,
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

  return `${ssl ? 'wss' : 'ws'}://${hostname}${path}/api/v1/ws`;
};

export const useWebsocket = (
  hostname: string,
  network: string,
  ssl: boolean,
): WsInstance => {
  const endpoint = getEndpoint(hostname, network, ssl);

  return {
    wsInit: () => wsInit(endpoint),
    wsWantData: (ws: WebSocket, options: string[]) => wsWantData(ws, options),
    wsStopData: (ws: WebSocket) => wsStopData(ws),
    wsTrackAddress: (ws: WebSocket, address: string) =>
      wsTrackAddress(ws, address),
    wsStopTrackingAddress: (ws: WebSocket) => wsStopTrackingAddress(ws),
    wsTrackAddresses: (ws: WebSocket, addresses: string[]) =>
      wsTrackAddresses(ws, addresses),
    wsStopTrackingAddresses: (ws: WebSocket) => wsStopTrackingAddresses(ws),
    wsTrackTransaction: (ws: WebSocket, txid: string) =>
      wsTrackTransaction(ws, txid),
    wsStopTrackingTransaction: (ws: WebSocket) => wsStopTrackingTransaction(ws),
    wsTrackRbfSummary: (ws: WebSocket) => wsTrackRbfSummary(ws),
    wsStopTrackingRbfSummary: (ws: WebSocket) => wsStopTrackingRbfSummary(ws),
    wsTrackRbf: (ws: WebSocket, fullRbf: boolean) => wsTrackRbf(ws, fullRbf),
    wsStopTrackingRbf: (ws: WebSocket) => wsStopTrackingRbf(ws),
    wsTrackMempoolBlock: (ws: WebSocket, index: number) =>
      wsTrackMempoolBlock(ws, index),
    wsStopTrackingMempoolBlock: (ws: WebSocket) =>
      wsStopTrackingMempoolBlock(ws),
  };
};
