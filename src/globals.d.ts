declare module '*.css' {
  const css: string
  export default css
}

declare const GM: {
  setClipboard(text: string): void
}

declare class WMEBase {
  name: string
  id: string
  wmeSDK: any

  constructor(name: string)

  log(...args: any[]): void
  getSelectedVenues(): any[]
}

declare class WMEUI {
  static addTranslation(name: string, translation: Record<string, any>): void
  static addStyle(css: string): void
}

declare class WMEUIHelper {
  constructor(name: string)
}

declare const I18n: {
  t(key: string): any
}
