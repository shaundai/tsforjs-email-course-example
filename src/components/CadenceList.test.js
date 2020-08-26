import React from 'react';
import { render } from '@testing-library/react';
import * as File from './CadenceList';
import * as service from './getFunctions'
import { cadenceNames } from './mockApiInfo'

describe('CadenceList', () => {
    beforeEach(() => jest.spyOn(service, 'getCadenceNames').mockImplementation(() => Promise.resolve(cadenceNames)))
    afterEach(() => jest.clearAllMocks())

      it('renders full list of cadences by person', async () => {
        const { findAllByRole } = render(<File.CadenceList cadenceInfo={cadenceNames} />)
        expect(await findAllByRole('listitem')).toHaveLength(3);
      });

})
