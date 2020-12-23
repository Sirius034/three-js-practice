import { addChildren } from '../utils/dom'

export class Site {
    render(model, selector) {
        const el = document.querySelector(selector);
        el.innerHTML = '';

        addChildren(el, model);
    }
}