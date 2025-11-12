import { useEffect, useState } from "react";
import "./TransactionList.css";
import axios from 'axios';
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import SlideInPanel from "../SlideInPanel/SlideInPanel";
import TransactionFilter from "../TransactionFilter/TransactionFilter";
import agent from "../../api/agent";
import { FaChevronDown } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";

export default function TransactionList() {

    const [open, setOpen] = useState(false);

    const [transactions, setTransactions] = useState<any>([])

    const getTransactions = async () => {
        agent.Transactions.getTransactions().then(
            (res) => {
                console.log(res)
                setTransactions(res?.data)
            }
        )
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getTransactions()
    }, [])

    const openFilterPanel = () => {
        setOpen(true)
    }

    return (
        <section className="tx-card">
            <div className="tx-header">
                <div>
                    <h4>24 Transactions</h4>
                    <p>Your transactions for the last 7 days</p>
                </div>
                <div className="tx-actions">
                    <button className="ghost" onClick={openFilterPanel}>Filter <FaChevronDown /></button>
                    <button className="ghost">Export list <GoDownload /></button>
                </div>
            </div>

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

            <SlideInPanel isOpen={open} onClose={() => setOpen(false)}>
                <TransactionFilter onClose={() => setOpen(false)}/>
            </SlideInPanel>

        </section>
    );
}
