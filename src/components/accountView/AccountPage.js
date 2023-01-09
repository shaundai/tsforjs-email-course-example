import React, { useState } from 'react'
import styled from 'styled-components'
import { useAsync } from 'react-use'

import { AccountStats } from './AccountStats'
import {
	getLastContactedPerson,
	getUserWhoLastContactedAccount,
	utilFunctions
} from '../util'

//images
import linkedin from '../../images/linkedin.png'
import salesforce from '../../images/salesforce.png'
import website from '../../images/websiteicon.png'

export const AccountPage = ({ account, people, peopleInCadences }) => {
	const [lastContactedName, setLastContactedName] = useState('')
	const [lastContactedBy, setLastContactedBy] = useState('')

	useAsync(async () => {
		try {
			const person = await getLastContactedPerson(account.last_contacted_person.id)
			setLastContactedName(person)
			const userWhoLastContactedAccount = await getUserWhoLastContactedAccount(
				account.last_contacted_by.id
			)
			setLastContactedBy(userWhoLastContactedAccount)
		} catch (err) {
			console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
		}
	}, [])

	return (
		<div style={{ width: '40vw', height: '65vh', margin: 0, padding: 0 }}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					border: '1px solid rgb(229, 229, 229)',
					paddingBottom: '1.2em',
					backgroundColor: 'white',
				}}
			>
				<DecorativeBlock />
				<Tier data-testid='tier'>
					<span
						style={{
							backgroundColor: '#3C9CD2',
							borderRadius: '5em',
							padding: '.1em .4em',
						}}
					>
						{utilFunctions.findAccountTier(account.account_tier_id)}
					</span>
				</Tier>
				<div style={{ fontSize: '1.2em', marginBottom: '.3em' }}>
					{account.name}
				</div>
				<div style={{ fontSize: '.8em', marginBottom: '.3em' }}>
					{account.phone}
				</div>
				<div style={{ marginBottom: '.8em' }}>
					<a
						href={account.website}
						style={{
							fontSize: '.8em',
							color: '#3C9CD2',
							textDecoration: 'none',
							fontWeight: 'bold',
						}}
					>
						{account.website}
					</a>
				</div>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<a href={account.crm_url}>
						<img
							alt='Salesforce'
							src={salesforce}
							style={{ margin: '0 .3em', height: '1.2em' }}
						/>
					</a>
					<a href={account.linkedin_url}>
						<img
							alt='LinkedIn'
							src={linkedin}
							style={{ margin: '0 .3em', height: '1.2em' }}
						/>
					</a>
					<a href={account.website}>
						<img
							alt='Company Website'
							src={website}
							style={{ margin: '0 .3em', height: '1.2em' }}
						/>
					</a>
				</div>
			</div>

			<AccountStats
				account={account}
				people={people}
				peopleInCadences={peopleInCadences}
				lastContactedName={lastContactedName}
				lastContactedBy={lastContactedBy}
			/>
		</div>
	)
}

const DecorativeBlock = styled.div`
	width: 100%;
	padding: 0;
	height: 1.4em;
	border-bottom: 2px solid rgba(0, 0, 0, 0.1);
	background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), #fff;
`

const Tier = styled.div`
	font-size: 0.8em;
	width: 100%;
	padding-right: 8vh;
	padding-top: 0.5em;
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	text-align: right;
	color: white;
`
