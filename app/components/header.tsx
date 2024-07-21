import Separator from "@/components/Separator";
import Image from "next/image";

import profilePng from "@/public/binance.png";

import addSvg from "@/public/plus.svg";
import reloadSvg from "@/public/rotate-outline.svg";
import dollarSvg from "@/public/dollar.svg";
import chartSvg from "@/public/chart.svg";
import walletSvg from "@/public/wallet.svg";
import scaleSvg from "@/public/scale-balanced.svg";

interface DailySummary {
  date: string;
  num_losing_trades: number;
  num_trades: number;
  num_winning_trades: number;
  total_fees: number;
  total_loss: number;
  total_lots: number;
  total_pl: number;
  total_profit: number;
  total_roi: number;
}

interface FetchMetricsResponse {
  account_id: number;
  average_loss: number;
  average_pl: number;
  average_profit: number;
  balance: number;
  daily_dd: number;
  daily_summary: DailySummary[];
  equity: number;
  losing_days: number;
  losing_trades: number;
  max_daily_dd: number;
  max_dd: number;
  max_loss: number;
  max_win: number;
  min_trading_days: number;
  net_pl: number;
  profit_factor: number;
  profit_target: number;
  starting_balance: number;
  status: "success" | "error";
  total_dd: number;
  total_fees: number;
  total_trades: number;
  trade_expectancy: number;
  trading_days: number;
  win_rate: number;
  winning_days: number;
  winning_trades: number;
}

async function fetchMetrics() {
  const res = await fetch("http://13.41.72.245/fetch_metrics");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result as FetchMetricsResponse;
}

const Header = async () => {
  const metrics = await fetchMetrics();

  return (
    <div>
      <div>
        <div>
          <div>
            <Image src={profilePng} alt="binance" width={40} height={40} />
            <div>
              <div>Secondary Account</div>
              <div>{metrics.account_id}</div>
            </div>
          </div>
          <Separator />
          <div>
            <div>
              <div>Trading Days</div>
              <div>{metrics.trading_days}</div>
            </div>
            <div>
              <div>Daily DD</div>
              <div>{metrics.daily_dd}</div>
            </div>
            <div>
              <div>Max Daily DD</div>
              <div>{metrics.max_daily_dd}</div>
            </div>
            <div>
              <div>Max DD</div>
              <div>{metrics.max_dd}</div>
            </div>
            <div>
              <div>Profit Target</div>
              <div>{metrics.profit_target}</div>
            </div>
          </div>
        </div>
        <div>
          <select>
            <option>This month</option>
          </select>
          <button>
            <Image src={addSvg} alt="" width={12} height={12} />
            Import trades
          </button>
          <button>
            <Image src={reloadSvg} alt="" width={12} height={12} />
            Update objectives
          </button>
        </div>
      </div>
      <div>
        <div>
          <div>
            <Image src={dollarSvg} alt="" width={12} height={12} />
          </div>
          <div>
            <div>Balance</div>
            <div>
              <span>{metrics.balance}</span>
              <span>{metrics.total_dd}</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={chartSvg} alt="" width={12} height={12} />
          </div>
          <div>
            <div>Net P&L</div>
            <div>
              <span>{metrics.net_pl}</span>
              <span>{metrics.average_pl}</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={walletSvg} alt="" width={12} height={12} />
          </div>
          <div>
            <div>Equity</div>
            <div>
              <span>{metrics.equity}</span>
              <span>{metrics.daily_dd}</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image src={scaleSvg} alt="" width={12} height={12} />
          </div>
          <div>
            <div>Avg Win / Loss</div>
            <div>
              <div>
                <div>--win--</div>
                <div>--loss--</div>
              </div>
              <div>
                <div>{metrics.average_profit}</div>
                <div>{metrics.average_loss}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>Win Rate</div>
            <div>{metrics.win_rate}</div>
          </div>
          <Separator />
          <div>
            <div>Profit Factor</div>
            <div>{metrics.profit_factor}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
