import { UserInfo } from './mockData/UserInfo'
import {
	AllAccountInfo,
	CadenceNames,
	People,
} from './mockData/AccountData'
import { Account } from './mockData/AccountDetails'
const axios = require('axios')

const path = 'https://shaundai-salesloft-node.herokuapp.com'

const SalesLoft = {
	//AccountIds below needs to be an array with commas
	getPeopleAtAccounts(AccountIds) {
		return axios.get(`${path}/api/accounts/people?account_id%5B%5D=${AccountIds}`)
	},

	getSingleAccountInfo(AccountIds) {
		return axios.get(`${path}/api/account/${AccountIds}`)
	},

	getIdsOfCadencesByPerson(PersonId) {
		return axios.get(`${path}/api/cadence/current/${PersonId}`)
	},

	//CadenceIds below needs to be an array with commas
	getCadenceNameById(CadenceIds) {
		return axios.get(`${path}/api/cadence/name?cadenceid%5B%5D=${CadenceIds}`)
	},

	removePersonFromCadence(CadenceMembershipId) {
		return axios.get(`${path}/api/cadence/remove/${CadenceMembershipId}`)
	},

	addPersonToCadence(PersonId, CadenceId) {
		return axios.get(
			`${path}/api/cadence/add?personid=${PersonId}&cadenceid=${CadenceId}`
		)
	},

	getContactInfo(PersonId) {
		return axios.get(`${path}/api/people/id/${PersonId}`)
	},

	getCadenceMembershipByPersonIdAndCadenceId(PersonId, CadenceId) {
		return axios.get(
			`${path}/api/cadence/membership?personid=${PersonId}&cadenceid=${CadenceId}`
		)
	},

	getAllCadencesByPersonGuid(TeamCadence, PersonGuid) {
		return axios.get(
			`${path}/api/cadences/all?teamcadence=${TeamCadence}&ownerguid%5B%5D=${PersonGuid}`
		)
	},

	getStepsOnCadence(CadenceId) {
		return axios.get(`${path}/api/cadence/steps?cadenceid=${CadenceId}`)
	},
}

export default SalesLoft

export const getAllAccountInfo = () => {
	return	new Promise(resolve => setTimeout(resolve(AllAccountInfo), 2000))
}

export const getCurrentUserInfo = async () => {
	const { id, firstName, guid, accountsLastContacted, cadenceMemberships } = UserInfo
	return	new Promise(resolve => setTimeout(resolve({ id, firstName, guid, accountsLastContacted, cadenceMemberships }), 2000))
}

export const getCadenceMembershipByPersonIdAndCadenceId = async (
	personId,
	cadenceId
) => {
	const membershipId = (
		await SalesLoft.getCadenceMembershipByPersonIdAndCadenceId(
			personId,
			cadenceId
		)
	).data.data[0].id
	return membershipId
}

export const getAllCadenceMembershipIdsForAPerson = async personId => {
	const cadenceMembershipList = (
		await SalesLoft.getIdsOfCadencesByPerson(personId)
	).data.data
	const cadenceIdList = cadenceMembershipList.map(
		membership => membership.cadence.id
	)
	return cadenceIdList
}

export const getCadenceNames = async cadenceIdList => {
	const cadenceNames = (await SalesLoft.getCadenceNameById(cadenceIdList)).data
		.data
	return cadenceNames
}

export const getLastContactedPerson = async id => {
	const person = (await SalesLoft.getContactInfo(id)).data.data.display_name
	return person
}

export const getUserWhoLastContactedAccount = async id => {
	// return UserWhoLastContactedAccount
}
