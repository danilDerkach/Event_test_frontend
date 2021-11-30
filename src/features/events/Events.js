import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useMemo} from "react";
import {dateFormatParser} from "../../utils/helpers";
import Button from "@material-ui/core/Button";
import DeleteModal from "./DeleteModal";

export default function Events() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirmDeleting = () => {
        localStorage.removeItem('events');
        setOpen(false);
    };

    const events = useMemo(() => JSON.parse(localStorage.getItem('events')) || [], []);
    return (
        <>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Event name</TableCell>
                        <TableCell align="left">Location</TableCell>
                        <TableCell align="left">Start date</TableCell>
                        <TableCell align="left">End date</TableCell>
                        <TableCell align="left" sortDirection={true}>
                            <Grid container justifyContent="space-between">
                                Submitted at
                                <Button variant="contained" color="red" style={{backgroundColor: "red", color: "white"}} onClick={handleClickOpen}>
                                    Delete
                                </Button>
                            </Grid>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.map((row) => (
                        <TableRow
                            key={row.submittedAt}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="left">{row.eventName}</TableCell>
                            <TableCell align="left">{row.location}</TableCell>
                            <TableCell align="left">{dateFormatParser(row.startDate)}</TableCell>
                            <TableCell align="left">{dateFormatParser(row.endDate)}</TableCell>
                            <TableCell align="left">{dateFormatParser(row.submittedAt)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            <DeleteModal open={open} handleClose={handleClose} text={"Do you want to delete all events?"} onConfirm={handleConfirmDeleting}/>
            </>
    );
}
