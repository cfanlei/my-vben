import type { MenuModule } from '/@/router/types';

const profile: MenuModule = {
  orderNo: 10,
  menu: {
    name: 'profile',
    path: '/profile',

    children: [
      {
        path: 'setting',
        name: '设置',
      },
      {
        path: 'userinfo',
        name: '用户信息',
      },
    ],
  },
};
export default profile;
