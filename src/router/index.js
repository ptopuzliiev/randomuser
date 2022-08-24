import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Users from '../pages/Users';
import UserInfo from '../pages/UserInfo';
import User from '../pages/User';

export const publicRoutes = [{ path: '/login', component: Login }];

export const privateRoutes = [
  { path: '/users', component: Users },
  { path: '/users/:id', component: User },
  { path: '/user-info', component: UserInfo },
  { path: '/logout', component: Logout },
  { path: '/*', component: Login },
];
