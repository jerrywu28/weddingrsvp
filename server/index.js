const express = require('express');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(cors(), express.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname + '/../public')));

app.get('/', (req, res) => {
  console.log('Received GET request with req: ', req.body)
  res.status(200).send();
});

app.listen(port);