import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import UserForm from "../../../common/UserForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function EditUser({ open, handleClose, id }) {
    
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          level="h1"
          fontFamily={"sans-serif"}
          sx={{ fontSize: 22, mb: 3, fontWeight: 700, textAlign: "center" }}
        >
          Update User Form
        </Typography>
        <UserForm callBack={handleClose} id={id} />
      </Box>
    </Modal>
  );
}
