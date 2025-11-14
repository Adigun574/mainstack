import { render, screen, waitFor } from "@testing-library/react";
import Revenue from "./Revenue";
import "@testing-library/jest-dom";
import agent from "../../api/agent";

jest.mock("../../components/RevenueChart/RevenueChart", () => () => <div>RevenueChart</div>);
jest.mock("../../components/TransactionList/TransactionList", () => () => <div>TransactionList</div>);
jest.mock("../../components/StatCard/StatCard", () => ({ label, value }: any) => (
  <div>{label}: {value}</div>
));

jest.mock("../../api/agent", () => ({
  Wallet: {
    getWalletDetails: jest.fn(),
  },
}));

describe("RevenuePage", () => {
  const mockWalletData = {
    balance: 5000,
    ledger_balance: 4800,
    total_payout: 200,
    total_revenue: 6000,
    pending_payout: 100,
  };

  beforeEach(() => {
    (agent.Wallet.getWalletDetails as jest.Mock).mockResolvedValue({ data: mockWalletData });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders available balance", async () => {
    render(<Revenue />);

    await waitFor(() => {
      expect(screen.getByText(/USD 5000/i)).toBeInTheDocument();
    });
  });

  it("renders all stats after fetching wallet data", async () => {
    render(<Revenue />);

    await waitFor(() => {
      expect(screen.getByText("Ledger Balance: 4800")).toBeInTheDocument();
      expect(screen.getByText("Total Payout: 200")).toBeInTheDocument();
      expect(screen.getByText("Total Revenue: 6000")).toBeInTheDocument();
      expect(screen.getByText("Pending Payout: 100")).toBeInTheDocument();
    });
  });

  it("renders RevenueChart and TransactionList components", async () => {
    render(<Revenue />);

    await waitFor(() => {
      expect(screen.getByText("RevenueChart")).toBeInTheDocument();
      expect(screen.getByText("TransactionList")).toBeInTheDocument();
    });
  });

  it("calls getWalletDetails on mount", async () => {
    render(<Revenue />);

    await waitFor(() => {
      expect(agent.Wallet.getWalletDetails).toHaveBeenCalledTimes(1);
    });
  });
});
