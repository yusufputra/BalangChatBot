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
const axios = require('axios');
 
const config = {
  channelAccessToken: "9q1vjHNqSV1wTBV+tiFMFeee1vhzpngxISCHGxvp0dNzmuIXFREOmoh4+ovBP85R1KHHpfK0FyBbtRBkJLmHhv7I4pvzDtdtkAYNa8FJk7bGEcvMfGoVtwcYKezrUJvVdOYuWmdnpSxZ+sg8cbcqhwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "a78543731191c3bafe74f95bf9739a8b",
};
 
// create LINE SDK client
const client = new line.Client(config);
const app = express();
 
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
      return client.replyMessage(event.replyToken, echo);
    }
  
    if(event.message.text == "sayang kamu"){
      const echo = { type: 'text', text: "sayang kamu juga :)·" };
      return client.replyMessage(event.replyToken, echo);
    }
 
    const echo = { type: 'text', text: "Saya tidak mengerti, saya simpan dulu" };
    return client.replyMessage(event.replyToken, echo);
}
 
// listen on port
const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});