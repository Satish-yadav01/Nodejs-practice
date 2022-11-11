const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true
    },
    password : String
})

// password hashing
UserSchema.pre('save',async function(next){
    this.password = await bcrypt.hash(this.password, 10);
    next()
})

module.exports =  mongoose.model('User',UserSchema);