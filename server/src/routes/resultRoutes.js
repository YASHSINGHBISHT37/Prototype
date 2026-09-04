const express = require('express');
const router = express.Router();
const { fetchResult } = require('../controllers/resultController');

// POST /api/result
router.post('/result', fetchResult);

module.exports = router;