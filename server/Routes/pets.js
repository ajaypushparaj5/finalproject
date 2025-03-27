const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const Pet = require('../models/Pet');
const router = express.Router();

// Get pets uploaded by user
router.get('/user/:userId', authMiddleware, async (req, res) => {
    try {
        const pets = await Pet.find({ user: req.params.userId });
        res.json(pets);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
