import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Users from '../pages/Users';
import UserInfo from '../pages/UserInfo';
import User from '../pages/User';

export const publicRoutes = [
  { path: '/login', component: Login, exact: true },
  { path: '/*', component: Login, exact: true },
];

export const privateRoutes = [
  { path: '/users', component: Users, exact: true },
  { path: '/users/:id', component: User, exact: true },
  { path: '/user-info', component: UserInfo, exact: true },
  { path: '/logout', component: Logout, exact: true },
  { path: '/*', component: Users, exact: true },
];
