import React, { useState } from 'react'
import { Nullable, TProductList } from 'models'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { ProductCard } from 'views/components/widgets'
import styles from '../Home.module.scss'

interface Props {
    products: Nullable<TProductList>
}

const List: React.FC<Props> = props => {
    const {products} = props
    const [list, setList] = useState(products)
    const {sortHigh} = useSelector((state: RootState) => state.product)

    const filterProducts = () => {
        if (!list) return []
        if (sortHigh === "1") return list.sort((a, b) => b.salePrice - a.salePrice)
        return list.sort((a, b) => a.salePrice - b.salePrice)
    }

    return (
        <div className={styles["home-list"]}>
            {list ?
                filterProducts().map(product => {
                    return (
                        <ProductCard
                            key={product.id}
                            image={product.imageUrl}
                            title={product.name}
                            price={product.salePrice / 100}
                            slashedPrice={product.retailPrice / 100}
                            qty={product.quantityAvailable}
                            customClass={styles['home__product-card']}
                        />
                    )
                }) : null
            }
        </div>
    )
}

export default List