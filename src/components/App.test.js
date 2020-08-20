import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import * as File from './App';

// import * as File from '../AddToCadence';
// import * as CadenceIds from '../getCadenceIds'

// describe('AddToCadence', () => {
//     beforeEach(() => jest.spyOn(CadenceIds, 'getCadenceIdsByGuid').mockImplementation(() => Promise.resolve([1234343, 10293202, 29302393])))
//     afterEach(() => jest.clearAllMocks())
//     test('<AddToCadence /> shows Modal with close button', () => {

//         const { debug, getByText } = render(<File.AddToCadence />)
//         expect(getByText('+ Add to Cadence')).toBeTruthy()
    
//         fireEvent.click(getByText('+ Add to Cadence'))
//       });
// })


const userInfo = {
  firstName: 'Oprah'
}

afterEach(() => {
  cleanup();
  console.error.mockClear();
})
describe('App', () => {
  test('Welcome page is shown with three tier blocks', () => {
    const { getByText } = render(<File.App userInfo={userInfo}/>);
    
    expect(getByText(/welcome/i)).toBeInTheDocument();

    expect(getByText(/Tier 1/i)).toBeTruthy()
    expect(getByText(/Tier 2/i)).toBeTruthy()
    expect(getByText(/Tier 3/i)).toBeTruthy()
    });

    test('Correct username appears', () => {
      const { debug, getByText, getByTestId } = render(<File.App userInfo={userInfo}/>);
      
      expect(getByText(/oprah/i)).toBeInTheDocument();
  
      });
})

console.error = jest.fn()
