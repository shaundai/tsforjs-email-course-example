import React from 'react'
import styled from 'styled-components'
import utilFunctions from './util/utilFunctions'

import CurrentCadences from './CurrentCadences'

//images
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

const PeopleAtAccount = ({people}) => {
    
            return (
                <div style={{width: '50vw', margin: 0, padding: 0}}>
                    <TierTitle>Contacts ({people.length})</TierTitle>
                    <ul style={{listStyleType: 'none', margin: 0, padding: 0, height: '60vh', overflow: 'scroll'}}>
                    {people.map(item => (
                    <ListAccount key={item.id}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                          <div style={{display: 'flex', flexDirection: 'column'}}>
                            <div style={{fontSize: '.8em'}}><b>{item.first_name} {item.last_name}</b></div>
                            {item.last_contacted_at ? <div style={{fontSize: '.7em'}}>Last Contacted: {item.last_contacted_at && utilFunctions.parsedDate(item.last_contacted_at)} ago</div> : <div style={{fontSize: '.7em'}}>Never Contacted</div>}
                            <div style={{fontSize: '.6em', color: 'blue'}}>show {item.first_name}'s cadences</div>
                          </div>
                          <div style={{display: 'flex', alignItems: 'center'}}>
                          <a href={item.crm_url}><img alt="Salesforce" src={salesforce} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                          <a href={item.linkedin_url}><img alt="LinkedIn" src={linkedin} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                          <a href={item.website}><img alt="Company Website"  src={website} style={{margin: '0 .3em', height: '1.2em'}}/></a>
                        </div>
                        </div>
    
                    </ListAccount>
                    ))}
                    </ul>
                </div>
            )
}

export default PeopleAtAccount

const TierTitle = styled.div`
  border-bottom: 2px solid rgba(0,0,0,.1);
  background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),#fff;
  text-align: center;
  font-weight: bold;
  padding: .5em 0;
`
const ListAccount = styled.li`
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding: .5em;
`