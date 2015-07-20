var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/assets', express.static('assets'));
app.use('/bower_components', express.static('bower_components'));

app.get('/privacy', function(req, res) {
  res.render('privacy'); //I'm not sure.
});

app.get('/terms', function(req, res) {
  res.render('terms');
});

app.get('/:PI/:name', function (req, res) {
  res.send('Hello from ' + req.params.PI + ' name:' + req.params.name);
});

app.get('/adam', function (req, res) {
  res.send('Hello from adam!');
});

var port = 3000;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
