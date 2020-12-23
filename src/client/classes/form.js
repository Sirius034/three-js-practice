import { addChildren, createElement } from '../utils/dom';
import { formValid, selectFormFields, sendRequest, generateData } from '../utils/form';

export class Form {
    constructor(options, updataCb) {
        this.options = options;
        this.updataCb = updataCb;

        this.onSubmit = this.onSubmit.bind(this)
    }

    getElement() {
        const { children } = this.options;

        const form = createElement('form');
        form.addEventListener('submit', this.onSubmit);

        return addChildren(form, children);
    }

    onSubmit(e) {
        e.preventDefault();

        const { options } = this.options;
        const elements = selectFormFields(e.target)

        options.isFormValid = formValid(elements);

        if (options.isFormValid) {
            sendRequest(options, generateData(elements), this.updataCb);
        } else {
            alert('Форма заполнена не полностью или не соответствует правилам заполнения.')
        }
    }
}