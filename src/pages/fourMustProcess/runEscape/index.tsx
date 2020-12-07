import  React,{ useState, FC, useEffect } from 'react';
import { ConnectProps, connect, useHistory } from 'umi';
import { CommonModelState } from '../../../models/common';
import styles from './index.less';

interface PageProps extends ConnectProps{
  common: CommonModelState;
};

const RunEscape: FC<PageProps> =(props) =>{

  return(
    <div className={styles.runEscapeWrapper}>
      runEscape
      4
    </div>
  )
};

const mapState = (state:any)=>{
  return {
    common: state.common
  }
};

export default connect(mapState)(RunEscape);