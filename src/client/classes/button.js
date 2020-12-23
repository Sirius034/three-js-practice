import { Element } from './element';
import { createElement } from '../utils/dom';

export class Button extends Element {
    constructor(options, cb) {
        super(options);
        this.cb = cb;
    }

    getElement() {
        const { class: className, value } = this.options;

        const btn = createElement('button');
        btn.className = className;
        btn.innerHTML = value;

        if (this.cb) {
            btn.addEventListener('click', this.cb);
        }

        return btn;
    }
}