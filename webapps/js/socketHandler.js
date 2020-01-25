export let SocketHandler = (function() {
    let port = process.env.PORT || 5000
    let socket;
    let subscriptions = {};
    
    function init() {
        socket = io.connect(window.location.origin)
    }

    function subscribe(type, handler) {
        if (!type || typeof(handler) !== 'function') {
            return;
        }
        socket.on(type, handler)
    }

    function emit(emit_data = {}) {
        if (!emit_data.type) {
            return;
        }
        socket.emit(emit_data.type, emit_data.data)
    }

    function getID() {
        return socket.id
    }

    return {
        init,
        subscribe,
        emit,
        getID
    }
})()