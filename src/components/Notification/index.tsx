import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";
import { getAutoHeightDuration } from "@mui/material/styles/createTransitions";
import React from "react";

type NotificationProps = {
  open: boolean;
  msg: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
};

export const Notification = ({
  open,
  msg,
  severity,
  handleClose,
}: NotificationProps) => {
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={4000}
    >
      <Alert severity={severity} onClose={handleClose}>
        <Typography>{msg} </Typography>
      </Alert>
    </Snackbar>
  );
};
