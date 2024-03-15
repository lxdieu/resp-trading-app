import * as S from "./styles";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import colors from "@src/themes/colors";
import { useAppSelector } from "@src/redux/hooks";
import { formatNumber } from "@/src/utils/helpers";
const Content = () => {
  const t = useTranslations("account");
  const { accountSummary, activeAccount } = useAppSelector(
    (state) => state.user
  );
  return accountSummary && activeAccount ? (
    <S.Wrapper>
      <S.RowWrapper isHeader bgColor={colors.sy80}>
        <Typography color={colors.sb60}>{t("en_cu_asset_total")}</Typography>
        <Typography fontWeight={600} color={colors.sb60}>
          {formatNumber(accountSummary[activeAccount.id]?.totalseamt)}
        </Typography>
      </S.RowWrapper>
      <S.RowWrapper isHeader bgColor={colors.sb60}>
        <Typography color={colors.p300}>{t("en_cu_cash_total")}</Typography>
        <Typography fontWeight={600} color={colors.p300}>
          {formatNumber(accountSummary[activeAccount.id]?.intbalance)}
        </Typography>
      </S.RowWrapper>
      <S.RowWrapper>
        <Typography>{t("en_cu_cash_onHand")}</Typography>
        <Typography>
          {formatNumber(accountSummary[activeAccount.id]?.balance)}
        </Typography>
      </S.RowWrapper>
      <S.RowWrapper>
        <Typography>{t("en_cu_cash_payables")}</Typography>
        <Typography>
          {formatNumber(accountSummary[activeAccount.id]?.tdbalance)}
        </Typography>
      </S.RowWrapper>
      <S.RowWrapper>
        <Typography>{t("en_cu_cash_receivables")}</Typography>
        <Typography>
          {formatNumber(accountSummary[activeAccount.id]?.cibalance)}
        </Typography>
      </S.RowWrapper>
      <S.RowWrapper>
        <Typography>{t("en_cu_cash_advance")}</Typography>
        <Typography>
          {formatNumber(accountSummary[activeAccount.id]?.avladvance)}
        </Typography>
      </S.RowWrapper>
      <S.RowWrapper>
        <Typography>{t("fn_acc_cu_stock_buyPower")}</Typography>
        <Typography>
          {formatNumber(accountSummary[activeAccount.id]?.pp)}
        </Typography>
      </S.RowWrapper>
      <S.RowWrapper>
        <Typography>{t("en_cu_stock_sum_total")}</Typography>
        <Typography>
          {formatNumber(accountSummary[activeAccount.id]?.totalseamt)}
        </Typography>
      </S.RowWrapper>
      <S.RowWrapper isHeader bgColor={colors.sb60}>
        <Typography color={colors.p300}>
          {t("en_cu_stock_sum_onhandVal")}
        </Typography>
        <Typography fontWeight={600} color={colors.p300}>
          {formatNumber(accountSummary[activeAccount.id]?.totalbuyamt)}
        </Typography>
      </S.RowWrapper>
      <S.RowWrapper>
        <Typography>{t("en_cu_stock_sum_receivingVal")}</Typography>
        <Typography>
          {formatNumber(accountSummary[activeAccount.id]?.netassval)}
        </Typography>
      </S.RowWrapper>
      <S.RowWrapper>
        <Typography>{t("fn_acc_cta_port")}</Typography>
      </S.RowWrapper>
    </S.Wrapper>
  ) : null;
};
export default Content;
