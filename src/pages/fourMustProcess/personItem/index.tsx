import React, { useState, FC, useEffect } from 'react';
import { ConnectProps, connect, useHistory } from 'umi';
import { CommonModelState } from '../../../models/common';
import styles from './index.less';

interface PageProps extends ConnectProps {
    common: CommonModelState;
};
const personItemImg = require('../../../assets/fourMustProcess/personItem.png');
const personItemArrow = require('../../../assets/fourMustProcess/arrow.png');
const PersonItem: FC<PageProps> = (props) => {
    return (
        <div className={styles.personItemWrapper}>
            <div className={styles.container}>
                <div className={styles.person_left}>
                    <img src={personItemImg} alt=""/>
                    <button>返回</button>
                </div>
                <div className={styles.person_right}>
                    <div className={styles.person_right_item}>
                        <div className={styles.person_right_item_title}>
                            <img src={personItemArrow} alt=""/>
                            <span>基本信息</span>
                            <div></div>
                            <span>编辑</span>
                        </div>
                        <div className={styles.person_right_item_content}>
                            <img src="" alt=""/>
                            <div className={styles.person_right_item_content_item}>
                                <span>姓名：张三</span>
                                <span>身份证号：3242134324324</span>
                                <span>手机号：123232432433</span>
                            </div>
                            <div className={styles.person_right_item_content_item}>
                                <span>户籍地：浙江杭州</span>
                                <span>是否常驻：是</span>
                                <span>工作单位：柯桥翡翠园</span>
                            </div>
                            <div className={styles.person_right_item_content_item}>
                                <span>暂住地：浙江杭州</span>
                                <span>是否暂口：否</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.person_right_item}>
                        <div className={styles.person_right_item_title}>
                            <img src={personItemArrow} alt=""/>
                            <span>处置结果</span>
                            <div></div>
                            <span>编辑</span>
                        </div>
                        <div className={styles.person_right_item_content}>
                            <div>
                            处置结果：无
                            </div>
                        </div>
                    </div>
                    <div className={styles.person_right_item}>
                        <div className={styles.person_right_item_title}>
                            <img src={personItemArrow} alt=""/>
                            <span>研判报告</span>
                            <div></div>
                            <span>编辑</span>
                        </div>
                        <div className={styles.person_right_item_content}>
                            <div>
                                无
                            </div>
                        </div>
                    </div>
                    <div className={styles.person_right_item}>
                        <div className={styles.person_right_item_title}>
                            <img src={personItemArrow} alt=""/>
                            <span>模型自动关联其他案件</span>
                            <div></div>
                            <span>编辑</span>
                        </div>
                        <div className={styles.person_right_item_content}>
                            <div>
                                <div>
                                串并案件：A01、A02、A03、A04、A05
                                </div>
                                <div>
                                串并结果：无
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.person_right_item}>
                        <div className={styles.person_right_item_title}>
                            <img src={personItemArrow} alt=""/>
                            <span>模型自动发现同安嫌疑人员</span>
                            <div></div>
                            <span>编辑</span>
                        </div>
                        <div className={styles.person_right_item_content}>
                            <img src="" alt=""/>
                            <div className={styles.person_right_item_content_item}>
                                <span>姓名：张三</span>
                                <span>身份证号：4343242521432</span>
                                <span>户籍地：浙江杭州</span>
                                <span>前科情况：无</span>
                            </div>
                            <img src="" alt=""/>
                            <div className={styles.person_right_item_content_item}>
                                <span>姓名：张三</span>
                                <span>身份证号：4343242521432</span>
                                <span>户籍地：浙江杭州</span>
                                <span>前科情况：无</span>
                            </div>
                            <img src="" alt=""/>
                            <div className={styles.person_right_item_content_item}>
                                <span>姓名：张三</span>
                                <span>身份证号：4343242521432</span>
                                <span>户籍地：浙江杭州</span>
                                <span>前科情况：无</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapState = (state: any) => {
    return {
      common: state.common
    }
  };
  
  export default connect(mapState)(PersonItem);