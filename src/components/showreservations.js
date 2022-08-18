import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from './bookings.json';
import edit_button from "../images/edit-button.svg";
import delete_button from '../images/delete-button.svg';
import { useState } from 'react';
import {BookingForm, ReservationCancelConfirmation } from './popup';
import { Button } from '@mui/material';

export default function ShowBookings() {
  const [UpdateModalState, setUpdateModalState] = useState([false,-1]);
  const [DeleteModalState, setDeleteModalState] = useState([false,-1]);
  const [Data,setData] = useState({});
  const [rows,setRows] = useState(data["bookings"]);

  const deleteReservation = (index) => {
    rows.splice(index,1)
    setRows(rows);
  }

  const updateData = (index, id, ti, meetingRoomName, startDate, startTime, endDate, endTime,createdBy) => {
    const rr = [...rows]
    rr[index]={
      "id":id,
        "title":ti,
        "meetingRoomName":meetingRoomName,
        "startDate":startDate,
        "startTime":startTime,
        "endDate":endDate,
        "endTime":endTime,
        "createdBy":createdBy
    }
    setRows(rr)
  }

  const handleUpdateClose = () => {
    setUpdateModalState([false,-1])
  }

  const handleDeleteClose = () => {
    setDeleteModalState([false,-1])
  }

  const ToggleDeleteModalState = (idd) => {
    if(DeleteModalState[0] === false)
    {
      setDeleteModalState([true,idd]);
    }
    else
    {
      setDeleteModalState([false,-1]);
    }
  }

  const ToggleUpdateModalState = (idd) => {
    if(UpdateModalState[0] === false)
    {
      setUpdateModalState([true,idd]);
      setData(rows[idd]);
    }
    else
    {
      setUpdateModalState([false,-1]);
      setData('');
    }
  }
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Meeting Room Name</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">End Time</TableCell>
            <TableCell align="right">Created By</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.meetingRoomName}</TableCell>
              <TableCell align="right">{row.startDate}</TableCell>
              <TableCell align="right">{row.startTime}</TableCell>
              <TableCell align="right">{row.endDate}</TableCell>
              <TableCell align="right">{row.endTime}</TableCell>
              <TableCell align="right">{row.createdBy}</TableCell>
              <TableCell align="center">
                <Button onClick={() => {
                ToggleUpdateModalState(index)
                }} ><img src={edit_button} alt="SVG as an image" style={{ width:'30px', height:'30px' }}/></Button>
                
                <Button onClick={() => {
                  ToggleDeleteModalState(index)
                  }} ><img src={delete_button} alt="SVG as an image" style={{ width:'30px', height:'30px' }}/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <BookingForm handleClose={handleUpdateClose} heading="Update Reservation" uhelper={updateData} minf={Data} open={UpdateModalState[0]} idd={UpdateModalState[1]}/>
    <ReservationCancelConfirmation dhelper={() => deleteReservation(DeleteModalState[1])} open={DeleteModalState[0]} handleClose={handleDeleteClose} />
    </>
  );
}
