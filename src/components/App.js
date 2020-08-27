import React, { useState } from 'react';
import { useAsync } from 'react-use';
import styled from 'styled-components';
import { getAllAccountInfo, getCurrentUserInfo } from './util/salesloftApi'
import './App.css';

//app components
import AppHeader from './AppHeader'
import Tiers from './Tiers'

export const App = () => {
  const [userInfo, setUserInfo] = useState({id: '', firstName: '', guid: ''})
  const [allAccountInfo, setAllAccountInfo] = useState([])

 useAsync(async () => {
    try {
      const userInfo = await getCurrentUserInfo()
      setUserInfo(userInfo)
      const allInfo = (await getAllAccountInfo(userInfo.id)).data.data
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
        <Welcome>
        Welcome, <b>{userInfo.firstName}</b>!
        </Welcome>
        <Welcome>How will you hit your quota this quarter?</Welcome>
        </div>
        <Tiers list={allAccountInfo} userInfo={userInfo} />
    </div>
  );
}

const Welcome = styled.div`
  padding-left: 1.5em;
  padding-top: .7em;
`

