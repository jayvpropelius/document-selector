import { Typography } from "@mui/material";
import AvailableDocument from "./AvailableDocument";
import SelectedDocument from "./SelectedDocument";

const DocumentSelector = () => {
  return (
    <div className="container py-6 mx-auto">
      <Typography variant="body2" >
        Select the agreements, notices and documents you want Jason Smith to
        sign
      </Typography>
      <div className="mt-2 flex gap-5">
        <AvailableDocument />
        <SelectedDocument />
      </div>
    </div>
  );
};

export default DocumentSelector;
