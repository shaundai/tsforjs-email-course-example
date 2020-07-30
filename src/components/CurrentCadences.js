import React, { useState } from 'react'
import SalesLoft from './util/salesloftApi'

const CurrentCadences = ({personId, firstName}) => {

    
    const [cadenceInfo, setCadenceInfo] = useState([])
    const [cadenceNames, setCadenceNames] = useState([])
    const [showCadenceList, setShowCadenceList] = useState(false)

    const getCadenceList = async (personid) => {
        try {
            const cadenceMembershipList = (await SalesLoft.getIdsOfCadencesByPerson(personid)).data.data
            const cadenceIdList = cadenceMembershipList.map(membership => {
                return {cadenceId: membership.cadence.id, membershipId: membership.id}
            })
            const allMemberships = cadenceIdList.map(mem => {
                SalesLoft.getCadenceNameById(mem.cadenceId).then(({data}) => {
                    mem.cadenceName = data.data[0].name
                    mem.teamCadence = data.data[0].team_cadence
                    console.log(data.data[0])
                })
                return mem
            })
            console.log(allMemberships)
            const cadenceNameList = (await SalesLoft.getCadenceNameById(cadenceIdList)).data.data
            setCadenceInfo(allMemberships)
            setCadenceNames(cadenceNameList)
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
                <div>
                    {cadenceInfo[0] ? cadenceInfo.map(cadence => {
                    return <div style={{fontSize: '.6em', marginLeft: '2em'}} key={cadence.membershipId}><b>{cadence.cadenceName}</b> {cadence.teamCadence ? '(team)' : '(personal)'}  <span style={{color: 'blue'}} cadenceMembershipId={cadence.membershipId}>remove</span></div> 
                }) : <div style={{fontSize: '.6em', marginLeft: '2em'}}>no cadences to show</div>}
                </div> : null}
            </div>
        )
}

export default CurrentCadences;