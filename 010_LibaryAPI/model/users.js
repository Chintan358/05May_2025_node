const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

});


userSchema.pre('save',async  function(next) {
    
    this.password =  await bcrypt.hash(this.password, 10)
    
    next();
});




const User = mongoose.model('User', userSchema);
module.exports = User;