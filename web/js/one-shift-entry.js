(function () {
  'use strict';
  // Keep the first screen independent of the warehouse engine, scene and styles.
  function script(url) {
    return new Promise(function (resolve, reject) {
      var element = document.createElement('script');
      element.src = url; element.onload = resolve;
      element.onerror = function () { reject(new Error('Could not load ' + url)); };
      document.head.appendChild(element);
    });
  }
  var inboundLoading;
  window.loadInboundWarehouse = function () {
    if (!inboundLoading) inboundLoading = script('js/demo-activity.js?v=1').then(function () { return script('js/one-shift-inbound-warehouse.js?v=15.2'); });
    return inboundLoading;
  };
  async function boot() {
    await script('js/one-shift-inbound-model.js?v=15');
    await script('js/one-shift-inbound.js?v=15.2');
  }
  boot().catch(function () {
    document.body.className = 'inbound-page';
    document.getElementById('inbound-app').hidden = false;
    document.getElementById('in-main').innerHTML = '<section class="in-home"><h1>That screen could not load.</h1><p>Check your connection, then try again.</p><a class="in-primary" href="./">Try again</a></section>';
  });
}());
