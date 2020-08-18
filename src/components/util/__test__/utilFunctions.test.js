import { findAccountTier } from '../utilFunctions';

jest.mock('../utilFunctions', () => ({
    findAccountTier: jest.fn(() => 'Tier 1')
}))

test('findAccountTier', () => {
    expect(findAccountTier).toHaveBeenCalledTimes(0)
})