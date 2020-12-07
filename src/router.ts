const router = [
  {
    path: '/login',
    component: '@/pages/login',
    exact: true
  },
  { 
    path: '/', 
    component: '@/pages/layout', 
    routes: [
      { 
        path: '/', 
        component: '@/pages/fourMustProcess', 
        exact: true,
      },
      {
        path: '/fourMustProcess', 
        component: '@/pages/fourMustProcess/process', 
        routes: [
          {
            path: '/fourMustProcess/casesSearch', 
            component: '@/pages/fourMustProcess/casesSearch', 
            exact: true 
          },
          {
            path: '/fourMustProcess/casesSpy', 
            component: '@/pages/fourMustProcess/casesSpy', 
            exact: true 
          },
          {
            path: '/fourMustProcess/personSearch', 
            component: '@/pages/fourMustProcess/personSearch', 
            exact: true 
          },
          {
            path: '/fourMustProcess/runEscape', 
            component: '@/pages/fourMustProcess/runEscape', 
            exact: true 
          },
          {
            path: '/fourMustProcess/casesItem', 
            component: '@/pages/fourMustProcess/casesItem', 
            exact: true 
          },
          {
            path: '/fourMustProcess/personItem', 
            component: '@/pages/fourMustProcess/personItem', 
            exact: true 
          },
        ]
      },
      { 
        path: '/fourMustModel', 
        component: '@/pages/fourMustModel/cases',
        exact: true 
      },
      { 
        path: '/people', 
        component: '@/pages/fourMustModel/people', 
        exact: true 
      },
      { 
        path: '/portrait', 
        component: '@/pages/fourMustModel/portrait', 
        exact: true 
      },
      { 
        path: '/aiControl', 
        component: '@/pages/aiControl', 
        exact: true 
      },
      { 
        path: '/personalCenter', 
        component: '@/pages/personalCenter', 
        exact: true 
      }
    ]
  },
];

export default router;