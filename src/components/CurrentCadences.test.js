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
        const { getByText } = render(<File.CurrentCadences firstName={contactInfo.firstName} />)
        expect(getByText(/show Martin's cadences/i)).toBeTruthy()
        
      });

})
