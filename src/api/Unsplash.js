import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 99e11b0bfc1f46ca1030708261dbddb493d3e058bddef5de2440996e3097cd7e'
    }
});