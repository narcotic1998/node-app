import { appHTML } from "./html.js";
require("./events")
require("./inputHandler");
import {SocketHandler} from "./socketHandler"

function init() {
    constructLogin()
    bindEventListeners()
    SocketHandler.init();
}

function constructLogin() {
    let bodyHtml = appHTML.getBody()
    $("#maincontainer").append(bodyHtml)
    let login_container_html = appHTML.getLoginContainer()
    $(".login-body").append(login_container_html)
    $("#login_name").focus()
}

function bindEventListeners() {
   
}

init()

