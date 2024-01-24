import colors from "@/src/themes/colors";
import { styled } from "@mui/system";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  padding: theme.spacing(4),
  background: theme.palette.mode === "dark" ? colors.p100 : colors.p300,
  flexDirection: "column",
}));

export const OTP = styled("div")(({ theme }) => ({}));
export const OTPInput = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  width: "100%",
  alignItems: "center",
}));
