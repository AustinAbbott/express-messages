const { Pool } = require('pg');
const pool = new Pool({
  database: 'messages'
});


function returnAllMessages() {
  return pool.query('SELECT * FROM messages')
  .then(data => {
    return data.rows;
  })
}

function addMessage(name, message) {
  pool.query('INSERT INTO messages(name, message) VALUES(`${name}`,`${message}`')
  .then(data => {
    return 'Success!'
  })
}
// the actual code for the methods goes here


// change this to export the methods we create
module.exports = { returnAllMessages, addMessage }; // export all methods here