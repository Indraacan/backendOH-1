const Model = require ("../models")
const User = Model.User

module.exports = {
    getAllData : (req, res) => {
        User.findAll ({})
        .then((result) => res.json (result))
        .catch ((err)=> err)
    },
    createData : (req, res) => {
        User.create({
            email : req.body.email,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            handphone : req.body.handphone
        })
        .then((result) => res.json (result))
        .catch ((err) => err)
    }
}