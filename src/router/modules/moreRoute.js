// 多级路由
import LayoutMain from '@/layouts/LayoutMain/index.vue';
// import LayoutEmpty from '@/layouts/LayoutEmpty/index.vue';

const moreRoute = {
  meta: {
    icon: 'el-icon-ali-yuedu',
    title: '多级路由',
  },
  path: '/moreRoutes',
  component: LayoutMain,
  redirect: '/moreRoutes/page1',
  name: 'moreRoutes',
  children: [
    {
      path: 'page1',
      name: 'moreRoutes1',
      component: () => import('@/views/MoreRoutes/index.vue'),
      meta: {
        title: 'button',
      },
    },
    {
      path: 'level2',
      name: 'moreRoutes2',
      component: () => import('@/views/MoreRoutes/level2/index.vue'),
      redirect: '/moreRoutes/level2/page',
      meta: {
        title: '导航2',
      },
    },
  ],
};
export default moreRoute;
