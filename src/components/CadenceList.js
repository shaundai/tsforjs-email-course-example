import React from 'react'
import { Remove } from './RemoveFromCadence/Remove'

export const CadenceList = ({cadenceInfo, personId, getCadenceList, firstName}) => {
        return (
            <ul style={{listStyleType: 'none', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '1vh', marginBottom: '1vh', marginLeft: '0px', backgroundColor: '#f1fafe', padding: '4px 6px'}}>
                    {cadenceInfo[0] ? cadenceInfo.map(item => {
                    return <li key={item.id}><div style={{fontSize: '.7em'}}><b>{item.name}</b> {item.team_cadence ? '(team)' : '(personal)'}  <Remove personId={personId} cadenceId={item.id} getCadenceList={getCadenceList} cadenceName={item.name} firstName={firstName}/></div></li> 
                }) : <li><div style={{fontSize: '.6em', marginLeft: '2em'}}>no cadences to show</div></li>}
            </ul>
        )
}
