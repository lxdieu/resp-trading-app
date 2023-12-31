import colors from "../../colors";
import breakpoints from "@/src/themes/breakpoints";

const InputBase = {
  styleOverrides: {
    root: {
      background: colors.ln10,
      fontSize: 16,
      lineHeight: "24px",
      "&:disabled": {
        opacity: 0.5,
      },
      [`@media screen and (min-width: ${breakpoints.xxl}px)`]: {
        fontSize: "1.8rem",
        lineHeight: "2.8rem",
      },
      [`@media screen and (max-width: ${breakpoints.xl}px)`]: {
        fontSize: "1.4rem",
        lineHeight: "2.2rem",
      },
      [`@media screen and (max-width: ${breakpoints.lg}px)`]: {
        fontSize: "1.2rem",
        lineHeight: "1.6rem",
      },
      [`@media screen and (max-width: 1024px)`]: {
        fontSize: "1.4rem",
        lineHeight: "2.2rem",
      },
    },
    adornedStart: {
      paddingLeft: "6px !important",
    },
  },
};
export default InputBase;
