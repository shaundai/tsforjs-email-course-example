import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import './RedirectingUserPage.css'

export const RedirectingUserPage = () => {
	const navigate = useNavigate()

	setTimeout(() => {
		navigate('/app', { replace: true })
	}, '2000')

	return (
		<Main>
			<div className='loader'>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</Main>
	)
}

const Main = styled.div`
	background-color: #e5e5e5;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`
