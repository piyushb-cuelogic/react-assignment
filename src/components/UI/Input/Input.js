import React from 'react';
import { Form, Input, Select } from 'semantic-ui-react'

import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.options.elementType) {
        case ('input'):
            inputElement = <Form.Field
                autoComplete='off'
                name={props.options.name}
                value={props.options.val}
                onChange={props.options.handleChange}
                {...props.options.inputProperties}
                control={Input}
                label={props.options.label}
                placeholder={props.options.placeholder} />;
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
                    name={props.options.name}
                    value={props.options.val}
                    onChange={props.options.handleChange}
                    control={Select}
                    options={props.options.options}
                    label={props.options.label}
                    placeholder={props.options.placeholder} />
            );
            break;
        default:
            inputElement = <Form.Field
                autoComplete='off'
                name={props.options.name}
                value={props.options.val}
                onChange={props.options.handleChange}
                {...props.options.inputProperties}
                control={Input}
                label={props.options.label}
                placeholder={props.options.placeholder} />;
    }

    return inputElement;

};

export default input;