let express = require('express')
let session = require('express-session')
let app = express();
let user = require("./routes/user")
let redis = require('redis')
let redisStore = require('connect-redis')(session)
let client = redis.createClient();
let socket = require('socket.io');
let os = require('os')
global.__basedir = __dirname;
let port = process.env.PORT || 5000
app.use(session({
    secret: 'ssshhhhh',
    // create new redis store.
    store: new redisStore({
        host: os.hostname(),
        port,
        client: client,
        ttl: 260
    }),
    saveUninitialized: false,
    resave: false
}))
app.use(express.static(__dirname))
app.use(express.static("webapps"))
app.use('/api/user', user)
app.get("/*", (req, res) => {
    res.sendFile(`${__dirname}/webapps/index.html`)
})

let server = app.listen(port, () => {console.log(`listening on port ${port}.....`)})


// socket connection

let io = socket(server);

io.on('connection', handleSocketConnection)


function handleSocketConnection(socket) {
    console.log('made connection with client');
    socket.on('getsocketdata', () => {
        io.sockets.emit('socketdata', "hello")
    })
}
