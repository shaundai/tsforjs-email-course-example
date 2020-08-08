import React, { useState } from 'react'
import SalesLoft from './util/salesloftApi'

import CadenceList from './CadenceList'
import NumberOfCadences from './NumberOfCadences'
import AddToCadence from './AddToCadence/AddToCadence'

const CurrentCadences = ({personId, firstName, userInfo}) => {

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
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end', padding: '.5em', paddingLeft: 0}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{fontSize: '.7em', color: '#3C9CD2', cursor: 'pointer'}} onClick={() => getCadenceList(personId)}>{showCadenceList ? `hide ${firstName}'s cadences` : <NumberOfCadences firstName={firstName} personId={personId}/> }</div>
                    {showCadenceList ?
                    <CadenceList cadenceInfo={cadenceInfo} personId={personId} getCadenceList={getCadenceList} firstName={firstName} /> : null}
                </div>
                <AddToCadence userInfo={userInfo} personId={personId} getCadenceList={getCadenceList} />
            </div>
        )
}

export default CurrentCadences;