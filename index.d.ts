
interface CopyTextToClipboard {
  (key: string, method: boolean): void
}

declare var copyTextToClipboard: CopyTextToClipboard
export default copyTextToClipboard;