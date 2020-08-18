import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddToCadence from './AddToCadence';

test('<AddToCadence /> shows Modal with close button', () => {
    const showAddToCadenceModal = jest.fn()
    
    const { debug, getByTestId } = render(
    <AddToCadence>
        <div onClick={showAddToCadenceModal}></div>
    </AddToCadence>
    )

    fireEvent.click(getByTestId('addToCadenceModalContainer'))


    expect(getByTestId('addToCadenceModalContainer').textContent).toBe('+ Add to Cadence');
  });
  