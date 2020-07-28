import React, { useState } from 'react'
import SalesLoft from './util/salesloftApi'

const CurrentCadences = ({personId, firstName}) => {

    const [cadenceNames, setCadenceNames] = useState([])
    const [showCadenceList, setShowCadenceList] = useState(false)

    const getCadenceList = async (personid) => {
        try {
            const cadenceMembershipList = (await SalesLoft.getIdsOfCadencesByPerson(personid)).data.data
            const cadenceIdList = cadenceMembershipList.map(membership => {
                return membership.cadence.id
            })
            const cadenceNameList = (await SalesLoft.getCadenceNameById(cadenceIdList)).data.data
            setCadenceNames(cadenceNameList)
            setShowCadenceList(showCadenceList ? false : true)
        }
        catch(err){
          console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }

        return (
            <div>
                <div style={{fontSize: '.6em', color: 'blue'}} onClick={() => getCadenceList(personId)}>{showCadenceList ? `hide ${firstName}'s cadences` : `show ${firstName}'s cadences`}</div>
                {showCadenceList ?
                <div>
                    {cadenceNames ? cadenceNames.map(cadence => {
                    return <div style={{fontSize: '.6em', marginLeft: '2em'}}><b>{cadence.name}</b> {cadence.team_cadence ? '(team)' : '(personal)'}</div>
                }) : null}
                </div> : null}
            </div>
        )
}

export default CurrentCadences;