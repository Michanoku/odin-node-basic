const express = require('express');
const controller = require('/controller');
const router = express.Router();

router.get('/', controller.index);
router.get('/about', controller.about);
router.get('/contact-me', controller.contact);

module.exports = router;