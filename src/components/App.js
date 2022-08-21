import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAllAccountInfo, getCurrentUserInfo } from './util/mockSalesloftApi'
import './App.css'

//app components
import AppHeader from './AppHeader'
import Tiers from './Tiers'

export const App = () => {
	const [userInfo, setUserInfo] = useState({ id: '', firstName: '', guid: '' })
	const [allAccountInfo, setAllAccountInfo] = useState([])

	useEffect(() => {
		getCurrentUserInfo()
			.then(res => setUserInfo(res))
			.catch(err => console.log(err))
			getAllAccountInfo()
			.then(res => setAllAccountInfo(res))
			.catch(err => console.log(err))
	}, [])

	return (
		<div
			style={{
				fontFamily: 'Montserrat',
				color: '#4F5359',
				backgroundColor: '#F7F9FA',
				height: '100vh',
			}}
		>
			<AppHeader />
			<div style={{ paddingTop: '.3em' }}>
				<Welcome>
					Welcome, <b>{userInfo.firstName}</b>!
				</Welcome>
				<Welcome>How will you hit your quota this quarter?</Welcome>
			</div>
			<Tiers list={allAccountInfo} userInfo={userInfo} />
		</div>
	)
}

const Welcome = styled.div`
	padding-left: 1.5em;
	padding-top: 0.7em;
`
