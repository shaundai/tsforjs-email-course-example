const axios = require('axios');

const returnName = () => {
    return axios.get(`https://shaundai-salesloft-node.herokuapp.com/salesloft`)
}


export default returnName