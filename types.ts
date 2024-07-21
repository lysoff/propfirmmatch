export type Instrument =
  | "AUDUSD"
  | "EURCHF"
  | "EURJPY"
  | "EURUSD"
  | "GBPUSD"
  | "NZDUSD"
  | "USDCAD";

export interface CurrentPricesResponse {
  prices: Record<Instrument, number>[];
  status: "success" | "error";
}

export interface AccountDetailsResponse {
  account_id: number;
  account_name: string;
  auto_be_level: number;
  balance: string;
  commissions: {
    asset_class: "Crypto" | "Forex";
    price_per_lot: number;
  }[];
  daily_loss_limit: number;
  equity: number;
  exchange: "Binance" | "Other";
  leverage: number;
  max_lot_sizes: number[];
  one_click: boolean;
  risk: number;
  show_leaderboard: boolean;
  starting_balance: number;
  status: "success" | "error";
  symbol_mappings: {
    mapping: string;
    symbol: Instrument;
  }[];
  take_profit_level: number;
}

export interface DailySummary {
  date: string;
  num_losing_trades: number;
  num_trades: number;
  num_winning_trades: number;
  total_fees: number;
  total_loss: number;
  total_lots: number;
  total_pl: number;
  total_profit: number;
  total_roi: number;
}

export interface MetricsResponse {
  account_id: number;
  average_loss: number;
  average_pl: number;
  average_profit: number;
  balance: number;
  daily_dd: number;
  daily_summary: DailySummary[];
  equity: number;
  losing_days: number;
  losing_trades: number;
  max_daily_dd: number;
  max_dd: number;
  max_loss: number;
  max_win: number;
  min_trading_days: number;
  net_pl: number;
  profit_factor: number;
  profit_target: number;
  starting_balance: number;
  status: "success" | "error";
  total_dd: number;
  total_fees: number;
  total_trades: number;
  trade_expectancy: number;
  trading_days: number;
  win_rate: number;
  winning_days: number;
  winning_trades: number;
}

export interface Trade {
  account_id: number;
  balance: number;
  entry: number;
  equity: number;
  exit: number;
  exit_time: string;
  fees: number;
  open_time: string;
  order_id: string;
  pl: number;
  position_type: "long" | "short";
  quantity: number;
  roi: number;
  sl: number;
  status: "loss" | "profit";
  symbol: "EURUSD";
  tp: number;
}

export interface OpenPositionResponse {
  open_trades: Trade[];
}
