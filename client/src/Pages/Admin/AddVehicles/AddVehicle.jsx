import React, { useState } from 'react';
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

export default function AddVehicle() {
    const divStyle = { border: '1px solid black', padding: '20px', width: '100%', boxShadow: '3px 3px', height: '480px' };

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [model, setModel] = useState('')
    const [brand, setBrand] = useState('')
    const [fuel, setFuel] = useState('')
    const [rate, setRate] = useState('')
    const [color, setColor] = useState('')
    const [photos, setPhotos] = useState([])
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicje');
        const formData = new FormData
        photos.forEach((image) => {
            formData.append("images", image)
        })

        formData.append("Vname", name);
        formData.append("Vmodel", model);
        formData.append("Vbrand", brand);
        formData.append("Vfuel", fuel);
        formData.append("Vprice", rate);
        formData.append("Vcolor", color);
        formData.append("Vdesc", description);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        AdminAddVehicleApi(formData).then((data) => {
                 
            dispatch(addVehicleAction(data.data))
        })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className='mt-5 ms-5 col-10 col-md-4"  ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <AdminDrawer />
            <form className='container  mt-4 ms-5' style={divStyle}  >
                <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Add Details</h3>
                <MDBRow className='mt-1  '>
                    <MDBCol>
                        <MDBInput onChange={(e) => { setName(e.target.value) }} id='form3Example2' label='Vehicle Name' />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput onChange={(e) => { setModel(e.target.value) }} id='form3Example2' label='Vehicle Model' />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput onChange={(e) => { setBrand(e.target.value) }} label='Vehicle Brand' id='form3Example1' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mt-1 '>
                    <MDBCol>
                        <MDBInput onChange={(e) => { setRate(e.target.value) }} id='form3Example2' label='Vehicle Rate' />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput onChange={(e) => { setFuel(e.target.value) }} id='form3Example2' label='Fuel Type' />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput onChange={(e) => { setColor(e.target.value) }} label='Vehicle Colour' id='form3Example1' />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='mt-1 container '>
                    <MDBFile onChange={(e) => { setPhotos([...photos, e.target.files[0]]) }} label='' size='sm' id='formFileSm' />
                </MDBRow>
                <MDBRow className='mt-1 container '>
                    <MDBFile onChange={(e) => { setPhotos([...photos, e.target.files[0]]) }} label='' size='sm' id='formFileSm' />
                </MDBRow>


                <MDBRow className='mt-2 '>
                    <MDBCol>
                        <MDBTextArea onChange={(e) => { setDescription(e.target.value) }} label='Vehicle Description' id='textAreaExample' rows={1} />
                    </MDBCol>
                </MDBRow>
                {/* <MDBBtn type='submit' className='mb-4 ms-5' block>
                    Sign in
                </MDBBtn> */}
                <MDBRow className='mt-1 '>
                    <Button onClick={handleSubmit} className='mb-4 ' variant="outlined" size="small">
                        Upload
                    </Button>
                </MDBRow>


            </form>
        </div>
    );
}