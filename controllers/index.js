const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', commentRoutes);


module.exports = router;