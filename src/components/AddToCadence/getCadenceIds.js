import SalesLoft from '../util/mockSalesloftApi'

export const getCadenceIdsByGuid = async (isTeamCadence, userInfo) => {
        const allCadencesById = (await SalesLoft.getAllCadencesByPersonGuid(isTeamCadence, userInfo.guid)).data.data
        const justCadenceIds = allCadencesById.map((cadence) => {
                return cadence.id
            })
        return justCadenceIds
    }