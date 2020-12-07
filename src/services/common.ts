import request, { extend } from 'umi-request';
import  { baseURL }  from '../utils/configUrl';
import  turnToJSON  from '../utils/turnToJson';
import { message } from 'antd';

const errorHandler = function(error:any) {
//   const codeMap = {
//     '403': '没有权限',
//     '500': '服务器出错',
//   };
  if (error.response) {
    // message.error(error.data.message?error.data.message:error.data)
    //console.log('状态码：',error.response.status);  //返回的状态码
    //console.log(error.response.headers);  //请求头
    //console.log(error.data);  //请求体
    //console.log(error.request);  //请求的信息，包含url，param，headers等等
    //console.log(codeMap[error.data.status]);  //根据状态码返回对应的信息
  } else {
    // console.log('发送了请求但没有接收到响应或发送请求时出现错误');
  }
  throw error; 
};
const extendRequest = extend({ errorHandler });

export const getData = (params:any) => {
  const param = turnToJSON(params);
  return extendRequest(`${baseURL}/information/getInformationByHphm`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: param
  })
  .then(res => {
    return res
  })
  .catch(err => {
    return false
  });
};