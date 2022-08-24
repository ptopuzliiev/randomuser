import { format } from 'date-fns';

const InfoCard = ({ user }) => {
  return (
    <div className="card p-3">
      <img
        className="rounded-circle mb-3"
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
        <div className="d-flex mb-2">
          <dt className="mr-1">Gender:</dt>
          <dd>{user.gender}</dd>
        </div>
        <div className="d-flex mb-2">
          <dt className="mr-1">Address:</dt>
          <dd>
            {user.location.street.number} {user.location.city},{' '}
            {user.location.street.name}
          </dd>
        </div>
        <div className="d-flex mb-2">
          <dt className="mr-1">Phone:</dt>
          <dd>{user.phone}</dd>
        </div>
        <div className="d-flex">
          <dt className="mr-1">Registration:</dt>
          <dd>{user.registered.date.substr(0, user.dob.date.indexOf('T'))}</dd>
        </div>
      </dl>
    </div>
  );
};

export default InfoCard;
