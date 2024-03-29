import colors from "@src/themes/colors";
import breakpoints from "@src/themes/breakpoints";

const Tooltip = {
  styleOverrides: {
    tooltip: {
      fontSize: "1.6rem",
      lineHeight: "2.4rem",
      backgroundColor: colors.p300,
      filter: "drop-shadow(0px 4px 12px rgba(55, 66, 77, 0.2))",
      color: colors.mn50,
      padding: "12px 16px",
      fontWeight: 400,
      "& .MuiTooltip-arrow": {
        color: colors.p300,
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
  },
};

export default Tooltip;
