import  React,{ useState, FC, useEffect } from 'react';
import { ConnectProps, connect, useHistory } from 'umi';
import { CommonModelState } from '../../models/common';
import styles from './cases.less';
import fourMustProcess from '../fourMustProcess';


interface PageProps extends ConnectProps{
  common: CommonModelState;
};

const fourMustModel: FC<PageProps> =(props) =>{

  return(
    <div className={styles.fourMustModelWrapper}>
      <header>
        <h2 className={styles.title}>案件相关模型</h2>
        <div>
          <input type="text" placeholder="请输入模型名称" />
        </div>
      </header>
      <main>  
        <div className={styles.mainBox}>
          <div className={styles.absoluteBox}>
          <img src={require("@/assets/fourMustmodel/1/arrowLeft.png")}/>
          </div>
          <section>
            <div>
              <img src={require("@/assets/fourMustmodel/1/model1.png")}/>
            </div>
            <div>扫黑除恶系列模型</div>
          </section>
          <section>
            <div>
              <img src={require("@/assets/fourMustmodel/1/model2.png")}/>
            </div>
            <div>平安指数</div>
          </section>
        </div>
      </main>
      <footer>
        <div>
          <img src={require("@/assets/fourMustmodel/1/portrait1.png")}/>
        </div>
        <div>
          <img src={require("@/assets/fourMustmodel/1/portrait2.png")}/>
        </div>
      </footer>
    </div>
  )
};

const mapState = (state:any)=>{
  return {
    common: state.common
  }
};

export default connect(mapState)(fourMustModel);