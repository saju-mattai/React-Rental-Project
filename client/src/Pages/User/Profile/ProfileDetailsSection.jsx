import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
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
import Modal from '../../../Components/ModalBox/Modal';





function ProfileDetailSection() {

    const [modal, setModal] = useState(false)

    const UserData = JSON.parse(localStorage.getItem("UserInfo"));


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlemodal = () => {
        setModal(!modal)
    }
    // const UserData = useSelector((state) => state.ProfileUploadReducer.ImageData)


    return (


        <div className="container mt-4 mb-5 " style={{
            width: '37%', border: '1px solid black', height: '320px',
        }}>


            {
                modal ? (
                    <Modal closeModal={setModal} details={UserData} />
                ) : (
                    ""
                )
            }



            <div className='me-auto mb-auto mt-3' >
                <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >User Details</h2>
                <div className='me-auto'>
                    <TextField className='mt-1' style={{ width: "100%" }} id="outlined-basic" type="text" label="Name" value={UserData?.name} variant="outlined" size='small' />
                    <TextField className='mt-2' style={{ width: "100%" }} id="outlined-basic" type="email" label="Email" value={UserData?.email} variant="outlined" size='small' />
                    <TextField className='mt-2' style={{ width: "100%" }} id="outlined-basic" type="text" label="Phone" value={UserData?.phone} variant="outlined" size='small' />
                    <TextField className='mt-2' style={{ width: "100%" }} id="outlined-basic" type="text" label="Place" value={UserData?.place} variant="outlined" size='small' />



                    <Button onClick={handlemodal} className='mt-2 ms-5  ' style={{ width: "80%" }} variant="outlined">Edit User</Button>


                </div>


            </div>

        </div >
    )
}

export default ProfileDetailSection
