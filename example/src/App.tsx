import { Typography } from "@mui/material";
import { CollapsibleLabelDivider, LabelDivider } from "mui-label-divider";
import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LabelDivider label="SIMPLE" />
      <LabelDivider label="CLICKABLE" onClick={() => alert("clicked")} />
      <CollapsibleLabelDivider
        label={`${open ? "HIDE" : "SHOW"} CONTENT`}
        open={open}
        onClick={() => setOpen((x) => !x)}
      >
        <Typography align="center">content</Typography>
      </CollapsibleLabelDivider>
    </>
  );
}
