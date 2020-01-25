import {Login} from "./login.js"
import {Register} from "./register.js"
import { ChatHandler } from "./chatHandler.js"
require("./gator.js")

export let EventHandler = (function () {
    Gator(document).on("click", "[documentclick]", function (e) {
        dispatchEvent("documentclick", this, e)
    })
    function dispatchEvent(type, curr, event) {
        let handler = $(curr).attr(type)
        eventHandler[type][handler](curr, event)
    }

    let eventHandler = {
        documentclick: {
            login: Login.handleLogin,
            loadsignup : Register.loadSignup,
            signup: Register.register,
            sendmessage : ChatHandler.sendMessage
        }
    }
})()