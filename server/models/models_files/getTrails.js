const { dogTrailDocs } = require('../../database/mongoDB.js');

const getTrails = (someLocationVariable, cb) => {
  dogTrailDocs.find({})
    .exec((err, docs) => {
      cb(err, docs);
    });
};

module.exports = getTrails;