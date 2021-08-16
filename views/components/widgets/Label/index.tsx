import React from 'react'
import cx from 'classnames'
import styles from './Label.module.scss'

interface Props {
    customClass?: string,
    children: any,
    [rest: string]: any
}

const Label: React.FC<Props> = props => {
    const {customClass, children, ...rest} = props

    return (
        <div className={cx(styles['label'], customClass)} {...rest}>
            {children}
        </div>
    )
}

export default Label