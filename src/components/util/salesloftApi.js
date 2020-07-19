const axios = require('axios');


const SalesLoft = {
        
        getUserInfo(){
                return axios.get(`http://localhost:3001/api/user`)
        },

        sendUserInfo(id){
                return axios({
                    method: 'post',
                    url: 'http://localhost:3001/userid',
                    data: {
                        "id": id,
                        "float": "hey"
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            },

        getAccountInfo(){
                return axios.get(`http://localhost:3001/api/accounts`)
        }
}

export default SalesLoft;