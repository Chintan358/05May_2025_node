const express = require('express');
const router = express.Router();
const Publisher = require('../model/publisher');

// Create a new publisher
router.post('/', async (req, res) => {
    try {
        const publisher = new Publisher(req.body);
        await publisher.save();
        res.status(201).send(publisher);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all publishers

router.get('/', async (req, res) => {
    try {
        const allPublishers = await Publisher.find();
        res.status(200).send(allPublishers);
    } catch (error) {
        res.send(error);
    }
})

// Get a publisher by ID
router.get('/:id', async (req, res) => {
    try {
        const publisher = await Publisher.findById(req.params.id);
        if (!publisher) {
            return res.status(404).send();
        }
        res.status(200).send(publisher);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a publisher by ID
router.put('/:id', async (req, res) => {
    
    try {
        const publisher = await Publisher.findByIdAndUpdate(req.params.id, req.body);
        if (!publisher) {
            return res.status(404).send();
        }
        res.send(publisher);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a publisher by ID
router.delete('/:id', async (req, res) => {
    try {
        const publisher = await Publisher.findByIdAndDelete(req.params.id);
        if (!publisher) {
            return res.status(404).send();
        }
        res.send(publisher);
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;
