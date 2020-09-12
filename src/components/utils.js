export const startHour = (start, end) => {
    let hours = ["Heure de début"];
    let i = start ? start : 8;
    let limit = end ? end : 23;

    for (i; i <= limit; i++) {
        hours.push(`${i}:00`)
    }
    return hours
}

export const endHour = (start, end) => {
    let hours = ["Heure de fin"];
    let i = start ? start : 0;
    let limit = end ? end : 23;
    for (i; i <= limit; i++) {
        hours.push(`${i}:00`)
    }
    return hours
}

//Calculer le nombre de personnes pour la privatisation
export const getNbr = () => {
    let nbr = ["Sélectionnez le nombre de personnes*"];
    for (let i = 0; i <= 150; i++) {
        nbr.push(i)
    }
    return nbr
}

export const getstartTime = formulas => {
    switch (formulas) {
        case "Demi-journée Matin":
            return startHour(8, 10)
        case "Demi-journée Après-midi":
            return startHour(12, 14)
        case "Journée":
            return startHour()
        case "Cocktails":
            return startHour(18, 22);
        default:
            return startHour();
    }
}

export const getEndTime = formulas => {
    switch (formulas) {
        case "Demi-journée Matin":
            return endHour(12, 14)
        case "Demi-journée Après-midi":
            return endHour(12, 18)
        case "Journée":
            return endHour();
        case "Cocktails":
            return endHour(19, 24)
        default:
            return endHour()
    }
}


export const getPrice = values => {
    let price;
    switch (values.formulas) {
        case "Demi-journée Matin":
        case "Demi-journée Après-midi":
            let dmPrice = values.space === "Anticafé Station F" ? 59 : 49;
            price = dmPrice * values.nbr;
            if (values.formule3) {
                price = price + (15 * values.nbr)
            }
            if (values.formule4) {
                price = price + (29 * values.nbr)
            }
            if (values.formule5) {
                price = price + (29 * values.nbr)
            }
            if (values.formule7) {
                price = price + (8 * values.nbr)
            }
            break;
        case "Journée":
            let dayPrice = values.space === "Anticafé Station F" ? 89 : 79;
            price = dayPrice * values.nbr;
            if (values.formule3) {
                price = price + (15 * values.nbr)
            }
            if (values.formule4) {
                price = price + (29 * values.nbr)
            }
            if (values.formule5) {
                price = price + (29 * values.nbr)
            }
            if (values.formule7) {
                price = price + (8 * values.nbr)
            }
            break;
        case "Cocktails":
            let cocktailsPrice = values.space === "Anticafé Station F" ? 59 : 49;
            price = cocktailsPrice * values.nbr;
            break;
        default:
            console.log('price', price)

    }
    return price
}

