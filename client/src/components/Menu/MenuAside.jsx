import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { options } from "../../data/DataMenu";

export const MenuAside = () => {
  return (
    <div>
      {options?.map(({ name, data }) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">{name}</Typography>
          </AccordionSummary>
          {data?.map((d) => (
            <AccordionDetails>
              <Typography>{d}</Typography>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </div>
  );
};
