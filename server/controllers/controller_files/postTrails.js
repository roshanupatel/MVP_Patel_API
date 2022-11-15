const models = require('../models');

const postTrails = (req, res) => {
  models.postTrails(req.body, (err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(docs);
    }
  });
}

module.exports = postTrails;