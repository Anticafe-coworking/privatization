import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';
import axios from "axios";

class ConfirmBooking extends Component {
    state = {
        isSubmitting: false
    }
    validateBooking = () => {
        console.log('VALUES', this.props.values)
        // const config = {
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        // }

        axios.post("http://localhost:8000/createEstimate", this.props.values)
            .then((result) => {
                console.log("result", result)
                this.setState({ isSubmitting: true })
                // resetForm({ values: "" })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { values, updateBooking } = this.props
        const { isSubmitting } = this.state;
        if (isSubmitting) {
            return (
                <Col md={7}>
                    <h1 style={{ textAlign: "center" }}>Merci</h1>
                    <p>Notre équipe prendra contact avec vous dans les heures qui viennent et vous enverra un devis détaillé</p>
                </Col>
            )
        } else {
            return (
                <Col md={7}>
                    <div>{values.space}</div>
                    {values.event && <div>Évènement : {values.event}</div>}
                    {values.nbr && <div>Pour {values.nbr} personnes</div>}
                    <div>Formule : {values.formulas}</div>
                    {values.arrangement && <div>Agencement : {values.arrangement}</div>}
                    {values.typeOfEvent && <div>Nature : {values.typeOfEvent}</div>}
                    <div>Restauration : </div>
                    {values.formule1 && <div>Boissons chaudes/fraîches et fruits frais (compris)</div>}
                    {values.formule2 && <div>Petit déjeuner (compris)</div>}
                    {values.formule3 && <div>Déjeuner sur le pouce - 15 HT/pers.</div>}
                    {values.formule4 && <div>Plats à partager - 29 HT/pers.</div>}
                    {values.formule5 && <div>Finger food - 29 HT/pers.</div>}
                    {values.formule6 && <div>Gouter (compris)</div>}
                    {values.formule7 && <div>Petit déjeuner ou goûté boosté - 8 HT/pers.</div>}
                    {values.formule8 && <div>Cocktail - 49 HT/pers.</div>}

                    <div>
                        <p>{values.firstName} {values.lastName}</p>
                        <p>{values.email}</p>
                        <p>{values.phone}</p>
                    </div>

                    {(values.space === "Anticafé Bordeaux" || values.space === "Anticafé Lyon" || values.space === "Anticafé Strasbourg") ? null : (
                        <>
                            <div>Tarif HT</div>
                            <h4>{values.price} €</h4>
                            <p>Un minimum payant peut s’appliquer en fonction de l’espace et des services sélectionnés. </p>
                        </>)}

                    <p onClick={updateBooking}>Modifier ma demande</p>
                    <Button onClick={this.validateBooking} className="grey-button">Valider ma demande</Button>
                </Col>
            );
        }

    }
}

export default ConfirmBooking;