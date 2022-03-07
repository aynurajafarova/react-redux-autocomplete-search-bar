import React from "react";
import { useSelector } from "react-redux";

import userIcon from "../../../../shared/assets/images/icons/user-icon.svg";
import NotFound from "../../../../shared/components/NotFound/NotFound";

import "./UserIDCard.css";

const UserIDCard = () => {
  const { singleUser } = useSelector((state) => state.users);
  return (
    <section className="user-id-card">
      {singleUser ? (
        <div className="user-id-card__content">
          <div className="user-id-card__content__header">
            <h2>ID Card</h2>
          </div>
          <div className="user-id-card__content__img center">
            <img src={userIcon} alt="user-icon" />
          </div>
          <div className="user-id-card__content__details">
            {Object.entries(singleUser).map(([key, value]) => {
              if (typeof value !== "object") {
                return (
                  <p key={key}>
                    <span className="user-id-card__field">{`${key}: `}</span>
                    <span>{value}</span>
                  </p>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <NotFound title="Oops! Not found" />
      )}
    </section>
  );
};

export default UserIDCard;
