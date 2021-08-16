import React from 'react'
import { NextPage } from 'next'
import { getProducts } from 'services/Product'
import { Nullable, TProductSearch } from 'models'
import styles from './Home.module.scss'

export interface Props {
    products: Nullable<TProductSearch>
}

const Home: NextPage<Props> = (props) => {
    const {products} = props

    return (
        <div className={styles.home}>
            Home
        </div>
    )
}

Home.getInitialProps = async () => {
    const responses = await Promise.all([
        getProducts()
    ])

    return {
        products: responses[0]
    }
}

export default Home