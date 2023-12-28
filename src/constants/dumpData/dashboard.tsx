import { ITickerData } from "@/src/interface/common";

export const tickers: ITickerData[] = [
  {
    companyName: "Công ty Cổ phần Chứng khoán Thành phố Hồ Chí Minh",
    ticker: "HCM",
    open: 33,
    ref: 32.75,
    low: 32.85,
    high: 34,
    ceil: 35,
    floor: 30.5,
    price: 33.4,
    chg: 0.65,
    pctChg: 1.98,
    vol: 14000000,
    marketValue: 14000000 * 33.4,
    klnnBuy: 1000000,
    klnnSell: 1000000,
    marketDepth: {
      deals: [
        {
          price: 33.4,
          sellVol: 1000000,
          buyVol: 1000000,
        },
        { price: 33.3, sellVol: 1000000, buyVol: 1000000 },
        { price: 33.2, sellVol: 1000000, buyVol: 1000000 },
        { price: 33.1, sellVol: 1000000, buyVol: 1000000 },
        { price: 33.0, sellVol: 1000000, buyVol: 1000000 },
        { price: 32.9, sellVol: 1000000, buyVol: 1000000 },
        { price: 32.8, sellVol: 1000000, buyVol: 1000000 },
      ],
      historyDeals: [
        { time: "09:10", price: 33.4, side: "buy", vol: 1000 },
        { time: "09:09", price: 33.4, side: "sell", vol: 1000 },
        { time: "09:08", price: 33.3, side: "buy", vol: 100 },
        { time: "09:07", price: 33.3, side: "sell", vol: 1000 },
        { time: "09:06", price: 33.2, side: "buy", vol: 1000 },
        { time: "09:05", price: 33.2, side: "sell", vol: 1000 },
        { time: "09:04", price: 33.1, side: "buy", vol: 1000 },
        { time: "09:03", price: 33.1, side: "sell", vol: 1000 },
        { time: "09:02", price: 33.0, side: "buy", vol: 1000 },
        { time: "09:01", price: 33.0, side: "sell", vol: 1000 },
      ],
    },
  },
  {
    companyName: "Công ty Cổ phần Tập đoàn Hòa Phát",
    ticker: "HPG",
    open: 27.8,
    ref: 27.8,
    low: 27.85,
    high: 28,
    ceil: 29.65,
    floor: 25.85,
    price: 27.75,
    chg: -0.05,
    pctChg: -0.18,
    vol: 20000000,
    marketValue: 20000000 * 27.75,
    klnnBuy: 1000000,
    klnnSell: 1000000,
    marketDepth: {
      deals: [
        { price: 27.75, sellVol: 1000000, buyVol: 1000000 },
        { price: 27.7, sellVol: 1000000, buyVol: 1000000 },
        { price: 27.65, sellVol: 1000000, buyVol: 1000000 },
        { price: 27.6, sellVol: 1000000, buyVol: 1000000 },
        { price: 27.55, sellVol: 1000000, buyVol: 1000000 },
        { price: 27.5, sellVol: 1000000, buyVol: 1000000 },
        { price: 27.45, sellVol: 1000000, buyVol: 1000000 },
      ],
      historyDeals: [
        { time: "09:10", price: 27.75, side: "buy", vol: 1000 },
        { time: "09:09", price: 27.75, side: "sell", vol: 1000 },
        { time: "09:08", price: 27.7, side: "buy", vol: 100 },
        { time: "09:07", price: 27.7, side: "sell", vol: 1000 },
        { time: "09:06", price: 27.65, side: "buy", vol: 1000 },
        { time: "09:05", price: 27.65, side: "sell", vol: 1000 },
        { time: "09:04", price: 27.6, side: "buy", vol: 1000 },
        { time: "09:03", price: 27.6, side: "sell", vol: 1000 },
        { time: "09:02", price: 27.55, side: "buy", vol: 1000 },
        { time: "09:01", price: 27.55, side: "sell", vol: 1000 },
      ],
    },
  },
  {
    companyName: "Công ty Cổ phần Chứng khoán SSI",
    ticker: "SSI",
    open: 32.75,
    ref: 32.75,
    low: 32.8,
    high: 33.15,
    ceil: 35.05,
    floor: 30.55,
    price: 32.8,
    chg: 0.05,
    pctChg: 0.15,
    vol: 16000000,
    marketValue: 16000000 * 32.8,
    klnnBuy: 1000000,
    klnnSell: 1000000,
    marketDepth: {
      deals: [
        { price: 32.8, sellVol: 1000000, buyVol: 1000000 },
        { price: 32.75, sellVol: 1000000, buyVol: 1000000 },
        { price: 32.7, sellVol: 1000000, buyVol: 1000000 },
        { price: 32.65, sellVol: 1000000, buyVol: 1000000 },
        { price: 32.6, sellVol: 1000000, buyVol: 1000000 },
        { price: 32.55, sellVol: 1000000, buyVol: 1000000 },
        { price: 32.5, sellVol: 1000000, buyVol: 1000000 },
      ],
      historyDeals: [
        { time: "09:10", price: 32.8, side: "buy", vol: 1000 },
        { time: "09:09", price: 32.8, side: "sell", vol: 1000 },
        { time: "09:08", price: 32.75, side: "buy", vol: 100 },
        { time: "09:07", price: 32.75, side: "sell", vol: 1000 },
        { time: "09:06", price: 32.7, side: "buy", vol: 1000 },
        { time: "09:05", price: 32.7, side: "sell", vol: 1000 },
        { time: "09:04", price: 32.65, side: "buy", vol: 1000 },
        { time: "09:03", price: 32.65, side: "sell", vol: 1000 },
        { time: "09:02", price: 32.6, side: "buy", vol: 1000 },
        { time: "09:01", price: 32.6, side: "sell", vol: 1000 },
      ],
    },
  },
  {
    companyName: "Ngân hàng Thương mại Cổ phần Ngoại thương Việt Nam",
    ticker: "VCB",
    open: 82.5,
    ref: 82.8,
    low: 82.5,
    high: 83.2,
    ceil: 88.4,
    floor: 77.0,
    price: 82.7,
    chg: -0.1,
    pctChg: -0.12,
    vol: 900000,
    marketValue: 900000 * 82.7,
    klnnBuy: 1000000,
    klnnSell: 1000000,
    marketDepth: {
      deals: [
        { price: 82.7, sellVol: 1000000, buyVol: 1000000 },
        { price: 82.65, sellVol: 1000000, buyVol: 1000000 },
        { price: 82.6, sellVol: 1000000, buyVol: 1000000 },
        { price: 82.55, sellVol: 1000000, buyVol: 1000000 },
        { price: 82.5, sellVol: 1000000, buyVol: 1000000 },
        { price: 82.45, sellVol: 1000000, buyVol: 1000000 },
        { price: 82.4, sellVol: 1000000, buyVol: 1000000 },
      ],
      historyDeals: [
        { time: "09:10", price: 82.7, side: "buy", vol: 1000 },
        { time: "09:09", price: 82.7, side: "sell", vol: 1000 },
        { time: "09:08", price: 82.65, side: "buy", vol: 100 },
        { time: "09:07", price: 82.65, side: "sell", vol: 1000 },
        { time: "09:06", price: 82.6, side: "buy", vol: 1000 },
        { time: "09:05", price: 82.6, side: "sell", vol: 1000 },
        { time: "09:04", price: 82.55, side: "buy", vol: 1000 },
        { time: "09:03", price: 82.55, side: "sell", vol: 1000 },
        { time: "09:02", price: 82.5, side: "buy", vol: 1000 },
        { time: "09:01", price: 82.5, side: "sell", vol: 1000 },
      ],
    },
  },
  {
    companyName: "Ngân hàng Thương mại Cổ phần Á Châu",
    ticker: "ACB",
    open: 23.2,
    ref: 23.25,
    low: 23.2,
    high: 23.4,
    ceil: 24.9,
    floor: 21.7,
    price: 23.3,
    chg: 0.05,
    pctChg: 0.22,
    vol: 48700000,
    marketValue: 48700000 * 23.3,
    klnnBuy: 1000000,
    klnnSell: 1000000,
    marketDepth: {
      deals: [
        { price: 23.3, sellVol: 1000000, buyVol: 1000000 },
        { price: 23.25, sellVol: 1000000, buyVol: 1000000 },
        { price: 23.2, sellVol: 1000000, buyVol: 1000000 },
        { price: 23.15, sellVol: 1000000, buyVol: 1000000 },
        { price: 23.1, sellVol: 1000000, buyVol: 1000000 },
        { price: 23.05, sellVol: 1000000, buyVol: 1000000 },
        { price: 23.0, sellVol: 1000000, buyVol: 1000000 },
      ],
      historyDeals: [
        { time: "09:10", price: 23.3, side: "buy", vol: 1000 },
        { time: "09:09", price: 23.3, side: "sell", vol: 1000 },
        { time: "09:08", price: 23.25, side: "buy", vol: 100 },
        { time: "09:07", price: 23.25, side: "sell", vol: 1000 },
        { time: "09:06", price: 23.2, side: "buy", vol: 1000 },
        { time: "09:05", price: 23.2, side: "sell", vol: 1000 },
        { time: "09:04", price: 23.15, side: "buy", vol: 1000 },
        { time: "09:03", price: 23.15, side: "sell", vol: 1000 },
        { time: "09:02", price: 22.1, side: "buy", vol: 1000 },
        { time: "09:01", price: 22.1, side: "sell", vol: 1000 },
      ],
    },
  },
  {
    companyName: "Công ty Cổ phần Đầu tư Thế Giới Di Động",
    ticker: "MWG",
    open: 42.8,
    ref: 42.7,
    low: 42.55,
    high: 43.05,
    ceil: 45.65,
    floor: 39.75,
    price: 42.85,
    chg: 0.15,
    pctChg: 0.35,
    vol: 5000000,
    marketValue: 5000000 * 42.85,
    klnnBuy: 1000000,
    klnnSell: 1000000,
    marketDepth: {
      deals: [
        { price: 42.85, sellVol: 1000000, buyVol: 1000000 },
        { price: 42.8, sellVol: 1000000, buyVol: 1000000 },
        { price: 42.75, sellVol: 1000000, buyVol: 1000000 },
        { price: 42.7, sellVol: 1000000, buyVol: 1000000 },
        { price: 42.65, sellVol: 1000000, buyVol: 1000000 },
        { price: 42.6, sellVol: 1000000, buyVol: 1000000 },
        { price: 42.55, sellVol: 1000000, buyVol: 1000000 },
      ],
      historyDeals: [
        { time: "09:10", price: 42.85, side: "buy", vol: 1000 },
        { time: "09:09", price: 42.85, side: "sell", vol: 1000 },
        { time: "09:08", price: 42.8, side: "buy", vol: 100 },
        { time: "09:07", price: 42.8, side: "sell", vol: 1000 },
        { time: "09:06", price: 42.75, side: "buy", vol: 1000 },
        { time: "09:05", price: 42.75, side: "sell", vol: 1000 },
        { time: "09:04", price: 42.7, side: "buy", vol: 1000 },
        { time: "09:03", price: 42.7, side: "sell", vol: 1000 },
        { time: "09:02", price: 42.7, side: "buy", vol: 1000 },
        { time: "09:01", price: 42.7, side: "sell", vol: 1000 },
      ],
    },
  },
  {
    companyName: "Công ty Cổ phần Chứng khoán FPT",
    ticker: "FTS",
    open: 44.5,
    ref: 44.6,
    low: 44.35,
    high: 45.25,
    ceil: 48.15,
    floor: 40.05,
    price: 44.7,
    chg: 0.1,
    pctChg: 0.22,
    vol: 1000000,
    marketValue: 1000000 * 44.7,
    klnnBuy: 1000000,
    klnnSell: 1000000,
    marketDepth: {
      deals: [
        { price: 44.7, sellVol: 1000000, buyVol: 1000000 },
        { price: 44.65, sellVol: 1000000, buyVol: 1000000 },
        { price: 44.6, sellVol: 1000000, buyVol: 1000000 },
        { price: 44.55, sellVol: 1000000, buyVol: 1000000 },
        { price: 44.5, sellVol: 1000000, buyVol: 1000000 },
        { price: 44.45, sellVol: 1000000, buyVol: 1000000 },
        { price: 44.4, sellVol: 1000000, buyVol: 1000000 },
      ],
      historyDeals: [
        { time: "09:10", price: 44.7, side: "buy", vol: 1000 },
        { time: "09:09", price: 44.7, side: "sell", vol: 1000 },
        { time: "09:08", price: 44.65, side: "buy", vol: 100 },
        { time: "09:07", price: 44.65, side: "sell", vol: 1000 },
        { time: "09:06", price: 44.6, side: "buy", vol: 1000 },
        { time: "09:05", price: 44.6, side: "sell", vol: 1000 },
        { time: "09:04", price: 44.55, side: "buy", vol: 1000 },
        { time: "09:03", price: 44.55, side: "sell", vol: 1000 },
        { time: "09:02", price: 44.5, side: "buy", vol: 1000 },
        { time: "09:01", price: 44.5, side: "sell", vol: 1000 },
      ],
    },
  },
  {
    companyName: "Ngân hàng Thương mại Cổ phần Việt Nam Thịnh Vượng",
    ticker: "VPB",
    open: 18.4,
    ref: 18.5,
    low: 18.35,
    high: 18.6,
    ceil: 19.8,
    floor: 17.2,
    price: 18.5,
    chg: 0.0,
    pctChg: 0.0,
    vol: 8000000,
    marketValue: 8000000 * 18.5,
    klnnBuy: 1000000,
    klnnSell: 1000000,
    marketDepth: {
      deals: [
        { price: 18.5, sellVol: 1000000, buyVol: 1000000 },
        { price: 18.45, sellVol: 1000000, buyVol: 1000000 },
        { price: 18.4, sellVol: 1000000, buyVol: 1000000 },
        { price: 18.35, sellVol: 1000000, buyVol: 1000000 },
        { price: 18.3, sellVol: 1000000, buyVol: 1000000 },
        { price: 18.25, sellVol: 1000000, buyVol: 1000000 },
        { price: 18.2, sellVol: 1000000, buyVol: 1000000 },
      ],
      historyDeals: [
        { time: "09:10", price: 18.5, side: "buy", vol: 1000 },
        { time: "09:09", price: 18.5, side: "sell", vol: 1000 },
        { time: "09:08", price: 18.45, side: "buy", vol: 100 },
        { time: "09:07", price: 18.45, side: "sell", vol: 1000 },
        { time: "09:06", price: 18.4, side: "buy", vol: 1000 },
        { time: "09:05", price: 18.4, side: "sell", vol: 1000 },
        { time: "09:04", price: 18.35, side: "buy", vol: 1000 },
        { time: "09:03", price: 18.35, side: "sell", vol: 1000 },
        { time: "09:02", price: 18.3, side: "buy", vol: 1000 },
        { time: "09:01", price: 18.3, side: "sell", vol: 1000 },
      ],
    },
  },
];
