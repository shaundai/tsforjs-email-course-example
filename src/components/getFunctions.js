import SalesLoft from './util/salesloftApi'

export const getAllAccountInfo = async (id) => {
    const allInfo = (await SalesLoft.getAllAccountInfo(id)).data.data
    return allInfo
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
    const cadenceIdList = cadenceMembershipList.map((membership) => {
    return membership.cadence.id
    })
    return cadenceIdList
}

export const getCadenceNames = async (cadenceIdList) => {
    const cadenceNames = (await SalesLoft.getCadenceNameById(cadenceIdList)).data.data
    return cadenceNames
}

