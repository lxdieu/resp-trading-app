"use client";
import { IOrder } from "@/src/interface/common";
import Header from "./components/Header";
import * as S from "./styles";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { useState } from "react";
import { TOrderActionType } from "@/src/enum";
import { setOrder } from "@/src/redux/features/marketSlice";
import DataTable from "./components/DataTable";
import PortInfo from "./components/PortInfo";
const Portfolio = () => {
  const order = useAppSelector((state) => state.market.order);
  const dispatch = useAppDispatch();
  const [type, setType] = useState<TOrderActionType>(TOrderActionType.detail);
  const handleClickOrder = (order: IOrder, type: TOrderActionType) => {
    dispatch(setOrder(order));
    setType(type);
  };
  const handleClose = () => {
    dispatch(setOrder(null));
  };
  return (
    <S.Wrapper>
      <Header />
      <PortInfo />
      <DataTable />
    </S.Wrapper>
  );
};
export default Portfolio;
