import { useState } from "react";
import "./TransactionFilter.css";

export default function FilterPanel({
  onClose
}: any) {
  const today = new Date();
  const formatDate = (date: any) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).replace(/ /g, " ");

  const [dateRange, setDateRange] = useState({
    start: formatDate(new Date(today.getFullYear(), today.getMonth(), 1)),
    end: formatDate(today),
  });

  const handleQuickSelect = (period: any) => {
    const now = new Date();
    let start;
    if (period === "today") start = now;
    else if (period === "7days") start = new Date(now.setDate(now.getDate() - 7));
    else if (period === "month") start = new Date(now.getFullYear(), now.getMonth(), 1);
    else if (period === "3months") start = new Date(now.getFullYear(), now.getMonth() - 3, 1);

    setDateRange({
      start: formatDate(start),
      end: formatDate(new Date()),
    });
    setActive(period);
  };

  const [active, setActive] = useState("today");
  const [transactionType, setTransactionType] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("");

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h2>Filter</h2>
        <button className="close-btn" onClick={onClose}>&times;</button>
      </div>

      <div className="quick-buttons">
        {[
          { key: "today", label: "Today" },
          { key: "7days", label: "Last 7 days" },
          { key: "month", label: "This month" },
          { key: "3months", label: "Last 3 months" },
        ].map((btn) => (
          <button
            key={btn.key}
            className={`quick-btn ${active === btn.key ? "active" : ""}`}
            onClick={() => handleQuickSelect(btn.key)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <label>Date Range</label>
        <div className="date-range">
            <input className="date-input" type="date" value={dateRange.start} onChange={() => {}}/>
            <input className="date-input" type="date" value={dateRange.end} onChange={() => {}}/>
          {/* <select value={dateRange.start} onChange={() => {}}>
            <option>{dateRange.start}</option>
          </select>
          <select value={dateRange.end} onChange={() => {}}>
            <option>{dateRange.end}</option>
          </select> */}
        </div>
      </div>

      <div className="filter-group">
        <label>Transaction Type</label>
        <select
          className="select-field"
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option value="">Store Transactions, Get Tipped, Withdrawals...</option>
          <option>Store Transactions</option>
          <option>Get Tipped</option>
          <option>Withdrawals</option>
          <option>Chargebacks</option>
          <option>Cashbacks</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Transaction Status</label>
        <select
          className="select-field"
          value={transactionStatus}
          onChange={(e) => setTransactionStatus(e.target.value)}
        >
          <option value="">Successful, Pending, Failed</option>
          <option>Successful</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>
    </div>
  );
}