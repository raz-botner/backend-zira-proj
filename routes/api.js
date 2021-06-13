
var express = require('express');
var router = express.Router();

var chartController = require('../controllers/chartController')
var systemController = require('../controllers/systemController')



/* RESTFUL API */

router.get('/charts', chartController.findAll);

router.get('/charts/:id', chartController.findOne);

router.get('/systems', systemController.findAll);


module.exports = router;
