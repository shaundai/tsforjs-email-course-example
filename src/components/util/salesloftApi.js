const axios = require('axios');

const SalesLoft = {
        
        getUserInfo(){
                return axios.get(`http://localhost:3001/api/user`)
        },

        getAllAccountInfo(userId){
                return axios.get(`http://localhost:3001/api/accounts?sort_by=last_contacted_at&per_page=100&owner_id%5B%5D=${userId}`)
        },
                //AccountIds below needs to be an array with commas
        getPeopleAtAccounts(AccountIds){
                return axios.get(`http://localhost:3001/api/accounts/people?account_id%5B%5D=${AccountIds}`)
        },

        getSingleAccountInfo(AccountIds){
                return axios.get(`http://localhost:3001/api/account/${AccountIds}`)
        },

        getIdsOfCadencesByPerson(PersonId){
                return axios.get(`http://localhost:3001/api/cadence/current/${PersonId}`)
        },

        //CadenceIds below needs to be an array with commas
        getCadenceNameById(CadenceIds){
                return axios.get(`http://localhost:3001/api/cadence/name?cadenceid%5B%5D=${CadenceIds}`)
        },

        removePersonFromCadence(CadenceMembershipId){
                return axios.get(`http://localhost:3001/api/cadence/remove/${CadenceMembershipId}`)
        },

        getContactInfo(PersonId){
                return axios.get(`http://localhost:3001/api/people/id/${PersonId}`)
        },

        getCadenceMembershipByPersonIdAndCadenceId(PersonId, CadenceId){
                return axios.get(`http://localhost:3001/api/cadence/membership?personid=${PersonId}&cadenceid=${CadenceId}`)
        }

}

export default SalesLoft;