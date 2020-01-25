export let SocketHandler = (function() {
    let port = process.env.PORT || 5000
    let socket;
    let subscriptions = {};
    
    function init() {
        socket = io.connect(`http://localhost:${port}`)
    }

    function subscribe() {

    }

    return {
        init,
        subscribe
    }

})()