const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Joi = require('joi')
const passwordComplexity = require('joi-password-complexity')


const userSchema = new mongoose.Schema({
    fName: {type: String, required:true},
    lName: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true}
}, {
    timestamps: true,
})

userSchema.method.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATETOKEN, {expiresIn:"7d"})
    return token
}

const User = mongoose.model('user', userSchema)


const validate = (data) => {
    const schema = Joi.object({
        fName: Joi.string().required().label('first Name'),
        lName: Joi.string().required().label('last Name'),
        email: Joi.string().required().label('email'),
        password: passwordComplexity().required().label('password'),
    })
    return schema.validate(data)
}

module.exports = {User, validate};