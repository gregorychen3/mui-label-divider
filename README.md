# mui-label-divider

> Labeled divider component for Material-UI / React

[![NPM](https://img.shields.io/npm/v/mui-label-divider.svg)](https://www.npmjs.com/package/mui-label-divider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mui-label-divider
```

## Usage Examples

```tsx
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
        content
      </CollapsibleLabelDivider>
    </>
  );
}
```

![Light theme](/screenshots/light.png?raw=true "Light Theme")
![Dark theme](/screenshots/dark.png?raw=true "Dark Theme")
![Collapsible](/screenshots/collapsible.gif?raw=true "Collapsible")

## Credits

Adapted for Material-UI from Puigcerber's original raw html/css solution at https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle.

Inspired by https://wikiki.github.io/layout/divider/.

## License

MIT © [gregorychen3](https://github.com/gregorychen3)
