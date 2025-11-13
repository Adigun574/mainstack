import { useState } from "react";
import "./TransactionFilter.css";
// import Multiselect from 'multiselect-react-dropdown';
// import { dateQuickButtons, formatDate, transactionStatusesFilter, transactionTypesFilter } from "../../data/transaction";
import { dateQuickButtons, formatDate, transactionTypesFilter } from "../../data/transaction";
import Select from 'react-select';

const TRANSACTION_TYPES = {...transactionTypesFilter};
// const TRANSACTION_STATUSES = {...transactionStatusesFilter};
const DATE_QUICK_BUTTONS = [...dateQuickButtons];

export default function FilterPanel({
    onClose
}: any) {

    const [selected, setSelected] = useState<any[]>([]);

    const [active, setActive] = useState<string>("today");

    const today = new Date();

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
        else if (period === "thisyear") start = new Date(now.getFullYear(), now.getMonth() - 3, 1);
        else if (period === "lastyear") start = new Date(now.getFullYear(), now.getMonth() - 3, 1);
        else if (period === "alltime") start = new Date(now.getFullYear(), now.getMonth() - 3, 1);


        setDateRange({
            start: formatDate(start),
            end: formatDate(new Date()),
        });
        setActive(period);
    };

    return (
        <div className="filter-panel">
            <div>
                <div className="filter-header">
                    <h2>Filter</h2>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="quick-buttons">
                    {DATE_QUICK_BUTTONS.map((btn) => (
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
                        <input className="date-input" type="date" value={dateRange.start} onChange={() => { }} />
                        <input className="date-input" type="date" value={dateRange.end} onChange={() => { }} />
                    </div>
                </div>

                <div className="filter-group">
                    <label>Transaction Type</label>
                    {/* <Multiselect
                        avoidHighlightFirstOption={true}
                        className="custom-select-field"
                        showCheckbox={true}
                        options={TRANSACTION_TYPES.options}
                        displayValue="name"
                    /> */}
                    <Select
                        options={TRANSACTION_TYPES.options}
                        isMulti
                        value={selected}
                        onChange={(selectedOptions) => setSelected([...selectedOptions || []])}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                        styles={{
                            control: (base) => ({
                              ...base,
                              borderRadius: "10px",
                              borderColor: "#ddd",
                              minHeight: "44px",
                              boxShadow: "none",
                            }),
                            multiValue: (base) => ({
                              ...base,
                              backgroundColor: "#f2f4f7",
                            }),
                          }}
                        />
                </div>

                <div className="filter-group">
                    <label>Transaction Status</label>
                    {/* <Multiselect
                        avoidHighlightFirstOption={true}
                        className="custom-select-field"
                        showCheckbox={true}
                        options={TRANSACTION_STATUSES.options}
                        displayValue="name"
                    /> */}
                </div>
            </div>

            <div className="action-btns-container">
                <button className="secondary-btn">Clear</button>
                <button className="primary-btn">Apply</button>
            </div>
        </div>
    );
}