import { LabelDivider } from "mui-label-divider";
import React from "react";

const App = () => {
  return (
    <>
      <LabelDivider label="SIMPLE" />
      <LabelDivider label="CLICKABLE" onClick={() => alert("clicked")} />
    </>
  );
};

export default App;
