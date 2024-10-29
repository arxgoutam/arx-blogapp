const express = require('express');
const router = express.Router();
const postController = require('../controller/postController')

router.get('/', postController.getAllpost);
router.get('/:id', postController.getPost);

module.exports = router;

