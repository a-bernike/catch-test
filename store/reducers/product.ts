import { TProduct } from 'models';
import { AnyAction } from 'redux';
import { constProduct } from '../constants'

interface InitialState {
    products: TProduct,
    sortHigh: string
}

const initialState: InitialState = {
    products: null,
    sortHigh: "1"
};

const account = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case constProduct.SET_PRODUCTS:
            return {
                ...state,
                products: action.value,
            };
        case constProduct.SET_SORT_HIGH:
            return {
                ...state,
                sortHigh: action.value,
            };
        default:
            return state;
    }
};

export default account;