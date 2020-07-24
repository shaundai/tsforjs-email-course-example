import React, { useState } from 'react'
import styled from 'styled-components'
import { formatDistanceToNowStrict } from 'date-fns'

//images
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

const AccountList = ({tier, accounts, showPeopleList}) => {

  const parsedDate = (date) => {
    const year =  date.substr(0,4)
    const month = (date.substr(5,2))
    const day = date.substr(8,2)
    return formatDistanceToNowStrict(new Date(`${year},${month},${day}`))
  }

        return (
            <div>
                <TierTitle>Tier {tier}  ({accounts.length})</TierTitle>
                <ul style={{listStyleType: 'none', margin: 0, padding: 0, height: '50vh', overflow: 'scroll'}}>
                {accounts.map(item => (
                <ListAccount key={item.id}>

                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{fontSize: '.8em'}} onClick={() => showPeopleList(item.id)}><b>{item.name}</b></div>
                        <div style={{fontSize: '.7em'}}>Last Contacted: {parsedDate(item.last_contacted_at)} ago</div>
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