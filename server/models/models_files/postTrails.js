const { dogTrailDocs } = require('../../database/mongoDB.js');

const postTrails = (someLocationVariable, cb) => {
  dogTrailDocs.find({})
    .exec((err, docs) => {
      cb(err, docs);
    });
};

module.exports = postTrails;