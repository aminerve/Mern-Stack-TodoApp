const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fName: {type: String, required:true},
    lName: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    confirm: {type: String, required:true}
}, {
    timestamps: true,
})

// userSchema.method.generateAuthToken = function() {
//     const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATETOKEN, {expiresIn:"7d"})
//     return token
// }

const User = mongoose.model('user', userSchema)

module.exports = User;
// const validate = (data) => {
//     const schema = Joi.object({
//         fName: Joi.string().required().label('First Name'),
//         lName: Joi.string().required().label('Last Name'),
//         email: Joi.string().required().label('Email'),
//         fName: Joi.string().required().label('First Name'),
//         fName: Joi.string().required().label('First Name')
//     })
// }