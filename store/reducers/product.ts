import { AnyAction } from 'redux';
import { constProduct } from '../constants'

interface InitialState {
    sortHigh: string
}

const initialState: InitialState = {
    sortHigh: "1"
};

const account = (state = initialState, action: AnyAction) => {
    switch (action.type) {
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