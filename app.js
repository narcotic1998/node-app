let express = require('express')
let app = express();
let path = `${__dirname}/webapps`
app.use(express.static("webapps"))

let names = [ 'qwer','asdf','erty','zcxv','asdf','bnad','nasdf','qwer','asdf' ]
app.get("/", (req, res) => {
    res.sendFile(`${path}/index.html`)
})

app.get("/api/name", (req, res) => {
    res.sendFile(`${__dirname}/data.json`);
})

app.get("/api/name?:startwith", (req, res) => {
    console.log("asf")
})

let port = process.env.PORT || 5000

app.listen(port, () => {console.log(`listening on port ${port}.....`)})