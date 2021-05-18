/* global GOVUK, $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  GOVUK.modules.start()
  window.GOVUKFrontend.initAll()

})

var copyButton = document.getElementById('copyButton');

copyButton.classList.remove("govuk-visually-hidden");

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  copyButton.innerHTML = "Email copied";
}
