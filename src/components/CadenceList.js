import React from 'react'
import Remove from './Remove'

const CadenceList = ({cadenceInfo, personId, getCadenceList}) => {

    console.log(cadenceInfo)
        return (
            <ul style={{listStyleType: 'none', paddingLeft: '3vw'}}>
                    {cadenceInfo ? cadenceInfo.map(item => {
                    return <li key={item.id}><div style={{fontSize: '.6em'}}><b>{item.name}</b> {item.team_cadence ? '(team)' : '(personal)'}  <Remove personId={personId} cadenceId={item.id} getCadenceList={getCadenceList} /></div></li> 
                }) : <li><div style={{fontSize: '.6em', marginLeft: '2em'}}>no cadences to show</div></li>}
            </ul>
        )
}

export default CadenceList 
