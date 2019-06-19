export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const stripHtmlTags = str => {
    return str.replace(/<{1}[^<>]{1,}>{1}/g, " ");
}

export const checkValidity = (value, rules) => {
    let invalidProperties = {};
    if (rules.required && value.trim() === '') {
        invalidProperties.required = true;
    } else if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!pattern.test(value)) {
            invalidProperties.isEmail = true;
        }
    } else if (rules.minLength && value.length <= rules.minLength) {
        invalidProperties.minLength = true;
    } else if (rules.maxLength && value.length >= rules.maxLength) {
        invalidProperties.maxLength = true;
    } else if (rules.isNumeric) {
        const pattern = /^\d+$/;
        if (!pattern.test(value)) {
            invalidProperties.isNumeric = true;
        }
    }

    return invalidProperties;
}
