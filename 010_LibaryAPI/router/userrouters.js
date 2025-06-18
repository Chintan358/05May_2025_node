const express = require('express');
const router = express.Router();
const User = require('../model/users');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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
    try {
        const user = new User(req.body);
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

router.post('/login', async (req, res) => {

        const {email,password} =  req.body
        try {
            //authentication check
            const user = await User.findOne({email:email}) // check email 
            
            
            if(user){

                 const isCheck = await bcrypt.compare(password,user.password) // check password
                 if(isCheck)
                 {
                   
                    const token = await jwt.sign({id:user._id},process.env.SKEY)
  
                    res.send("Your auth-token : "+token)
                 
                    

                 }
                 else
                 {
                    res.send("Invalid credentials")
                 }

            }
            else
            {
                res.send("Invalid credentials")
            }
            
        } catch (error) {
            res.send("Invalid credentials")
        }
        
})







module.exports = router;
