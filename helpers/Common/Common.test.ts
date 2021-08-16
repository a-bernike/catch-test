import { formatCurrency } from './index'

describe('Testing functions in Common helper', () => {
    it('Test formatCurrency', () => {
        expect(formatCurrency(100)).toBe('$100.00')
        expect(formatCurrency(1000)).toBe('$1,000.00')
        expect(formatCurrency(10000)).toBe('$10,000.00')
        expect(formatCurrency(100000)).toBe('$100,000.00')
        expect(formatCurrency(1000000)).toBe('$1,000,000.00')
        expect(formatCurrency(100.2)).toBe('$100.20')
        expect(formatCurrency(0)).toBe('$0.00')
        expect(formatCurrency()).toBe('')
    });
});