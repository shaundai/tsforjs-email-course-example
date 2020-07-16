const axios = require('axios');

const getSalesLoftApi = () => {
        return axios.get(`http://localhost:3001/api/salesloft`)
}

export default getSalesLoftApi;