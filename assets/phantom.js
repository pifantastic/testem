var system = require('system');
var page = require('webpage').create();
var url = system.args[1];
page.viewportSize = {
  width: 1024,
  height: 4096
};
page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    });
};
page.open(url);
