import React from 'react'
import cx from 'classnames'
import styles from './Label.module.scss'

interface Props {
    customClass?: string,
    title: string,
    [rest: string]: any
}

const Label: React.FC<Props> = props => {
    const {customClass, title, ...rest} = props

    return (
        <div className={cx(styles['label'], customClass)} {...rest}>
            {title}
        </div>
    )
}

export default Label