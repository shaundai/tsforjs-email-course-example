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
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            },

        getAccountInfo(){
                return axios.get(`http://localhost:3001/api/accounts`)
        },
//AccountIds below needs to be an array with commas
        getPeopleAtAccounts(AccountIds){
                return axios.get(`http://localhost:3001/api/accounts/people?account_id%5B%5D=${AccountIds}`)
        }
}

export default SalesLoft;