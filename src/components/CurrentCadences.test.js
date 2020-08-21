import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as File from './CurrentCadences';
import * as service from './getFunctions'
import { cadenceNames } from './mockApiInfo'

const contactInfo = {
    firstName: 'Martin'
}

describe('CurrentCadences', () => {
    beforeEach(() => jest.spyOn(service, 'getCadenceNames').mockImplementation(() => Promise.resolve(cadenceNames)))
    afterEach(() => jest.clearAllMocks())

    test('show person cadences button is shown with correct contact name', async () => {
        const { findByText } = render(<File.CurrentCadences firstName={contactInfo.firstName} />)
        expect(await findByText(/show Martin's cadences/i)).toBeInTheDocument()
      });

    test('Click on show cadences button renders list of cadences', async () => {
        const { findByText, getByTestId, findAllByRole } = render(<File.CurrentCadences firstName={contactInfo.firstName} />)
    
        fireEvent.click(getByTestId('showHideCadences'))
        expect(await findByText(/hide Martin's cadences/i)).toBeInTheDocument();
        // expect(await findAllByRole('listitem')).toHaveLength(3);
      });
})
