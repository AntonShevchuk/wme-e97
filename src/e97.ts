import { NAME } from './translations'
import type { Venue, VenueAddress } from 'wme-sdk-typings'

export class E97 extends WMEBase {
  button: HTMLButtonElement

  constructor(name: string) {
    super(name)

    this.createButton()

    this.initShortcuts()
  }

  onVenue(event: JQuery.Event, element: HTMLElement, model: Venue) {
    if (element.querySelector('div.external-providers-control > wz-label')) {
      element
        .querySelector('div.external-providers-control > wz-label')
        .append(this.button)
    }
  }

  /**
   * Create a `copy` button for external providers
   */
  createButton() {
    let icon = document.createElement('i')
    icon.className = 'fa fa-copy w-clickable'

    this.button = document.createElement('button')
    this.button.className = 'e97'
    this.button.title = WMEUI.t(NAME).title
    this.button.append(icon)
    this.button.onclick = () => this.copyAddress()
  }

  /**
   * Create the shortcut
   */
  initShortcuts() {
    this.createShortcut('copy', WMEUI.t(NAME).description, 'C+D', () => this.copyAddress())
  }

  /**
   * Copy the venue address to the clipboard
   * @return {boolean}
   */
  copyAddress(): boolean {
    let venues = this.getSelectedVenues()
    if (venues.length === 0) {
      return false
    }

    let venue: Venue = venues[0]
    let address: VenueAddress = this.wmeSDK.DataModel.Venues.getAddress({ venueId: venue.id })

    let parts = [
      address.houseNumber,
      address.street?.name,
      address.city?.name,
    ]

    let text = parts.filter(el => !!el).join(', ')

    GM.setClipboard(text)

    this.log('copied "' + text + '"')

    $('wz-button.external-provider-add-new').trigger("click")
    return false
  }
}
