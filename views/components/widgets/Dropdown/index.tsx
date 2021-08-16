import React from 'react'
import cx from 'classnames'
import styles from './Dropdown.module.scss'

interface Props {
    customClass?: string,
    value: any,
    children?: any,
    [rest: string]: any
}

const Dropdown: React.FC<Props> = props => {
    const {customClass, value, children, ...rest} = props

    return (
        <select
            className={cx(styles['dropdown'], customClass)}
            value={value}
            {...rest}
        >
            {children}
        </select>
    )
}

export default Dropdown