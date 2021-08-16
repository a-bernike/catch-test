import React from 'react'
import Head from 'next/head'
import { Nullable, TProductSearch } from 'models'
import styles from './Header.module.scss'

interface Props {
    products?: Nullable<TProductSearch>
}

const Header: React.FC<Props> = (props) => {
    const {products} = props

    return (
        <div className={styles.header}>
            <Head>
                <title>Catch - {products?.metadata.query}</title>
                <meta name="description" content={`Product List with query "${products?.metadata.query}"`} />
            </Head>
        </div>
    )
}

export default Header