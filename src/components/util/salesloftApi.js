const axios = require('axios');


const SalesLoft = {
        
        getUserInfo(){
                return axios.get(`http://localhost:3001/api/user`)
        }

}

export default SalesLoft;