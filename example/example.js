var app = require('express')(),
    cache = require('../')({ expire: 5 });

cache.on('message', function(message){
  console.log("cache", message);
});

cache.on('error', function(error){
  console.error("cache", error);
});

var port = 3000;
app.listen(port);
console.log("Server listening on " + port);
console.log("Server listening on " + port);

// Serve simple page with timestamp
app.get('/',
  cache.route(),
  function (req, res)  {
    var currTime = new Date();
    res.send("Date and time: " + currTime);
});