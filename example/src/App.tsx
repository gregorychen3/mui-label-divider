import { LabelDivider } from "mui-label-divider";

export default function App() {
  return (
    <>
      <LabelDivider label="SIMPLE" />
      <LabelDivider label="CLICKABLE" onClick={() => alert("clicked")} />
      <LabelDivider label="COLLAPSIBLE" collapsible>
        content
      </LabelDivider>
    </>
  );
}
