import React from 'react'
import styled from 'styled-components'
import salesloftlogo from '../images/salesloftlogo.png'

const AppHeader = () => {
	return (
		<Header>
			<img
				alt='SalesLoft Logo'
				src={salesloftlogo}
				style={{ height: '2em', marginLeft: '1em' }}
			/>
		</Header>
	)
}

export default AppHeader

const Header = styled.div`
	color: white;
	background-color: #0d163a;
	padding: 0.7em 0;
`
