import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@src/redux/hooks";
import { setTicket } from "@src/redux/features/marketSlice";
import { TSide } from "@enum/common";
const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 8,
  padding: theme.spacing(2, 4),
  borderTop: `1px solid ${theme.palette.divider}`,
}));
const ActionBtn = styled(Button)(({ theme }) => ({
  flex: 1,
}));
const Actions = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const t = useTranslations("market");
  const ticket = useAppSelector((state) => state.market.ticket);
  const handleClick = (side: TSide) => {
    dispatch(setTicket({ ...ticket, side }));
    router.push("trading");
  };
  return (
    <Wrapper>
      <ActionBtn
        variant="contained"
        color="error"
        onClick={() => handleClick(TSide.sell)}
      >
        {t("fn_symbol_cta_sell")}
      </ActionBtn>
      <ActionBtn
        variant="contained"
        color="success"
        onClick={() => handleClick(TSide.buy)}
      >
        {t("fn_symbol_cta_buy")}
      </ActionBtn>
    </Wrapper>
  );
};
export default Actions;
