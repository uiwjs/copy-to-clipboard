copy text to clipboard
---

[![](https://img.shields.io/github/issues/uiw-react/copy-to-clipboard.svg)](https://github.com/uiw-react/copy-to-clipboard/releases)
[![](https://img.shields.io/github/forks/uiw-react/copy-to-clipboard.svg)](https://github.com/uiw-react/copy-to-clipboard/network)
[![](https://img.shields.io/github/stars/uiw-react/copy-to-clipboard.svg)](https://github.com/uiw-react/copy-to-clipboard/stargazers)
[![](https://img.shields.io/github/release/uiw-react/copy-to-clipboard.svg)](https://github.com/uiw-react/copy-to-clipboard/releases)

**This styling is an extra step which is likely not required.**

Why is it here? To ensure:

1. the element is able to have focus and selection.
2. if element was to `flash` render it has minimal visual impact.
3. less flakyness with selection and copying which **might** occur if the textarea element is not visible.

The likelihood is the element won't even render, not even a flash, so some of these are just precautions. However in IE the element is visible whilst the popup box asking the user for permission for the web page to copy to the clipboard. Place in top-left corner of screen regardless of scroll position.

## Usage

You will need Node.js installed on your system.

```bash
$ npm i @uiw/copy-to-clipboard
```

```js
import copyTextToClipboard from '@uiw/copy-to-clipboard';

copyTextToClipboard('test', (isCopy) => {
  console.log('isCopy:', isCopy);
});
```

Or manually download and link [copy-to-clipboard](https://unpkg.com/@uiw/copy-to-clipboard/dist/) in your HTML, It can also be downloaded via [UNPKG](https://unpkg.com/@uiw/copy-to-clipboard/dist/):

```html
<script src="https://unpkg.com/@uiw/copy-to-clipboard/dist/copy-to-clipboard.umd.js"></script>
<script type="text/javascript">
copyTextToClipboard('test', (isCopy) => {
  console.log('isCopy:', isCopy);
});
</script>
```

### License

Licensed under the MIT License.