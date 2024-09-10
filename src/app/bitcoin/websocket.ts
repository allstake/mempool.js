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

export const useWebsocket = (
  hostname: string,
  network: string,
  protocol: string,
): WsInstance => {
  if (!protocol) {
    hostname?.includes('localhost') ? (protocol = 'ws') : (protocol = 'wss');
  } else if (protocol === 'http' || protocol === 'ws') {
    protocol = 'ws';
  } else {
    protocol = 'wss';
  }
  if (network && ['testnet', 'signet'].includes(network)) {
    network = `/${network}`;
  } else {
    network = '';
  }

  const wsEndpoint = `${protocol}://${hostname}${network}/api/v1/ws`;

  return {
    wsInit: () => wsInit(wsEndpoint),
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
