import Account from "./components/account";
import Header from "./components/header";
import OrderEntryPanel from "./components/order-entry-panel";
import Positions from "./components/positions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-6">
      <Header />
      <Positions />
      {/* <Account /> */}
      <OrderEntryPanel />
    </main>
  );
}
