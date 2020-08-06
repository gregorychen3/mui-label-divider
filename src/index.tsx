import { makeStyles, Typography } from "@material-ui/core";
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
}));

interface Props {
  label: string;
}
export const LabelDivider = ({ label }: Props) => {
  const classes = useStyles();
  return (
    <Typography variant="subtitle2" color="textSecondary" align="center" className={classes.label}>
      {label}
    </Typography>
  );
};
