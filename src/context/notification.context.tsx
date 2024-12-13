import React from "react";
import { Notification } from "../components";
import { AlertColor } from "@mui/material";

enum RegisterErrorMessages {
  InvalidCredential = "invalid credential, try again.",
  EmailInUse = "Email already in use",
  WeakPassword = "Weak password",
  Default = "Something went wrong",
}

const errorMessagesMap: Record<string, RegisterErrorMessages> = {
  "auth/invalid-credential": RegisterErrorMessages.InvalidCredential,
  "auth/email-already-in-use": RegisterErrorMessages.EmailInUse,
  "auth/weak-password": RegisterErrorMessages.WeakPassword,
};

type contextProps = {
  getError: (msg: string | null) => void;
  getSuccess: (msg: string) => void;
};

const NotificationContext = React.createContext<contextProps | null>(null);

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [msg, setMsg] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState<AlertColor | undefined>(
    undefined
  );

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (msg: string | null) => {
    if (!msg) {
      return;
    }
    setMsg(errorMessagesMap[msg] || RegisterErrorMessages.Default);
    setOpen(true);
    setSeverity("error");
  };

  const getSuccess = (msg: string) => {
    setOpen(true);
    setMsg(msg);
    setSeverity("success");
  };

  const value = {
    getError,
    getSuccess,
  };

  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        msg={msg}
      />
      {children}
    </NotificationContext.Provider>
  );
};
export const useNotification = () => {
  const context = React.useContext(NotificationContext);
  if (!context) throw new Error("No exite contexto ");
  return context;
};
