import  React,{ useState, FC, useEffect } from 'react';
import { ConnectProps, connect, useHistory } from 'umi';
import { CommonModelState } from '../../models/common';
import styles from './index.less';

console.log('cases')
interface PageProps extends ConnectProps{
  common: CommonModelState;
};

const ModelCases: FC<PageProps> =(props) =>{

  return(
    <div className={styles.fourMustModelWrapper}>
      <header>
        <h2 className={styles.title}>案件相关模型</h2>
        <div>
          <input type="text" placeholder="请输入模型名称" />
        </div>
      </header>
      <main>
        <section>
          <div>
            <img src="~@/assets/fourMustmodel/1/model1.png"/>
          </div>
          <div>扫黑除恶系列模型</div>
        </section>
      </main>
    </div>
  )
};

const mapState = (state:any)=>{
  return {
    common: state.common
  }
};

export default connect(mapState)(ModelCases);