//$Id$

(function () {
    /**
     * Info: Procedure to add tooltip for an element; 
     * elem: <div title="Hello world" pos="left-top" title-type="multi-word">
     * title : mandatory attribute
     * pos : "pos1-pos2" (optional/ default-"right-middle")
     * 					pos1: tooltip will be positioned at the Pos1 side of the element 
     * 					pos2: tip position in the tooltip
     * title-type : (optional/ default-"normal")
     * 				"normal" - 
     * 				"multi-word" - length will be fixed,
     * 				"single-word" - content width,
     * 				"media" - media elements
     */


    /**
     *  tooltip class name to positioning the tip
     */
    let target;
    let interval;
    let _classnames = {
        'top-left': 't-top tL', //No I18N
        'top-middle': 't-top tH-C', //No I18N
        'top-right': 't-top tR', //No I18N
        'right-top': 't-rgt', //No I18N
        'right-middle': 't-rgt tV-C', //No I18N
        'right-bottom': 't-rgt tB', //No I18N
        'bottom-right': 't-btm tR', //No I18N
        'bottom-middle': 't-btm tH-C', //No I18N
        'bottom-left': 't-btm tL', //No I18N
        'left-bottom': 't-lft tB', //No I18N
        'left-middle': 't-lft tV-C', //No I18N
        'left-top': 't-lft' //No I18N
    }

    /**
     *  tooltip type class name 
     */
    let _templates = {
        normal: "",
        single_word: '',
        multi_word: '',
        media: '' //"media-item-toltip"//No I18N
    }

    /**
     *  calculate the position of the tooltip
     */

    let _calcuatePosition = function (elem, tooltip, position) {
        let tool_prop = tooltip.getBoundingClientRect();
        let elem_prop = elem.getBoundingClientRect();

        let pos = position.split('-');
        let first = pos[0],
            sec = pos[1];
        let left = 0,
            top = 0;

        if (first == 'right') {
            left = elem_prop.width + 12;
        } else if (first == 'left') {
            left = -(tool_prop.width + 12);
        } else if (first == 'top') {
            top = -(tool_prop.height + 12);
        } else if (first == 'bottom') {
            top = elem_prop.height + 12;
        }
        if (sec == 'middle') {
            if (first == 'top' || first == 'bottom') {
                left = (elem_prop.width - tool_prop.width) * 0.5;
            } else {
                top = (elem_prop.height - tool_prop.height) * 0.5;
            }
        } else if (sec == 'top') {
            top = (elem_prop.height * 0.5 - 20);
        } else if (sec == 'bottom') {
            top = (elem_prop.height * 0.5 - (tool_prop.height - 20));
        } else if (sec == 'right') {
            left = (elem_prop.width * 0.5 - (tool_prop.width - 20));
        } else if (sec == 'left') {
            left = (elem_prop.width * 0.5 - 20);
        }
        tooltip.style.left = elem_prop.left + left + 'px';
        tooltip.style.top = elem_prop.top + top + 'px';
    };


    /**
     *  reflects the given position to its opposite
     */
    let _reflectPosition = function (position) {
        let reflection = {
            left: 'right', //No I18N
            right: 'left', //No I18N
            top: 'bottom', //No I18N
            bottom: 'top' //No I18N
        }
        let pos = position.split('-');
        return reflection[pos[0]] + '-' + pos[1];
    };

    /**
     *  gets the title and sets the tooltip (event handler for mouseenter)
     */
    let _setTooltip = function (e) {
        if (e.target.id === 'player') {
            return;
        }
        let tooltip = $$('#tooltip').removeClass('hide'),
            elem = $$(this);
        target = this;
        tooltip.text(elem.attr('title'));
        elem.attr('title', '');
        let pos = elem.attr('pos') || 'right-middle'; //No I18N
        let type = elem.attr('title-type') || 'normal'; //No I18N
        tooltip.attr('class', 'tultip ' + _classnames[_reflectPosition(pos)] + ' ' + _templates[type]);
        _calcuatePosition(this, tooltip[0], pos);
        _createInterval()
        _bindScroll();
    }

    let _bindScroll = () => {
        Gator(document).on("wheel", _handleScroll); //NO I18N
    }

    let _unbindScroll = () => {
        Gator(document).off("wheel", _handleScroll) //NO I18N
    }

    let _handleScroll = (e) => {
        if (!target) {
            return;
        }
        let clientX = e.clientX;
        let clientY = e.clientY;
        if (!_isMouseOverTarget(target, clientX, clientY)) {
            _hideTooltip();
        }
    }

    let _isMouseOverTarget = (el, x, y) => {
        return document.elementFromPoint(x, y) === el
    }

    let _createInterval = () => {
        interval = setInterval(() => {
            if (target && !_isTargetVisible()) {
                _hideTooltip()
            }
        }, 0)
    }

    let _clearInterval = () => {
        clearInterval(interval);
    }

    let _isTargetVisible = () => {
        return document.contains(target)
    }

    /**
     *  sets the title and removes the tooltip (event handler for mouseleave)
     */
    let _hideTooltip = function (e) {
        if (!target) {
            return;
        }
        let tooltip = $$('#tooltip').addClass('hide');
        let title = $$(target).attr('title');
        if (!title) {
            $$(target).attr('title', tooltip.text());
        }
        target = null;
        _clearInterval()
        _unbindScroll();
    }

    /**
     *  sets the events(mouseenter, mouseleave) for an element that have the title attribute
     */
    function _init() {
        document.body.innerHTML += `<div tooltip id="tooltip" class="hide"></div>`;
        // document.body.addEventListener("mouseenter", function(e) {
        // 	if (e.target.hasAttribute("title")) {
        // 		_setTooltip(this);
        // 	}
        // })
        Gator(document).on('mouseenter', '[title]', _setTooltip);
        Gator(document).on("mouseleave", '[title]', _hideTooltip);
        Gator(document).on("mousedown", '[title]', _hideTooltip);
    }

    _init();
})();
