import React from 'react';
import './App.css';
import styled from 'styled-components';
import salesloftlogo from '../images/salesloftlogo.png';

const Login = () => {
  return (
    <Main>
      <header>
          <div>
          <div style={{fontSize: '1.3em', margin: '.5em auto'}}>Welcome to</div>
          <Header>Account-Based Selling</Header>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '.8em auto', fontSize: '1.3em'}}>
              <em>by </em> <img alt="salesloft logo" src={salesloftlogo} style={{height: '1.6em', color: 'white', margin: '0 .4em'}} /></div>
          </div>
          <div style={{margin: '2.5em auto'}}>
            <Button href='https://accounts.salesloft.com/oauth/authorize?client_id=7278d0df3e6175f5900d67986ab4a639f38d80339d6692bc6d29ecb4a5e8d3ef&redirect_uri=https://shaundai-salesloft.surge.sh/redirect&response_type=code'>
            Log in
            </Button>
        </div>
      </header>
    </Main>
  );
}

export default Login;

const Main = styled.div`
    background-color: #42aedc;
    height: 100vh;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Barlow;
`
const Header = styled.div`
    font-size: 2.5em;
    font-weight: 600;
`

const Button = styled.a`
    background-color: #d47300;
    color: 'white';
    border-radius: 26px;
    font-weight: 600;
    padding: 9px 21px 10px 21px;
    text-decoration: none;
`