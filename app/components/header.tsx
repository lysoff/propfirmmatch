import Separator from "@/components/Separator";
import Image from "next/image";

import profilePng from "@/public/binance.png";

import addSvg from "@/public/plus.svg";
import reloadSvg from "@/public/rotate-outline.svg";
import dollarSvg from "@/public/dollar.svg";
import chartSvg from "@/public/chart.svg";
import walletSvg from "@/public/wallet.svg";
import scaleSvg from "@/public/scale-balanced.svg";

import vectorSvg from "@/public/Vector.svg";

import { fetchAccountDetails, fetchMetrics } from "@/api";

const Header = async () => {
  const account = await fetchAccountDetails();
  const metrics = await fetchMetrics();

  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="flex flex-row p-5 justify-between">
        <div className="flex flex-row gap-8 items-center">
          <div className="flex flex-row gap-3">
            <div>
              <Image src={profilePng} alt="binance" width={40} height={40} />
            </div>
            <div>
              <div className="text-md font-semibold">
                {account.account_name}
              </div>
              <div className="text-xs text-gray-300">
                Account ID: {account.account_id}
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex flex-row gap-6">
            <div>
              <div className="text-xs text-gray-300">Trading Days</div>
              <div className="text-sm">{metrics.trading_days}</div>
            </div>
            <div>
              <div className="text-xs text-gray-300">Daily DD</div>
              <div className="text-sm">{metrics.daily_dd}</div>
            </div>
            <div>
              <div className="text-xs text-gray-300">Max Daily DD</div>
              <div className="text-sm">{metrics.max_daily_dd}</div>
            </div>
            <div>
              <div className="text-xs text-gray-300">Max DD</div>
              <div className="text-sm">{metrics.max_dd}</div>
            </div>
            <div>
              <div className="text-xs text-gray-300">Profit Target</div>
              <div className="text-sm">{metrics.profit_target}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="border border-gray-300/20 rounded-md px-3 py-[2px] flex flex-row items-center gap-2 bg-gray-800 text-sm">
            <span>This month</span>
            <Image src={vectorSvg} width={12} height={12} alt="" />
          </div>
          <div className="flex flex-row px-3 py-[2px] items-center gap-2 text-white bg-primary-600 rounded-lg text-sm">
            <Image src={addSvg} alt="" width={12} height={12} />
            Import trades
          </div>
          <div className="flex flex-row px-3 py-[2px] items-center gap-2 text-white bg-primary-600 rounded-lg text-sm">
            <Image src={reloadSvg} alt="" width={12} height={12} />
            Update objectives
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-6 p-6 pt-0">
        <div className="flex flex-row bg-gray-800 p-6 gap-3 rounded-lg min-w-[250px]">
          <div>
            <div className="flex items-center justify-center w-[24px] h-[24px] rounded-md bg-primary-900">
              <Image src={dollarSvg} alt="" width={12} height={12} />
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-300">Balance</div>
            <div className="flex flex-row gap-2 items-center">
              <div className="font-semibold">
                {metrics.balance < 0 && "-"}${Math.abs(metrics.balance)}
              </div>
              <div
                className={`text-sm ${
                  metrics.total_dd < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                ({metrics.total_dd}%)
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-800 p-6 gap-3 rounded-lg min-w-[250px]">
          <div>
            <div className="flex items-center justify-center w-[24px] h-[24px] rounded-md bg-primary-900">
              <Image src={chartSvg} alt="" width={12} height={12} />
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-300">Net P&L</div>
            <div className="flex flex-row gap-2 items-center">
              <div className="font-semibold">{metrics.net_pl}</div>
              <div
                className={`text-sm ${
                  metrics.average_pl < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                ({metrics.average_pl}%)
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-800 p-6 gap-3 rounded-lg min-w-[250px]">
          <div>
            <div className="flex items-center justify-center w-[24px] h-[24px] rounded-md bg-primary-900">
              <Image src={walletSvg} alt="" width={12} height={12} />
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-300">Equity</div>
            <div className="flex flex-row gap-2 items-center">
              <div className="font-semibold">{metrics.equity}</div>
              <div
                className={`text-sm ${
                  metrics.average_pl < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                ({metrics.daily_dd}%)
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-800 p-6 gap-3 rounded-lg min-w-[250px]">
          <div>
            <div className="flex items-center justify-center w-[24px] h-[24px] rounded-md bg-primary-900">
              <Image src={scaleSvg} alt="" width={12} height={12} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-300">Avg Win / Loss</div>
            <div>
              <div className="flex flex-row gap-1">
                <div className="bg-green-500 w-[150px] h-[6px] rounded-md" />
                <div className="bg-red-500 w-[14px] h-[6px] rounded-md" />
              </div>
            </div>
            <div>
              <div className="flex flex-row text-xs justify-between">
                <div className="text-green-500">${metrics.average_profit}</div>
                <div className="text-red-500">{metrics.average_loss}%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-800 p-6 gap-3 rounded-lg items-center min-w-[250px] justify-center">
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-300">Win Rate</div>
            <div className="text-green-500 text-lg font-semibold">
              {metrics.win_rate}%
            </div>
          </div>
          <Separator />
          <div className="flex flex-col items-center">
            <div className="text-sm text-gray-300">Profit Factor</div>
            <div className="text-lg font-semibold">{metrics.profit_factor}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
