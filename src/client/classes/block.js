import { Element } from './element';
import { Input } from './input';
import { TextElement } from './textElement';
import { createElement, addChildren } from '../utils/dom';

export class BlockWrapper extends Element {
    constructor(options) {
        super(options);
    }

    getElement() {
        const { class: className, children } = this.options;

        const div = createElement('div');
        div.className = className;

        return addChildren(div, children);;
    }
}

export class BlockInput extends Element {
    constructor(options) {
        super(options);
    }

    getElement() {
        const { info, valid } = this.options;

        const input = new Input(this.options);

        const label = new TextElement({
            tag: 'label',
            htmlFor: info.id,
            class: `${info.class}__label`,
            value: info.label
        });

        const span = new TextElement({
            tag: 'span',
            class: `${info.class}__message`,
            value: info.message
        });

        return new BlockWrapper({
            class: info.class,
            children: [
                label,
                input,
                span
            ]
        }).getElement();
    }
}