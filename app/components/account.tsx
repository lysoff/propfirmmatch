import Image from "next/image";
import eyeSvg from "@/public/eye-outline.svg";
import settingsSvg from "@/public/cog-outline.svg";
import Separator from "@/components/Separator";
import CloseButton from "@/components/CloseButton";
import { fetchAccountDetails } from "@/api";

import binancePng from "@/public/binance.png";
import plusSvg from "@/public/plus.svg";
import editSvg from "@/public/edit.svg";

import Divider from "@/components/Divider";
import Info from "@/components/Info";
import Switch from "@/components/Switch";

const Account = async () => {
  const account = await fetchAccountDetails();

  return (
    <div>
      <div>
        <div>
          <span>Account Info</span>
          <Image src={eyeSvg} width={16} height={16} alt="" />
        </div>
        <div>
          <Image src={settingsSvg} width={16} height={16} alt="" />
          <Separator />
          <CloseButton />
        </div>
      </div>
      <div className="flex-row">
        <div>Name:</div>
        <div>{account.account_name}</div>
      </div>
      <div className="flex-row">
        <div>Balance:</div>
        <div>${account.balance}</div>
      </div>
      <div className="flex-row">
        <div>Equity:</div>
        <div>${account.equity}</div>
      </div>
      <div className="flex-row">
        <div>Exchange:</div>
        <div className="flex-row">
          <Image src={binancePng} width={16} height={16} alt="" />
          {account.exchange}
        </div>
      </div>
      <Divider />
      <div>
        <div>Leverage:</div>
        <div>{account.leverage}x</div>
      </div>
      <div>
        <div>
          <Info />
          Risk:
        </div>
        <div>{account.risk}%</div>
      </div>
      <div>
        <div>
          <Info />
          Daily Loss Limit:
        </div>
        <div>{account.daily_loss_limit}%</div>
      </div>
      <div>
        <div>
          <Info />
          Take Profit (RR):
        </div>
        <div>{account.take_profit_level}</div>
      </div>
      <div>
        <div>
          <Info />
          Auto BE Level (RR):
        </div>
        <div>{account.auto_be_level}</div>
      </div>
      <Divider />
      <div>
        <div>One Click Trade:</div>
        <div>
          <Switch value={account.one_click} />
        </div>
      </div>
      <Divider />
      <div>
        <div>Show Account on Leaderboard:</div>
        <div>
          <Switch value={account.show_leaderboard} />
        </div>
      </div>
      <Divider />
      <div>
        <div>Max Lot Sizes:</div>
        <div>
          <Image src={plusSvg} alt="" width={12} height={12} />
        </div>
      </div>
      <div>
        <div>Account Commissions:</div>
        <div>
          <div>
            <span>{account.commissions.length}</span> Rules
          </div>
          <div>
            <Image src={editSvg} alt="" width={12} height={12} />
          </div>
        </div>
      </div>
      <div>
        <div>Symbol Mappings:</div>
        <div>
          <div>
            <span>{account.symbol_mappings.length}</span> Rules
          </div>
          <div>
            <Image src={editSvg} alt="" width={12} height={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
