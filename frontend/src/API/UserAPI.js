import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/';
async function checkCredentials(email, password) {

    var bodyFormData = new FormData();
    bodyFormData.append('email', email);
    bodyFormData.append('password', password);
    return await axios.post(
        baseUrl + 'login',
        bodyFormData,
    );
}

async function signUp(email, name, password, lastName, password_confirmation) {
    var bodyFormData = new FormData();
    bodyFormData.append('f_name', name);
    bodyFormData.append('l_name', lastName);
    bodyFormData.append('email', email);
    bodyFormData.append('password', password);
    bodyFormData.append('password_confirmation', password_confirmation);
    return await axios.post(
        baseUrl + 'register',
        bodyFormData,
    );
}




export {
    checkCredentials,
    signUp,

}