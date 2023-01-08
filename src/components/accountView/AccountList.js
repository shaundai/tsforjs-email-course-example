import React from 'react'
import styled from 'styled-components'

import utilFunctions from './util/utilFunctions'

//images
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

export const AccountList = ({tier, accounts, showPeopleList}) => {

        return (
            <div>
                <TierTitle>Tier {tier}  ({accounts.length})</TierTitle>
                <ul style={{listStyleType: 'none', margin: 0, padding: 0, height: '50vh', overflow: 'auto'}}>
                {accounts.map(item => (
                <ListAccount key={item.id}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{fontSize: '.8em', cursor: 'pointer'}} onClick={() => showPeopleList(item.id)}><b>{item.name}</b></div>
                        <div data-testid='lastcontacted' style={{fontSize: '.7em'}}>Last Contacted: {utilFunctions.parsedDate(item.last_contacted_at)} ago</div>
                      </div>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                      <a data-testid='salesforce' href={item.crm_url}><img alt="Salesforce" src={salesforce} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                      <a data-testid='linkedin' href={item.linkedin_url}><img alt="LinkedIn" src={linkedin} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                      <a data-testid='website' href={item.website}><img alt="Company Website"  src={website} style={{margin: '0 .3em', height: '1.2em'}}/></a>
                    </div>
                    </div>

                </ListAccount>
                ))}
                </ul>
            </div>
        )
    }


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