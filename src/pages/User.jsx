import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import InfoCard from '../components/InfoCard';

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.rootReducer.randomUsers.users);
  const [currentUser] = users.filter((user) => user.login.uuid === id);

  useEffect(() => {
    if (!currentUser) navigate('/users');
  });

  return (
    <main>
      <div className="container">
        {currentUser && <InfoCard user={currentUser} />}
      </div>
    </main>
  );
};

export default User;
