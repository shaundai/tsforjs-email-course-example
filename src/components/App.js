import React from 'react';
import styled from 'styled-components';
import './App.css';
import salesloftlogo from '../images/salesloftlogo.png'

function App() {
  return (
    <div style={{fontFamily: 'Montserrat', color: '#4F5359'}}>
        <Header>
          <img alt="SalesLoft Logo" src={salesloftlogo} style={{height: '2em', marginLeft: '1em'}}/>
        </Header>
        <div style={{paddingTop: '.3em'}}>
        <Welcome>
        Welcome, <b>User</b>!
        </Welcome>
        <Welcome>How will you hit your quota this quarter?</Welcome>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
        <TierBlock>
          <TierTitle>Tier 1</TierTitle>
          <ListAccount>
            <div>
            Account
            </div>
            
            , Account Owner, # Employees:, Last Contacted: 
            <div>Salesforce LinkedIn Website</div>
          </ListAccount>
        </TierBlock>
        <TierBlock>
          <TierTitle>Tier 2</TierTitle>
        </TierBlock>
        <TierBlock>
          <TierTitle>Tier 3</TierTitle>
        </TierBlock>
        </div>
    </div>
  );
}

export default App;

const Header = styled.div`
  color: white;
  background-color: #0d163a;
  padding: .7em 0;
`

const Welcome = styled.div`
  padding-left: 1.5em;
  padding-top: .7em;
`

const TierBlock = styled.div`
  border: 1px solid #e5e5e5;
  width: calc(75%/3);
  margin: 0 2em;
  height: 60vh;
  border-right: 2px solid rgba(0,0,0,.1);
`
const TierTitle = styled.div`
  border-bottom: 2px solid rgba(0,0,0,.1);
  background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),#fff;
  text-align: center;
  font-weight: bold;
  padding: .5em 0;
`
const ListAccount = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding: .5em;
`