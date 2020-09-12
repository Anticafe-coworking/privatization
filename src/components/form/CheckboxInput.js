import React from 'react';
import { useField, useFormikContext } from "formik";
import { Form } from 'react-bootstrap';

const CheckboxInput = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    return (
        <>
            <Form.Check
                {...field}
                {...props}
                onChange={val => {
                    setFieldValue(field.name, val.target.checked);
                }}
            />
        </>
    );
};

export default CheckboxInput;