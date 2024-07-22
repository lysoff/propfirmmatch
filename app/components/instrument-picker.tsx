import { fetchCurrentPrices } from "@/api";
import { Instrument } from "@/types";

const InstrumentPicker = async () => {
  const {
    prices: [prices],
  } = await fetchCurrentPrices();

  return (
    <select>
      {Object.keys(prices).map((instrument) => (
        <option key={instrument}>
          {instrument} ${prices[instrument as Instrument]}
        </option>
      ))}
    </select>
  );
};

export default InstrumentPicker;
