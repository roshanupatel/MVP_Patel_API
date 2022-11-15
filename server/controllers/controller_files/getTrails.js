const models = require('../models');

const getTrails = (req, res) => {
  models.getTrails(someLocationVariable, (err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(docs);
    }
  });
}

module.exports = getTrails;