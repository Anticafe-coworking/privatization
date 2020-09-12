import React from "react";
import { useField, useFormikContext, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import fr from "date-fns/locale/fr";

export const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
        <>
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={val => {
                    setFieldValue(field.name, val);
                }}
                className="date margin-top-inputs"
                placeholderText="Sélectionnez une date*"
                locale={fr}
                minDate={new Date()}
                withPortal
            />
            <ErrorMessage
                name={props.name}
                render={(msg) => <div style={{ color: "red", marginTop: ".8em" }}>{msg}</div>} />
        </>
    );
};

export default DatePickerField;