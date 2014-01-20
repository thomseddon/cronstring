
var cronstring = require('cronstring');

var $input = $('#input');
var $output = $('#output');

var update = function (val) {
  val = cronstring(val);

  if (val === false) {
    if (!$output.hasClass('invalid'))
      $output.addClass('invalid');
  } else {
    $output.removeClass('invalid');
    $output.text(val);
    window.location.hash = encodeURIComponent(val);
  }
};

$input.on('input', function () {
  update($input.val());
});

if (window.location.hash)
  update(decodeURIComponent(window.location.hash.substr(1)));

