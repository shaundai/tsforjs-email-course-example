import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as File from './Remove';
import * as service from '../getFunctions'

describe('Remove', () => {
    beforeEach(() => jest.spyOn(service, 'getCadenceMembershipByPersonIdAndCadenceId').mockImplementation(() => Promise.resolve(1234343)))
    afterEach(() => jest.clearAllMocks())

    it('shows the remove button', () => {
        const { getByText } = render(<File.Remove />)
        expect(getByText('remove')).toBeTruthy()
      });

    it('shows warning modal with remove and cancel button on click', async () => {
        const { getByText, findByText, findAllByRole } = render(<File.Remove />)
    
        fireEvent.click(getByText('remove'))
        expect(await findByText(/Are you sure/i)).toBeInTheDocument();
        expect(await findAllByRole('button')).toHaveLength(2);
    
      });
})
