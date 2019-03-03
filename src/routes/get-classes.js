const { classes } = require('../sampleDataSource');

module.exports = ((req, res) => {
  const { id } = req.query;
  const result = classes.getClassById(id);

  res.send(result);
});

