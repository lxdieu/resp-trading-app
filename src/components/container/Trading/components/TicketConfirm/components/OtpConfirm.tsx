import FieldLabel from "@/src/components/common/FieldLabel";
import * as S from "./styles";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { setTransaction } from "@/src/redux/features/marketSlice";
import { genCode } from "@/src/utils/helpers";
import { ITransaction } from "@/src/interface/common";
import { TTransactionStatus } from "@/src/enum";
import { useRouter } from "next/navigation";
const OtpConfirm = () => {
  const ticket = useAppSelector((state) => state.market.ticket);
  const account = useAppSelector((state) => state.user.account);
  const dispatch = useAppDispatch();
  const t = useTranslations("order_book");
  const [otp, setOtp] = useState<string>("");
  const [code, setCode] = useState<string>(genCode());
  const router = useRouter();
  const handleChangeOtp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };
  const handleRequestOtp = () => {
    console.log("request otp");
  };
  const handleClickCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
  };
  const handleConfirm = () => {
    const trans: ITransaction = {
      ...ticket,
      time: new Date().toISOString(),
      code,
      status: TTransactionStatus.open,
      totalValue: ticket.price * ticket.vol,
      execQty: 0,
      execValue: 0,
      pendingQty: ticket.vol,
      accountNo: account?.accountNo || "",
    };
    dispatch(setTransaction(trans));
    router.push(`/order-book`);
  };
  return (
    <S.Wrapper>
      <S.OTP>
        <FieldLabel>{t("fn_ob_inp_token")}</FieldLabel>
        <S.OTPInput>
          <TextField
            value={otp || null}
            onChange={handleChangeOtp}
            type="number"
          />
          <S.OTPButton onClick={handleRequestOtp} variant="outlined">
            {t("fn_ob_cta_token")}
          </S.OTPButton>
        </S.OTPInput>
      </S.OTP>
      <FormControlLabel
        label={t("fn_ob_inp_saveToken")}
        control={<Checkbox onChange={handleClickCheckBox} />}
      />
      <Button
        onClick={handleConfirm}
        disabled={otp.length < 6}
        variant="contained"
      >
        {t("fn_ob_cta_confirm")}
      </Button>
    </S.Wrapper>
  );
};
export default OtpConfirm;
