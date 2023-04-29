import React, { useState } from 'react'
import './Signup.css'
// import TextField from '@mui/material/TextField'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserSignUp } from '../../../Redux/Actions/User_Action/SignUpAction';
import Button from '@mui/material/Button';





import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    // MDBCard,
    // MDBCardBody,
    // MDBCardImage,
    MDBInput,
    // MDBIcon,
    // MDBCheckbox
}
    from 'mdb-react-ui-kit';

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [place, setPlace] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()
    const dispacth = useDispatch()
    const UserSignUpData = useSelector((state) => state.UserSignUpReducer)

    console.log(UserSignUpData);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispacth(UserSignUp(name, email, place, password, phone))
        navigate('/login')
    }

    return (
        // <div>
        <MDBContainer fluid className="p-3 my-5">

            <MDBRow>

                <MDBCol col='10' md='5'>
                    <img src="https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg?w=900&t=st=1682503839~exp=1682504439~hmac=9fccc719aa40c4b14494c6e237a540b28fff850c4ee2a7187f6e5ece7631ffdd" class="img-fluid" />
                </MDBCol>

                <MDBCol col='4' md='6'>

                    <MDBInput onChange={(e) => setName(e.target.value)} label='Name' id='formControlLg' type='text' size="md" />
                    <MDBInput onChange={(e) => setEmail(e.target.value)} label='Email address' id='formControlLg' type='email' size="md" />
                    <MDBInput onChange={(e) => setPlace(e.target.value)} label='Place' id='formControlLg' type='text' size="md" />
                    <MDBInput onChange={(e) => setPhone(e.target.value)} label='Phone' id='formControlLg' type='number' size="md" />
                    <MDBInput onChange={(e) => setPassword(e.target.value)} label='Password' id='formControlLg' type='password' size="md" />
                    <MDBInput onChange={(e) => setConfirmPassword(e.target.value)} label='confirm password' id='formControlLg' type='password' size="md" />
                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:10px}} /> */}


                    {/* <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div> */}

                    {/* <button onClick={handleSubmit} className="mb-4 w-100" size="lg">Sign Up</button> */}
                    <Button onClick={handleSubmit}  variant="outlined" color="success">
                    Sign Up
                </Button>

                {/* <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div> */}

                {/* <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                        Continue with facebook
                    </MDBBtn>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                        <MDBIcon fab icon="twitter" className="mx-2" />
                        Continue with twitter
                    </MDBBtn> */}

            </MDBCol>

        </MDBRow>

        </MDBContainer >
        // </div>
    )
}

export default Signup
