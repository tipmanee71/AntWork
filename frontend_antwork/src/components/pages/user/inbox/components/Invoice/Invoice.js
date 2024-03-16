import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Stack } from "@mui/material";

export default function InvoiceDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Make an offer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Make an offer</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            variant="outlined"
          />
          <Stack direction="row" style={{ alignItems: "center" }}>
            <TextField
              margin="dense"
              id="price"
              label="Price"
              fullWidth
              variant="outlined"
              style={{marginRight: 10}}
            />
            <TextField
              margin="dense"
              id="delivery-day"
              label="Delivery Day"
              fullWidth
              variant="outlined"
            />
          </Stack>
          <TextField
              margin="dense"
              id="details"
              label="Details"
              fullWidth
              variant="outlined"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
