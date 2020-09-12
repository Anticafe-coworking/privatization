import React, { Component } from 'react';
import { anticafe } from "../components/Data";

class Details extends Component {

    selectSpace = space => {
        let anticafeDetails = anticafe.filter(el => el.name === space);
        let obj = anticafeDetails[0];
        return (
            <>
                <h1>Résumé de votre réservation</h1>
                <img src={obj.img} style={{ maxWidth: "90%", margin: "1.5rem 0", padding: '0 15px' }} />
                <div style={{ marginBottom: "0.8rem", marginLeft: "15px" }}>
                    <h4>Accès</h4>
                    <p>{obj.adresse}</p>
                    <p>{obj.metro}</p>
                    <h4>Contact</h4>
                    <p>{obj.phone}</p>
                    <p>{obj.email}</p>
                    <h4>Capacité privatisations</h4>
                    <p>Surface de l'espace : {obj.area}</p>
                    <p>Capacité maximale en ilôts de travail  : {obj.maxIlot}</p>
                    <p>Capacité maximale en plénière : {obj.maxPlenary}</p>
                    <p>Capacité maximale en cocktail : {obj.maxCocktail}</p>
                </div>
            </>
        )
    }

    render() {
        const { data } = this.props
        if (data && data !== "Sélectionnez un Anticafé") {
            return (
                <>
                    {this.selectSpace(data)}
                </>
            )
        } else {
            return (
                <>
                    <h1 style={{ marginBottom: "0.8rem", marginLeft: "15px" }}>Dites-nous en plus</h1>
                    <img src="https://www.anticafe.eu/wp-content/uploads/2019/11/booking_table.jpg" style={{ maxWidth: "90%", margin: "1.5rem 0", padding: '0 15px' }} />
                </>
            )
        }

    }
}

export default Details