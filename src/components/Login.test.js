import React from 'react';
import { render } from '@testing-library/react';
import Login, { redirectUriPath, path } from './Login'

describe('Login', () => {
    afterEach(() => jest.clearAllMocks())
    test('Login renders a button that makes an api call to correct link', () => {

        const { getByText } = render(<Login path={path} />)
        expect(getByText('Log in')).toBeTruthy()
        expect(getByText('Log in').getAttribute('href')).toBe(path)

      });
})
