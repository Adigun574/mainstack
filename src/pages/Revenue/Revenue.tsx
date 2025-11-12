import { useEffect, useState } from "react";
import "./Revenue.css";
import RevenueChart from "../../components/RevenueChart/RevenueChart";
import TransactionList from "../../components/TransactionList/TransactionList";
import { CiCircleInfo } from "react-icons/ci";
import agent from "../../api/agent";

export default function RevenuePage() {

    const [walletData, setWalletData] = useState<any>()

    const getWalletData = async () => {
        agent.Wallet.getWalletDetails().then(
            (res) => {
                console.log(res)
                setWalletData(res?.data)
            }
        )
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getWalletData()
    }, [])


    return (
        <div className="full-page">
            <div>
                <main className="revenue-grid">
                    <section className="left-col">
                        <div className="balance-row">
                            <div>
                                <p className="muted">Available Balance</p>
                                <h1 className="balance">USD {walletData?.balance}</h1>
                            </div>
                            <div>
                                <button className="withdraw">Withdraw</button>
                            </div>
                        </div>

                        <div className="chart-card">
                            <RevenueChart />
                        </div>

                    </section>

                    <aside className="right-col">
                        <div className="stat-row">
                            <div className="stat">
                                <p className="muted">Ledger Balance</p>
                                <h3>USD {walletData?.ledger_balance}</h3>
                            </div>
                            <div>
                                <CiCircleInfo />
                            </div>
                        </div>
                        <div className="stat-row">
                            <div className="stat">
                                <p className="muted">Total Payout</p>
                                <h3>USD {walletData?.total_payout}</h3>
                            </div>
                            <div>
                                <CiCircleInfo />
                            </div>
                        </div>
                        <div className="stat-row">
                            <div className="stat">
                                <p className="muted">Total Revenue</p>
                                <h3>USD {walletData?.total_revenue}</h3>
                            </div>
                            <div>
                                <CiCircleInfo />
                            </div>
                        </div>
                        <div className="stat-row">
                            <div className="stat">
                                <p className="muted">Pending Payout</p>
                                <h3>USD {walletData?.pending_payout}</h3>
                            </div>
                            <div>
                                <CiCircleInfo />
                            </div>
                        </div>
                    </aside>

                </main>

                <div style={{ minWidth: '100%' }}>
                    <TransactionList />
                </div>

            </div>

        </div>
    );
}
