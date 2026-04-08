import { NAME, TRANSLATION } from './translations'
import { E97 } from './e97'
import css from './style.css'

$(document).on('bootstrap.wme', () => {
  WMEUI.addTranslation(NAME, TRANSLATION)
  WMEUI.addStyle(css)

  new E97(NAME)
})
