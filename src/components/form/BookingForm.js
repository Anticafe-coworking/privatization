import React, { Component } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import ConfirmBooking from "../ConfirmBooking";
import Details from "../Details";
import DateInput from './DateInput';
import TextaeraInput from './TextaeraInput';
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
import SelectAnticafe from "./SelectAnticafe";
import SelectFormulas from "./SelectFormulas";
import { getNbr, getstartTime, getEndTime, getPrice } from "../utils";
import { types, meeting } from "../Data";
import schema from "../Schema";

class BookingForm extends Component {
    state = {
        checkBooking: false
    }

    submitForm = (values, { resetForm }, ...props) => {
        console.log({ values })
        let newDate = values.date;
        values.email = values.email.trim()
        values.formatedDate = newDate.getTime();
        let splitStart = values.start.split(":")
        let splitEnd = values.end.split(":")
        let startTime = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), Number(splitStart[0]))
        let endTime = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), Number(splitEnd[0]))
        values.startDate = startTime.getTime()
        values.endDate = endTime.getTime()
        values.price = getPrice(values)
        this.setState({ checkBooking: !this.state.checkBooking })
    }

    updateBooking = () => {
        this.setState({ checkBooking: !this.state.checkBooking })
    }

    filterOptions = anticafe => {
        if (anticafe === "Anticafé Lyon" || anticafe === "Anticafé Strasbourg" || anticafe === "Anticafé Bordeaux") {
            return [{ value: "", name: "Sélectionnez une formule" },
            { value: "Demi-journée Matin", name: "Demi-journée Matin" },
            { value: "Demi-journée Après-midi", name: "Demi-journée Après-midi" },
            { value: "Journée", name: "Journée" },
            { value: "Cocktails", name: "Cocktails" }
            ]
        }
        if (anticafe === "Anticafé Station F") {
            return [{ value: "", name: "Sélectionnez une formule" },
            { value: "Demi-journée Matin", name: "Demi-journée Matin - 59€/pers" },
            { value: "Demi-journée Après-midi", name: "Demi-journée Après-midi - 59€/pers" },
            { value: "Journée", name: "Journée - 89€/pers" },
            { value: "Cocktails", name: "Cocktails - 59€/pers" }
            ]
        } else {
            return [{ value: "", name: "Sélectionnez une formule" },
            { value: "Demi-journée Matin", name: "Demi-journée Matin - 49€/pers" },
            { value: "Demi-journée Après-midi", name: "Demi-journée Après-midi - 49€/pers" },
            { value: "Journée", name: "Journée - 79€/pers" },
            { value: "Cocktails", name: "Cocktails - 49€/pers" }
            ]
        }
    }

    render() {
        const { id, checkBooking } = this.state;
        return (
            <Formik
                validationSchema={schema}
                initialValues={{
                    firstName: "", lastName: "", email: "", phone: "",
                    date: "", company: "", start: "", end: "", event: "",
                    nbr: "", typeOfEvent: "", arrangement: "", space: "",
                    description: "", formulas: "", formule1: false, formule2: false,
                    formule3: false, formule4: false, formule5: false, formule6: false,
                    formule7: false, formule8: false, formule9: false
                }}
                onSubmit={this.submitForm}>

                {({
                    handleSubmit,
                    handleChange,
                    resetForm,
                    values,
                    errors,
                    touched,
                    ...props
                }) => {
                    return (
                        <Form onSubmit={handleSubmit} autoComplete="off">
                            <Row style={{ padding: "2em 1em" }}>

                                <Col xs={12} md={12} lg={4}>
                                    <Details id={id} booking={checkBooking} data={values.space} />
                                </Col>

                                {checkBooking ? <ConfirmBooking values={values} updateBooking={this.updateBooking} /> :
                                    (<>
                                        <Col xs={12} md={6} lg={3}>
                                            <p style={{ marginBottom: ".5rem" }}>Détails de votre réservation</p>

                                            <Form.Row className="margin-bottom-inputs">

                                                <Form.Group as={Col} md={6} >
                                                    <TextInput name="firstName" placeholder="Prénom" />
                                                </Form.Group>

                                                <Form.Group as={Col} md={6}>
                                                    <TextInput name="lastName" placeholder="Nom de famille" />
                                                </Form.Group>

                                            </Form.Row>

                                            <TextInput name="email" placeholder="Email" />
                                            <TextInput name="phone" placeholder="Téléphone" />
                                            <TextInput name="company" placeholder="Entreprise" />
                                            <SelectAnticafe name="space" />

                                            <SelectFormulas
                                                name="formulas"
                                                id="formulas"
                                                value={values.formulas}
                                                options={this.filterOptions(values.space)}
                                                disabled={values.space ? false : true} />
                                            {!values.space && <Form.Text id="formulas" muted>
                                                Sélectionner un Anticafé pour choisir une formule
                                                </Form.Text>}

                                            <DateInput name="date" />
                                            <Form.Row>

                                                <Form.Group as={Col} md={6}>
                                                    <SelectInput name="start" options={getstartTime(values.formulas) || []} />
                                                </Form.Group>

                                                <Form.Group as={Col} md={6}>
                                                    <SelectInput name="end" options={getEndTime(values.formulas) || []} />
                                                </Form.Group>

                                            </Form.Row>
                                            <TextaeraInput name="description" />

                                        </Col>
                                        <Col xs={12} md={6} lg={4}>
                                            <p style={{ marginBottom: "1.5rem" }}>Dites-nous en plus sur votre événement</p>
                                            <TextInput name="event" placeholder="Nom de votre évènement" />
                                            <SelectInput name="nbr" options={getNbr() || []} />
                                            <SelectInput name="typeOfEvent" options={types || []} />
                                            <SelectInput name="arrangement" options={meeting || []} />
                                            <h4 style={{ marginTop: "1.4rem" }}>Restauration</h4>

                                            {(values.formulas === "" || values.formulas === "Demi-journée Matin" || values.formulas === "Demi-journée Après-midi" || values.formulas === "Journée") &&
                                                <>
                                                    <CheckboxInput name="formule1" label="Boissons chaudes/fraîches et fruits frais (compris)" checked={values.formule1} />
                                                    <CheckboxInput name="formule3" label={(values.space === "Anticafé Bordeaux" || values.space === "Anticafé Lyon" || values.space === "Anticafé Strasbourg") ? "Déjeuner sur le pouce" : "Déjeuner sur le pouce - 15 HT/pers."} checked={values.formule3} />
                                                    <CheckboxInput name="formule4" label="Plats à partager - 29 HT/pers." checked={values.formule4} />
                                                    <CheckboxInput name="formule5" label={(values.space === "Anticafé Bordeaux" || values.space === "Anticafé Lyon" || values.space === "Anticafé Strasbourg") ? "Finger food" : "Finger food - 29 HT/pers."} checked={values.formule5} />
                                                    <CheckboxInput name="formule7" label={(values.space === "Anticafé Bordeaux" || values.space === "Anticafé Lyon" || values.space === "Anticafé Strasbourg") ? "Petit déjeuner ou goûté boosté" : "Petit déjeuner ou goûté boosté - 8 HT/pers."} checked={values.formule7} />
                                                </>}

                                            {(values.formulas === "" || values.formulas === "Demi-journée Matin" || values.formulas === "Journée") &&
                                                <CheckboxInput name="formule2" label="Petit déjeuner (compris)" checked={values.formule2} />}


                                            {(values.formulas === "" || values.formulas === "Demi-journée Après-midi" || values.formulas === "Journée") &&
                                                <CheckboxInput name="formule6" label="Gouter (compris)" checked={values.formule6} />}


                                            {(values.formulas === "" || values.formulas === "Cocktails") &&
                                                <>
                                                    <CheckboxInput name="formule8" label={(values.space === "Anticafé Bordeaux" || values.space === "Anticafé Lyon" || values.space === "Anticafé Strasbourg") ? "Plats à partager + 2 boissons alcoolisées" : "Plats à partager + 2 boissons alcoolisées - 29 HT/pers"} checked={values.formule8} />
                                                    <CheckboxInput name="formule9" label={(values.space === "Anticafé Bordeaux" || values.space === "Anticafé Lyon" || values.space === "Anticafé Strasbourg") ? "Finger Food + 2 boissons alcoolisées" : "Finger Food + 2 boissons alcoolisées - 29 HT/pers"} checked={values.formule9} />
                                                </>}

                                            <Button type="submit" className="grey-button" style={{ marginTop: "2.5rem" }}>Envoyer ma demande</Button>
                                            <p style={{ fontStyle: "italic" }}>*Un minimum payant peut s’appliquer en fonction de l’espace et des services sélectionnés.</p>
                                        </Col>
                                    </>)}
                            </Row>

                        </Form>
                    )
                }
                }
            </Formik >
        );
    }
}

export default BookingForm;