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

function updateMessage(updateData) {
  let values = [updateData.id, updateData.name, updateData.message];
  return pool.query('UPDATE messages SET name=$2, message=$3 WHERE id=$1', values)
};

function deleteAMessage(index) {
  let values = [index.id];
  return pool.query('DELETE FROM messages WHERE id=$1', values)
};

function getOneMessage(messageIndex) {
  let values = [messageIndex.id];
  return pool.query('SELECT * FROM messages WHERE id=$1', values)
  .then(data => data)
};


// change this to export the methods we create
module.exports = { returnAllMessages, addMessage, updateMessage, deleteAMessage, getOneMessage }; // export all methods here