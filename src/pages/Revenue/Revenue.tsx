import { useEffect, useState } from "react";
import "./Revenue.css";
import RevenueChart from "../../components/RevenueChart/RevenueChart";
import TransactionList from "../../components/TransactionList/TransactionList";
import agent from "../../api/agent";
import type { IWallet } from "../../models/wallet.model";
import StatCard from "../../components/StatCard/StatCard";

export default function RevenuePage() {

    const [walletData, setWalletData] = useState<IWallet>()
    const [stats, setStats] = useState<any[]>([])

    const getWalletData = async () => {
        agent.Wallet.getWalletDetails().then(
            (res) => {
                setWalletData(res?.data)
            }
        )
        .catch((_err) => {})
    }

    useEffect(() => {
        if(walletData?.balance){
            let stat = [...stats]
            stat = [
                { label: "Ledger Balance", value: walletData?.ledger_balance ?? 0 },
                { label: "Total Payout", value: walletData?.total_payout ?? 0 },
                { label: "Total Revenue", value: walletData?.total_revenue ?? 0 },
                { label: "Pending Payout", value: walletData?.pending_payout ?? 0 },
            ];
            setStats(stat)
        }
    }, [walletData])

    useEffect(() => {
        getWalletData()
    }, [])

    return (
        <div className="revenue-page">
            <div>
                <main className="revenue-grid">
                    <section className="left-col">
                        <div className="balance-row">
                            <div>
                                <p className="muted">Available Balance</p>
                                <h1 className="balance">USD {walletData?.balance || 0}</h1>
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
                        {stats.map((stat, index) => (
                            <StatCard key={index} label={stat.label} value={stat.value} />
                        ))}
                    </aside>
                </main>

                <div>
                    <TransactionList />
                </div>
            </div>
        </div>
    );
}
