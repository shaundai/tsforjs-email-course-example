import React from 'react'
import Remove from './RemoveFromCadence/Remove'

const CadenceList = ({cadenceInfo, searchText, personId, getCadenceList, firstName}) => {
        return (
            <ul style={{listStyleType: 'none', paddingLeft: '3vw'}}>
                    {cadenceInfo[0] ? cadenceInfo.map(item => {
                    return <li key={item.id}><div style={{fontSize: '.6em'}}><b>{item.name}</b> {item.team_cadence ? '(team)' : '(personal)'}  <Remove personId={personId} cadenceId={item.id} getCadenceList={getCadenceList} cadenceName={item.name} firstName={firstName}/></div></li> 
                }) : <li><div style={{fontSize: '.6em', marginLeft: '2em'}}>no cadences to show</div></li>}
            </ul>
        )
}

export default CadenceList 
