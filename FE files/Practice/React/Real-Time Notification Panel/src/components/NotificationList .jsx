// components/NotificationList.jsx
import React, { useContext } from "react";
import { NotificationContext } from "../contextAPI/UserContext";

export const NotificationList = () => {
  const { notifications, markAllAsRead, stopNotifications } =
    useContext(NotificationContext);

  return (
    <div>
      <h2>Notifications</h2>
      {notifications.map((n) => (
        <div
          key={n.id}
          style={{
            fontWeight: n.read ? "normal" : "bold",
            marginBottom: "8px",
          }}
        >
          {n.message}
        </div>
      ))}

      <button onClick={markAllAsRead} style={{margin:'20px'}}>Mark All as Read</button>
      <button onClick={stopNotifications} style={{margin:'20px'}} >Stop Notifications</button>
    </div>
  );
};
