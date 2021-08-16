import product from '../reducers/product'
import { setSortHigh } from 'store/actions';

const initialState = {
    sortHigh: "1"
}

describe('Testing products reducer', () => {
    it('Test change sortHigh state', () => {
        expect(product(initialState, setSortHigh("0"))).toEqual({sortHigh: "0"})
        expect(product(initialState, setSortHigh("2"))).toEqual({sortHigh: "2"})
    });
});