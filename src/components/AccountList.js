import React from 'react'
import styled from 'styled-components'

//images
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

const AccountList = ({tier, accounts}) => {
        return (
            <div>
                <TierTitle>Tier {tier}  ({accounts.length})</TierTitle>
                <ul style={{listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden'}}>
                {accounts.slice(0,4).map(item => (
                <ListAccount key={item.id}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{fontSize: '.8em'}}><b>{item.name}</b></div>
                    {item.size ? <div style={{fontSize: '.7em'}}>{item.size} employees</div> : null}
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1em'}}>
                    <div style={{fontSize: '.7em'}}>Account Owner </div>
                    <div style={{fontSize: '.7em'}}>Last Contacted: {item.last_contacted_at}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <a href={item.crm_url}><img alt="Salesforce" src={salesforce} style={{margin: '0 .4em', height: '1.2em'}} /></a>
                    <a href={item.linkedin_url}><img alt="LinkedIn" src={linkedin} style={{margin: '0 .4em', height: '1.2em'}} /></a>
                    <a href={item.website}><img alt="Company Website"  src={website} style={{margin: '0 .4em', height: '1.2em'}}/></a>
                    </div>
                </ListAccount>
                ))}
                </ul>
            </div>
        )
    }

export default AccountList


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