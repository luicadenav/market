import React from "react";

type contextProps = {
  getError: () => void;
};

const NotificationContext = React.createContext<contextProps | null>(null);

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  return <div>NotificationProvider</div>;
};

export default NotificationProvider;
