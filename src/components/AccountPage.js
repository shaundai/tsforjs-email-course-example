import React from 'react'
import styled from 'styled-components'
import utilFunctions from './util/utilFunctions'

//images
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

const AccountPage = ({account}) =>  {
        return (
            <div style={{width: '40vw', height: '65vh', margin: 0, padding: 0}}>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgb(229, 229, 229)', padding: '.7em 1.4em 1em 1.4em', backgroundColor: 'white'}}>
                <div style={{fontSize: '.8em', width: '100%', paddingRight: '8vh', textAlign: 'right', marginBottom: '.5em'}}>{utilFunctions.findAccountTier(account.account_tier.id)}</div> 
                <div style={{fontSize: '1.2em', marginBottom: '.3em'}}>{account.name}</div>
                <div style={{fontSize: '.8em', marginBottom: '.3em'}}>{account.phone}</div>
                <div style={{marginBottom: '.8em'}}><a href={account.website} style={{fontSize: '.8em', color: 'blue', textDecoration: 'none', fontWeight: 'bold'}}>{account.website}</a></div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                      <a href={account.crm_url}><img alt="Salesforce" src={salesforce} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                      <a href={account.linkedin_url}><img alt="LinkedIn" src={linkedin} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                      <a href={account.website}><img alt="Company Website"  src={website} style={{margin: '0 .3em', height: '1.2em'}}/></a>
                </div>
            </div>

            <div style={{marginTop: '3vh', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgb(229, 229, 229)', padding: '.7em 1.4em 1em 1.4em', backgroundColor: 'white'}}>
                <div>Stats</div>
                <div>Company Size: {account.size ? account.size : 'unknown'}</div>
                <div>Contacts in SalesLoft: {account.counts.people}</div>
                <div style={{textAlign: 'center'}}>in Cadences</div> 
                <div style={{display: 'flex'}}>
                    <div>#: {account.counts.people/2}</div>
                    <div style={{marginLeft: '5vw'}}>%: {account.counts.people/2}</div>
                </div>
                <div>Last Contact: {account.last_contacted_type} to {account.last_contacted_person.id} {account.last_contacted_at && utilFunctions.parsedDate(account.last_contacted_at)} ago by {account.last_contacted_by.id}</div>
            </div>

            </div>
        )
    
}

export default AccountPage
