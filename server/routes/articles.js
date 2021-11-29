const express = require('express');
const router = express.Router();

const articlesCtrl = require('../controllers/articlesCtrl.js');

router.get('/', articlesCtrl.getAll);

module.exports = router

