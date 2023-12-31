export type TSide = "buy" | "sell";
export type TMarket = "HOSE" | "HNX" | "UPCOM";
export type TStockType = "stock" | "etf" | "warrant" | "bond" | "fund";
export type TOrderType = "LO" | "MP";
export type TOrderStatus = "open" | "done" | "cancel";
export type TOrderSide = "buy" | "sell";
export type TOrderTimeInForce = "IOC" | "FOK" | "GTC";
export type TOrderValidity = "DAY" | "GTC";
export type TOrderRejectReason =
  | "invalid"
  | "not_enough_money"
  | "not_enough_stock"
  | "not_enough_balance"
  | "not_enough_position"
  | "not_enough_order";
