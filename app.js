var express = require('express'),
  app = express(),
  PORT = process.env.PORT || 1344;

console.log('setting up server on port ' ,PORT);
app.use(express.static(__dirname + '/dist'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/bitstamp', function (req, res) {
  const url = req.query.url,
   request = require('request');

  if(typeof url !== 'string' || !url.length)
    return res.status(400).send({msg: 'Invalid request to process'});

  request(url, {json: true}, (err, rsp, body)=>{
    if(err) return res.status(400).send(err);

    res.send(body);
  });
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/dist/index.html');
});
app.listen(PORT);
console.log('server is all set..');


module.exports = app;
