
var cron = require('../lib/cron'),
  should = require('should');

var test = function (str, val) {
  it(str, function () {
    cron(str).should.equal(val);
  });
};

describe('', function () {
  // Explicit times
  test('every tuesday', '00 00 * * 2');
  test('every wednesday at 2am', '00 2 * * 3');
  test('every sunday at 2pm', '00 14 * * 0');
  test('every monday at noon', '00 12 * * 1');
  test('every saturday at 2am and 2pm', '00 2,14 * * 6');
  test('every thursday at 3:12am', '12 3 * * 4');

  // Vague repetition
  test('every minute', '*/1 * * * *');
  test('every 15 minutes', '*/15 * * * *');
  test('every hour', '* */1 * * *');
  test('every 4 hours', '* */4 * * *');

  // Invalid
  test('every', false);
  test('every mo', false);
  test('every tuesday at', false);
});
