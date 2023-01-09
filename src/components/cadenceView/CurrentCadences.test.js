import React from 'react';
import { render } from '@testing-library/react';
import * as File from './CurrentCadences';
import * as service from './util'
import { cadenceNames } from './mockApiInfo'

const contactInfo = {
    firstName: 'Martin'
}

describe('CurrentCadences', () => {
    beforeEach(() => jest.spyOn(service, 'getCadenceNames').mockImplementation(() => Promise.resolve(cadenceNames)))
    afterEach(() => jest.clearAllMocks())

    it('shows show cadences button with correct contact name', async () => {
        const { getByText } = render(<File.CurrentCadences firstName={contactInfo.firstName} />)
        expect(getByText(/show Martin's cadences/i)).toBeTruthy()
        
      });

})
