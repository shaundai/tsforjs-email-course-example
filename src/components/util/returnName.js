const axios = require('axios');

const returnName = () => {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://shaundai-salesloft-node.herokuapp.com/salesloft`)
}


export default returnName