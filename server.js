const express = require('express');
const app = express();
const methods = require('./db/pgconfig');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// here is where we will define the request paths -AUSTIN

// create a message path: /api/messages
// Retrieve a list of all messages (output should be an array of objects): /api/messages

app.get('/api/messages', function (req, res) { // working
  methods.returnAllMessages()
    .then(data => {
      res.send(data)
    })
    .catch(err => console.error(err))
});

app.post('/api/messages', function(req, res) { // working
  methods.addMessage(req.body)
  .then(() => res.sendStatus(201))
  .catch(err => console.error(err))
});

app.put('/api/messages/1', function(req, res) { // working
  methods.updateMessage(req.body)
  .then(() => res.sendStatus(201))
  .catch(err => console.error(err))
})

app.delete('/api/messages/1', function(req, res) { // refactor without req.body
  methods.deleteAMessage(req.body)
  .then(() => res.sendStatus(201))
  .catch(err => console.error(err))
})

app.get('/api/messages/1', function(req, res) { // refactor without req.body
  methods.getOneMessage(req.body)
  .then(data => res.send(data.rows))
  .catch(err => console.error(err))
})

app.use((req, res, next) => {
  res.status(404).send('That route does not exist');
});

const port = 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
