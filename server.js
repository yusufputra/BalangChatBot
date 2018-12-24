<<<<<<< HEAD
const line = require('@line/bot-sdk');
const express = require('express');
const axios = require('axios');
const options = require('./db/connectionAzure');
var knex = require('knex')(options);
const fetch = require('node-fetch');
const {Line} = require('messaging-api-line');


const volleyball = require('volleyball');
require('dotenv').config();
const api = require('./api/balang');

 
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};
 
// create LINE SDK client
const client = new line.Client(config);
const app = express();
// const parser = express.json();

// app.use(express.json());
app.use(volleyball);
app.use('/api',api);


// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  console.log(res);
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((e)=>{
      console.log(e);
    });
 
});

=======
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
<<<<<<< HEAD
// const bodyParser = require("body-parser");
=======
>>>>>>> 53e684438104c3f2abb0469bc15f14ce74a3e553
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

<<<<<<< HEAD
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser);
=======
>>>>>>> 53e684438104c3f2abb0469bc15f14ce74a3e553
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

>>>>>>> 5a73cfbfb7e4133a80a283e72c8f8489490edd08
app.get('/',(req,res)=>{
    res.json("halooo")
})
 
function handleEvent(event) {
<<<<<<< HEAD
    console.log('event')
    console.log(event.message.text)
=======
   
>>>>>>> 5a73cfbfb7e4133a80a283e72c8f8489490edd08
    if(event.message.text == "hai"){
      const echo = { type: 'text', text: "Halo juga :)·" };
      return client.replyMessage(event.replyToken, [
        Line.createText('Hello'),
        Line.createText('End'),
      ]);
    }else if(event.message.text == "barang"){
      let echo = "Daftar Barang\n==============";
<<<<<<< HEAD
      axios.get('https://pinto-planarian.glitch.me/api/barang').then(function(res){
=======
      // {"id":1,"nama":"tas","pemilik":"supri","lokasiBarang":"bem"}
      axios.get('https://butter-mail.glitch.me/api/barang').then(function(res){
>>>>>>> 5a73cfbfb7e4133a80a283e72c8f8489490edd08
        res.data.map(function(result){
          echo += "\nNama Barang : " + result.nama + "\n" +"Pemilik Barang : " + result.pemilik + "\n" +"Lokasi Barang : " + result.lokasiBarang+  "\n--------------";
        }).join('');
        return client.replyMessage(event.replyToken,[
            Line.createText(echo),
          ]);
<<<<<<< HEAD
=======
        // console.log("hallo");
        // console.log(res);
        // return client.replyMessage(event.replyToken, res);
>>>>>>> 5a73cfbfb7e4133a80a283e72c8f8489490edd08
      }).catch(function(err){
        console.log("error");
        console.log(err);
      })
    }else if(event.message.text == "sayang kamu"){
      const echo = { type: 'text', text: "sayang kamu juga :)·" };
      return client.replyMessage(event.replyToken, echo);
<<<<<<< HEAD
    }else if(event.message.text.startsWith("ditemukan")){
      console.log(event.message.text);
      let statement = event.message.text.split(" ");
      let data = statement[1].split("/");
      const body = {
        "nama" : data[0],
        "pemilik" : data[1],
        "lokasiBarang" : data[2]
      }
      // console.log(body);
      // axios.post('https://butter-mail.glitch.me/api/postBarang',parser, {
      //   body : {
      //     nama : data[0],
      //     pemilik : data[1],
      //     lokasiBarang : data[2]
      //   }
      // })
      // .then(function (response) {
      //   // console.log(response);
      //   const echo = { type: 'text', text: "saved" };
      //   return client.replyMessage(event.replyToken, echo);
      // })
      // .catch(function (error) {
      //   // console.log(error);
      //   const echo = { type: 'text', text: "error" };
      //   return client.replyMessage(event.replyToken, echo);
      // });
      
      fetch ('https://pinto-planarian.glitch.me/api/postBarang',{
      method: 'POST',
      headers:{
        'content-type':'application/json',
      },
      body:body
    }).then(response=>{
      if(response.ok){
        const echo = { type: 'text', text: "saved" };
        return client.replyMessage(event.replyToken, echo);
        
      }
      return response.json().then(error=>{
        console.log("error1");
        console.log(error.message);
        const echo = { type: 'text', text: error.message };
        return client.replyMessage(event.replyToken, echo);
      });
    }).catch(error=>{
        console.log(body)
      console.log('fetch error'+error)
      // this.setState({ errorMessage: error.message });
      // this.setState({login:false})
        console.log("error2");
        console.log(error.message);
        const echo = { type: 'text', text: error.message};
        return client.replyMessage(event.replyToken, echo);
    });
      
=======
>>>>>>> 5a73cfbfb7e4133a80a283e72c8f8489490edd08
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