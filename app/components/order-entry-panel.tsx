import chartSvg from "@/public/chart (1).svg";
import bookSvg from "@/public/book.svg";
import calendarSvg from "@/public/calendar-month.svg";
import Image from "next/image";
import Separator from "@/components/Separator";
import PriceInput from "@/components/PriceInput";
import { fetchAccountDetails, fetchCurrentPrices } from "@/api";

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
