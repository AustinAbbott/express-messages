const { Pool } = require('pg');
const pool = new Pool({
  database: 'messages'
});

function returnAllMessages() {
  return pool.query('SELECT * FROM messages')
  .then(data => data.rows)
};

function addMessage(message) {
  let values = [message.name, message.message];

  return pool.query('INSERT INTO messages(name, message) VALUES($1, $2)', values)
};
// the actual code for the methods goes here


// change this to export the methods we create
module.exports = { returnAllMessages, addMessage }; // export all methods here