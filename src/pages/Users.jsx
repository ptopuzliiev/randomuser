import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions';
import Card from '../components/Card';
import Loader from '../components/UI/Loader';
import { StyledCardsWrap } from '../components/styles/CardsWrap';
import { Container } from 'react-bootstrap';

const Users = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.randomUsers.isFetching);
  const users = useSelector((state) => state.randomUsers.users);
  const error = useSelector((state) => state.randomUsers.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && error) {
    return <Container>Something wrong...</Container>;
  }

  return (
    <main>
      <Container>
        <StyledCardsWrap>
          {users &&
            users.map((user) => <Card user={user} key={user.login.uuid} />)}
        </StyledCardsWrap>
      </Container>
    </main>
  );
};

export default Users;
