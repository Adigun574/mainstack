import { useEffect, useState } from "react";
import "./TransactionList.css";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import SlideInPanel from "../SlideInPanel/SlideInPanel";
import TransactionFilter from "../TransactionFilter/TransactionFilter";
import agent from "../../api/agent";
import { FaChevronDown } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { IoReceiptOutline } from "react-icons/io5";
import type { ITransaction } from "../../models/transaction.model";

export default function TransactionList() {

    const [open, setOpen] = useState<boolean>(false);
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const getTransactions = async () => {
        agent.Transactions.getTransactions().then(
            (res) => {
                setTransactions(res?.data)
            }
        )
        .catch((_err) => {})
    }

    useEffect(() => {
        getTransactions()
    }, [])

    const openFilterPanel = () => setOpen(true)

    return (
        <section className="tx-card">
            <div className="tx-header">
                <div>
                    <h4>{transactions.length} Transactions</h4>
                    <p>Your transactions for the last 7 days</p>
                </div>
                <div className="tx-actions">
                    <button className="ghost" onClick={openFilterPanel}>Filter <FaChevronDown /></button>
                    <button className="ghost">Export list <GoDownload /></button>
                </div>
            </div>

            {
                transactions.length === 0 ?
                <div className="empty-transactions-outter-container">
                    <div>
                        <div className="receipt-icon-container">
                            <IoReceiptOutline size={20} />
                        </div>
                        <h3>No matching transaction found</h3>
                        <p>Change your filters to see more results or add a nw product</p>
                        <button className="secondary-btn clear-filter-btn">Clear Filter</button>
                    </div>
                </div> :
                <ul className="tx-list">
                    {transactions.map((tx: any) => (
                        <li key={tx?.id} className="tx-item">
                            <div className="tx-left">
                                {
                                    tx?.type === 'deposit' &&
                                    <div className="tx-mark-deposit">
                                        <BsArrowDownLeft />
                                    </div>
                                }
                                {
                                    tx?.type === 'withdrawal' &&
                                    <div className="tx-mark-withdrawal">
                                        <BsArrowUpRight />
                                    </div>
                                }
                                {
                                    tx?.type === 'deposit' &&
                                    <div>
                                        <div className="tx-title">{tx?.metadata?.product_name}</div>
                                        <div className="tx-sub">{tx?.metadata?.name}</div>
                                    </div>
                                }
                                {
                                    tx?.type === 'withdrawal' &&
                                    <div>
                                        <div className="tx-title">Cash Withdrawal</div>
                                        <div className="tx-sub">{tx?.status}</div>
                                    </div>
                                }
                            </div>
                            <div className="tx-right">
                                <div className="tx-amt">USD {tx?.amount}</div>
                                <div className="tx-date">{tx?.date}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            }

            <SlideInPanel isOpen={open} onClose={() => setOpen(false)}>
                <TransactionFilter onClose={() => setOpen(false)}/>
            </SlideInPanel>
        </section>
    );
}
