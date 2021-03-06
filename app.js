const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/domainHome.html');
}); 

app.get('/destination1', function(req, res){
  res.sendFile(__dirname + '/public/movedpage.html');
/*   res.set('location', '/destination2');
  res.status(301).send() */
}); 
app.get('/destination2', function(req, res){
  res.sendFile(__dirname + '/public/finalpage.html');
}); 

app.listen(process.env.PORT || 5000, function(){
  console.log("Listening on port " + (process.env.PORT || 5000))
});
