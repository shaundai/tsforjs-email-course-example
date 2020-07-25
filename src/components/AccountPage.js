import React from 'react'
import styled from 'styled-components'

//images
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

const findAccountTier = (tier) => {
    switch(tier){
        case 13:
            return 'Tier 1';
        case 14:
            return 'Tier 2';
        case 15:
            return 'Tier 3';
        default:
            return 'No Tier';
    }
}

const AccountPage = ({account}) =>  {
        return (
            <div style={{height: '70vh'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>{findAccountTier(account.account_tier.id)}</div> 
                <div style={{fontSize: '1.2em'}}>{account.name}</div>
                <div style={{fontSize: '.8em'}}>{account.phone}</div>
                <div><a href={account.website} style={{fontSize: '.8em', color: 'blue', textDecoration: 'none', fontWeight: 'bold'}}>{account.website}</a></div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                      <a href={account.crm_url}><img alt="Salesforce" src={salesforce} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                      <a href={account.linkedin_url}><img alt="LinkedIn" src={linkedin} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                      <a href={account.website}><img alt="Company Website"  src={website} style={{margin: '0 .3em', height: '1.2em'}}/></a>
                </div>
            </div>

            <div>

            </div>

            </div>
        )
    
}

export default AccountPage
