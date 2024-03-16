import React from "react";
import { Avatar } from "@mui/material";
import usersData from "../../json/users.json";

export default function User({ users, userSelected, userActive }) {
  const classNameUser = (data) =>
    "user__item" +
    (userActive.id === data.id ? " active" : "") +
    (data.unread ? " unread" : "");

  return (
    <div className="user__box">
      {users.map((data, index) => {
        return (
          <div
            key={index}
            className={classNameUser(data)}
            onClick={() => userSelected(data)}
          >
            <div className="user__img">
              <Avatar
                src={`${process.env.REACT_APP_API_URL}image/profile/${data.id}.jpg`}
                style={{ width: 40, height: 40 }}
              />
            </div>
            <div className="user__name">{data.name}</div>
          </div>
        );
      })}
    </div>
  );
}
