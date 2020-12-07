import  React,{ useState, FC, useEffect } from 'react';
import { ConnectProps, connect, useHistory } from 'umi';
import { CommonModelState } from '../../models/common';
import styles from './portrait.less';

console.log('cases')
interface PageProps extends ConnectProps{
  common: CommonModelState;
};

const ModelCases: FC<PageProps> =(props) =>{

  return(
    <div className={styles.fourMustModelWrapper}>
      <div className={styles.container}>
        <aside>
          <h1>全息刻画</h1>
          <div>
            <input type="text" placeholder="请输入模型名称" />
          </div>
          <section>
            <div className={styles.figure}>
              <img src={require('@/assets/fourMustModel/3/3d_portrait.png')} alt=""/>
            </div>
          </section>
          <button>返回</button>
        </aside>
        <main>
          <article className={styles.article1}>
            <div className={styles.showBox}>
              <div>
                <img src={require('@/assets/fourMustModel/3/1_1.png')} alt=""/>
                <span>团伙打尽</span>
              </div>
              <div>
                <img src={require('@/assets/fourMustModel/3/1_2.png')} alt=""/>
                <span>失驾人员</span>
              </div>
              <div>
                <img src={require('@/assets/fourMustModel/3/1_3.png')} alt=""/>
                <span>市场风险</span>
              </div>
            </div>
          </article>
          <article className={styles.article2}>
            <div className={styles.showBox}>
              <div>
                <img src={require('@/assets/fourMustModel/3/2_1.png')} alt=""/>
                <span>戒毒人员</span>
              </div>
              <div>
                <img src={require('@/assets/fourMustModel/3/2_2.png')} alt=""/>
                <span>境外赌博</span>
              </div>
              <div>
                <img src={require('@/assets/fourMustModel/3/2_3.png')} alt=""/>
                <span>关注人员</span>
              </div>
            </div>
          </article>
          <article className={styles.article3}>
            <div className={styles.showBox}>
              <div>
                <img src={require('@/assets/fourMustModel/3/3_1.png')} alt=""/>
                <span>扫黑</span>
              </div>
              <div>
                <img src={require('@/assets/fourMustModel/3/3_2.png')} alt=""/>
                <span>涉黄</span>
              </div>
              <div>
                <img src={require('@/assets/fourMustModel/3/3_3.png')} alt=""/>
                <span>智安小区</span>
              </div>
            </div>
          </article>
          <article className={styles.article4}>
            <div className={styles.showBox}>
              <div>
                <img src={require('@/assets/fourMustModel/3/4_1.png')} alt=""/>
                <span>模型名臣</span>
              </div>
              
            </div>
          </article>
        </main>
      </div>
    </div>
  )
};

const mapState = (state:any)=>{
  return {
    common: state.common
  }
};

export default connect(mapState)(ModelCases);