let express = require("express")
let root_dir = require("../root")
let user = express.Router()
user.get('/', (req, res) => {

    res.send({
        name : 'Naren',
        data : [
            {
                email : 'csknaren@gmail.com'
            }
        ]
    })
})

module.exports = user