import React from 'react'
import Header from 'views/components/Header'
import styles from './Layout.module.scss'

interface Props {
    children?: any
}

const Layout: React.FC<Props> = (props) => {
    const {children} = props
    
    return (
        <div className={styles.layout}>
            <Header {...props} />
            {children}
        </div>
    );
};

export default Layout