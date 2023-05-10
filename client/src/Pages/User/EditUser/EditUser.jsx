import React from 'react'
import Usernavbar from '../../../Components/UserNavBar/Usernavbar'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBFile,
    MDBTextArea,
} from 'mdb-react-ui-kit';

import Button from '@mui/material/Button';
import AdminDrawer from '../../../Components/AdminDashbored/AdminDrawer';
import { addVehicleAction } from '../../../Redux/Actions/Admin_Action/AddVehicleAction';
import { AdminAddVehicleApi } from '../../../API/Admin/ApiCalls';
import { useState } from 'react';

function EditUser() {
    const divStyle = { border: '1px solid black', padding: '20px', width: '100%', boxShadow: '3px 3px', height: '400px' };


    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div>
            <Usernavbar />
            <div className='mt-5 ms-5 col-8 col-md-4"  ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >

                <form className='container  mt-4 ms-5' style={divStyle}  >
                    <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Edit User Details</h3>
                    <MDBRow className='mt-1  '>
                        <MDBCol>
                            <MDBInput id='form3Example2' label='Vehicle Name' />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput id='form3Example2' label='Vehicle Model' />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput label='Vehicle Brand' id='form3Example1' />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mt-1  '>
                        <MDBCol>
                            <MDBInput id='form3Example2' label='Vehicle Name' />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput id='form3Example2' label='Vehicle Model' />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput label='Vehicle Brand' id='form3Example1' />
                        </MDBCol>
                    </MDBRow>


                    {/* <MDBBtn type='submit' className='mb-4 ms-5' block>
                    Sign in
                </MDBBtn> */}
                    <MDBRow className='mt-1 '>
                        <Button className='mb-4 ' variant="outlined" size="small">
                            Upload
                        </Button>
                    </MDBRow>


                </form>
            </div>
        </div>
    )
}

export default EditUser
