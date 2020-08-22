import React from 'react';
import { render } from '@testing-library/react';
import * as File from './AccountPage';
import * as service from './getFunctions';
import utilFunctions from './util/utilFunctions'

const account = {
    account_tier: { id: 13 },
    last_contacted_person: { id: 5886 },
    last_contacted_by: { id: 5886 },
}

const people = {
    length: 12
}

describe ('AccountPage', () => {
    beforeEach(() => jest.spyOn(service, 'getLastContactedPerson').mockImplementation(() => Promise.resolve('Quincy Jones')))
    beforeEach(() => jest.spyOn(service, 'getUserWhoLastContactedAccount').mockImplementation(() => Promise.resolve('Shaundai Person')))
    afterEach(() => jest.clearAllMocks())

    test('Account Page is showing', () => {
        const { debug, getByText } = render(<File.AccountPage account={account} people={people} peopleInCadences={12}/>);
        expect(getByText(/Stats/i)).toBeInTheDocument()
        debug()
    })
})