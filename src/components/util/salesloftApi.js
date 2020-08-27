const axios = require('axios');

const path = "https://shaundai-salesloft-node.herokuapp.com"

const SalesLoft = {
        
        getCurrentUserInfo(){
                return axios.get(`${path}/api/user`)
        },

        getAnyUserInfo(userId){
                return axios.get(`${path}/api/team/id/${userId}`)
        },

        getAllAccountInfo(userId){
                return axios.get(`${path}/api/accounts?sort_by=last_contacted_at&per_page=100&owner_id%5B%5D=${userId}`)
        },
                //AccountIds below needs to be an array with commas
        getPeopleAtAccounts(AccountIds){
                return axios.get(`${path}/api/accounts/people?account_id%5B%5D=${AccountIds}`)
        },

        getSingleAccountInfo(AccountIds){
                return axios.get(`${path}/api/account/${AccountIds}`)
        },

        getIdsOfCadencesByPerson(PersonId){
                return axios.get(`${path}/api/cadence/current/${PersonId}`)
        },

        //CadenceIds below needs to be an array with commas
        getCadenceNameById(CadenceIds){
                return axios.get(`${path}/api/cadence/name?cadenceid%5B%5D=${CadenceIds}`)
        },

        removePersonFromCadence(CadenceMembershipId){
                return axios.get(`${path}/api/cadence/remove/${CadenceMembershipId}`)
        },

        addPersonToCadence(PersonId, CadenceId){
                return axios.get(`${path}/api/cadence/add?personid=${PersonId}&cadenceid=${CadenceId}`)
        },

        getContactInfo(PersonId){
                return axios.get(`${path}/api/people/id/${PersonId}`)
        },

        getCadenceMembershipByPersonIdAndCadenceId(PersonId, CadenceId){
                return axios.get(`${path}/api/cadence/membership?personid=${PersonId}&cadenceid=${CadenceId}`)
        },

        getAllCadencesByPersonGuid(TeamCadence, PersonGuid){
                return axios.get(`${path}/api/cadences/all?teamcadence=${TeamCadence}&ownerguid%5B%5D=${PersonGuid}`)
        },
        
        getStepsOnCadence(CadenceId){
                return axios.get(`${path}/api/cadence/steps?cadenceid=${CadenceId}`)
        }
}

export default SalesLoft

export const getAllAccountInfo = async (userId) => {
        return await axios.get(`${path}/api/accounts?sort_by=last_contacted_at&per_page=100&owner_id%5B%5D=${userId}`)
}

export const getCurrentUserInfo = async () => {
        const { id, first_name: firstName, guid } = (await SalesLoft.getCurrentUserInfo()).data.data
        return {id: id, firstName: firstName, guid: guid}
    }

export const getCadenceMembershipByPersonIdAndCadenceId = async (personId, cadenceId) => {
        const membershipId = (await SalesLoft.getCadenceMembershipByPersonIdAndCadenceId(personId, cadenceId)).data.data[0].id
        return membershipId
     }

export const getAllCadenceMembershipIdsForAPerson = async (personId) => {
        const cadenceMembershipList = (await SalesLoft.getIdsOfCadencesByPerson(personId)).data.data
        const cadenceIdList = cadenceMembershipList.map((membership) => membership.cadence.id)
        return cadenceIdList
}

export const getCadenceNames = async (cadenceIdList) => {
        const cadenceNames = (await SalesLoft.getCadenceNameById(cadenceIdList)).data.data
        return cadenceNames
    }

export const getLastContactedPerson = async (id) => {
        const person = (await SalesLoft.getContactInfo(id)).data.data.display_name
        return person
}
    
export const getUserWhoLastContactedAccount = async (id) => {
        const userWhoLastContactedAccount = (await SalesLoft.getAnyUserInfo(id)).data.data.name
        return userWhoLastContactedAccount
}