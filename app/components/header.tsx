import Separator from "@/components/Separator";
import Image from "next/image";

import profilePng from "@/public/binance.png";

import addSvg from "@/public/plus.svg";
import reloadSvg from "@/public/rotate-outline.svg";
import dollarSvg from "@/public/dollar.svg";
import chartSvg from "@/public/chart.svg";
import walletSvg from "@/public/wallet.svg";
import scaleSvg from "@/public/scale-balanced.svg";
import { fetchMetrics } from "@/api";

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
