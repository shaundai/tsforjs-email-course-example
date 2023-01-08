import React from 'react'
import styled from 'styled-components'

import utilFunctions from './util/utilFunctions' 

export const AccountStats = ({account, people, peopleInCadences, lastContactedName, lastContactedBy }) => {
        return (
            <div style={{marginTop: '3vh', display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid rgb(229, 229, 229)', paddingBottom: '1em', backgroundColor: 'white'}}>
                <Header>Stats</Header>
                <div data-testid="company-size" style={{fontSize: '.8em', marginBottom: '.3em', paddingTop: '.7em'}}><b>Company Size:</b> {account.size ? account.size : 'unknown'}</div>
                <div data-testid="contacts-in-salesloft" style={{fontSize: '.8em', marginBottom: '.3em'}}><b>Contacts in SalesLoft:</b> {people.length}</div>
                <div style={{display: 'flex', fontSize: '.8em', marginBottom: '.3em'}}>
                    <StatBlock>
                        <div data-testid="people-in-cadences" style={{fontSize: '1.3em', fontWeight: 600}}>{peopleInCadences ? peopleInCadences : <span><span className="one">.</span><span className="two">.</span><span className="three">.</span></span>}</div>
                        <div style={{fontSize: '.8em'}}>Number</div>
                        <div style={{fontSize: '.8em'}}>in Cadences</div>
                    </StatBlock>
                    <StatBlock style={{borderLeft: '1px solid #4F5359'}}>
                        <div data-testid="percent-in-cadences" style={{fontSize: '1.3em', fontWeight: 600}}>{peopleInCadences ? `${Math.round(peopleInCadences/people.length * 100)}%` : 0}</div>
                        <div style={{fontSize: '.8em'}}>Percent</div>
                        <div style={{fontSize: '.8em'}}>in Cadences</div>
                    </StatBlock>
                </div>
                <div style={{fontSize: '.8em', marginBottom: '.3em', textAlign: 'center'}}><b>Last Contact:</b></div>
                <div style={{fontSize: '.8em', textAlign: 'center', paddingLeft: '3vh', paddingRight: '3vh'}}>{account.last_contacted_type} to {lastContactedName} {account.last_contacted_at && utilFunctions.parsedDate(account.last_contacted_at)} ago by {lastContactedBy}</div>
            </div>
        )
}

const Header = styled.div`
  border-bottom: 2px solid rgba(0,0,0,.1);
  margin-bottom: .3vh;
  background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),#fff;
  text-align: center;
  font-weight: bold;
  padding: .5em 0;
  width: 100%;
`

const StatBlock = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-left: 2vh;
    padding-right: 2vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
`