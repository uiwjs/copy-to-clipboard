import copyTextToClipboard from '../src/main';

test('copyTextToClipboard should copy the text to the clipboard and return true', () => {
  const text = 'Hello, world!';
  const copied = jest.fn();
  document.execCommand = jest.fn(() => true);
  const cb = isCopy => {
    copied(isCopy);
    expect(isCopy).toBe(true);
  };

  copyTextToClipboard(text, cb);

  expect(copied).toHaveBeenCalledWith(true);
});

test('copyTextToClipboard should not copy the text to the clipboard and return false', () => {
  const text = 'Hello, world!';
  const copied = jest.fn();
  const cb = isCopy => {
    copied(isCopy);
    expect(isCopy).toBe(false);
  };

  // Simulating an error during `document.execCommand('copy')`
  document.execCommand = jest.fn(() => {
    throw new Error('Copy failed');
  });

  copyTextToClipboard(text, cb);

  expect(copied).toHaveBeenCalledWith(false);
});


it('should copy text to clipboard', () => {
  let mockCb = jest.fn();
  const text = 'Hello, world!';
  const mockRange = {
    commonAncestorContainer: 'mockContainer',
    startContainer: 'mockContainer',
    endContainer: 'mockContainer',
    startOffset: 0,
    endOffset: 0,
  };

  document.execCommand = jest.fn(() => true);
  document.getSelection = jest.fn(() => ({
    rangeCount: 1,
    getRangeAt: jest.fn(() => mockRange),
    removeAllRanges: jest.fn(),
    addRange: jest.fn(),
  }));
  document.createElement = jest.fn(() => ({
    value: '',
    setAttribute: jest.fn(),
    select: jest.fn(),
  }));
  document.body.appendChild = jest.fn();
  document.body.removeChild = jest.fn();

  copyTextToClipboard(text, mockCb);

  expect(document.createElement).toHaveBeenCalledWith('textarea');
  expect(document.body.appendChild).toHaveBeenCalled();
  expect(document.execCommand).toHaveBeenCalledWith('copy');
  expect(document.body.removeChild).toHaveBeenCalled();
  expect(mockCb).toHaveBeenCalledWith(true);
});