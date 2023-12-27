import { TextField } from "@mui/material";
import { ITickerOpt } from "@/src/interface/common";
import { useState } from "react";
import SearchPanel from "./SearchPanel";
interface IProps {
  handleSelectTicker: (val: ITickerOpt) => void;
}
const SearchInput = ({ handleSelectTicker }: IProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const [openPanel, setOpenPanel] = useState<boolean>(false);
  const handleChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    let txt = e.target.value;
    if (txt.length > 20) {
      txt = txt.substring(0, 20);
    }
    setSearchText(txt);
  };
  const handleClickTicker = (val: ITickerOpt) => {
    handleSelectTicker(val);
    setOpenPanel(false);
  };
  return (
    <div>
      <TextField
        onFocus={() => setOpenPanel(true)}
        value={searchText}
        onChange={handleChangeSearchText}
        fullWidth
      />
      <SearchPanel
        searchText={searchText}
        open={openPanel}
        handleSelectTicker={handleClickTicker}
      />
    </div>
  );
};
export default SearchInput;
