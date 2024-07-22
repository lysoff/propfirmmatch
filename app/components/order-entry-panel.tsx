import chartSvg from "@/public/chart (1).svg";
import bookSvg from "@/public/book.svg";
import calendarSvg from "@/public/calendar-month.svg";
import Image from "next/image";
import Separator from "@/components/Separator";
import PriceInput from "@/components/PriceInput";
import { fetchAccountDetails, fetchCurrentPrices } from "@/api";
import InstrumentPicker from "./instrument-picker";

import eurSvg from "@/public/EUR.svg";
import usdSvg from "@/public/USD.svg";

import vectorSvg from "@/public/Vector.svg";

const OrderEntryPanel = async () => {
  const {
    prices: [prices],
  } = await fetchCurrentPrices();

  const account = await fetchAccountDetails();

  return (
    <div className="bg-gray-900 flex flex-row">
      <div className="w-[350px]">
        <div className="flex flex-row justify-between p-4 border-b border-gray-300/25">
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center relative">
              <Image src={eurSvg} width={24} height={24} alt="" />
              <Image
                src={usdSvg}
                width={20}
                height={20}
                alt=""
                className="absolute left-[18px]"
              />
            </div>
            <div className="text-md font-medium ml-[22px]">EURUSD</div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="text-red-500">{prices.EURUSD}</div>
            <Image src={vectorSvg} width={14} height={14} alt="" />
          </div>
        </div>
        <div className="p-6">
          <form>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row justify-between gap-4 items-center font-medium">
                <div>Limit</div>
                <div className="text-gray-300">Market</div>
              </div>
              <div className="text-xs text-primary-500/80">Calculator</div>
            </div>
            <div className="flex flex-row my-6 justify-center">
              <div className="flex flex-row justify-center bg-gray-400/20 flex-1">
                Open by Lots
              </div>
              <div className="flex flex-row justify-center flex-1">
                Open by SL
              </div>
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
        </div>
      </div>
      <nav className="p-2 border-l border-gray-300/30 flex flex-col items-center">
        <div className="w-[32px] h-[32px] flex items-center justify-center bg-gray-600 rounded-md">
          <Image src={chartSvg} width={16} height={16} alt="" />
        </div>
        <div className="w-[32px] h-[32px] flex items-center justify-center">
          <Image src={bookSvg} width={16} height={16} alt="" />
        </div>
        <Separator type="horizontal" />
        <div className="w-[32px] h-[32px] flex items-center justify-center">
          <Image src={calendarSvg} width={16} height={16} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default OrderEntryPanel;
