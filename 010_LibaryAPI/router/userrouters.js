const express = require('express');
const router = express.Router();
const User = require('../model/users');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a user by ID 
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new user
router.post('/', async (req, res) => {
    
    
    const user = new User(req.body);

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a user by ID
//update user

router.put('/:id', async (req, res) => {

    try {
        
        const data = await User.findByIdAndUpdate(req.params.id, req.body)
        if (!data) return res.status(404).json({ message: 'User not found' });
        const updatedUser = await User.findById(req.params.id);
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

})

// Delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});







module.exports = router;
