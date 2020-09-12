const anticafe = [
    {
        name: "Anticafé Bordeaux",
        image: `https://www.anticafe.eu/wp-content/uploads/2018/10/AnticaféBordeaux-8.jpg?${new Date().getTime()}`,
        img: "https://res.cloudinary.com/dtfytu3jb/image/upload/c_scale,w_370/v1598919600/anticafe/Anticafe%CC%81Bordeaux_8_wmg327.jpg",
        adresse: "11 rue Duffour Dubergier 33000 Bordeaux",
        metro: "Tram A & B – Hôtel de Ville",
        phone: "05 57 83 67 02",
        email: "bordeaux@anticafe.fr",
        id: 0,
        maxIlot: "30 personnes",
        maxPlenary: "30 personnes",
        maxCocktail: "50 personnes",
        area: "95m2"
    },
    {
        name: "Anticafé Lyon",
        image: `https://www.anticafe.eu/wp-content/uploads/2018/10/Anticafe%CC%81_Lyon-2-e1571994136919.jpg?${new Date().getTime()}`,
        img: "https://res.cloudinary.com/dtfytu3jb/image/upload/c_scale,w_370/v1598919883/anticafe/Anticafe_CC_81_Lyon-2-e1571994136919_f5gd6b.jpg",
        adresse: "9 Rue du Bât d’Argent 69001 Lyon",
        metro: "métro D – Hôtel de Ville ",
        phone: "04 78 29 90 22",
        email: "terreaux@anticafe.fr",
        id: 1,
        maxIlot: "50 personnes",
        maxPlenary: "50 personnes",
        maxCocktail: "80 personnes",
        area: "130m2"
    },
    {
        name: "Anticafé Beaubourg",
        image: "https://www.anticafe.eu/wp-content/uploads/2018/04/AntiCaféBeaubourg-35.jpg",
        img: "https://res.cloudinary.com/dtfytu3jb/image/upload/c_scale,w_370/v1598919629/anticafe/AntiCafe%CC%81Beaubourg-35-min_1_t4jvka.jpg",
        adresse: "79 rue Quincampoix 75003 Paris ",
        metro: "M° Etienne Marcel / Rambuteau ou RER Châtelet / Les Halles",
        phone: "01 73 73 10 74",
        email: "beaubourg@anticafe.fr",
        id: 2,
        maxIlot: "15 personnes",
        maxPlenary: "15 personnes",
        maxCocktail: "80 personnes",
        area: "150m2"
    },
    {
        name: "Anticafé Canal St Martin",
        image: "https://www.anticafe.eu/wp-content/uploads/2019/11/CANAL_ST_MARTIN-min.jpg",
        img: "https://res.cloudinary.com/dtfytu3jb/image/upload/c_scale,w_370/v1598919562/anticafe/CANAL_ST_MARTIN-min_bkeyjk.jpg",
        adresse: "33 rue Albert Thomas 75010 Paris ",
        metro: "M° République / M° Jacques Bonsergent ",
        phone: "09 73 16 39 73",
        email: "latelier@anticafe.fr",
        id: 3,
        maxIlot: "30 personnes",
        maxPlenary: "40 personnes",
        maxCocktail: "60 personnes",
        area: "70m2"
    },
    {
        name: "Anticafé La Défense",
        image: "https://www.anticafe.eu/wp-content/uploads/2019/12/Anticafe%CC%81_cnit_-1.jpg",
        img: "https://res.cloudinary.com/dtfytu3jb/image/upload/c_scale,w_370/v1598919687/anticafe/Anticafe%CC%81_cnit_-1_kaztub.jpg",
        adresse: "2 place de La Défense 92800 Puteaux ",
        metro: "M° et RER La Défense ",
        phone: "09 82 54 92 23‬",
        email: "ladefense@anticafe.fr",
        id: 4,
        maxIlot: "75 personnes",
        maxPlenary: "100 personnes",
        maxCocktail: "150 personnes",
        area: "360m2"
    },
    {
        name: "Anticafé La Fayette",
        image: "https://www.anticafe.eu/wp-content/uploads/2018/08/Anticafe-76-rue-la-Fayette-3.jpg",
        img: "https://res.cloudinary.com/dtfytu3jb/image/upload/c_scale,w_370/v1598919644/anticafe/Anticafe-76_rue_la_Fayette-3_rnevuj.jpg",
        adresse: "76 rue La Fayette 75009 Paris ",
        metro: "M° Cadet / Poissonnière ",
        phone: "01 82 07 83 42‬",
        email: "lafayette@anticafe.fr",
        id: 5,
        maxIlot: "25 personnes",
        maxPlenary: "20 personnes",
        maxCocktail: "60 personnes",
        area: "150m2"
    },
    {
        name: "Anticafé Louvre",
        image: "https://www.anticafe.eu/wp-content/uploads/2018/04/Anticafe%CC%81_louvre_Baptiste_Lanne5.jpg",
        img: "https://res.cloudinary.com/dtfytu3jb/image/upload/c_scale,w_370/v1598919482/anticafe/Anticafe%CC%81_louvre_Baptiste_Lanne5-min_snjyfq.jpg",
        adresse: "10 Rue de Richelieu 75001 Paris ",
        metro: "M° Pyramides / Palais Royal ",
        phone: "01 40 20 95 44‬",
        email: "louvre@anticafe.fr",
        id: 6,
        maxIlot: "25 personnes",
        maxPlenary: "30 personnes",
        maxCocktail: "45 personnes",
        area: "100m2"
    },
    {
        name: "Anticafé République",
        image: "https://www.anticafe.eu/wp-content/uploads/2018/04/AnticaféRép1-9.jpg",
        img: "https://res.cloudinary.com/dtfytu3jb/image/upload/c_scale,w_370/v1598919633/anticafe/Re%CC%81publique_unyd3b.jpg",
        adresse: "6 rue du Château d’Eau 75010 Paris",
        metro: "M° République / M° Jacques Bonsergent",
        phone: "01 42 80 17 57",
        email: "republique@anticafe.fr",
        id: 7,
        maxIlot: "30 personnes",
        maxPlenary: "30 personnes",
        maxCocktail: "60 personnes",
        area: "70m2"
    },
    {
        name: "Anticafé Station F",
        image: "https://www.anticafe.eu/wp-content/uploads/2019/11/STATIONF_crBaptisteLanne.jpg",
        img: "https://res.cloudinary.com/dtfytu3jb/image/upload/c_scale,w_370/v1598919644/anticafe/STATIONF_crBaptisteLanne_kbkkxv.jpg",
        adresse: "55 Boulevard Vincent Auriol 75013 Paris ",
        metro: "M° Chevaleret / M° Bibliothèque François-Mitterand",
        phone: "01 84 25 59 86",
        email: "stationf@anticafe.fr",
        id: 8,
        maxIlot: "60 personnes",
        maxPlenary: "65 personnes",
        maxCocktail: "120 personnes",
        area: "150m2"
    },
    {
        name: "Anticafé Strasbourg",
        image: "https://www.anticafe.eu/wp-content/uploads/2018/09/anticafe_facebook-010.jpg",
        img: "https://res.cloudinary.com/dtfytu3jb/image/upload/c_scale,w_370/v1598919455/anticafe/Anticafe_Stras_S_040_pecmpu.jpg",
        adresse: "1 rue de la Division Leclerc 67000 Strasbourg",
        metro: "Tram A et D Langstross / Grand rue",
        phone: "09 87 33 45 19",
        email: "strasbourg@anticafe.fr",
        id: 9,
        maxIlot: "50 personnes",
        maxPlenary: "50 personnes",
        maxCocktail: "100 personnes",
        area: "180m2"
    }]

const types = ["Nature de votre évènement", "Réunion",
    "Conférence", "Formation", "Atelier", , "Team building", "Autre"];

const meeting = ["Agencement", "en plénière", `en "U"`, "en atelier de travail",
    "groupes sans tables", "Autre"]

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

module.exports = { anticafe, types, meeting, months };
