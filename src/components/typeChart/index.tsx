import  React,{ FC, useEffect, useRef } from 'react';
import { connect } from 'umi';
import styles from './index.less';
import echarts from 'echarts';

interface PageProps{
  nameList:[],
  valueList:[]
}

const TypeChart: FC<PageProps> =(props:any) =>{
  const chartRef:any = useRef();
  const { nameList, valueList  } = props;
  const chart = () => {
    const myChart = echarts.init(chartRef.current);
    myChart.clear();
    let option:any = {
      legend: {
        orient: 'vertical',
        x: 0,
        y: 'bottom',
        icon: 'circle',  
        itemWidth:5,    
        itemHeight:5,   
        data: nameList
      },
      grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
      },
      series: [
        {
          name: '违法类型分析',
          type: 'pie',
          radius: '55%',
          center: ['60%', '40%'],
          data: valueList,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label:{           
            normal:{
              show:true,
              textStyle : {
                  fontWeight : 300 ,
                  fontSize : 12    
              },
              formatter:'{d}%'
            }
          },
        }
      ]
    };
    myChart.setOption(option);
  }
  useEffect(()=>{
    chart()
  },[1])
  
  return(
    <div className={styles.typeWrapper} ref={chartRef}></div>
  )
};

const mapState = (state:any)=>{
  return {
    common: state.common
  }
};

export default connect(mapState)(TypeChart);