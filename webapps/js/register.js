import {appHTML} from "./html.js"
import {Action} from "./action.js"


export let Register = (function () {

    let username;
    let pass1;
    let pass2;


    let loadSignup = () => {
        let signup_html = appHTML.getSignupContainer();
        $(".login-body").html(signup_html);
        $("#signup_name").focus()
        bindSignupEvents()
    }

    let bindSignupEvents = () => {
        let dispatchInputEvents = {
            signup_name : handleUsernameInput,
            signup_pass1 : handlePasswordInput,
            signup_pass2 : handleReEnterPassword
        }
        Gator(document).on("keyup", "input", function(e) {
            let id = this.id;
            dispatchInputEvents[id](this.value)
        })
    }

    let handleUsernameInput = (value) => {
        console.log(value)
    }

    let handlePasswordInput = () => {

    }

    let handleReEnterPassword = () => {

    }

    let signup = () => {

    }

    return {
        loadSignup,
        signup
    }
})()