import { getPositions } from "@/api";
import CloseButton from "@/components/CloseButton";
import Separator from "@/components/Separator";
import { ReactNode, Suspense } from "react";
import ActionButtons from "./action-buttons";
import { DateTime } from "luxon";

import editSvg from "@/public/edit.svg";
import photoSvg from "@/public/camera-foto.svg";
import Image from "next/image";

interface THProps {
  children: ReactNode;
}
const TH = ({ children }: THProps) => (
  <th className="uppercase px-4 py-3 text-gray-300 font-medium text-xs text-left">
    {children}
  </th>
);

const Positions = async () => {
  const { open_trades } = await getPositions();

  return (
    <div className="bg-gray-900 text-white w-full">
      <div className="flex flex-row items-center border-b border-gray-300/50">
        <ul className="flex flex-row flex-1 w-[600px] px-4 items-center">
          <li className="border-b-2 border-primary-500 py-4 px-2 text-sm text-white">
            <div className="flex flex-row gap-1">
              <div>Open Positions</div>
              <div className="bg-gray-600 rounded-md px-1 inline-block">4</div>
            </div>
          </li>
          <li className="py-4 px-2 text-sm text-gray-300">
            <div className="flex flex-row gap-1">
              <div>Open Orders</div>
              <div className="bg-gray-600 rounded-md px-1 inline-block">4</div>
            </div>
          </li>
          <li className="py-4 px-2 text-sm text-gray-300">
            <div className="flex flex-row gap-1">
              <div>Order History</div>
              <div className="bg-gray-600 rounded-md px-1 inline-block">4</div>
            </div>
          </li>
        </ul>

        <div className="flex flex-row items-center gap-0">
          <ActionButtons />
          <Separator />
          <CloseButton />
        </div>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800 border-b border-gray-300/50">
                <TH>Open (GMT)</TH>
                <TH>Symbol</TH>
                <TH>Position</TH>
                <TH>Entry</TH>
                <TH>Size</TH>
                <TH>TP</TH>
                <TH>SL</TH>
                <TH>Fees</TH>
                <TH>ROI</TH>
                <TH>P/L</TH>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {open_trades.map((trade) => {
                const openTime = DateTime.fromFormat(
                  trade.open_time,
                  "yyyy-MM-dd HH:mm:ss"
                );

                return (
                  <tr
                    key={trade.order_id}
                    className="border-b border-gray-300/50"
                  >
                    <td className="px-4 py-3 text-xs">
                      <div>{openTime.toFormat("yyyy/MM/dd")}</div>
                      <div className="text-gray-300">
                        {openTime.toFormat("HH:mm:ss")}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs">{trade.symbol}</td>
                    <td
                      className={`px-4 py-3 text-xs uppercase ${
                        trade.position_type === "long"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {trade.position_type}
                    </td>
                    <td className="px-4 py-3 text-xs">{trade.entry}</td>
                    <td className="px-4 py-3 text-xs">{trade.quantity}</td>
                    <td className="px-4 py-3 text-xs">{trade.tp}</td>
                    <td className="px-4 py-3 text-xs">{trade.sl}</td>
                    <td className="px-4 py-3 text-xs">
                      ${Math.abs(trade.fees)}
                    </td>
                    <td
                      className={`px-4 py-3 text-xs ${
                        trade.roi < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {trade.roi}%
                    </td>
                    <td
                      className={`px-4 py-3 text-xs ${
                        trade.pl < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {trade.pl < 0 && "-"}${Math.abs(trade.pl)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-row gap-1">
                        <div className="border border-gray-300/75 rounded-lg p-[6px] w-[28px] h-[28px] bg-gray-800">
                          <Image src={editSvg} width={14} height={14} alt="" />
                        </div>
                        <div className="border border-gray-300/50 rounded-lg p-[6px] w-[28px] h-[28px] bg-gray-800">
                          <Image src={photoSvg} width={14} height={14} alt="" />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Suspense>
      </div>
    </div>
  );
};

export default Positions;
