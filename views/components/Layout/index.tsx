import React from 'react'
import styles from './Layout.module.scss'

interface Props {
    children?: any
}

const Layout: React.FC<Props> = (props) => {
    const {children} = props
    
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
};

export default Layout