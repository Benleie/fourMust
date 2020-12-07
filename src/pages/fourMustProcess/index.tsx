import  React,{ useState, FC, useEffect } from 'react';
import { ConnectProps, connect, useHistory } from 'umi';
import { CommonModelState } from '../../models/common';
import styles from './index.less';

interface PageProps extends ConnectProps{
  common: CommonModelState;
};
interface INavList {
  id: number;
  icon: string
}
const navList: INavList[] = [
  {id: 1, icon: require('../../assets/fourMustProcess/caseSearchNav.png')},
  {id: 2, icon: require('../../assets/fourMustProcess/caseSpyNav.png')},
  {id: 3, icon: require('../../assets/fourMustProcess/personSearchNav.png')},
  {id: 4, icon: require('../../assets/fourMustProcess/runEscapeNav.png')},
]
const FourMustProcess: FC<PageProps> =(props) =>{
  const history = useHistory() 

  const navigation = (id: number) => {
    if (id===1) {
      history.push('/fourMustProcess/casesSearch')
    } else if (id===2) {
      history.push('/fourMustProcess/casesSpy')
    } else if (id===3) {
      history.push('/fourMustProcess/personSearch')
    } else {
      history.push('/fourMustProcess/runEscape')
    }
  }
  
  return(
    <div className={styles.fourMustProcessWrapper}>
      <div className={styles.titleIcon}></div>
      <div className={styles.title}>四必机制</div>
      <div className={styles.centerBackground}></div>
      <div className={styles.navWrapper}>
        {
          navList.map((item: INavList) => (
            <img key={item.id} src={item.icon} className={styles.navItem} onClick={()=>navigation(item.id)}></img>
          ))
        }
        <div className={styles.arrowWrapper}>
          <div className={styles.douleArrow} style={{marginLeft:'1.4%'}}></div>
          <div className={styles.douleArrow}></div>
          <div className={styles.douleArrow}></div>
        </div>
      </div>
      
    </div>
  )
};

const mapState = (state:any)=>{
  return {
    common: state.common
  }
};

export default connect(mapState)(FourMustProcess);