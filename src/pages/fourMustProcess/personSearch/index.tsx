import React, { useState, FC, useEffect } from 'react';
import { ConnectProps, connect, useHistory } from 'umi';
import { CommonModelState } from '../../../models/common';
import styles from './index.less';
import { Progress } from 'antd';
import echarts from 'echarts';

interface PageProps extends ConnectProps {
  common: CommonModelState;
};
const caseSearchImg = require('../../../assets/fourMustProcess/caseSearchNoSelect.png');
const titleIcon: string = require('../../../assets/fourMustProcess/titleIcon.png');
const peopleList: number[] = [10, 20, 30, 60, 50, 40, 30, 20, 10, 35, 40];
const PersonSearch: FC<PageProps> = (props) => {
  const chart_num = () => {
    const myChart = echarts.init(document.getElementById('chart_num') as any);
    myChart.clear();
    let option: any = {
      color: ['#0096FF', '#FFC000'],
      legend: {
        right: 50,
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
          color: '#fff',
          fontSize: 12,
        }
      },
      grid: {
        borderColor: '#192B59',
        show: true,
        top: 50,
        bottom: 30,
        left: 50,
        right: 20,
      },

      tooltip: {},
      dataset: {
        source: [
          ['product', '今年', '去年'],
          ['齐贤所', 43.3, 85.8],
          ['钱清所', 83.1, 73.4],
          ['轻纺城所', 86.4, 65.2],
          ['漓渚所', 72.4, 53.9],
          ['漓渚所1', 72.4, 53.9],
          ['漓渚所2', 72.4, 53.9],
          ['漓渚所3', 72.4, 53.9],
          ['漓渚所4', 72.4, 53.9],
          ['漓渚所6', 72.4, 53.9],
          ['漓渚所7', 72.4, 53.9],
          ['漓渚所8', 72.4, 53.9],
          ['漓渚所9', 72.4, 53.9],
        ]
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#192B59' //更改坐标轴颜色
          }
        },
        axisTick: {
          lineStyle: {
            color: '#192B59'
          }    // x轴刻度的颜色
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {   //x网格线
            color: '#192B59'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(0,0,0,0)' //更改坐标轴颜色
          }
        },
        axisTick: {
          lineStyle: {
            color: '#192B59'
          }
        },
        splitArea: { show: false },  //去除网格区域
      },
      series: [
        {
          type: 'bar',
          label: {
            color: '#fff'
          },
          barWidth: 10,
          barGap: '20%',
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top',
                top: 30, //在上方显示
                textStyle: { //数值样式
                  color: 'white',
                  fontSize: 12
                }
              }
            }
          },
        },
        {
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: 'white',
                  fontSize: 12
                }
              }
            }
          },
        },

      ]
    };
    myChart.setOption(option);
  }
  const chart_type = () => {
    const myChart = echarts.init(document.getElementById('chart_type') as any);
    myChart.clear();
    let option: any = {
      color: ['#0000FF', '#0099FF', '#FFC000', '#FF7200', '#5A00FF', '#33CC99'],
      grid: {
        borderColor: '#192B59',
        show: false,
        top: 30,
        bottom: 60,
        left: 50,
        right: 20,
      },
      graphic: [{
        type: 'text',
        left: 'center',
        top: '35%',
        style: {
          text: '1345',
          fill: '#2EFFFF',
          width: 30,
          height: 30,
          fontSize: 24,
        }
      }, {
        type: 'text',
        left: 'center',
        top: '50%',
        style: {
          text: '总数',
          fill: "white",
          width: 30,
          height: 30,
          fontSize: 16,
        }
      }],
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['50%', '45%'],
          avoidLabelOverlap: true,
          label: {
            normal: {
              formatter: '{a|{b}}{per|{d}%}',//空格也起作用
              rich: {
                a: {
                  color: '#fff',
                  lineHeight: 20,
                  align: 'center'
                },
                b: {
                  fontSize: 12,
                  lineHeight: 20
                },
                per: {
                  color: '#fff',
                }
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '14',
              }
            }
          },
          labelLine: {
            normal: {
              show: true,
            }
          },
          data: [
            { value: 11, name: '治安拘留' },
            { value: 9, name: '不予处罚' },
            { value: 18, name: '其他'},
            { value: 9, name: '监视居住'},
            { value: 21, name: '刑事拘留'},
            { value: 10, name: '取保候审'},
          ]
        }
      ]
    };
    myChart.setOption(option);
  }
  useEffect(() => {
    chart_num()
    chart_type()
  })
  return (
    <div className={styles.personSearchWrapper}>
      <div className={styles.person_img}>
        <div className={styles.person_img_content}>
          <img src={caseSearchImg} alt="" />
                每人必研
        </div>
      </div>
      <div className={styles.person_container}>
        <div className={styles.person_left}>
          <div className={styles.person_left_top}>
            <div className={styles.person_title}>
              <img src={titleIcon} alt="" />
                    今日新增人数
            </div>
            <div className={styles.person_left_top_one}>
              <div>0</div>
              <div>3</div>
              <div>1</div>
            </div>
            <div className={styles.person_title}>
              <img src={titleIcon} alt="" />
                      今日案件
              </div>
            <div className={styles.person_left_top_two}>
              <div>0</div>
              <div>3</div>
              <div>1</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
          </div>
          <div className={styles.person_left_center}>
            <div className={styles.person_title}>
              <img src={titleIcon} alt="" />
                    处置类型
            </div>
            <div id="chart_type" className={styles.person_left_center_chart} />
          </div>
          <div className={styles.person_left_bottom}>
            <div className={styles.person_title}>
              <img src={titleIcon} alt="" />
                    小案类别
            </div>
            <div id="chart_num" className={styles.person_left_bottom_chart} />
          </div>
        </div>
        <div className={styles.person_right}>
          <div className={styles.person_title}>
            <img src={titleIcon} alt="" />
                    各所抓获人数
          </div>
          {
            peopleList.map((item: number, index: number) => {
              return (
                <div key={index} className={styles.person_right_item}>
                  <span className={styles.person_right_item_name}>齐贤所</span>
                  <Progress percent={item} showInfo={false} />
                  <span className={styles.person_right_item_num}>{item}人</span>
                </div>
              )

            })
          }
        </div>
      </div>
    </div>
  )
};

const mapState = (state: any) => {
  return {
    common: state.common
  }
};

export default connect(mapState)(PersonSearch);