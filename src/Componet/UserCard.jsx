import React from "react";

const UserCard = ({ user }) => {
    
  if (!user) return null;
    
  return (
    <div className="card bg-base-100 w-96 shadow-md  border-2 p-3 shadow-white hover:scale-105">
      <figure>
        <img
          src={user?.photourl || user?.photoUrl || ""}
          alt="Shoes" 
        />
      </figure>
      <div className="card-body m-1 p-3">
        <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
        <p>
       User Skills: this is the default about of user 
        </p>
        <div className="card-actions justify-around mt-5">
            <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-primary">Send User</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
