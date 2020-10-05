import { LabelDivider } from "mui-label-divider";
import React from "react";

export default function App() {
  return (
    <>
      <LabelDivider label="SIMPLE" />
      <LabelDivider label="CLICKABLE" onClick={() => alert("clicked")} />
    </>
  );
}
