import React from 'react';

const InfoCard = ({ user }) => {
  return (
    <div className="card p-3">
      <img
        className="rounded-circle"
        src={user.picture.large}
        alt="avatar"
        width={128}
        height={128}
      />
      <div className="card-body p-0 mt-3">
        <h6 className="card-title">
          <b>Name: </b>
          {user.name.first} {user.name.last}
        </h6>
        <span className="d-block mb-2">
          <b>Date of birth: </b>
          {user.dob.date.substr(0, user.dob.date.indexOf('T'))}
        </span>
        <span className="d-block mb-2">
          <b>Address: </b> {user.location.city}, {user.location.street.name}
          {user.location.street.number}
        </span>
        <span className="d-block mb-2">
          <b>Phone: </b>
          {user.phone}
        </span>
        <span className="d-block">
          <b>Registration: </b>
          {user.registered.date.substr(0, user.dob.date.indexOf('T'))}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
