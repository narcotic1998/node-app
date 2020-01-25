let appHTML = {
    getBody : () => {
        return `<div class="login-body">
                </div>`
    },
    getInputHtml : (config = {}) => {
        return `<div class="input-wrap ${config.icon_class || ''}">
                    <input type="${config.type || "text"}" class="naren-input" id='${config.id || ''}' placeholder="${config.placeholder || ''}"
                    ${config.tooltip ? `tooltip="${config.placeholder}"` : ''}>
                </div>`
    },
    getButtonHtml : (config = {}) => {
        return `<div class="naren-btn" ${config.onclick ? `documentclick="${config.onclick}"` : ''}>
                   <span class="btn-text">${config.text || "Button"}</span>
                </div>`
    },
    getLoginContainer : () => {
        let username_input = appHTML.getInputHtml({id : "login_name", placeholder: "Username/Email", tooltip:true})
        let password_input = appHTML.getInputHtml({id : "login_pass", placeholder : "Password", type: "password", tooltip:true})
        let login_btn = appHTML.getButtonHtml({onclick : "login", text: "Login"})
        let signup_btn = appHTML.getButtonHtml({onclick : "loadsignup", text: "signup"})
        return `<div class="login-header">
                        <p class="header-text">Login</p>
                    </div>
                <div class="login-container">
                    <div class="name-input-wrap">
                        ${username_input}
                    </div>
                    <div class="pass-input-wrap">
                        ${password_input}
                    </div>
                    <div class="login-btn">
                    ${login_btn}
                    </div>
                    <div class="signup-btn">
                    <span> Don't have an account ?</span>
                    ${signup_btn}
                    </div>
                </div>`
    },
    getSignupContainer : () => {
        let username_input = appHTML.getInputHtml({id : "signup_name", placeholder: "Username/Email",tooltip:true})
        let password_input = appHTML.getInputHtml({id : "signup_pass1", placeholder : "Password", type: "password",tooltip:true})
        let retypepass_input = appHTML.getInputHtml({id : "signup_pass2", placeholder : "Reenter-Password", type: "password",tooltip:true})
        let signup_btn = appHTML.getButtonHtml({onclick : "loadsignup", text: "signup"})
        return `<div class="login-header">
                        <p class="header-text">REGISTER</p>
                    </div>
                    <div class="signup-container">
                    <div class="name-input-wrap">
                        ${username_input}
                    </div>
                    <div class="pass-input-wrap">
                        ${password_input}
                    </div>
                    <div class="repass-input-wrap">
                        ${retypepass_input}
                    </div>
                    <div class="signup-btn">
                    ${signup_btn}
                    </div>
                </div>`
    }
};

let chatHTML = {
    textArea : (config) => {
        let { className, id } = config;
        return `<textarea class="${className}" id="${id}"></textarea>`
    }
}

module.exports = {
    appHTML,
    chatHTML
}