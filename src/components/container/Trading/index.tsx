"use client";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/src/redux/hooks";
import * as S from "./styles";
import { TSide } from "@/src/enum";
import Header from "./components/Header";
import Search from "./components/Search";
import TickerInfo from "./components/TickerInfo";
import TicketInfo from "./components/TicketInfo";
import TicketConfirm from "./components/TicketConfirm";

const Trading = () => {
  const t = useTranslations("trade");
  const ticket = useAppSelector((state) => state.market.ticket);
  const ticker = useAppSelector((state) => state.market.ticker);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const handleClickTrade = () => {
    setIsConfirm(true);
  };
  return (
    <S.Wrapper>
      <Header />
      <S.MainContent>
        <Search />
        <TickerInfo />
        <TicketInfo />
        <S.AccStatus>
          <Typography variant="body2">{t("fn_trade_txt_accStatus")}</Typography>
          <Typography color="text.success" variant="body2">
            mapping
          </Typography>
        </S.AccStatus>
      </S.MainContent>
      <S.ButtonWrapper>
        <Button
          disabled={!ticker || !ticket.price || !ticket.vol}
          fullWidth
          variant="contained"
          color={ticket.side === TSide.BUY ? "success" : "error"}
          onClick={handleClickTrade}
        >
          {t(
            ticket.side === TSide.BUY ? "fn_trade_cta_buy" : "fn_trade_cta_sell"
          )}
        </Button>
      </S.ButtonWrapper>
      <TicketConfirm open={isConfirm} setOpen={setIsConfirm} />
    </S.Wrapper>
  );
};
export default Trading;
