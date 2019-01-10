/*!
 * @uiw/copy-to-clipboard v1.0.6
 * Copy to clipboard.
 * 
 * Copyright (c) 2019 Kenny Wang
 * https://github.com/uiw-react/copy-to-clipboard.git
 * 
 * Licensed under the MIT license.
 */

function copyTextToClipboard(text, cb) {
  const textArea = document.createElement('textarea');
  //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a flash,
  // so some of these are just precautions. However in IE the element
  // is visible whilst the popup box asking the user for permission for
  // the web page to copy to the clipboard.
  //
  // Place in top-left corner of screen regardless of scroll position.

  textArea.style = {
    position: 'fixed',
    top: '-100px',
    left: 0,
    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    width: '2em',
    height: '2em',
    // We don't need padding, reducing the size if it does flash render.
    padding: 0,
    // Clean up any borders.
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    // Avoid flash of white box if rendered for any reason.
    background: 'transparent',
  };
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    const successful = document.execCommand('copy');
    const isCopy = !!successful;
    cb && cb(isCopy);
  } catch (err) {
    // console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}

export default copyTextToClipboard;
