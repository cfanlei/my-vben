import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const profile: AppRouteModule = {
  path: '/profile',
  name: 'Profile',
  component: LAYOUT,
  redirect: '/profile/setting',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.profile'),
  },
  children: [
    {
      path: 'setting',
      name: 'Setting',
      component: () => import('/@/views/profile/setting/index.vue'),
      meta: {
        affix: true,
        title: t('routes.dashboard.setting'),
      },
    },
    {
      path: 'userinfo',
      name: 'Userinfo',
      component: () => import('/@/views/profile/userInfo/index.vue'),
      meta: {
        title: t('routes.dashboard.userinfo'),
      },
    },
  ],
};

export default profile;
