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

 useAsync(async () => {
    try {
      const { first_name: firstName, last_name: lastName } = (await SalesLoft.getUserInfo()).data.data
      setUserInfo({firstName: firstName, lastName: lastName})
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
        Welcome, <b>{userInfo.firstName}</b>!
        </Welcome>
        
        <Welcome>How will you hit your quota this quarter?</Welcome>
        </div>
        <Tiers />
    </div>
  );
}

export default App;

const Welcome = styled.div`
  padding-left: 1.5em;
  padding-top: .7em;
`

