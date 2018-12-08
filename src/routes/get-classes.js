const connection = require('../db/mysql-connection');

const query = 'select * from Class inner join ClassType on Class.class_type = ClassType.id;';

module.exports = ((req, res) => {
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

