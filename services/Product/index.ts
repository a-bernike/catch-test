import ApiRequest from '../request';
import { Nullable, TProductSearch } from 'models'

export const getProducts = async () => {
    let result: Nullable<TProductSearch> = null;

    await ApiRequest
    .get(`${process.env.API_URL}challenge-3/response.json`)
    .then(res => {
        result = res as TProductSearch
    }).catch(err => {
        result = null;
    });
    
    return result;
}