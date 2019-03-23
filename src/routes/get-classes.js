const connection = require('../config/db-connection');

const query = 'SELECT * FROM workout;';

module.exports = ((req, res) => {
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

