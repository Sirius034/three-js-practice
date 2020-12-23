import axios from 'axios';

export const validation = (value, valid) => {
    let isValid = true;

    if (valid.minNumber) {
        isValid = value >= valid.minNumber && isValid;
    }

    if (valid.maxNumber) {
        isValid = value <= valid.maxNumber && isValid;
    }

    return isValid;
}

export const formValid = (elements) => {
    let isFormValid = true;

    for (let element in elements) {
        isFormValid = elements[element].isValid === 'true' && isFormValid ? true : false;
    }

    return isFormValid;
}


export const selectFormFields = (form) => {
    const elements = {};

    for (let element of form.elements) {
        if (element.tagName === 'INPUT') {
            elements[element.name] = {
                value: element.value,
                isValid: element.dataset.isValid
            }
        }
    }

    return (elements)
}

export const generateData = (elements) => {
    const data = {};

    for (let field in elements) {
        data[field] = +elements[field].value;
    }
    return data;
}

export const sendRequest = async (options, data, cb) => {
    const { url, method = 'GET' } = options;

    const response = await axios({
        url,
        method,
        data
    });

    if (cb) {
        cb(response.data);
    } else {
        return response.data
    }   
}