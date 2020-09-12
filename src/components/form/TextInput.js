import React from 'react';
import { useField, useFormikContext, ErrorMessage } from "formik";
import { Form } from 'react-bootstrap';

const TextInput = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <>
            <Form.Control
                {...field}
                {...props}
                className="form-control-lg margin-top-inputs"
                onChange={val => {
                    setFieldValue(field.name, val.target.value);
                }}
            />
            <ErrorMessage
                name={props.name}
                render={(msg) => <div style={{ color: "red", marginTop: ".8em" }}>{msg}</div>} />
        </>

    );
};

export default TextInput;

