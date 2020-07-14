const axios = require('axios');

const testApi = () => {
    return axios.get(`https://shaundai-salesloft-node.herokuapp.com/salesloft`)
}


export default testApi