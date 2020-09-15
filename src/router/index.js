import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/boorrowing',
    component: Layout,
    redirect: '/boorrowing/index',
    alwaysShow: true,
    name: 'Boorrowing',
    meta: { title: '借款实时监控', icon: 'large_loans' },
    children: [
      {
        path: 'borrowing_index',
        component: () => import('@/views/borrowing/borrowing_index'),
        name: 'BorrowingIndex',
        meta: { title: '统计借款' }
      }
    ]
  },
  {
    path: '/financial',
    component: Layout,
    redirect: '/financial/index',
    alwaysShow: true,
    name: 'Boorrowing',
    meta: { title: '理财产品实时监控', icon: 'large_loans' },
    children: [
      {
        path: 'financial_index',
        component: () => import('@/views/financial/financial_index'),
        name: 'FinancialIndex',
        meta: { title: '统计理财产品' }
      }
    ]
  },
  {
    path: '/large_loans',
    component: Layout,
    redirect: '/large_loans/index',
    alwaysShow: true,
    name: 'Large_Loans',
    meta: { title: '大额贷款', icon: 'large_loans' },
    children: [
      {
        path: 'complex-table',
        component: () => import('@/views/large_loans_table/complex-table'),
        name: 'ComplexTable',
        meta: { title: '监控贷款' }
      },
      {
        path: 'audit_loans',
        component: () => import('@/views/large_loans_table/audit_loans'),
        name: 'AuditLoans',
        meta: { title: '审核贷款' }
      },
      {
        path: 'mix-chart',
        component: () => import('@/views/charts/mix-chart'),
        name: 'MixChart',
        meta: { title: '统计贷款' }
      }
    ]
  },
  {
    path: '/financial_product',
    component: Layout,
    redirect: '/financial_product/index',
    alwaysShow: true,
    name: 'FinancialProduct',
    meta: { title: '理财产品', icon: 'large_loans' },
    children: [
      {
        path: 'product',
        component: () => import('@/views/financial_product/product'),
        name: 'Product',
        meta: { title: '监控产品' }
      },
      {
        path: 'mix-chart',
        component: () => import('@/views/charts/mix-chart'),
        name: 'MixChart',
        meta: { title: '统计产品' }
      }
    ]
  },
  {
    path: '/user_management',
    component: Layout,
    redirect: '/user_management/index',
    alwaysShow: true,
    name: 'UserManagement',
    meta: { title: '用户管理', icon: 'large_loans' },
    children: [
      {
        path: 'user',
        component: () => import('@/views/user_management/user'),
        name: 'User',
        meta: { title: '用户监控' }
      }
    ]
  },
  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/index',
    alwaysShow: true,
    name: 'CustomerManagement',
    meta: { title: '客服管理', icon: 'large_loans' },
    children: [
      {
        path: 'customer_index',
        component: () => import('@/views/customer/customer_index'),
        name: 'CustomerIndex',
        meta: { title: '客服监控' }
      },
      {
        path: 'historical_chat_record',
        component: () => import('@/views/customer/historical_chat_record'),
        name: 'HistoricalChatRecord',
        meta: { title: '历史聊天记录' }
      }
    ]
  }
]

// export const asyncRoutes = [
//   {
//     path: '/error',
//     component: Layout,
//     redirect: 'noRedirect',
//     name: 'ErrorPages',
//     meta: {
//       title: '错误页面',
//       icon: '404'
//     },
//     children: [
//       {
//         path: '401',
//         component: () => import('@/views/error-page/401'),
//         name: 'Page401',
//         meta: { title: '401', noCache: true }
//       },
//       {
//         path: '404',
//         component: () => import('@/views/error-page/404'),
//         name: 'Page404',
//         meta: { title: '404', noCache: true }
//       }
//     ]
//   }
// ]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
