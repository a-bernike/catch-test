import React from 'react'
import cx from 'classnames'
import styles from './ProductCard.module.scss'
import Label from '../Label'
import { formatCurrency } from 'helpers'

interface Props {
    customClass?: string,
    image?: string,
    title: string,
    price: number,
    slashedPrice?: number,
    qty: number,
    [rest: string]: any
}

const ProductCard: React.FC<Props> = props => {
    const {customClass, image, title, price, slashedPrice, qty, ...rest} = props

    return (
        <div className={cx(styles['product-card'], customClass)} {...rest}>
            <div className={styles['product-card__container']}>
                <div className={styles['product-card__image']}>
                    <img alt={title} src={image} />
                    {qty <= 0 ? <Label customClass={styles['product-card__sold-out']} title="SOLD OUT" /> : null}
                </div>
                <div className={styles['product-card__info']}>
                    <h3>{title}</h3>
                    {(slashedPrice && slashedPrice > 0) ?
                        <p className={styles['product-card__slashed-price']}><s>{formatCurrency(slashedPrice)}</s></p>
                        : null
                    }
                    <p className={styles['product-card__price']}>{formatCurrency(price)}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard