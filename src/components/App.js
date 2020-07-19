import React, { useState } from 'react';
import { useAsync } from 'react-use';
import styled from 'styled-components';
import './App.css';

//apis
import SalesLoft from './util/salesloftApi'

//app components
import AppHeader from './AppHeader'
import Tiers from './Tiers'

function App() {
  const [userInfo, setUserInfo] = useState({firstName: '', lastName: ''})
  const [accountInfo, setAccountInfo] = useState({name: '', website: '', size: '', linkedin_url: ''})
  const [allAccountInfo, setAllAccountInfo] = useState([])

 useAsync(async () => {
    try {
      const { first_name: firstName, last_name: lastName } = (await SalesLoft.getUserInfo()).data.data
      setUserInfo({firstName: firstName, lastName: lastName})
      const { name, website, size, linkedin_url } = (await SalesLoft.getAccountInfo()).data.data[1]
      setAccountInfo({ name, website, size, linkedin_url })
      const allInfo = (await SalesLoft.getAccountInfo()).data.data
      setAllAccountInfo(allInfo)
    }
    catch(err){                 
      return err
    }
  }, [])

  return (
    <div style={{fontFamily: 'Montserrat', color: '#4F5359'}}>
        <AppHeader />
        <div style={{paddingTop: '.3em'}}>
        <Welcome>
        Welcome, <b>{userInfo.firstName} {accountInfo.website}</b>!
        </Welcome>
        <Welcome>How will you hit your quota this quarter?</Welcome>
        </div>
        <Tiers list={allAccountInfo}/>
    </div>
  );
}

export default App;

const Welcome = styled.div`
  padding-left: 1.5em;
  padding-top: .7em;
`

