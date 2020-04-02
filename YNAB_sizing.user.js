// ==UserScript==
// @name         YNAB Sizing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make the popup boxes on YNAB bigger so you can read them!
// @author       Jeremy Mickelson
// @match        https://app.youneedabudget.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(`
/* Make budget activity modal bigger */
.modal-budget-activity .modal {
  width: 75% !important;
}
.modal-budget-activity .modal .ynab-table-body {
  max-height: 45vh;
}

/* Make Monthly note modal much bigger */
.modal-budget-note .modal {
  width: 50vw !important;
  height: 25vh !important;
	display: flex;
  flex-direction: column;
}
.modal-budget-note .modal .modal-content {
  flex: 1;
}
.modal-budget-note .modal textarea {
  height: 100% !important;
  max-height: initial;
}
  `);

  console.log('Jeremy - Styles added');
})();
