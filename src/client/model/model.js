import { BlockWrapper, BlockInput } from '../classes/block';
import { Button } from '../classes/button';

export const modelForm = {
    options: {
        url: '/square',
        method: 'POST',
        isFormValid: false
    },
    children: [
        new BlockWrapper({
            class: 'inputs-group',
            children: [
                new BlockInput({
                    info: {
                        id: 'width',
                        type: 'number',
                        label: 'Ширина',
                        message: 'Значение должно быть в диапозоне 10 и 50',
                        class: 'input'
                    },
                    valid: {
                        isValid: false,
                        touch: false,
                        minNumber: 10,
                        maxNumber: 50
                    }
                }),
                new BlockInput({
                    info: {
                        id: 'height',
                        type: 'number',
                        label: 'Высота',
                        message: 'Значение должно быть в диапозоне 10 и 50',
                        class: 'input'
                    },
                    valid: {
                        isValid: false,
                        touch: false,
                        minNumber: 10,
                        maxNumber: 50
                    }
                }),
                new BlockInput({
                    info: {
                        id: 'depth',
                        type: 'number',
                        label: 'Глубина',
                        message: 'Значение должно быть в диапозоне 10 и 50',
                        class: 'input'
                    },
                    valid: {
                        isValid: false,
                        touch: false,
                        minNumber: 10,
                        maxNumber: 50
                    }
                }),
            ]
        }),
        new Button({
            class: 'button',
            value: 'Расчитать'
        })
    ]
}