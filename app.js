
var cronstring = require('cronstring');

var $input = $('#input');
var $output = $('#output');


$input.on('input', function () {
  var val = $input.val();
  $output.text(cronstring(val));
  window.location.hash = encodeURIComponent(val);
});

if (window.location.hash) {
  $input.val(decodeURIComponent(window.location.hash.substr(1)));
  $input.trigger('input');
}

