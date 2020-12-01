import axios from 'axios';
import CookieService from './CookieService';

const BASE_URL = 'http://localhost:8000/api'

const cookie = CookieService.get('access_token');

const token = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+ cookie
    },
}


export default{
    register: (register) =>
        axios.post(`${BASE_URL}/register`,register)
}