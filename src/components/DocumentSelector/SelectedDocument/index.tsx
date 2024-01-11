import { Typography } from "@mui/material";
import { useState } from "react";
import { ThemeColor } from "../../../theme";
import Icon from "../../shared/Icon";
import OutlineInput from "../../shared/Input/OutlineInput";

const SelectedDocument = () => {
  const [search, setSearch] = useState("");

  const handleUpdateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex-1 flex flex-col gap-3 p-4 border border-gray rounded-lg bg-white">
      <Typography variant="body1">Selected Documents</Typography>
      <OutlineInput
        type="text"
        icon="search"
        name="search"
        placeholder="Search"
        onChange={handleUpdateSearch}
        value={search}
      />

      <div className="border border-gray-2 rounded-lg flex-1 p-10 bg-secondary-background flex flex-col gap-6">
        <div className="flex justify-center">
          <Icon name="arrowPointingLeft" />
        </div>
        <Typography
          variant="h6"
          color={ThemeColor.GRAY_3}
          className="text-center"
        >
          Select documents from the left panel to have employees review them and
          provide a signature acknowledging review
        </Typography>
      </div>
    </div>
  );
};

export default SelectedDocument;
