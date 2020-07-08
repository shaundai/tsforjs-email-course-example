const axios = require('axios');

const redirectUri = 'https://shaundai-salesloft-node.herokuapp.com/salesloft'
const clientId = '7278d0df3e6175f5900d67986ab4a639f38d80339d6692bc6d29ecb4a5e8d3ef'

const getSalesLoftApi = (id, uri) => {
        return axios.get(`https://accounts.salesloft.com/oauth/authorize?client_id=${clientId}&${redirectUri}=https://shaundai-salesloft-node.herokuapp.com/salesloft&response_type=code`)
}

export default getSalesLoftApi;