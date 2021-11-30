const express = require('express');
const router = express.Router();

const articlesCtrl = require('../controllers/articlesCtrl.js');

router.get('/', articlesCtrl.getAll);
router.get('/:id', articlesCtrl.getOne);

module.exports = router

