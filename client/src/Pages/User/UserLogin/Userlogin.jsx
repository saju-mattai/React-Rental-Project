import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    // MDBIcon,
    MDBInput,
    // MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { UserLoginAction } from '../../../Redux/Actions/User_Action/UserLoginAction';

function Userlogin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const Userlogin = useSelector((state) => state.UserLoginReducer)
    console.log('Userlogin', Userlogin);
    const { loading, loginuserdata, loginuserErr } = Userlogin
    console.log(loginuserErr);

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(UserLoginAction(email, password))
        // navigate('/')

    }

    return (
        <MDBContainer fluid className="p-3 my-5">

            <MDBRow >

                <MDBCol col='10' md='5'>
                    <img src="https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg?w=900&t=st=1682503839~exp=1682504439~hmac=9fccc719aa40c4b14494c6e237a540b28fff850c4ee2a7187f6e5ece7631ffdd" class="img-fluid" />
                </MDBCol>

                <MDBCol col='4' md='6' >
                    {
                        loginuserErr ? <p style={{ color: "red" }} >{loginuserErr.data}</p> : ""
                    }
                    {/* <MDBInput onChange={(e) => setEmail(e.target.value)} label='Email address' id='formControlLg' type='email' size="lg" required />
                    <MDBInput onChange={(e) => setPassword(e.target.value)} label='Password' id='formControlLg' type='password' size="lg" required /> */}
                    <TextField onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: "36px", width: "90%" }} id="outlined-basic" type="email" label="Email" variant="outlined" />


                    <TextField onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: "25px", width: "90%" }} id="outlined-basic" type="password" label="Password" variant="outlined" />
                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width:10px}} /> */}




                    {/* <MDBBtn onClick={handleLogin} className="mb-4 w-100" size="lg">Login</MDBBtn> */}
                    {/* <Button style={{ "mb-4 w-100"}} variant="outlined">Outlined</Button> */}
                    <Button onClick={handleLogin} style={{ marginBottom: "4px", width: "50%", marginLeft: "9em" }} variant="outlined">
                        Login
                    </Button>
                    {/* <div className="d-flex justify-content-between mx-4 mb-4">
                        <a href="!#" wrapperClass='ml-2' >Don't Have an Account?</a>

                        <a href="!#">Forgot password?</a>
                    </div> */}


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

        </MDBContainer>
    );
}

export default Userlogin;