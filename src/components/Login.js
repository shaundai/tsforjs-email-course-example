import React from 'react';
import './App.css';

const Login = () => {
const redirectUri = 'https://shaundai-salesloft-node.herokuapp.com/salesloft'
const clientId = '7278d0df3e6175f5900d67986ab4a639f38d80339d6692bc6d29ecb4a5e8d3ef'

  return (
    <div className="App">
      <header className="App-header">
        <a href='https://accounts.salesloft.com/oauth/authorize?client_id=7278d0df3e6175f5900d67986ab4a639f38d80339d6692bc6d29ecb4a5e8d3ef&redirect_uri=https://shaundai-salesloft-node.herokuapp.com/salesloft&response_type=code'>
          Click to authenticate yourself as an actual user.
        </a>
      </header>
    </div>
  );
}

export default Login;