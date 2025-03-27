const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const Adoption = require('../models/Adoption');
const router = express.Router();

// Get adoption history for a specific user
router.get('/user/:userId', authMiddleware, async (req, res) => {
    try {
        const adoptions = await Adoption.find({ user: req.params.userId });
        res.json(adoptions);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Add feedback to an adoption
router.post('/adopt/:adoptionId/feedback', authMiddleware, async (req, res) => {
    try {
        const adoption = await Adoption.findById(req.params.adoptionId);
        adoption.feedback = req.body.feedback;
        await adoption.save();
        res.json(adoption);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
