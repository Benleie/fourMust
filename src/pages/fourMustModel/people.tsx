import  React,{ useState, FC, useEffect } from 'react';
import { ConnectProps, connect, useHistory } from 'umi';
import { CommonModelState } from '../../models/common';
import styles from './cases.less';
import { Input } from 'antd';
import fourMustProcess from '../fourMustProcess';

const { Search } = Input

interface PageProps extends ConnectProps{
  common: CommonModelState;
};

const fourMustModel: FC<PageProps> =(props) =>{

  return(
    <div className={styles.fourMustModelWrapper}>
      <header>
        <h2>人员相关模型</h2>
        {/* <div>
          <Search placeholder="请输入模型名称" enterButton/>
        </div> */}
        <div>
          <input type="text" placeholder="请输入模型名称" />
          <div>
            <img src={require('@/assets/fourMustModel/search.png')} alt=""/>
          </div>
        </div>
        
      </header>
      <main style={{ marginTop: '.92rem' }}>
        <div className={styles.mainBox}>
          <section>
            <div>
              <img src={require("@/assets/fourMustmodel/2/1.png")}/>
            </div>
            <div>社区戒毒人员打击挤压模型</div>
          </section>
          <section>
            <div>
              <img src={require("@/assets/fourMustmodel/2/2.png")}/>
            </div>
            <div>失驾人员</div>
          </section>
          <section>
            <div>
              <img src={require("@/assets/fourMustmodel/2/3.png")}/>
            </div>
            <div>涉黄模型</div>
          </section>
          <section>
            <div>
              <img src={require("@/assets/fourMustmodel/2/4.png")}/>
            </div>
            <div>境外赌博模型</div>
          </section>
          <section>
            <div>
              <img src={require("@/assets/fourMustmodel/2/5.png")}/>
            </div>
            <div>团伙打尽模型</div>
          </section>
          <section>
            <div>
              <img src={require("@/assets/fourMustmodel/2/6.png")}/>
            </div>
            <div>市场主体风险预警预测</div>
          </section>
          <section>
            <div>
              <img src={require("@/assets/fourMustmodel/2/7.png")}/>
            </div>
            <div>智安小区管控模型</div>
          </section>
          <section>
            <div>
              <img src={require("@/assets/fourMustmodel/2/8.png")}/>
            </div>
            <div>关注人员人脸管控模型</div>
          </section>
        
        </div>
        <div className={`${styles.absoluteBox} ${styles.right}`}>
          <img src={require("@/assets/fourMustmodel/2/arrowRight.png")}/>
        </div>
      </main>
      <footer style={{ marginTop: '.16rem' }}>
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