import { Nullable } from "./common";

interface ProductMeta {
    query: string,
    total: number,
    page: number,
    pages: number
}

interface Product {
    id: string,
    name: string,
    salePrice: number,
    retailPrice: number,
    imageUrl: string,
    quantityAvailable: number
}

interface ProductSearch {
    metadata: ProductMeta,
    results: TProductList
}

export type TProduct = Nullable<Product>
export type TProductList = Nullable<Product[]>
export type TProductSearch = Nullable<ProductSearch>