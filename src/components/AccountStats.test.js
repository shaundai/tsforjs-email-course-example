import React from 'react';
import { render } from '@testing-library/react';
import * as File from './AccountStats';
import { account, people } from './mockApiInfo'

describe('AccountStats', () => {
      it('shows Account Stats block', async () => {
        const { findByText } = render(<File.AccountStats people={people} account={account} peopleInCadences={4} lastContactedName={'Quincy Jones'} lastContactedBy={'Shaundai Person'} />)
        expect(await findByText('Stats')).toBeInTheDocument();
      });

      it('shows correct account stat calculations', async () => {
        const { getByTestId } = render(<File.AccountStats people={people} account={account} peopleInCadences={4} lastContactedName={'Quincy Jones'} lastContactedBy={'Shaundai Person'} />)
        //information pulled from api
        expect(await getByTestId('company-size')).toHaveTextContent(account.size);
        expect(await getByTestId('contacts-in-salesloft')).toHaveTextContent(people.length);
        //calculations based on functions in util/utilFunctions file
        expect(await getByTestId('people-in-cadences')).toHaveTextContent(4);
        expect(await getByTestId('percent-in-cadences')).toHaveTextContent('33%');
      });


})
