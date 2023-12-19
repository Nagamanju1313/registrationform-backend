var express = require('express');
var router = express.Router();
const db = require('../config/database')
const formController = require('../app/controller/formController');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: "express" });
});

/*My APIs*/
router.post('/formresponses', formController.formResponses);

module.exports = router;
