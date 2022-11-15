const models = require('../models');

const putTrails = (req, res) => {
  models.putTrails(req.body, (err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(docs);
    }
  });
}

module.exports = putTrails;