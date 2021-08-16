import React from 'react'
import { Nullable, TProductList } from 'models'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { ProductCard } from 'views/components/widgets'
import styles from '../Home.module.scss'

interface Props {
    products: Nullable<TProductList>
}

const List: React.FC<Props> = props => {
    const {products} = props
    const {sortHigh} = useSelector((state: RootState) => state.product)

    const filterProducts = () => {
        if (!products) return []
        if (sortHigh === "1") return products.sort((a, b) => b.salePrice - a.salePrice)
        return products.sort((a, b) => a.salePrice - b.salePrice)
    }

    return (
        <div className={styles["home-list"]}>
            {products ?
                filterProducts().map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            image={product.imageUrl}
                            title={product.name}
                            price={product.salePrice}
                            slashedPrice={product.retailPrice}
                            qty={product.quantityAvailable}
                            customClass={styles['home-list__product-card']}
                        />
                    )
                }) : null
            }
        </div>
    )
}

export default List