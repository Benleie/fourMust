import React, { FC } from 'react';
import Header from '../../components/header';
import styles from './index.less';
import { ConnectProps } from 'umi';

const Layout:FC<ConnectProps> = (props) => {
  
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <div className={styles.childPages}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;