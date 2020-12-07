import React, { FC, useState } from 'react';
import styles from './index.less';
import { useHistory } from 'umi';

const navigationList = [
  { id: 0, name: '四必流程', iconSelect: require('../../assets/fourMustProcess/policeNav.png'), iconNoSelect: require('../../assets/fourMustProcess/policeNav.png') },
  { id: 1, name: '每案必研', iconSelect: require('../../assets/fourMustProcess/caseSearchSelect.png'), iconNoSelect: require('../../assets/fourMustProcess/caseSearchNoSelect.png') },
  { id: 2, name: '每案必侦', iconSelect: require('../../assets/fourMustProcess/caseSearchSelect.png'), iconNoSelect: require('../../assets/fourMustProcess/caseSpyNoSelect.png') },
  { id: 3, name: '每人必研', iconSelect: require('../../assets/fourMustProcess/caseSearchSelect.png'), iconNoSelect: require('../../assets/fourMustProcess/personSearchNoSelect.png') },
  { id: 4, name: '每逃必追', iconSelect: require('../../assets/fourMustProcess/caseSearchSelect.png'), iconNoSelect: require('../../assets/fourMustProcess/runEscapeNoSelect.png') }
]
const processNavigation: FC = () => {
  const history = useHistory()
  const [selectItem, setSelectItem] = useState(1);

  const navigation = (id: number) => {
    if (id===1) {
      history.push('/fourMustProcess/casesSearch')
    } else if (id===2) {
      history.push('/fourMustProcess/casesSpy')
    } else if (id===3) {
      history.push('/fourMustProcess/personSearch')
    } else if (id===4) {
      history.push('/fourMustProcess/runEscape')
    }
  }
  return (
    <div className={styles.processNavigation}>
      <div className={styles.navWrapper}>
        {
          navigationList.map((item)=>{
            return (
              <div key={item.id} className={selectItem===1?styles.itemSelect:styles.itemNoSelect} onClick={()=>navigation(item.id)}>
                <div className={styles.title}><span>{item.name}</span></div>
                <div className={styles.iconWrapper}>
                  {selectItem===0&&<img src={item.iconNoSelect} style={{width:'60%',height:'100%'}}/>}
                  {selectItem===1&&<img src={item.iconNoSelect} style={{width:'60%',height:'100%'}}/>}
                  {selectItem===2&&<img src={item.iconNoSelect} style={{width:'60%',height:'100%'}}/>}
                  {selectItem===3&&<img src={item.iconNoSelect} style={{width:'60%',height:'100%'}}/>}
                  {selectItem===4&&<img src={item.iconNoSelect} style={{width:'60%',height:'100%'}}/>}
                </div>
                <div className={styles.selectArrow}></div>
              </div>              
            )
          })
        }
      </div>
      
    </div>
  );
  
};

export default processNavigation;