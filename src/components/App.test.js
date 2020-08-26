import React from 'react';
import { render } from '@testing-library/react';
import * as File from './App';
import * as service from './getFunctions'
import { userInfo, allAccountInfo } from './mockApiInfo'

describe('App', () => {
  it('shows welcome page with three tier blocks', () => {
    beforeEach(() => jest.spyOn(service, 'getCurrentUserInfo').mockImplementation(() => Promise.resolve(userInfo)))
    beforeEach(() => jest.spyOn(service, 'getAllAccountInfo').mockImplementation(() => Promise.resolve(allAccountInfo)))
    afterEach(() => jest.clearAllMocks())
    const { getByText } = render(<File.App userInfo={userInfo} list={allAccountInfo} />);
    
      expect(getByText(/welcome/i)).toBeInTheDocument();

      expect(getByText(/Tier 1/i)).toBeTruthy()
      expect(getByText(/Tier 2/i)).toBeTruthy()
      expect(getByText(/Tier 3/i)).toBeTruthy()
    });

    it('shows correct username after api call', async () => {
      const { findByText } = render(<File.App userInfo={userInfo} list={allAccountInfo} />);
      expect(await findByText(userInfo.firstName)).toBeInTheDocument();
      });
})
