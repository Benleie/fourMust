import React, { useState, FC, useEffect } from 'react';
import { ConnectProps, connect, useHistory } from 'umi';
import { CommonModelState } from '../../../models/common';
import styles from './index.less';

interface PageProps extends ConnectProps {
    common: CommonModelState;
};
const casesItemImg = require('../../../assets/fourMustProcess/casesItem.png');
const casesItemArrow = require('../../../assets/fourMustProcess/arrow.png');
const casesItem: FC<PageProps> = (props) => {
    return (
        <div className={styles.casesItemWrapper}>
            <div className={styles.container}>
                <div className={styles.cases_left}>
                    <img src={casesItemImg} alt="" />
                    <button>返回</button>
                </div>
                <div className={styles.cases_right}>
                    <div className={styles.cases_right_item}>
                        <div className={styles.cases_right_item_title}>
                            <img src={casesItemArrow} alt="" />
                            <span>基本信息</span>
                            <div></div>
                            <span>编辑</span>
                        </div>
                        <div className={styles.cases_right_item_content}>
                            <div className={styles.cases_right_item_content_item}>
                                <span>案件编号：12434324</span>
                                <span>案件类型：刑事</span>
                                <span>单位：柯桥公安</span>
                            </div>
                            <div className={styles.cases_right_item_content_item}>
                                <span>案件名称：张三盗车团伙</span>
                                <span>类别：盗窃</span>
                                <span>案情简要：这是案情简要</span>
                            </div>
                            <div className={styles.cases_right_item_content_item}>
                                <span>类别：盗窃</span>
                                <span>受案日期：2020-09-01</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cases_right_item}>
                        <div className={styles.cases_right_item_title}>
                            <img src={casesItemArrow} alt="" />
                            <span>工监小组</span>
                            <div></div>
                            <span>编辑</span>
                        </div>
                        <div className={styles.cases_right_item_content}>
                            <div className={styles.cases_right_item_content_item}>
                                张三（组长）
                            </div>
                            <div className={styles.cases_right_item_content_item}>
                                李四（副组长）
                            </div>
                            <div className={styles.cases_right_item_content_item}>
                                钱五（组员）
                            </div>
                        </div>
                    </div>
                    <div className={styles.cases_right_item}>
                        <div className={styles.cases_right_item_title}>
                            <img src={casesItemArrow} alt="" />
                            <span>案件状态</span>
                            <div></div>
                            <span>编辑</span>
                        </div>
                        <div className={styles.cases_right_item_content}>
                            <div>
                                <div>
                                    案件状态：已破
                                </div>
                                <div>
                                    案件备注：无
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cases_right_item}>
                        <div className={styles.cases_right_item_title}>
                            <img src={casesItemArrow} alt="" />
                            <span>模型自动研判嫌疑人</span>
                            <div></div>
                            <span>编辑</span>
                        </div>
                        <div className={styles.cases_right_item_content}>
                            <img src="" alt="" />
                            <div className={styles.cases_right_item_content_item}>
                                <span>姓名：张三</span>
                                <span>身份证号：4343242521432</span>
                                <span>户籍地：浙江杭州</span>
                                <span>前科情况：无</span>
                            </div>
                            <img src="" alt="" />
                            <div className={styles.cases_right_item_content_item}>
                                <span>姓名：张三</span>
                                <span>身份证号：4343242521432</span>
                                <span>户籍地：浙江杭州</span>
                                <span>前科情况：无</span>
                            </div>
                            <img src="" alt="" />
                            <div className={styles.cases_right_item_content_item}>
                                <span>姓名：张三</span>
                                <span>身份证号：4343242521432</span>
                                <span>户籍地：浙江杭州</span>
                                <span>前科情况：无</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cases_right_item}>
                        <div className={styles.cases_right_item_title}>
                            <img src={casesItemArrow} alt="" />
                            <span>模型自动串并案件情况</span>
                            <div></div>
                            <span>编辑</span>
                        </div>
                        <div className={styles.cases_right_item_content}>
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

export default connect(mapState)(casesItem);