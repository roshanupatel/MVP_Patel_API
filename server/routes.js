const controllers = require('./controllers');
const router = require('express').Router();

// get nearby Trails
router.get('/trails', controllers.getTrails);

// post Trail
router.post('/trails', controllers.postTrails);

// update Trail to yes/no dogs
router.put('/trails', controllers.putTrails);


module.exports = router;