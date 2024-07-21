import chartSvg from "@/public/chart (1).svg";
import bookSvg from "@/public/book.svg";
import calendarSvg from "@/public/calendar-month.svg";
import Image from "next/image";
import Separator from "@/components/Separator";
import PriceInput from "@/components/PriceInput";

type Instrument =
  | "AUDUSD"
  | "EURCHF"
  | "EURJPY"
  | "EURUSD"
  | "GBPUSD"
  | "NZDUSD"
  | "USDCAD";

interface CurrentPricesResponse {
  prices: Record<Instrument, number>[];
  status: "success" | "error";
}

interface AccountDetailsResponse {
  account_id: number;
  account_name: string;
  auto_be_level: number;
  balance: string;
  commissions: {
    asset_class: "Crypto" | "Forex";
    price_per_lot: number;
  }[];
  daily_loss_limit: number;
  equity: number;
  exchange: "Binance" | "Other";
  leverage: number;
  max_lot_sizes: number[];
  one_click: boolean;
  risk: number;
  show_leaderboard: boolean;
  starting_balance: number;
  status: "success" | "error";
  symbol_mappings: {
    mapping: string;
    symbol: Instrument;
  };
  take_profit_level: number;
}

async function fetchAccountDetails() {
  const res = await fetch("http://13.41.72.245/account_details");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as AccountDetailsResponse;
}

async function fetchCurrentPrices() {
  const res = await fetch("http://13.41.72.245/current_prices");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as CurrentPricesResponse;
}

const OrderEntryPanel = async () => {
  const {
    prices: [prices],
  } = await fetchCurrentPrices();

  const account = await fetchAccountDetails();

  return (
    <div>
      <section>
        <select>
          <option>EURUSD ${prices.EURUSD}</option>
        </select>
        <form>
          <div>
            <ul>
              <li>Limit</li>
              <li>Market</li>
            </ul>
            <div>Calculator</div>
          </div>
          <div>
            <button>Open by Lots</button>
            <button>Open by SL</button>
          </div>
          <div>
            <span>Limit Price</span>
            <PriceInput value={0.01} />
          </div>
          <div>
            <div>
              <span>Quantity</span>
              <span>${account.balance}</span>
            </div>
            <PriceInput value={0.01} />
          </div>
          <div>
            <input type="checkbox" />
            <span>Add Set TP</span>
            <span>(Optional)</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Add TP</span>
            <span>(Optional)</span>
          </div>
          <div>
            <div>{prices.EURUSD}</div>
            <Separator />
            <div>{Number(prices.EURUSD + 0.00001).toFixed(5)}</div>
          </div>
          <div>
            <button>Buy / Long</button>
            <button>Sell / Short</button>
          </div>
        </form>
      </section>
      <nav>
        <div>
          <Image src={chartSvg} width={16} height={16} alt="" />
        </div>
        <div>
          <Image src={bookSvg} width={16} height={16} alt="" />
        </div>
        <Separator />
        <div>
          <Image src={calendarSvg} width={16} height={16} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default OrderEntryPanel;
