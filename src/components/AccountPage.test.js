import React from 'react';
import { render } from '@testing-library/react';
import * as File from './AccountPage';
import * as service from './getFunctions';
import { account, people } from './mockApiInfo'
import utilFunctions from './util/utilFunctions'



describe ('AccountPage', () => {
    // beforeEach(() => jest.spyOn(service, 'getLastContactedPerson').mockImplementation(() => Promise.resolve('Quincy Jones')))
    // beforeEach(() => jest.spyOn(service, 'getUserWhoLastContactedAccount').mockImplementation(() => Promise.resolve('Shaundai Person')))
    // afterEach(() => jest.clearAllMocks())

    test('Account Page is showing', () => {
        const { debug, getByText } = render(<File.AccountPage account={account} people={people} peopleInCadences={12}/>);
        expect(getByText(/Stats/i)).toBeInTheDocument()
    })
})