const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fName: {type: String, required:true},
    lName: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    confirm: {type: String, required:true}
})

userSchema.method.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATETOKEN, {expiresIn:"7d"})
    return token
}

const User = mongoose.model('user', userSchema)