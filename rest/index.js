const https = require('https')
const request = require('request');
let express = require('express') 
let  app = express() 
const url = "https://raw.githubusercontent.com/openfootball/football.json/master/2019-20/en.1.json";
const  port = process.env.PORT || 8080 


app.get('/api', function(req, res) {
    res.send('Good To Go')
  })
app.get('/api/events', function(req, res) {
    request(url, { json: true }, (err, result, body) => {
        if (err) { return console.log(err); }
        res.json(body.matches);
        });
})

app.listen(port)
    console.log('Ready On Port' + port)