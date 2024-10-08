import { AxiosInstance } from 'axios';
import { Address, AddressTxsUtxo, AddressInstance, Tx } from '../../types';

export const useAddresses = (api: AxiosInstance): AddressInstance => {
  const getAddress = async (params: { address: string }) => {
    const { data } = await api.get<Address>(`/address/${params.address}`);
    return data;
  };

  const getAddressTxs = async (params: {
    address: string;
    after_txid?: string;
  }) => {
    if (params.after_txid) {
      const { data } = await api.get<Tx[]>(
        `/address/${params.address}/txs?after_txid=${params.after_txid}`,
      );
      return data;
    }
    const { data } = await api.get<Tx[]>(`/address/${params.address}/txs`);
    return data;
  };

  const getAddressTxsChain = async (params: { address: string }) => {
    const { data } = await api.get<Tx[]>(
      `/address/${params.address}/txs/chain`,
    );
    return data;
  };

  const getAddressTxsMempool = async (params: { address: string }) => {
    const { data } = await api.get<Tx[]>(
      `/address/${params.address}/txs/mempool`,
    );
    return data;
  };

  const getAddressTxsUtxo = async (params: { address: string }) => {
    const { data } = await api.get<AddressTxsUtxo[]>(
      `/address/${params.address}/utxo`,
    );
    return data;
  };

  return {
    getAddress,
    getAddressTxs,
    getAddressTxsChain,
    getAddressTxsMempool,
    getAddressTxsUtxo,
  };
};
