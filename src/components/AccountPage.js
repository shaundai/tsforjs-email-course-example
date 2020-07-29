import React, { useState } from 'react'
import { useAsync } from 'react-use';

import styled from 'styled-components'
import utilFunctions from './util/utilFunctions'
import SalesLoft from './util/salesloftApi'

//images
import linkedin from '../images/linkedin.png'
import salesforce from '../images/salesforce.png'
import website from '../images/websiteicon.png'

const AccountPage = ({account}) =>  {

    const [lastContactedName, setLastContactedName] = useState('')

    useAsync(async () => {
        try {
            const person = (await SalesLoft.getContactInfo(account.last_contacted_person.id)).data.data
            setLastContactedName(person.display_name)
        }
        catch (err) {
            console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
        }
    }, [])

        return (
            <div style={{width: '40vw', height: '65vh', margin: 0, padding: 0}}>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgb(229, 229, 229)', paddingBottom: '1.2em', backgroundColor: 'white'}}>
                <DecorativeBlock />
                <Tier><span style={{backgroundColor: '#3C9CD2', borderRadius: '5em', padding: '.1em .4em'}}>{utilFunctions.findAccountTier(account.account_tier.id)}</span></Tier>
                <div style={{fontSize: '1.2em', marginBottom: '.3em'}}>{account.name}</div>
                <div style={{fontSize: '.8em', marginBottom: '.3em'}}>{account.phone}</div>
                <div style={{marginBottom: '.8em'}}><a href={account.website} style={{fontSize: '.8em', color: '#3C9CD2', textDecoration: 'none', fontWeight: 'bold'}}>{account.website}</a></div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                      <a href={account.crm_url}><img alt="Salesforce" src={salesforce} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                      <a href={account.linkedin_url}><img alt="LinkedIn" src={linkedin} style={{margin: '0 .3em', height: '1.2em'}} /></a>
                      <a href={account.website}><img alt="Company Website"  src={website} style={{margin: '0 .3em', height: '1.2em'}}/></a>
                </div>
            </div>

            <div style={{marginTop: '3vh', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgb(229, 229, 229)', paddingBottom: '1em', backgroundColor: 'white'}}>
                <Header>Stats</Header>
                <div style={{fontSize: '.8em', marginBottom: '.3em', paddingTop: '.7em'}}><b>Company Size:</b> {account.size ? account.size : 'unknown'}</div>
                <div style={{fontSize: '.8em', marginBottom: '.3em'}}><b>Contacts in SalesLoft:</b> {account.counts.people}</div>
                <div style={{textAlign: 'center', fontSize: '.8em', marginBottom: '.3em'}}>in Cadences</div> 
                <div style={{display: 'flex', fontSize: '.8em', marginBottom: '.3em'}}>
                    <div>#: {account.counts.people/2}</div>
                    <div style={{marginLeft: '5vw'}}>%: {account.counts.people/2}</div>
                </div>
                <div style={{fontSize: '.8em', marginBottom: '.3em'}}><b>Last Contact:</b> {account.last_contacted_type} to {lastContactedName} {account.last_contacted_at && utilFunctions.parsedDate(account.last_contacted_at)} ago by {account.last_contacted_by.id}</div>
            </div>

            </div>
        )
    
}

export default AccountPage


const DecorativeBlock = styled.div`
    width: 100%;
    padding: 0;
    height: 1.4em;
    border-bottom: 2px solid rgba(0,0,0,.1);
    background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),#fff;
    `

const Header = styled.div`
  border-bottom: 2px solid rgba(0,0,0,.1);
  background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),#fff;
  text-align: center;
  font-weight: bold;
  padding: .5em 0;
  width: 100%;
`

const Tier = styled.div`
    font-size: .8em;
    width: 100%;
    padding-right: 8vh;
    padding-top: .5em;
    margin-top: .5em;
    margin-bottom: .5em;
    text-align: right;
    color: white;
    `