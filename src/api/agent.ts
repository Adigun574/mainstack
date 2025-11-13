import axios from "axios";
import type { IWallet } from "../models/wallet.model";
import type { ITransaction } from "../models/transaction.model";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(response => response),
};

const Transactions = {
    getTransactions: () => requests.get<ITransaction[]>(`${BASE_URL}/transactions`),
};

const Wallet = {
    getWalletDetails: () => requests.get<IWallet>(`${BASE_URL}/wallet`),
};

const agent = { Transactions, Wallet };

export default agent;