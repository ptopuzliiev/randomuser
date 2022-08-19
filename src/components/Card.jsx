import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCard } from './styles/Card.styled';

const Card = ({ user, ...props }) => {
  const [isHover, setHover] = useState(false);
  const navigate = useNavigate();
  const isMale = user.gender === 'male' ? '#3dd5f3' : '#ffeb3b';
  return (
    <StyledCard
      {...props}
      backgroundColor={isMale}
      boxShadow={isHover ? '0 5px 20px rgb(0,0,0, .3)' : ''}
      className="card p-3 rounded"
      onClick={() => navigate(`/users/${user.login.uuid}`)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className="rounded-circle mx-auto"
        src={user.picture.large}
        alt="avatar"
        width={128}
        height={128}
      />
      <div className="card-body">
        <h6 className="card-title">
          <b>Name: </b>
          {user.name.first} {user.name.last}
        </h6>
        <span className="d-block mb-2">
          <b>Date of birth: </b>
          {user.dob.date.substr(0, user.dob.date.indexOf('T'))}
        </span>
        <span className="d-block">
          <b>Gender: </b>
          {user.gender}
        </span>
      </div>
    </StyledCard>
  );
};

export default Card;
