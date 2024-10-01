import { Alert, AlertColor, Snackbar } from "@mui/material";
import React from "react";

type NotificationProps = {
  open: boolean;
  msg: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
};

const Notification = ({
  open,
  msg,
  severity,
  handleClose,
}: NotificationProps) => {
  return (
    <Snackbar open={open} onClose={handleClose}>
      <Alert severity={severity} onClose={handleClose}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
