export interface ITransaction {
    amount: number;
    metadata?: IMetadata;
    payment_reference?: string;
    status: string;
    type: string;
    date: string;
}

interface IMetadata {
    name: string;
    type: string;
    email: string;
    quantity: string;
    country: string;
    product_name: string;
}