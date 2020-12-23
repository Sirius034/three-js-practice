import { Element } from './element';
import { createElement, setAttribute } from '../utils/dom';
import { validation } from '../utils/form';

export class Input extends Element {
    constructor(options) {
        super(options);
        
        this.validationСheck = this.validationСheck.bind(this)
    }

    getElement() {
        const { info: { id, type, class: className }, valid: { isValid } } = this.options;

        const input = createElement('input');
        input.dataset.isValid = isValid;
        input.addEventListener('input', this.validationСheck);

        return setAttribute(input, { id, type, name: id, class: `${className}__item` });
    }

    validationСheck(e) {
        if (!this.options.valid) {
            return;
        }

        const input = e.target;
        const value = input.value;
        const { valid } = this.options;

        valid.touch = true;
        valid.isValid = validation(value, valid);

        if (valid.touch && !valid.isValid) {
            this.showMessage(e.target, !valid.isValid);
        } else {
            this.showMessage(e.target);
        }

        input.dataset.isValid = valid.isValid;
    }

    showMessage(el, show = false) {
        const message = el.nextElementSibling;
        const className = 'active';

        if (!message.classList.contains(className) && show) {
            message.classList.add(className);
        } else if (message.classList.contains(className) && !show) {
            message.classList.remove(className);
        }
    }
}