import { appHTML } from "./html"
import {UserStore} from "./userStore";
import {ChatHandler} from "./chatHandler"

export let Login = (function() {

    function handleLogin() {
        let username = $("#login_name").val();
        UserStore.setUserName(username);
        ChatHandler.init()
    }

    return {
        handleLogin
    }
})()