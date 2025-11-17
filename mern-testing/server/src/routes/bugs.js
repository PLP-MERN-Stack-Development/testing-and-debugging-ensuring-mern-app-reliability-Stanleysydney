const express = require('express');
const router = express.Router();
const { createBug, listBugs, updateBug, deleteBug } = require('../controllers/bugController');

router.post('/', createBug);
router.get('/', listBugs);
router.put('/:id', updateBug);
router.delete('/:id', deleteBug);

module.exports = router;
