import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/users';
import Card from '../components/Card';
import Loader from '../components/UI/Loader';
import { StyledCardsWrap } from '../components/styles/CardsWrap';

const Users = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state.rootReducer.randomUsers.isFetching
  );
  const users = useSelector((state) => state.rootReducer.randomUsers.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <div className="container">
        <StyledCardsWrap>
          {users &&
            users.map((user) => <Card user={user} key={user.login.uuid} />)}
        </StyledCardsWrap>
      </div>
    </main>
  );
};

export default Users;
