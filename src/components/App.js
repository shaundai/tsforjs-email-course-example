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
        <div>
          Tier 1
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
  padding-top: .7em
`