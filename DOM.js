window.dom = {
    find(selector) {
        return document.querySelectorAll(selector)
    },
    style(selector, attr, value) {
        if (typeof selector === 'string') {
            let nodeList = dom.find(selector);
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].style[attr] = value
            }
        } else {
            for (let i = 0; i < selector.length; i++) {
                selector[i].style[attr] = value
            }
        }
    },
    each(selector, fn) {
        if (typeof selector === 'string') {
            let nodeList = dom.find(selector);
            for (let i = 0; i < nodeList.length; i++) {
                fn(nodeList[i])
            }
        } else {
            for (let i = 0; i < selector.length; i++) {
                fn(selector[i])
            }
        }
    }
}