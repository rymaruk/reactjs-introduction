import isValidEmail from "sane-email-validation";

export const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if ( !isValidEmail(values.email) ) {
        errors.email = 'Invalid email address';
    }
    if (!values.phone) {
        errors.phone = 'Required';
    } else if ( !values.phone.match(/^([+]{1})?([0-9]{2})([0-9]{3})([0-9]{7})$/i) ) {
        errors.phone = 'Invalid phone number';
    }
    return errors;
};
