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

        getAllAccountInfo(userId){
                return axios.get(`http://localhost:3001/api/accounts?sort_by=last_contacted_at&per_page=100&owner_id%5B%5D=${userId}`)
        },

        getSingleAccountInfo(accountIds){
                return axios.get(`http://localhost:3001/api/accounts?ids%5B%5D=${accountIds}`)
        },

//AccountIds below needs to be an array with commas
        getPeopleAtAccounts(AccountIds){
                return axios.get(`http://localhost:3001/api/accounts/people?account_id%5B%5D=${AccountIds}`)
        }
}

export default SalesLoft;