import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

// Adapted from Puigcerber's answer on https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle

const useStyles = makeStyles((theme) => ({
  label: {
    overflow: "hidden",
    textAlign: "center",
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
  },
  clickable: { cursor: "pointer" },
}));

interface Props {
  label: string;
  onClick?: () => void;
}
export const LabelDivider = ({ label, onClick }: Props) => {
  const classes = useStyles();
  return (
    <Typography
      variant="subtitle2"
      color="textSecondary"
      align="center"
      className={clsx(classes.label, { [classes.clickable]: onClick })}
      onClick={onClick}
    >
      {label}
    </Typography>
  );
};
