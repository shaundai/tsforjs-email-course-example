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
  const [userInfo, setUserInfo] = useState({id: '', firstName: '', guid: ''})
  const [allAccountInfo, setAllAccountInfo] = useState([])

 useAsync(async () => {
    try {
      const { id, first_name: firstName, guid } = (await SalesLoft.getCurrentUserInfo()).data.data
      setUserInfo({id: id, firstName: firstName, guid: guid})
      const allInfo = (await SalesLoft.getAllAccountInfo(id)).data.data
      setAllAccountInfo(allInfo)
    }
    catch(err){                 
      console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
    }
  }, [])

  return (
    <div style={{fontFamily: 'Montserrat', color: '#4F5359', backgroundColor: '#F7F9FA', height: '100vh'}}>
        <AppHeader />
        <div style={{paddingTop: '.3em'}}>
        <Welcome data-testid="welcome">
        Welcome, <b>{userInfo.firstName}</b>!
        </Welcome>
        <Welcome>How will you hit your quota this quarter?</Welcome>
        </div>
        <Tiers list={allAccountInfo} userInfo={userInfo} />
    </div>
  );
}

export default App;

const Welcome = styled.div`
  padding-left: 1.5em;
  padding-top: .7em;
`

