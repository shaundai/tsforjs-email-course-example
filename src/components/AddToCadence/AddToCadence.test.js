import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as File from './AddToCadence';
import * as CadenceIds from './getCadenceIds'

describe('AddToCadence', () => {
    beforeEach(() => jest.spyOn(CadenceIds, 'getCadenceIdsByGuid').mockImplementation(() => Promise.resolve([1234343, 10293202, 29302393])))
    afterEach(() => jest.clearAllMocks())
    it('shows Modal with close button on click', async () => {

        const { getByText, findByText } = render(<File.AddToCadence />)
        expect(getByText('+ Add to Cadence')).toBeTruthy()
    
        fireEvent.click(getByText('+ Add to Cadence'))
        expect(await findByText(/Add People To Cadence/i)).toBeInTheDocument();
        expect(await findByText(/Cancel/i)).toBeInTheDocument();
      });
})
