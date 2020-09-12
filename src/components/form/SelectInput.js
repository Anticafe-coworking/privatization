import React from 'react';
import { useField, useFormikContext, ErrorMessage } from "formik";
import { Form } from 'react-bootstrap';

const SelectInput = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    return (
        <>
            <Form.Control as="select"
                {...field}
                {...props}
                className="form-control-lg margin-top-inputs"
                onChange={val => {
                    setFieldValue(field.name, val.target.value);
                }}
            >
                {props.options.map((el, i) => {
                    return <option key={i}>{el}</option>
                })}
            </Form.Control>
            <ErrorMessage
                name={props.name}
                render={(msg) => <div style={{ color: "red", marginTop: ".8em" }}>{msg}</div>} />
        </>
    );
};

export default SelectInput;