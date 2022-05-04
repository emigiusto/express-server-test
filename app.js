const express = require('express');
const app = express();
app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/



app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/movedpage.html');
/*   res.set('location', '/destination');
  res.status(301).send() */
}); 
app.get('/destination', function(req, res){
  res.set('location', '/destination2');
  res.status(301).send()
}); 
app.get('/destination2', function(req, res){
  res.sendFile(__dirname + '/public/finalfinalpage.html');
}); 

app.listen(process.env.PORT || 5000, function(){
  console.log("Listening on port " + (process.env.PORT || 5000))
});
