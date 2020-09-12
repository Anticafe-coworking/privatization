import * as Yup from "yup";

const schema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Trop court!')
        .max(70, 'Trop Long!')
        .required('Ce champs est requis'),
    lastName: Yup.string()
        .min(2, 'Trop court!')
        .max(70, 'Trop Long!')
        .required('Ce champs est requis'),
    email: Yup.string()
        .email('Email invalide')
        .required('Ce champs est requis'),
    phone: Yup.number()
        .required('Ce champs est requis'),
    company: Yup.string()
        .min(2, 'Trop court!')
        .max(70, 'Trop Long!')
        .required('Ce champs est requis'),
    space: Yup.string()
        .required('Ce champs est requis'),
    date: Yup.date()
        .required("Ce champs est requis"),
    start: Yup.string()
        .required('Ce champs est requis'),
    end: Yup.string()
        .required('Ce champs est requis'),
    nbr: Yup.number()
        .required('Ce champs est requis')
});

export default schema;