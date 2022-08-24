import { useMemo } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import InfoCard from '../components/InfoCard';

const User = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.randomUsers.users);
  // const currentUser = users.find((user) => user.login.uuid === id);

  const currentUser = useMemo(() => {
    return users.find((user) => user.login.uuid === id);
  }, [id]);

  if (!currentUser) {
    return <Navigate to="/users" />;
  }

  return (
    <main>
      <Container>
        <InfoCard user={currentUser} />
      </Container>
    </main>
  );
};

export default User;
