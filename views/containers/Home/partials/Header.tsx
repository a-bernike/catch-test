import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { urlList } from 'configs'
import { Dropdown } from 'views/components/widgets'
import styles from '../Home.module.scss'
import { AppDispatch, RootState } from 'store'
import { setSortHigh } from 'store/actions'

interface Props {

}

const Header: React.FC<Props> = props => {
    const dispatch: AppDispatch = useDispatch()
    const { sortHigh } = useSelector((state: RootState) => state.product)

    return (
        <div className={styles['home-header']}>
            <Link href={urlList.HOME}>
                <a><img alt="logo" src="/images/logo.svg" /></a>
            </Link>
            <Dropdown
                value={sortHigh}
                onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => dispatch(setSortHigh(ev.target.value))}
            >
                <option value={1}>Highest Price</option>
                <option value={0}>Lowest Price</option>
            </Dropdown>
        </div>
    )
}

export default Header