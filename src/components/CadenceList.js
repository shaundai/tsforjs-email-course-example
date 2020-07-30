import React from 'react'
import Remove from './Remove'

const CadenceList = ({cadenceInfo}) => {
console.log('when does this happen')
console.log(cadenceInfo)
    
        return (
            <ul style={{listStyleType: 'none'}}>
                    {/* {cadenceInfo ? cadenceInfo.map(item => {
                    return <li key={item.membershipId}><div style={{fontSize: '.6em', marginLeft: '2em'}}><b>{item.cadenceActualName}</b> {item.teamCadence ? '(team)' : '(personal)'}  <Remove cadenceMembershipId={item.membershipId} /></div></li> 
                }) : <li><div style={{fontSize: '.6em', marginLeft: '2em'}}>no cadences to show</div></li>} */}
            </ul>
        )
}

export default CadenceList 
