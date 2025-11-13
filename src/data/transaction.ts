export const transactionTypesFilter = {
    options: [
        {
            id: 1,
            name: "Store Transactions"
        },
        {
            id: 2,
            name: "Get Tipped"
        },
        {
            id: 3,
            name: "Withdrawals"
        },
        {
            id: 4,
            name: "Chargebacks"
        },
        {
            id: 5,
            name: "Cashbacks"
        },
        {
            id: 6,
            name: "Refer & Earn"
        }
    ]
};

export const transactionStatusesFilter = {
    options: [
        {
            id: 1,
            name: "Successful"
        },
        {
            id: 2,
            name: "Pending"
        },
        {
            id: 3,
            name: "Failed"
        }
    ]
};

export const dateQuickButtons = [
    { key: "today", label: "Today" },
    { key: "7days", label: "Last 7 days" },
    { key: "month", label: "This month" },
    { key: "3months", label: "Last 3 months" },
    { key: "thisyear", label: "This year" },
    { key: "lastyear", label: "Last year" },
    { key: "alltime", label: "All time" },
]

export const formatDate = (date: any) => {
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).replace(/ /g, " ");
}

