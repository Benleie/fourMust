import React, { useState, FC, useEffect } from 'react';
import { ConnectProps, connect, useHistory } from 'umi';
import { CommonModelState } from '../../../models/common';
import styles from './index.less';
import { DatePicker } from 'antd';
import echarts from 'echarts';

interface PageProps extends ConnectProps {
  common: CommonModelState;
};
const { RangePicker } = DatePicker;
const placeholder: any = ['开始时间', '结束时间']

const caseSearchImg = require('../../../assets/fourMustProcess/caseSearchNoSelect.png');
const titleIcon = require('../../../assets/fourMustProcess/titleIcon.png');
const CasesSearch: FC<PageProps> = (props) => {
  const chart_num = () => {
    const myChart = echarts.init(document.getElementById('chart_num') as any);
    myChart.clear();
    let option: any = {
      color: ['#F8CC46', '#5ACAFA'],
      legend: {
        right: 100,
        top: 10,
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
        bottom: 50,
        left: 50,
        right: 20,
      },

      tooltip: {},
      dataset: {
        source: [
          ['product', '发案数', '破案数'],
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
          ['漓渚所10', 72.4, 53.9],
          ['漓渚所21', 172.4, 2],
          ['漓渚所20', 172.4, 3],
          ['漓渚所40', 172.4, 4],
          ['漓渚所30', 172.4, 5],
          ['漓渚所50', 172.4, 6],
          ['漓渚所30', 172.4, 10],
          ['漓渚所0', 172.4, 12],
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
          rotate: 30,
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
          barGap: '0%',
        },
        {
          type: 'bar',
          barWidth: 10,
        }
      ]
    };
    myChart.setOption(option);
  }
  const chart_type = () => {
    const myChart = echarts.init(document.getElementById('chart_type') as any);
    myChart.clear();
    let option: any = {
      color: ['#5ACAFA'],
      legend: {
        right: 100,
        itemWidth: 15,
        textStyle: {
          color: '#fff',
          fontSize: 16,
        }
      },
      grid: {
        borderColor: '#192B59',
        show: true,
        top: 40,
        bottom: 40,
        left: 50,
        right: 20,
      },

      tooltip: {},
      dataset: {
        source: [
          ['product',],
          ['一类', 43.3, 2],
          ['二类', 23.1,],
          ['三类', 16.4,],
          ['四类', 16.4,],
          ['五类', 16.4,],
          ['六类', 16.4,],
        ]
      },
      xAxis: {
        type: 'category',
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
          barWidth: 20,
          barGap: '0%',
        },
      ]
    };
    myChart.setOption(option);
  }
  
  const chart_status = () => {
    const myChart = echarts.init(document.getElementById('chart_status') as any);
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
        top: '45%',
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
        top: '60%',
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
          radius: ['45%', '60%'],
          center: ['50%', '55%'],
          avoidLabelOverlap: true,
          label: {
            normal: {
              formatter: '{a|{b}}{per|{d}%}  ',//空格也起作用
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
            { value: 13, name: '未破' },
            { value: 76, name: '锁定' },
            { value: 19, name: '已破'},
          ]
        }
      ]
    };
    myChart.setOption(option);
  }
  const chart_scale = () => {
    const myChart = echarts.init(document.getElementById('chart_scale') as any);
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
        top: '45%',
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
        top: '60%',
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
          radius: ['45%', '60%'],
          center: ['50%', '55%'],
          avoidLabelOverlap: true,
          label: {
            normal: {
              formatter: '{a|{b}}{per|{d}%}  ',//空格也起作用
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
            { value: 13, name: '未破' },
            { value: 76, name: '锁定' },
            { value: 19, name: '已破'},
          ]
        }
      ]
    };
    myChart.setOption(option);
  }
  const chart_week = () => {
    const myChart = echarts.init(document.getElementById('chart_week') as any);
    myChart.clear();
    let option: any = {
      color: ['#F8CC46', '#5ACAFA'],
      legend: {
        data: ['发案数', '破案数'],
        right: 20,
        top: 0,
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
          color: '#fff',
          fontSize: 12,
        }
      },
      grid: {
        top: 30,
        bottom: 25,
        right: 20,
        left: 50,
      },

      xAxis: {
        type: 'category',
        data: ['10-1', '10-2', '10-3', '10-4', '10-5', '10-6', '10-7'],
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        },
      },
      yAxis: {
        type: 'value',
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
      },
      series: [
        {
          name: '发案数',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          label: {
            color: '#fff'
          },
        },
        {
          name: '破案数',
          data: [1290, 1330, 1320, 1233, 121, 2233],
          type: 'line',
          smooth: true,
          label: {
            color: '#fff'
          },
        },
      ]
    };
    myChart.setOption(option);
  }
  useEffect(() => {
    chart_num()
    chart_type()
    chart_status()
    chart_scale()
    chart_week()
  })
  return (
    <div className={styles.casesSearchWrapper}>
      <div className={styles.cases_img}>
        <div className={styles.cases_img_content}>
          <img src={caseSearchImg} alt="" />
          每案必研
        </div>
      </div>
      <div className={styles.cases_container}>
        <div className={styles.cases_top}>
          <div className={styles.cases_top_title}>
            <div className={styles.cases_top_title_num}>
              <img src={titleIcon} alt="" />
                  各派出所案件数
              </div>
            <div className={styles.time}>
              <span className={styles.time_name}>
                日｜月｜年
                </span>
              <RangePicker className={styles.picker} placeholder={placeholder} />
            </div>
          </div>
          <div id="chart_num" className={styles.cases_top_chart} />
        </div>
        <div className={styles.cases_center}>
          <div className={styles.cases_title}>
            <img src={titleIcon} alt="" />
              案件类型统计
          </div>
          <div id="chart_type" className={styles.cases_center_chart} />
        </div>
        <div className={styles.cases_bottom}>
          <div className={styles.cases_bottom_item}>
            <div className={styles.cases_title}>
              <img src={titleIcon} alt="" />
              今日案件
            </div>
            <div className={styles.cases_bottom_item_one}>
              <div>0</div>
              <div>3</div>
              <div>1</div>
            </div>
            <div className={styles.cases_title}>
              <img src={titleIcon} alt="" />
                      累计案件
              </div>
            <div className={styles.cases_bottom_item_two}>
              <div>0</div>
              <div>3</div>
              <div>1</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
          </div>
          <div className={styles.cases_bottom_item}>
            <div className={styles.cases_title}>
              <img src={titleIcon} alt="" />
                  案件状态
            </div>
            <div id="chart_status" className={styles.cases_bottom_one} />
          </div>
          <div className={styles.cases_bottom_item}>
            <div className={styles.cases_title}>
              <img src={titleIcon} alt="" />
                  未破案占比
          </div>
            <div id="chart_scale" className={styles.cases_bottom_two} />
          </div>
          <div className={styles.cases_bottom_item}>
            <div className={styles.cases_title}>
              <img src={titleIcon} alt="" />
                  近一周案件数量
          </div>
            <div id="chart_week" className={styles.cases_bottom_three} />
          </div>
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

export default connect(mapState)(CasesSearch);