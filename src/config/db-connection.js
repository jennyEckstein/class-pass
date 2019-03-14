const mysql = require('mysql2');
const creds = require('./creds');

const connection = mysql.createConnection({
  host: creds.host,
  user: creds.user,
  password: creds.password,
  database: creds.database
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
});

module.exports = connection;
