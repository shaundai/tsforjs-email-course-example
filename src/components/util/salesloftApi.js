const axios = require('axios');


const SalesLoft = {
        
        getUserInfo(){
                return axios.get(`http://localhost:3001/api/user`)
        },

        getAccountInfo(){
                return axios.get(`http://localhost:3001/api/accounts`)
        }
}

export default SalesLoft;