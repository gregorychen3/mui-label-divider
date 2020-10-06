# mui-label-divider

> Labeled divider component for Material-UI / React

[![NPM](https://img.shields.io/npm/v/mui-label-divider.svg)](https://www.npmjs.com/package/mui-label-divider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mui-label-divider
```

## Usage (Simple Label)

```tsx
import { LabelDivider } from "mui-label-divider";
import React from "react";

export default function App() {
  return <LabelDivider>SIMPLE</LabelDivider>;
}
```

![Light theme](/screenshots/light.png?raw=true "Light Theme")
![Dark theme](/screenshots/dark.png?raw=true "Dark Theme")

## Usage (Children as Label)

```tsx
interface Props {
  open: boolean;
  onClick: () => void;
}
const CollapsibleLabelDivider = ({ open, onClick }: Props) => {
  return (
    <LabelDivider onClick={onClick}>
      {open ? <ArrowDropDownIcon color="disabled" /> : <ArrowRightIcon color="disabled" />}
      <Typography variant="subtitle2" color="textSecondary" align="center">
        EXPANDABLE
      </Typography>
    </LabelDivider>
  );
};

export default function App() {
  const [open, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <CollapsibleLabelDivider open={open} onClick={toggleOpen} />
      {open && "More Content"}
    </>
  );
}
```

![Collapsible](/screenshots/collapsible.png?raw=true "Collapsible")

## Credits

Adapted for Material-UI from Puigcerber's original raw html/css solution at https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle.

Inspired by https://wikiki.github.io/layout/divider/.

## License

MIT © [gregorychen3](https://github.com/gregorychen3)
