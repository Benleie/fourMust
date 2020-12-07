import React, { FC, useState } from 'react';
import styles from './index.less';
import { useHistory } from 'umi';


const Header: FC = () => {
  const history = useHistory()
  const [selectItem, setSelectItem] = useState(1);
  const selectOne =() => {
    if(selectItem!==1){
      setSelectItem(1)
      history.push('/')
    }
  }
  const selectTwo =() => {
    if(selectItem!==2){
      setSelectItem(2)
      history.push('/fourMustModel')
    }
  }
  const selectThree =() => {
    if(selectItem!==3){
      setSelectItem(3)
      history.push('/aiControl')
    }
  }
  const selectFour =() => {
    if(selectItem!==4){
      setSelectItem(4)
      history.push('/personalCenter')
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.navWrapper}>
        <div className={styles.navContent}>
          <div className={selectItem===1?styles.itemSelect:styles.itemNoSelect} onClick={selectOne}>四必机制</div>
          <div className={selectItem===2?styles.itemSelect:styles.itemNoSelect} onClick={selectTwo}>四必模型</div>
          <div className={styles.itemBlock}></div>
          <div className={selectItem===3?styles.itemSelect:styles.itemNoSelect} onClick={selectThree}>智能防控</div>
          <div className={selectItem===4?styles.itemSelect:styles.itemNoSelect} onClick={selectFour}>个人中心</div>
        </div>
      </div>
    </div>
  );
  
};

export default Header;