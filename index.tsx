import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { DOMAttributes, useState } from "react";

const Header = styled("div")(({ onClick, theme }) => ({
  cursor: onClick ? "pointer" : undefined,

  // label and icon alignment
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  // divider lines
  // adapted from Puigcerber's answer at
  // https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle
  overflow: "hidden",
  "&::before, &::after": {
    backgroundColor: theme.palette.divider,
    content: '""',
    display: "inline-block",
    height: "1px",
    position: "relative",
    verticalAlign: "middle",
    width: "50%",
  },
  "&::before": { right: theme.spacing(1), marginLeft: "-50%" },
  "&::after": { left: theme.spacing(1), marginRight: "-50%" },
}));

type LabelDividerProps = {
  label: string;
  collapsible?: boolean;
} & DOMAttributes<HTMLDivElement>;

export const LabelDivider = (props: LabelDividerProps) => {
  const { label, collapsible = false, onClick, children, ...restProps } = props;

  const [open, setIsOpen] = useState(false);

  let handleClick = undefined;
  if (collapsible || onClick) {
    handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      collapsible && setIsOpen((prev) => !prev);
      onClick?.(e);
    };
  }

  return (
    <div>
      <Header onClick={handleClick} {...restProps}>
        {collapsible && (open ? <ArrowDropDown color="disabled" /> : <ArrowRight color="disabled" />)}
        <Typography variant="subtitle2" color="textSecondary">
          {label}
        </Typography>
      </Header>
      {collapsible && open && children}
    </div>
  );
};
