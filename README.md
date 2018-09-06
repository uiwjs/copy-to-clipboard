copy text to clipboard
---


**This styling is an extra step which is likely not required.**

Why is it here? To ensure:

1. the element is able to have focus and selection.
2. if element was to `flash` render it has minimal visual impact.
3. less flakyness with selection and copying which **might** occur if the textarea element is not visible.

The likelihood is the element won't even render, not even a flash, so some of these are just precautions. However in IE the element is visible whilst the popup box asking the user for permission for the web page to copy to the clipboard. Place in top-left corner of screen regardless of scroll position.

## Usage

You will need Node.js installed on your system.

```bash
$ npm i copy-text-to-clipboard
```

```js
import copyTextToClipboard from '@uiw/copy-to-clipboard';

copyTextToClipboard('test', (isCopy) => {
  console.log('isCopy:', isCopy);
});
```

Or manually download and link [copy-to-clipboard]() in your HTML, It can also be downloaded via [UNPKG](https://unpkg.com/@uiw/copy-to-clipboard/dist/):

```html
<script src="https://unpkg.com/hotkeys-js/dist/hotkeys.min.js"></script>
<script type="text/javascript">
hotkeys('ctrl+a,ctrl+b,r,f', function(event,handler) {
  switch(handler.key){
    case "ctrl+a":alert('you pressed ctrl+a!');break;
    case "ctrl+b":alert('you pressed ctrl+b!');break;
    case "r":alert('you pressed r!');break;
    case "f":alert('you pressed f!');break;
  }
});
</script>
```

### License

Licensed under the MIT License.