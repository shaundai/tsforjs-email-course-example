import React from 'react';
import { render } from '@testing-library/react';
import * as File from './AccountStats';
import { account, people } from './mockApiInfo'

describe('AccountStats', () => {
      test('Account Stats are shown', async () => {
        const { findByText } = render(<File.AccountStats people={people} account={account} lastContactedName={'Quincy Jones'} lastContactedBy={'Shaundai Person'} />)
        expect(await findByText('Stats')).toBeInTheDocument();
      });
})
