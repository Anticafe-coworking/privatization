import React from 'react';
import { useField, useFormikContext } from "formik";
import { Form } from 'react-bootstrap';

const TextaeraInput = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <Form.Control
            {...field}
            {...props}
            as="textarea" rows="3"
            className="form-control-lg margin-top-input-small"
            onChange={val => {
                setFieldValue(field.name, val.target.value);
            }}
            placeholder="Ecrire des instructions spéciales ici (facultatif)"
        />

    );
};

export default TextaeraInput;

