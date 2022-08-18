import { Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useRef } from 'react';
import data from './bookings.json';

export const ReservationCancelConfirmation = (props) => {
    return(
        <Modal
        open={props.open}
        onClose={props.handleClose}
        >
            <div style={{
                position:'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                borderRadius:'10px',
                backgroundColor: 'white',
                border: '2px solid #000',
                boxShadow: 24,
                padding: 40,
                }} >
                    <p>Are you sure you want to cancel the reservation?</p>
                    <div style={{
                        width:'100%',
                        display:'grid',
                        gridTemplateColumns:'1fr 1fr',
                        gridGap:'10px'
                    }} >
                        <Button
                        onClick={() => {
                            props.handleClose();
                        }}>Don't Cancel</Button>
                        <Button
                        sx={{
                            backgroundColor:'red',
                            color:'white'
                        }}
                        onClick={() => {
                            props.dhelper();
                            props.handleClose();
                        }}>Cancel</Button>
                    </div>
                </div>
        </Modal>
    );
}



export function BookingForm(props){
    const titleRef = useRef(props.minf.title);
    const mrnameRef = useRef(props.minf.meetingRoomName);
    const sdateRef = useRef(props.minf.startDate);
    const stimeRef = useRef(props.minf.startTime);
    const edateRef = useRef(props.minf.endDate);
    const etimeRef = useRef(props.minf.endTime);
    return(
        <Modal
        open={props.open}
        onClose={props.handleClose}
        >
            <div style={{
                position:'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                borderRadius:'10px',
                backgroundColor: 'white',
                border: '2px solid #000',
                boxShadow: 24,
                padding: 40,
                }} >
                    <h1>{props.heading}</h1>
            <form>
                <div style={{display: 'grid', gridTemplateColumns:'1fr', gridGap:'10px' }} >
                    <TextField required inputRef={titleRef} defaultValue={props.minf.title} label="Title" variant="standard" />
                    <TextField required inputRef={mrnameRef} defaultValue={props.minf.meetingRoomName} label="Meeting Room Name" variant="standard" />
                    <TextField required inputRef={sdateRef} defaultValue={props.minf.startDate} label="Start Date" variant="standard" />
                    <TextField required inputRef={stimeRef} defaultValue={props.minf.startTime} label="Start Time" variant="standard" />
                    <TextField required inputRef={edateRef} defaultValue={props.minf.endDate} label="End Date" variant="standard" />
                    <TextField required inputRef={etimeRef} defaultValue={props.minf.endTime} label="End Time" variant="standard" />
                </div>
                <Button onClick={() => {
                    props.uhelper(props.idd,props.minf.id ,titleRef.current.value, mrnameRef.current.value, sdateRef.current.value, stimeRef.current.value, edateRef.current.value, etimeRef.current.value, props.minf.createdBy);
                    props.handleClose();
                }} sx={{ width:'100%', margin:'10px 0px', backgroundColor:'lightblue'}}>Update</Button>
            </form>
            </div>
        </Modal>
    )
}