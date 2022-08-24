import { StyledCard } from './styles/Card.styled';
import { format } from 'date-fns';

const Card = ({ user, ...props }) => {
  const bgcolor = user.gender === 'male' ? '#3dd5f3' : 'pink';
  return (
    <StyledCard
      to={user.login.uuid}
      {...props}
      background={bgcolor}
      className="card p-3 rounded"
    >
      <img
        className="rounded-circle mx-auto mb-3"
        src={user.picture.large}
        alt="avatar"
        width={128}
        height={128}
      />
      <dl className="card-body p-0">
        <div className="d-flex mb-2">
          <dt className="mr-1">Name:</dt>
          <dd>
            {user.name.first} {user.name.last}
          </dd>
        </div>
        <div className="d-flex mb-2">
          <dt className="mr-1">Date of birth:</dt>
          <dd>{format(new Date(user.dob.date), 'yyyy-mm-dd')}</dd>
        </div>
        <div className="d-flex">
          <dt className="mr-1">Gender:</dt>
          <dd>{user.gender}</dd>
        </div>
      </dl>
    </StyledCard>
  );
};

export default Card;
