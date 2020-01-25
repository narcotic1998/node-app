import { appHTML } from "./html.js";
import styles from "../css/style.css";
import common from "../css/common.css";
require("./events")
require("./inputHandler");

function init() {
    constructLogin()
    bindEventListeners()
    require('./socketHandler')
}

function constructLogin() {
    let bodyHtml = appHTML.getBody()
    $(document.body).append(bodyHtml)
    let login_container_html = appHTML.getLoginContainer()
    $(".login-body").append(login_container_html)
    $("#login_name").focus()
}

function bindEventListeners() {
   
}

init()

