import React from 'react';
import { render } from '@testing-library/react';
import * as File from './AccountStats';
import { account, people } from './mockApiInfo'

describe('AccountStats', () => {
      test('Account Stats block is shown', async () => {
        const { debug, findByText } = render(<File.AccountStats people={people} account={account} peopleInCadences={4} lastContactedName={'Quincy Jones'} lastContactedBy={'Shaundai Person'} />)
        expect(await findByText('Stats')).toBeInTheDocument();
        debug()
      });

      test('Account Stats is showing correct calculations', async () => {
        const { debug, getByTestId } = render(<File.AccountStats people={people} account={account} peopleInCadences={4} lastContactedName={'Quincy Jones'} lastContactedBy={'Shaundai Person'} />)
        //information pulled from api
        expect(await getByTestId('company-size')).toHaveTextContent(account.size);
        expect(await getByTestId('contacts-in-salesloft')).toHaveTextContent(people.length);
        //calculations based on functions in util/utilFunctions file
        expect(await getByTestId('people-in-cadences')).toHaveTextContent(4);
        expect(await getByTestId('percent-in-cadences')).toHaveTextContent('33%');
      });


})
