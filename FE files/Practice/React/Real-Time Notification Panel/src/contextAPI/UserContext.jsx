// contextAPI/UserContext.jsx
import React, { createContext, useEffect, useRef, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    // start interval when component mounts
    intervalRef.current = setInterval(() => {
      setNotifications((prev) => [
        ...prev,
        {
          id: Date.now(),
          message: "You have a new message!",
          read: false,
        },
      ]);
    }, 5000);

    // cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  // mark all as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  // stop notifications
  const stopNotifications = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, markAllAsRead, stopNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
