import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(response => response),
};

const Transactions = {
  getTransactions: () => requests.get(`${BASE_URL}/transactions`),
};

const Wallet = {
    getWalletDetails: () => requests.get(`${BASE_URL}/wallet`),
  };

const agent = { Transactions, Wallet };

export default agent;