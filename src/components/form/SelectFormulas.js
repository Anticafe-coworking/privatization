import React from 'react';
import { useField, useFormikContext, ErrorMessage } from "formik";
import { Form } from 'react-bootstrap';

const SelectFormulas = ({ options, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <>
            <Form.Control as="select"
                {...field}
                {...props}
                className="form-control-lg margin-top-inputs"
                onChange={val => {
                    let value = val.target.value;
                    if (value === "" || value === "Cocktails") {
                        setFieldValue("formule1", false)
                        setFieldValue("formule2", false)
                        setFieldValue("formule3", false)
                        setFieldValue("formule4", false)
                        setFieldValue("formule5", false)
                        setFieldValue("formule6", false)
                        setFieldValue("formule7", false)
                        setFieldValue("formule8", false)
                        setFieldValue("formule9", false)
                    }
                    if (value === "Demi-journée Matin") {
                        setFieldValue("formule1", true)
                        setFieldValue("formule2", true)
                        setFieldValue("formule3", false)
                        setFieldValue("formule4", false)
                        setFieldValue("formule5", false)
                        setFieldValue("formule6", false)
                        setFieldValue("formule7", false)
                        setFieldValue("formule8", false)
                        setFieldValue("formule9", false)
                    }
                    if (value === "Demi-journée Après-midi") {
                        setFieldValue("formule1", true)
                        setFieldValue("formule2", false)
                        setFieldValue("formule3", false)
                        setFieldValue("formule4", false)
                        setFieldValue("formule5", false)
                        setFieldValue("formule6", true)
                        setFieldValue("formule7", false)
                        setFieldValue("formule8", false)
                        setFieldValue("formule9", false)
                    }
                    if (value === "Journée") {
                        setFieldValue("formule1", true)
                        setFieldValue("formule2", true)
                        setFieldValue("formule3", false)
                        setFieldValue("formule4", false)
                        setFieldValue("formule5", false)
                        setFieldValue("formule6", true)
                        setFieldValue("formule7", false)
                        setFieldValue("formule8", false)
                        setFieldValue("formule9", false)
                    }
                    // if (value === "Cocktails") {
                    //     setFieldValue("formule1", false)
                    //     setFieldValue("formule2", false)
                    //     setFieldValue("formule3", false)
                    //     setFieldValue("formule4", false)
                    //     setFieldValue("formule5", false)
                    //     setFieldValue("formule6", false)
                    //     setFieldValue("formule7", false)
                    //     setFieldValue("formule8", true)
                    //     setFieldValue("formule8", true)
                    // }

                    setFieldValue(field.name, val.target.value);
                }}
            >
                {options.map((el, i) => {
                    return (
                        <option value={el.value} key={i}>{el.name}</option>
                    )
                })}
            </Form.Control>
            <ErrorMessage
                name={props.name}
                render={(msg) => <div style={{ color: "red", marginTop: ".8em" }}>{msg}</div>} />
        </>
    );
};

export default SelectFormulas;