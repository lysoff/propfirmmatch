import Header from "./components/header";
import OrderEntryPanel from "./components/order-entry-panel";
import Positions from "./components/positions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <OrderEntryPanel />
      <Header />
      <Positions />
    </main>
  );
}
