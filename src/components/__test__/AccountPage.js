import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import AccountPage from '../AccountPage'
import * as utils from '../util/utilFunctions';


const account = {
    account_tier: { id: '13' }
}

const people = {
    length: 12
}

describe ('Account Page', () => {
    test('Account Page is showing', () => {
        const { getByText } = render(<AccountPage account={account} people={people}/>);
        expect(getByText('Tier')).toBeTruthy()
    })
})

// jest.mock('../util/utilFunctions', () => ({
//     findAccountTier: jest.fn(() => 'Tier 1')
// }))


// describe('AccountPage', () => {
//     beforeEach(() => jest.spyOn(utils, 'findAccountTier').mockImplementation(() => 'Tier 1'))
//     afterEach(() => jest.clearAllMocks())
//     test('findAccountTier', () => {
//     const { getByTestId } = render(<AccountPage account={account} people={people} />);
//     console.log(getTestById('tier'))
//     expect(getByTestId('tier')).toHaveTextContent('Tier 1')
//     })
// })