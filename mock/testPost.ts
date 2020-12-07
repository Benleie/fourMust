import mockjs from 'mockjs';

export default {
  'POST /api/post': (req:Request ,res:any) => {
    res.status(200).json({
        data: mockjs.mock({
          'retCode': 200,
          'message': 'OK', 
          'results|80-100' : [
            {
              id: '@id',
              name: '@name',
              nickName: '@last',
              phone: /^1[34578]\d{9}$/,
              'age|11-99' : 1,
              address: '@county(true)',
              isMale: '@boolean',
              email: '@email',
              createTime: '@datatime',
              avatar(){
                  return mockjs.Random.image('100x100',mockjs.Random.color(),'#ff0000','png')
              },
            }
          ]
        })
    })
  }
};

// export default {
//     'POST /api/post': (req, res) => {
//       // 添加跨域请求头
//       req.send("user=zty")
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       res.end('ok');
//     },
// }

