// // server.js
// // where your node app starts

// // init project
// const express = require('express');
// const app = express();

// // we've started you off with Express, 
// // but feel free to use whatever libs or frameworks you'd like through `package.json`.

// // http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

// // http://expressjs.com/en/starter/basic-routing.html
// app.get('/', function(request, response) {
//   response.sendFile(__dirname + '/views/index.html');
// });

// // listen for requests :)
// const listener = app.listen(process.env.PORT, function() {
//   console.log('Your app is listening on port ' + listener.address().port);
// });

const line = require('@line/bot-sdk');
const express = require('express');
// const bodyParser = require("body-parser");
const axios = require('axios');
const options = require('./db/connectionAzure');
var knex = require('knex')(options);
const {Line} = require('messaging-api-line');


const volleyball = require('volleyball');
require('dotenv').config();
const api = require('./api/balang');

 
const config = {
  channelAccessToken: "9q1vjHNqSV1wTBV+tiFMFeee1vhzpngxISCHGxvp0dNzmuIXFREOmoh4+ovBP85R1KHHpfK0FyBbtRBkJLmHhv7I4pvzDtdtkAYNa8FJk7bGEcvMfGoVtwcYKezrUJvVdOYuWmdnpSxZ+sg8cbcqhwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "a78543731191c3bafe74f95bf9739a8b",
};
 
// create LINE SDK client
const client = new line.Client(config);
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser);
app.use(volleyball);
// app.use(express.json());
app.use('/api',api);

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((e)=>{
      console.log(e);
    });
 
});

app.get('/',(req,res)=>{
    res.json("halooo")
})
 
function handleEvent(event) {
   
    if(event.message.text == "hai"){
      const echo = { type: 'text', text: "Halo juga :)·" };
      return client.replyMessage(event.replyToken, [
        Line.createText('Hello'),
        Line.createText('End'),
      ]);
    }else if(event.message.text == "barang"){
      let echo = "Daftar Barang\n==============";
      // {"id":1,"nama":"tas","pemilik":"supri","lokasiBarang":"bem"}
      axios.get('https://butter-mail.glitch.me/api/barang').then(function(res){
        res.data.map(function(result){
          echo += "\nNama Barang : " + result.nama + "\n" +"Pemilik Barang : " + result.pemilik + "\n" +"Lokasi Barang : " + result.lokasiBarang+  "\n--------------";
        }).join('');
        return client.replyMessage(event.replyToken,[
            Line.createText(echo),
          ]);
        // console.log("hallo");
        // console.log(res);
        // return client.replyMessage(event.replyToken, res);
      }).catch(function(err){
        console.log("error");
        console.log(err);
      })
    }else if(event.message.text == "sayang kamu"){
      const echo = { type: 'text', text: "sayang kamu juga :)·" };
      return client.replyMessage(event.replyToken, echo);
    }else{
      const echo = { type: 'text', text: "Saya tidak mengerti, saya simpan dulu" };
      return client.replyMessage(event.replyToken, echo);
    }
}
 
// listen on port
const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});