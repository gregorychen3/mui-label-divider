import { Typography } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { LabelDivider } from "mui-label-divider";
import React, { useState } from "react";

export default function App() {
  const [open, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <LabelDivider>SIMPLE</LabelDivider>
      <LabelDivider onClick={() => alert("clicked")}>CLICKABLE</LabelDivider>
      <CollapsibleLabelDivider open={open} onClick={toggleOpen} />
      {open && "More Content"}
    </>
  );
}

interface CollapsibleLabelDividerProps {
  open: boolean;
  onClick: () => void;
}
const CollapsibleLabelDivider = ({ open, onClick }: CollapsibleLabelDividerProps) => {
  return (
    <LabelDivider onClick={onClick}>
      {open ? <ArrowDropDownIcon color="disabled" /> : <ArrowRightIcon color="disabled" />}
      <Typography variant="subtitle2" color="textSecondary" align="center">
        EXPANDABLE
      </Typography>
    </LabelDivider>
  );
};
