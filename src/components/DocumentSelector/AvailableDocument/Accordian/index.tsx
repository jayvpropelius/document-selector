import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ThemeColor } from "../../../../theme";
import Icon from "../../../shared/Icon";
import { JOB_TEMPLATE_LIST } from "../../constant";

export default function AccordionUsage() {
  return (
    <div className="border border-orange rounded-lg bg-background">
      {JOB_TEMPLATE_LIST.map((i) => (
        <Accordion
          key={i.id}
          style={{
            margin: "0px",
          }}
          sx={{
            "&.MuiPaper-root": {
              background: ThemeColor.BACKGROUND,
              "&:first-child": {
                borderTopLeftRadius: "8px !important",
                borderTopRightRadius: "8px !important",
              },
              "&:last-child": {
                borderBottomLeftRadius: "8px !important",
                borderBottomRightRadius: "8px !important",
              },
            },
            ".MuiAccordionDetails-root": {
              background: ThemeColor.WHITE,
            },
            ".MuiButtonBase-root": {
              height: "56px !important",
              margin: "0px !important",
              "&.Mui-expanded": {
                borderTopLeftRadius: "8px !important",
                borderTopRightRadius: "8px !important",
                background: `${ThemeColor.SECONDARY_BACKGROUND} !important`,
                minHeight: "unset !important",
                borderBottom: `1px solid ${ThemeColor.GRAY}`,
              },
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {i.name}
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {i.sub_template.map((j) => (
                <div
                  className="flex justify-between items-center h-10"
                  key={j.id}
                >
                  <Typography variant="body1">{j.name}</Typography>
                  <Icon name="arrowPointingRight" />
                </div>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
