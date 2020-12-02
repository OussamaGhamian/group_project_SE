import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('token').token;
const baseUrl = 'http://localhost:8000/api/';

async function getOrganization() {
    return await axios.get
        (
            `${baseUrl}organization`,
            { headers: { 'Authorization': `Bearer ${token}` } }
        );
}


async function addOrganization(orgName) {
    console.log(orgName)
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
        'name': orgName
    });
    var config = {
        method: 'post',
        url: 'http://localhost:8000/api/organization',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    };

    return await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });


}





export {
    getOrganization,
    addOrganization,


}