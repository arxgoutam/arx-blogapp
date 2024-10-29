const express = require('express');
const router = express.Router();
const postController = require('../controller/postController')

router.get('/', postController.getAllpost);
router.get('/:id', postController.getPost);
router.post('/', postController.postPost);

module.exports = router;

