import React, { useState } from 'react'
import SalesLoft from './util/salesloftApi'

import CadenceList from './CadenceList'

const CurrentCadences = ({personId, firstName}) => {

    
    const [cadenceInfo, setCadenceInfo] = useState([])
    const [showCadenceList, setShowCadenceList] = useState(false)

    const getCadenceList = async (personid) => {
        try {
            const cadenceMembershipList = (await SalesLoft.getIdsOfCadencesByPerson(personid)).data.data
            const cadenceIdList = cadenceMembershipList.map((membership) => {
                return membership.cadence.id
            })
            const cadenceNames = (await SalesLoft.getCadenceNameById(cadenceIdList)).data.data
            setCadenceInfo(cadenceNames)
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
                <CadenceList cadenceInfo={cadenceInfo} personId={personId} getCadenceList={getCadenceList} firstName={firstName} /> : null}
            </div>
        )
}

export default CurrentCadences;