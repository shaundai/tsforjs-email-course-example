import React from 'react';
import { render } from '@testing-library/react';
import * as File from './AccountList';
import utilFunctions from './util/utilFunctions'

const tier = 1

const accounts = [
  {id: 1, name: 'SalesLoft', last_contacted_at: 'Sun Dec 17 1995 03:24:00 GMT'}
]


describe('AccountList', () => {
    afterEach(() => jest.clearAllMocks())
    test('AccountList renders icons with links to SFDC and social', () => {

        const { getByText } = render(<File.AccountList tier={tier} accounts={accounts} showPeopleList={false} />)
        expect(getByText('Last Contacted: 25 years ago')).toBeTruthy()
        //expect(getByText('Log in').getAttribute('href')).toBe(path)
    
      });
})
