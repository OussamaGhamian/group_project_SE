import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('token').token;
const baseUrl = 'http://localhost:8000/api/';

async function getProjects() {
    return await axios.get
        (
            `${baseUrl}myprojects`,
            { headers: { 'Authorization': `Bearer ${token}` } }
        );
}

export {
    getProjects,
}