let getinputHTML = (config) => {
    let default_config = {
        type: 'text',
        class: "",
        id: 'text'
    }
    config = Object.assign({}, default_config, config)
    return `<input type="${config.type}" class="${config.class}" id='${config.id}'>`
}
document.body.insertAdjacentHTML("beforeend", getinputHTML())
let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.response)
    }
}
ajax.open("GET", "/api/name", true)
ajax.send()