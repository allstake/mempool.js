export type WsInstance = {
  wsInit: () => WebSocket;
  wsWantData: (ws: WebSocket, options: string[]) => void;
  wsStopData: (ws: WebSocket) => void;
  wsTrackAddress: (ws: WebSocket, address: string) => void;
  wsStopTrackingAddress: (ws: WebSocket) => void;
  wsTrackAddresses: (ws: WebSocket, addresses: string[]) => void;
  wsStopTrackingAddresses: (ws: WebSocket) => void;
  wsTrackTransaction: (ws: WebSocket, txid: string) => void;
  wsStopTrackingTransaction: (ws: WebSocket) => void;
  wsTrackRbfSummary: (ws: WebSocket) => void;
  wsStopTrackingRbfSummary: (ws: WebSocket) => void;
  wsTrackRbf: (ws: WebSocket, fullRbf: boolean) => void;
  wsStopTrackingRbf: (ws: WebSocket) => void;
  wsTrackMempoolBlock: (ws: WebSocket, index: number) => void;
  wsStopTrackingMempoolBlock: (ws: WebSocket) => void;
};
