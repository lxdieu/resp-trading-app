import { Typography, OutlinedInput } from "@mui/material";
import { styled } from "@mui/system";
import { Cancel, Search } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import colors from "@src/themes/colors";

interface IProps {
  searchText: string;
  setSearchText: (val: string) => void;
  setOpenPanel: (val: boolean) => void;
  openPanel: boolean;
}

const Wrapper = styled("div")(() => ({
  display: "flex",
  gap: 8,
  alignItems: "center",
}));
const CloseBtn = styled(Typography)(() => ({
  cursor: "pointer",
}));

const CancelIcon = styled(Cancel)(() => ({
  marginRight: 16,
}));

const Input = styled(OutlinedInput)(() => ({
  backgroundColor: colors.nb5,
  borderRadius: 12,
  "& input": {
    padding: 8,
  },
}));

const SearchInput = ({
  searchText,
  setSearchText,
  setOpenPanel,
  openPanel,
}: IProps) => {
  const t = useTranslations("market");
  const handleClearSearchText = () => {
    setSearchText("");
  };
  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    let txt = e.target.value;
    if (txt.length > 20) {
      txt = txt.substring(0, 20);
    }
    setSearchText(txt.toUpperCase());
  };
  return (
    <Wrapper>
      <Input
        autoFocus
        onFocus={() => setOpenPanel(true)}
        value={searchText}
        onChange={handleChangeSearchText}
        fullWidth
        endAdornment={
          !!searchText && (
            <CancelIcon
              onClick={handleClearSearchText}
              fontSize="large"
              color="secondary"
            />
          )
        }
        startAdornment={<Search fontSize="large" color="secondary" />}
      />
      {openPanel && (
        <CloseBtn onClick={() => setOpenPanel(false)}>
          {t("fn_symbol_cta_close")}
        </CloseBtn>
      )}
    </Wrapper>
  );
};
export default SearchInput;
