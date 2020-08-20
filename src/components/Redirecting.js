import React from 'react';
import { useAsync } from 'react-use';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Secrets } from './Secrets'
import './Redirecting.css';

const salesloftSecret = Secrets.salesloftSecret;
const salesloftClientId = Secrets.salesloftClientId;
const redirectUri = 'https://shaundai-salesloft.surge.sh/redirect'
const axios = require('axios');

const Redirecting = () => {
    const location = useLocation()
    const history = useHistory()
    const code = location.search.substr(6)

    const getAccessToken = () => {
        return axios({
            method: 'post',
            url: `https://cors-anywhere.herokuapp.com/https://accounts.salesloft.com/oauth/token`,
            params: {
            "client_id": salesloftClientId,
            "client_secret": salesloftSecret,
            "code": code,
            "grant_type": "authorization_code",
            "redirect_uri": redirectUri,
            },
        })
    }
    const sendToken = (accessToken, refreshToken) => {
        return axios({
            method: 'post',
            url: 'https://shaundai-salesloft-node.herokuapp.com/token',
            data: {
                "accessToken": accessToken,
                "refreshToken": refreshToken
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    const getNewAccessToken = (refreshToken) => {
            return axios({
                method: 'post',
                url: `https://cors-anywhere.herokuapp.com/https://accounts.salesloft.com/oauth/token`,
                params: {
                    "client_id": salesloftClientId,
                    "client_secret": salesloftSecret,
                    "grant_type": "refresh_token",
                    "refresh_token": refreshToken,
                    },
            })
    }

    useAsync(async () => {
        try {
            const { access_token: accessToken, refresh_token: refreshToken } = (await getAccessToken()).data
            await sendToken(accessToken, refreshToken)
            const redir = () =>{
                history.push('/app')
            }
            setTimeout(redir, 2000)
        }
        catch(err){
            return err
        }
    }, [])

        return (
            <Main>
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Main>
        )
}

export default Redirecting;

const Main = styled.div`
    background-color: #e5e5e5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`