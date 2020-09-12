import React from 'react';
import { useField, useFormikContext, ErrorMessage } from "formik";
import { Form } from 'react-bootstrap';


const SelectAnticafe = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <>
            <Form.Control as="select"
                {...field}
                {...props}
                className="form-control-lg margin-top-inputs"
                onChange={val => {
                    let value = val.target.value
                    setFieldValue(field.name, value);
                }}
            >
                <option>Sélectionnez un Anticafé</option>
                <optgroup label="Bordeaux">
                    <option>Anticafé Bordeaux</option>
                </optgroup>
                <optgroup label="Paris">
                    <option>Anticafé Beaubourg</option>
                    <option>Anticafé Canal St Martin</option>
                    <option>Anticafé La Défense</option>
                    <option>Anticafé La Fayette</option>
                    <option>Anticafé Louvre</option>
                    <option>Anticafé République</option>
                    <option>Anticafé Station F</option>
                </optgroup>
                <optgroup label="Lyon">
                    <option>Anticafé Lyon</option>
                </optgroup>
                <optgroup label="Strasbourg">
                    <option>Anticafé Strasbourg</option>
                </optgroup>
            </Form.Control>
            <ErrorMessage
                name={props.name}
                render={(msg) => <div style={{ color: "red", marginTop: ".8em" }}>{msg}</div>} />
        </>
    );
};

export default SelectAnticafe;