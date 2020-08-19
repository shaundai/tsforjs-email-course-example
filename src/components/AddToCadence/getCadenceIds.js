import SalesLoft from '../util/salesloftApi'

export const getCadenceIdsByGuid = async (isTeamCadence, userInfo) => {
        const allCadencesById = (await SalesLoft.getAllCadencesByPersonGuid(isTeamCadence, userInfo.guid)).data.data
        const justCadenceIds = allCadencesById.map((cadence) => {
                return cadence.id
            })
        return justCadenceIds
    }