import React, { useState } from 'react'

import { CadenceList } from './CadenceList'
import NumberOfCadences from './NumberOfCadences'
import { AddToCadence } from './AddToCadence/AddToCadence'
import { getAllCadenceMembershipIdsForAPerson, getCadenceNames } from './util/salesloftApi'

export const CurrentCadences = ({personId, firstName, userInfo}) => {

    const [cadenceInfo, setCadenceInfo] = useState([])
    const [showCadenceList, setShowCadenceList] = useState(false)
    const [isCurrentlyOnCadence, setIsCurrentlyOnCadence] = useState()

    const getCadenceList = async (personid) => {
        try {
            const cadenceIdList = await getAllCadenceMembershipIdsForAPerson(personid)
            const cadenceNames = await getCadenceNames(cadenceIdList)
            setCadenceInfo(cadenceNames)
            setShowCadenceList(showCadenceList ? false : true)
        }
        catch(err){
          console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }

        return (
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                    <div data-testid="showHideCadences" style={{fontSize: '.7em', color: '#3C9CD2', cursor: 'pointer'}} onClick={() => getCadenceList(personId)}>{showCadenceList ? `hide ${firstName}'s cadences` : <NumberOfCadences firstName={firstName} personId={personId} setIsCurrentlyOnCadence={setIsCurrentlyOnCadence} isCurrentlyOnCadence={isCurrentlyOnCadence}/> }</div>
                    {showCadenceList ?
                    <CadenceList cadenceInfo={cadenceInfo} personId={personId} getCadenceList={getCadenceList} firstName={firstName} /> : null}
                </div>
                <AddToCadence userInfo={userInfo} personId={personId} getCadenceList={getCadenceList} />
            </div>
        )
}