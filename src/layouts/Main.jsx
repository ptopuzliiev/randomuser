import { useLocation, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/header/Header';

const menuLinks = [
  { title: 'Users', path: '/users' },
  { title: 'User Info', path: '/user-info' },
  { title: 'Log out', path: '/logout' },
];

const MainLayout = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const location = useLocation();
  const isLogoutPage = location.pathname === '/logout';

  return (
    <>
      {isAuth && !isLogoutPage && <Header links={menuLinks} />}

      <Outlet />
    </>
  );
};

export default MainLayout;
