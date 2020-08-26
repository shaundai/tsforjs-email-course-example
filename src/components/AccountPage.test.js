import React from 'react';
import { render } from '@testing-library/react';
import * as File from './AccountPage';
import { account, people } from './mockApiInfo'


describe ('AccountPage', () => {

    it('is showing account page', () => {
        const { getByText } = render(<File.AccountPage account={account} people={people} peopleInCadences={12}/>);
        expect(getByText(/Stats/i)).toBeInTheDocument()
    })
})