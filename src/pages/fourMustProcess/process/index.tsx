import React, { FC } from 'react';
import ProcessNavigation from '../../../components/processNavigation';
import styles from './index.less';
import { ConnectProps } from 'umi';

const Process:FC<ConnectProps> = (props) => {
  
  return (
    <div className={styles.processWrapper}>
      <ProcessNavigation />
      <div className={styles.childPages}>
        <div className={styles.childPageContainer}>
          {props.children}
        </div>
        
      </div>
    </div>
  )
}

export default Process;