import { NAME } from './translations'

export class E97 extends WMEBase {
  button: HTMLButtonElement

  constructor(name: string) {
    super(name)

    this.createButton()

    this.createShortcut()
  }

  /**
   * Handler for `venue.wme` event
   * @param {jQuery.Event} event
   * @param {HTMLElement} element
   * @param {Venue} model
   * @return {Null}
   */
  onVenue(event, element, model) {
    if (element.querySelector('div.external-providers-control > wz-label')) {
      element
        .querySelector('div.external-providers-control > wz-label')
        .append(this.button)
    }
  }

  /**
   * Create `copy` button for external providers
   */
  createButton() {
    let icon = document.createElement('i')
    icon.className = 'fa fa-copy w-clickable'

    this.button = document.createElement('button')
    this.button.className = 'e97'
    this.button.title = I18n.t(NAME).title
    this.button.append(icon)
    this.button.onclick = () => this.copyAddress()
  }

  /**
   * Create the shortcut
   */
  createShortcut() {
    let shortcut = {
      callback: () => this.copyAddress(),
      description: I18n.t(this.name).description,
      shortcutId: this.id,
      shortcutKeys: 'C+D',
    };

    if (this.wmeSDK.Shortcuts.areShortcutKeysInUse({ shortcutKeys: shortcut.shortcutKeys })) {
      this.log('Shortcut already in use')
      shortcut.shortcutKeys = null
    }
    this.wmeSDK.Shortcuts.createShortcut(shortcut);
  }

  /**
   * Copy the venue address to the clipboard
   * @return {boolean}
   */
  copyAddress() {
    let venues = this.getSelectedVenues()
    if (venues.length === 0) {
      return false
    }

    let venue = venues[0]
    let address = this.wmeSDK.DataModel.Venues.getAddress({ venueId: venue.id })

    let parts = [
      address.houseNumber,
      address.street.name,
      address.city.name,
    ]

    let text = parts.filter(el => el != null).join(', ')

    GM.setClipboard(text)

    this.log('copied "' + text + '"')

    $('wz-button.external-provider-add-new').click()
    return false
  }
}
