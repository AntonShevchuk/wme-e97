import { NAME, TRANSLATION } from './translations'
import { E97 } from './e97'
import css from './style.css'

WMEUI.addTranslation(NAME, TRANSLATION)
WMEUI.addStyle(css)

$(document).on('bootstrap.wme', () => {
  new E97(NAME)
})
