// ==UserScript==
// @name         WME E97 Copy address button
// @version      0.0.1
// @description  One button and one shortcut for copy POI address
// @author       Anton Shevchuk
// @license      MIT License
// @grant        none
// @include      https://www.waze.com/editor*
// @include      https://www.waze.com/*/editor*
// @include      https://beta.waze.com/editor*
// @include      https://beta.waze.com/*/editor*
// @exclude      https://www.waze.com/user/editor*
// @exclude      https://beta.waze.com/user/editor*
// @icon         data:image/png;base64,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
// @require      https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @require      https://greasyfork.org/scripts/389117-apihelper/code/APIHelper.js?version=733775
// @require      https://greasyfork.org/scripts/389765-common-utils/code/CommonUtils.js?version=743259
// @namespace    https://greasyfork.org/users/227648
// ==/UserScript==

/* jshint esversion: 8 */
/* global require, $, window, console, W, I18n, OL, APIHelper, WazeWrap, Tools */

(function () {
  'use strict';

  const NAME = 'E97';

  // translation structure
  const TRANSLATION = {
    'en': {
      title: 'Copy address',
      description: 'Copy name and address of the selected POI to clipboard',
    },
    'uk': {
      title: 'Копіювати адресу',
      description: 'Копіювати до буферу обміну назву та адресу обраного POI',
    },
    'ru': {
      title: 'Копировать адреc',
      description: 'Копировать в буфер обмена название и адрес выбранного POI',
    }
  };

  let button;

  // OpenLayer styles
  APIHelper.bootstrap();
  APIHelper.addTranslation(NAME, TRANSLATION);
  APIHelper.addStyle(
    '.e97 { float: right; z-index: 100; top: 0; right: 0; margin: 0 1px}'
  );

  $(document)
    .on('ready.apihelper', ready)
    .on('landmark.apihelper', inject);


  function ready() {
    // copy-button for external providers
    let icon = document.createElement('i');
    icon.className = 'fa fa-copy w-clickable';

    button = document.createElement('div');
    button.className = 'e97';
    button.title = I18n.t(NAME).title;
    button.append(icon);

    $(button).click(copy);

    new WazeWrap.Interface.Shortcut(NAME + '-copy', I18n.t(NAME).title, NAME, I18n.t(NAME).title, 'C+D', copy, null).add();
  }

  function inject(event, element) {
    element.querySelector('div.external-providers.form-group > label').append(button);
  }

  function copy() {
    let poi = getSelectedPOI();
    if (!poi) {
      return false;
    }

    let parts = [
      poi.getAddress().getCity().getName(),
      poi.getAddress().getStreet().name,
      poi.getAddress().getHouseNumber(),
    ];

    parts = parts.filter(el => el != null);

    Tools.copyToClipboard(parts.join(', '));

    $('a.add.waze-btn.waze-btn-smaller.waze-btn-white').click();
    return false;
  }


  /**
   * @return {null|Object}
   */
  function getSelectedPOI() {
    let elements = APIHelper.getSelectedVenues();
    if (elements.length === 0) {
      return null;
    } else {
      return elements[0];
    }
  }
})();
