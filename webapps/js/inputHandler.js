(function() {
    let setPlaceHolder = (e, elem) => {
        elem = $(elem)
        let tooltip = elem.attr("tooltip")
        if (!tooltip) {
            return;
        }
        elem.before(`<span class=".clrR">${tooltip}</span>`)
    }

    let removePlaceHolder = (e, elem) => {
        elem = $(elem)
        let tooltip = elem.attr("tooltip")
        if(!tooltip){
            return;
        }
        elem.prev().prop("tagName") === "SPAN" && elem.prev().remove()
    }
    Gator(document).on("focus", "input[type='password']", function (e) {
        setPlaceHolder(e, this)
    })
    Gator(document).on("focus", "input[type='text']", function (e) {
        setPlaceHolder(e, this)
    })

    Gator(document).on("blur", "input[type='password']", function (e) {
        removePlaceHolder(e, this)
    })
    Gator(document).on("blur", "input[type='text']", function (e) {
        removePlaceHolder(e, this)
    })
})()