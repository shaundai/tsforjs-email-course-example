import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

import { AccountList, AccountPage } from './accountView'
import { AccountDetails, PeopleList } from './util'
import { PeopleAtAccount } from './PeopleAtAccount'

//api
// import SalesLoft from './util'

export const TiersList = ({ userInfo }) => {
	const [peopleAtAccountActive, setPeopleAtAccountActive] = useState(false)
	const [peopleInCadences, setPeopleInCadences] = useState()

	const TierOne = AccountDetails.filter(item => {
		return item.account_tier === 13
	})

	console.log(TierOne)
	const TierTwo = AccountDetails.filter(item => {
		return item.account_tier === 14
	})
	const TierThree = AccountDetails.filter(item => {
		return item.account_tier === 15
	})

	const getPeopleInfo = async accountId => {
		try {
			setPeopleAtAccountActive(true)
		} catch (err) {
			console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
		}
	}

	return (
		<div>
			{peopleAtAccountActive ? (
				<PeopleAndAccount>
					<BackToDashboard onClick={() => setPeopleAtAccountActive(false)}>
						go back to Dashboard
					</BackToDashboard>
					<AccountViewContainer>
						<AccountPage
							account={AccountDetails}
							people={PeopleList}
							peopleInCadences={peopleInCadences}
						/>
						<PeopleAtAccount
							people={PeopleList}
							userInfo={userInfo}
							setPeopleInCadences={setPeopleInCadences}
						/>
					</AccountViewContainer>
				</PeopleAndAccount>
			) : (
				<TierLists>
					<TierBlock>
						<AccountList tier={1} accounts={TierOne} showPeopleList={getPeopleInfo} />
					</TierBlock>
					<TierBlock>
						<AccountList tier={2} accounts={TierTwo} showPeopleList={getPeopleInfo} />
					</TierBlock>
					<TierBlock>
						<AccountList
							tier={3}
							accounts={TierThree}
							showPeopleList={getPeopleInfo}
						/>
					</TierBlock>
				</TierLists>
			)}
		</div>
	)
}

const TierBlock = styled.div`
	border: 1px solid #e5e5e5;
	width: calc(86% / 3);
	margin: 0 2em;
	border-right: 2px solid rgba(0, 0, 0, 0.1);
`

const fadeInAnimation = keyframes`${fadeIn}`

const PeopleAndAccount = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	animation: 0.5s ${fadeInAnimation};
`

const TierLists = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 72vh;
	animation: 0.5s ${fadeInAnimation};
`

const BackToDashboard = styled.div`
	color: #3c9cd2;
	width: 97%;
	text-align: right;
	font-size: 0.8em;
	cursor: pointer;
`

const AccountViewContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 70vh;
`
