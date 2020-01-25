let express = require("express")
let root_dir = require("../root")
let user = express.Router()
user.get('/', (req, res) => {
    res.sendFile(`${root_dir}/data/data.json`)
})

module.exports = user