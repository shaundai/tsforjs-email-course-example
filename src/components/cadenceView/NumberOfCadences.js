import React, { useState } from 'react'
import { useAsync } from 'react-use'

import { SalesLoft } from '../util'

export const NumberOfCadences = ({ firstName, personId }) => {
	const [numberOfCadences, setNumberOfCadences] = useState('')

	useAsync(async () => {
		try {
			const cadenceMembershipNumber = (
				await SalesLoft.getIdsOfCadencesByPerson(personId)
			).data.data.length
			setNumberOfCadences(cadenceMembershipNumber)
		} catch (err) {
			console.log(`My error code is ${err.status}.  I errored out bc ${err}`)
		}
	}, [])

	return (
		<span>
			show {firstName}'s cadences{' '}
			<span style={{ marginLeft: '.2vw', color: '#4F5359' }}>
				(
				{numberOfCadences >= 0 ? (
					numberOfCadences
				) : (
					<span>
						<span className='one'>.</span>
						<span className='two'>.</span>
						<span className='three'>.</span>
					</span>
				)}
				)
			</span>
		</span>
	)
}
