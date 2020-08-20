import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as File from '../AddToCadence';
import * as CadenceIds from '../getCadenceIds'

describe('AddToCadence', () => {
    beforeEach(() => jest.spyOn(CadenceIds, 'getCadenceIdsByGuid').mockImplementation(() => Promise.resolve([1234343, 10293202, 29302393])))
    afterEach(() => jest.clearAllMocks())
    test('<AddToCadence /> shows Modal with close button', () => {

        const { debug, getByText } = render(<File.AddToCadence />)
        expect(getByText('+ Add to Cadence')).toBeTruthy()
    
        fireEvent.click(getByText('+ Add to Cadence'))
      });
})
