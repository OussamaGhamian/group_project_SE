import axios from 'axios';
// import Cookies from 'universal-cookie'

// const cookies = new Cookies();
// const token = cookies.get('token').token;
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiN2U0NjU4OTg2YTA2NzA1NmM5ZjNhNDZkMWU1OWNlMTQxNjk1ZmE0ZGMyYjI1NTIxZTRkOWY5ODRlZDUzMjZmM2M3MDNiZDkxNWQwOTFlNDAiLCJpYXQiOiIxNjA3MDE1NDg3LjU5NjI0NSIsIm5iZiI6IjE2MDcwMTU0ODcuNTk2MjUzIiwiZXhwIjoiMTYzODU1MTQ4Ny41ODg0ODIiLCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.vVUD8yWOENUWU2Q-PBDbVwjwivjDkpkxjBnW9Hk8bIMKAk878MKY0byr5lETVLnYhjJtYuGRw1D6vOfzTEirnWmuoXjX35h71TIllwpAkSv4WBnMKXPjUNJPu9gtL7N6XnrKHKzgItF-uq9FsNXYrmlW9adl6c6jUDV-pvgFQTRie8VuhRaCkN6PTkyqAkAz1OK5ExmMzF2B4jvIwvhBB_-kPkrbnrHeGFLIYWFT_c2G0-XWqANs6eDoDFNi5zRumOtZiWjsR52FltqjNZGRs3OIM2q61-su5rsC4eEei39ZdZBFQEz_lefvM6jeM15-mLFv_Zcz-jWeRDBcxxxLOVcLH6GFcMPZI7cY7NcS3or2F8n7tdqqjHd4ieypgwV885VsSVUkF_gcG_2hDvV86CbWztivZC9qnmlCkEXdgTjVPOEMUCVuSQafPpFws4Qr-0W2rMVuqvR6e-n7ik3cfFu4JkyayzLTlGrfy1h1x5b62Xh0h93nuXaBTgDwKPUL39ox4391G32O4utZk46sSEOT6T-3iPBi4ZQ9beybwadbIluynLUC97J-5KGjWAUzFfE-P1vrE2pQ5O_T7lntlsmB0BSQ0Ex2fOD8hOcF8M2bGuuFFT5BBnRR74_xL5AeLG-p13ETeGUUWepBnUCzY0m5RvsMO8DypF2BuBv-p28'
const baseUrl = 'http://localhost:8000/api/';

async function getProjects() {
    return await axios.get
        (
            `${baseUrl}myprojects`,
            { headers: { 'Authorization': `Bearer ${token}` } }
        );
}

async function addProject(ProjName, ProjDescription, OrgId) {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('title', ProjName);
    data.append('description', ProjDescription);
    data.append('organization_id', OrgId);
    data.append('due_date', '2020-12-03 14:05:53');

    var config = {
        method: 'post',
        url: 'http://localhost:8000/api/project',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
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
    getProjects,
    addProject,
}