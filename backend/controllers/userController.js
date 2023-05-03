const User = require('../models/usermod')



module.exports = {
    findById : (req,res) => {
        const { user } = req;
        if(!user){
            return res.status(400).send({error: 'Server is having an issue please try again later'})
        }
        return res.json(user)
    },

    async signup(req,res){
        try {
            const user = await User.create(req.body)
            const userObjJson = user.toJSON();

            return res.send({user: userObjJson})
        } catch (error) {
            console.log(error)
            return res.status(400).send({error: 'Something is wrong'})
        }
    }
}