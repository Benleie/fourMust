import { defineConfig, Html } from 'umi';
import router from './src/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index',  exact: true, },
  //   { path: '/users', component: '@/pages/users', exact: true, },
  // ],
  routes: router,
  title: '柯桥分局辅助侦察“四必”工作平台',
  // mock: false,
});
