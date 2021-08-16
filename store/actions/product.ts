import { Nullable, TProductList } from "models";
import { constProduct } from "../constants";

export const setProducts = (value: Nullable<TProductList>) => ({ type: constProduct.SET_PRODUCTS, value })
export const setSortHigh = (value: string) => ({ type: constProduct.SET_SORT_HIGH, value })