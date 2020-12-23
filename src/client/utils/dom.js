export const createElement = (tag) => {
    return document.createElement(tag);
}

export const setAttribute = (el, attribut) => {
    Object
        .keys(attribut)
        .forEach(nameAttr => el.setAttribute(nameAttr, attribut[nameAttr]));

    return el;
}

export const addChildren = (node, children, where = 'beforeend') => {

    if (children.constructor === Array) {
        children.forEach(el => {
            node.insertAdjacentElement(where, el.getElement())
        });
    } else {
        node.insertAdjacentElement(where, children.getElement())
    }

    return node;
}