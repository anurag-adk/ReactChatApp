import React from "react";

const MessageTemplate = ({
  username,
  createdAt,
  message,
  darkMode,
  textType,
  isOwnMessage,
}) => {
  const limitedUsername =
    username.length > 10 ? username.slice(0, 10) + "..." : username;
  let messageClass = "";
  if (textType === "system") {
    messageClass = "system";
  } else {
    messageClass = isOwnMessage ? "sent" : "received";
  }
  return (
    <div className={`message ${messageClass}`}>
      <p>
        <span
          className={`${
            darkMode ? "text-richblack-700" : " text-black"
          }  message__name`}
        >
          {limitedUsername}
        </span>
        <span className="message__meta">{createdAt}</span>
      </p>
      <p className={`${darkMode ? "text-customgrey" : " text-black"}`}>
        {message}
      </p>
    </div>
  );
};

export default MessageTemplate;
