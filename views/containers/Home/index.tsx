import React from 'react'
import { NextPage } from 'next'
import { getProducts } from 'services/Product'
import { Nullable, TProductSearch } from 'models'
import { Header } from './partials'
import styles from './Home.module.scss'
import List from './partials/List'

export interface Props {
    products: Nullable<TProductSearch>
}

const Home: NextPage<Props> = (props) => {
    const {products} = props
    
    return (
        <div className={styles.home}>
            <Header />
            <List
                products={(products && products.results) ? products.results : null}
            />
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