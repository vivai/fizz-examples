const gulp = require('gulp-util'),
      express = require('express'),
      sleep = require('sleep').sleep,
      app = express(),
      router = new express.Router(),
      PORT = process.argv[2],
      DOCUMENT_ROOT = process.argv[3],
      SLEEP_TIME_SEC = 2,
      EMPTY_STRING = '';

app.use(express.static(DOCUMENT_ROOT));
app.use('/', router);

app.listen(PORT, function () {
  gulp.log(`HTTP-Server listening on port ${PORT}!`);
});

router.get('/reverse/:str', function(req, res) {
  sleep(SLEEP_TIME_SEC);
  res.json({data:reverse(req.params.str)});
});

function reverse(str) {
  return Array.from(str).reverse().join(EMPTY_STRING);
}
