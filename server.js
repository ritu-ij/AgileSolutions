require('dotenv').config({ path: 'variables.env' });

const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true,
});

app.set('PORT', process.env.PORT || 5000);

app.post('/Retrospective/New', (req, res) => {
  const payload = req.body;
  pusher.trigger('retro-data', 'content', payload);
  res.send(payload)
});

app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT')))