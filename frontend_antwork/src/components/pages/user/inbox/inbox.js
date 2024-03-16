import React, { useState, useRef } from "react";
import usersData from "./json/users.json";

import User from "./components/User/User";
import Message from "./components/Message/Message";
import InvoiceDialog from "./components/Invoice/Invoice";

import "./style/inbox.css";
import { Typography } from "@mui/material";

export default function Inbox() {
  const [userActive, setUserActive] = useState([]);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current && messagesEndRef.current.scrollIntoView();
    }, 0);
  };

  function userSelected(event) {
    const addUserActive = {
      id: parseInt(event.id, 10),
      name: event.name,
    };
    setUserActive(addUserActive);
    scrollToBottom();
  }

  return (
    <div className="chat__box">
      <User
        users={usersData}
        userSelected={userSelected}
        userActive={userActive}
      />
      {userActive.id && (
        <Message
          userActive={userActive}
          messagesEndRef={messagesEndRef}
          scrollToBottom={scrollToBottom}
        />
      )}
      {userActive.id && <InvoiceDialog />}
    </div>
  );
}
