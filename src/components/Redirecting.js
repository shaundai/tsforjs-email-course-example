import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import './Redirecting.css'

const Redirecting = () => {
	const navigate = useNavigate()

	navigate('/app')

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

export default Redirecting

const Main = styled.div`
	background-color: #e5e5e5;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`
