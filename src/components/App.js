import React from 'react';
import styled from 'styled-components';
import './App.css';
import salesloftlogo from '../images/salesloftlogo.png'

function App() {
  return (
    <div className="App">
        <Header>
          <img alt="SalesLoft Logo" src={salesloftlogo} style={{height: '2em', marginLeft: '1em'}}/>
        </Header>
        Welcome, User!
        This is where the app dashboard will be.
    </div>
  );
}

export default App;

const Header = styled.div`
  color: white;
  background-color: #0d163a;
  padding: .7em 0;
`