import React from 'react'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { TextField } from '@mui/material';
import { EditUserApi } from '../../API/User/ApiCalls';
import { editUserAction } from '../../Redux/Actions/User_Action/EditUserAction';

function Modal({ closeModal, details }) {
    console.log(details);
    const [basicModal, setBasicModal] = useState(true);
    const toggleShow = () => setBasicModal(!basicModal);

    const dispatch = useDispatch()

    const [name, setName] = useState(details.name)
    const [email, setEmail] = useState(details.email)
    const [phone, setPhone] = useState(details.phone)
    const [place, setPlace] = useState(details.place)

    const handleEdit = (id) => {
         EditUserApi(name, email, phone, place, id).then((data) => {
            localStorage.setItem('UserInfo', JSON.stringify(data.data))
            dispatch(editUserAction(data.data))
            setBasicModal(false);
    })
}

    return (
        <div>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle ><h5 className=''>User Details</h5></MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>

                            <TextField onChange={(e) => { setName(e.target.value) }} className='mt-1' style={{ width: "100%" }} id="outlined-basic" type="text" label="" defaultValue={details.name} variant="outlined" size='small' />
                            <TextField onChange={(e) => { setEmail(e.target.value) }} className='mt-2' style={{ width: "100%" }} id="outlined-basic" type="email" label="" defaultValue={details.email} variant="outlined" size='small' />
                            <TextField onChange={(e) => { setPhone(e.target.value) }} className='mt-2' style={{ width: "100%" }} id="outlined-basic" type="text" label="" defaultValue={details.phone} variant="outlined" size='small' />
                            <TextField onChange={(e) => { setPlace(e.target.value) }} className='mt-2' style={{ width: "100%" }} id="outlined-basic" type="text" label="" defaultValue={details.place} variant="outlined" size='small' />
                        </MDBModalBody>

                        <MDBModalFooter>
                            <Button color='secondary' onClick={toggleShow} variant="outlined" >
                                Close
                            </Button>
                            <Button className='ms-2' onClick={() => { handleEdit(details.id) }} variant="outlined" >Save changes</Button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    )
}

export default Modal
