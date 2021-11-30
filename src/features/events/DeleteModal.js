import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteModal({open, text, onConfirm, handleClose}) {
    return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {text}
                </DialogTitle>
                <DialogActions>
                    <Button variant="contained" color="red" style={{backgroundColor: "red", color: "white"}}
                            onClick={onConfirm}>
                        Delete
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
    );
}