import { getPositions } from "@/api";
import CloseButton from "@/components/CloseButton";
import Separator from "@/components/Separator";
import { Suspense } from "react";

const Positions = async () => {
  const { open_trades } = await getPositions();

  return (
    <div>
      <div>
        <ul>
          <li>Open Positions</li>
          <li>Open Orders</li>
          <li>Order History</li>
        </ul>

        <div>
          <div>
            <button>Sync Open Trades</button>
            <button>Close Profits</button>
            <button>Close Losses</button>
            <button>Close All</button>
          </div>
          <Separator />
          <CloseButton />
        </div>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <table>
            <thead>
              <tr>
                <th>Open (GMT)</th>
                <th>Symbol</th>
                <th>Position</th>
                <th>Entry</th>
                <th>Size</th>
                <th>TP</th>
                <th>SL</th>
                <th>Fees</th>
                <th>ROI</th>
                <th>P/L</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {open_trades.map((trade) => {
                return (
                  <tr key={trade.order_id}>
                    <td>{trade.open_time}</td>
                    <td>{trade.symbol}</td>
                    <td>{trade.position_type}</td>
                    <td>{trade.entry}</td>
                    <td>{trade.quantity}</td>
                    <td>{trade.tp}</td>
                    <td>{trade.sl}</td>
                    <td>{trade.fees}</td>
                    <td>{trade.roi}</td>
                    <td>{trade.pl}</td>
                    <td>
                      <button>Edit</button>
                      <button>Snapshot</button>
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
