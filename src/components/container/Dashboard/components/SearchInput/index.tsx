import { OutlinedInput } from "@mui/material";
import { styled } from "@mui/system";
import { Search } from "@mui/icons-material";
interface IProps {
  setOpenPanel: (val: boolean) => void;
}

const Wrapper = styled("div")(() => ({
  display: "flex",
  gap: 8,
  alignItems: "center",
}));
const Input = styled(OutlinedInput)(() => ({
  backgroundColor: "#f0f0f0",
  borderRadius: 12,
  "& input": {
    padding: 8,
  },
}));

const SearchInput = ({ setOpenPanel }: IProps) => {
  return (
    <Wrapper>
      <Input
        onFocus={() => setOpenPanel(true)}
        fullWidth
        startAdornment={<Search fontSize="large" color="secondary" />}
      />
    </Wrapper>
  );
};
export default SearchInput;
