import React from 'react';
import { Form, Input, Select } from 'semantic-ui-react'

import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <Form.Field
                autoComplete='off'
                name={props.name}
                value={props.val}
                onChange={props.handleChange}
                {...props.inputProperties}
                control={Input}
                label={props.label}
                placeholder={props.placeholder} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <Form.Field
                    name={props.name}
                    value={props.val}
                    onChange={props.handleChange}
                    control={Select}
                    options={props.options}
                    label={props.label}
                    placeholder={props.placeholder} />
            );
            break;
        default:
            inputElement = <Form.Field
                autoComplete='off'
                name={props.name}
                value={props.val}
                onChange={props.handleChange}
                {...props.inputProperties}
                control={Input}
                label={props.label}
                placeholder={props.placeholder} />;
    }

    return inputElement;

};

export default input;