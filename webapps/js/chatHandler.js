import {UserStore} from "./userStore"
import {chatHTML} from "./html"


export let ChatHandler = (function() {

    let user_name = ''

    function init() {
        setUserName();
        constructChatArea();
        bindEventListeners();
    }

    function setUserName() {
        user_name = UserStore.getUserName()
    }

    function constructChatArea() {

    }

    function bindEventListeners() {

    }

    return {
        init
    }

})()