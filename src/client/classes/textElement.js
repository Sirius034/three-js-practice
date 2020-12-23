import { Element } from './element';
import { createElement, setAttribute } from '../utils/dom';

export class TextElement extends Element {
    constructor(options) {
        super(options);
    }

    getElement() {
        const { tag, value, ...other } = this.options;

        const el = createElement(tag);
        el.innerHTML = value;

        return setAttribute(el, other)
    }
}