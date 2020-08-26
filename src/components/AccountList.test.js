import React from 'react';
import { render } from '@testing-library/react';
import * as File from './AccountList';
import { allAccountInfo } from './mockApiInfo'

const tier = 1

describe('AccountList', () => {
    afterEach(() => jest.clearAllMocks())
    it('AccountList returns correct number of accounts', () => {
        const { getAllByText } = render(<File.AccountList tier={tier} accounts={allAccountInfo} showPeopleList={false} />)
        expect(getAllByText(/Last Contacted/i)).toHaveLength(3)
      });

      it('AccountList renders icons with icons for website, SFDC, and LinkedIn for each account', async () => {
        const { getAllByRole, getAllByTestId } = render(<File.AccountList tier={tier} accounts={allAccountInfo} showPeopleList={false} />)
        expect(getAllByRole('img')).toHaveLength(9)
        expect(getAllByTestId('salesforce')).toHaveLength(3)
        expect(getAllByTestId('linkedin')).toHaveLength(3)
        expect(getAllByTestId('website')).toHaveLength(3) 
        expect(getAllByTestId('salesforce')[0].getAttribute('href')).toBe('jiojofe')
      });
})
