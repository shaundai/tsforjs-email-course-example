import React, { useState } from 'react'
import SalesLoft from './util/salesloftApi'

import CadenceList from './CadenceList'

const CurrentCadences = ({personId, firstName}) => {

    
    const [cadenceInfo, setCadenceInfo] = useState([])
    const [showCadenceList, setShowCadenceList] = useState(false)

    const getCadenceList = async (personid) => {
        try {
            const cadenceMembershipList = (await SalesLoft.getIdsOfCadencesByPerson(personid)).data.data
            const cadenceIdList = cadenceMembershipList.map(membership => {
                return {cadenceId: membership.cadence.id, membershipId: membership.id}
            })
            const allMemberships = cadenceIdList.forEach(mem => {
                SalesLoft.getCadenceNameById(mem.cadenceId).then(response => {
                    mem.cadenceActualName = response.data.data[0].name
                })
                return mem
            })
            setCadenceInfo(allMemberships)
            setShowCadenceList(showCadenceList ? false : true)
        }
        catch(err){
          console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }

        return (
            <div>
                <div style={{fontSize: '.7em', color: '#3C9CD2'}} onClick={() => getCadenceList(personId)}>{showCadenceList ? `hide ${firstName}'s cadences` : `show ${firstName}'s cadences`}</div>
                {showCadenceList ?
                <CadenceList cadenceInfo={cadenceInfo}/> : null}
            </div>
        )
}

export default CurrentCadences;