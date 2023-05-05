import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uploadprofileAction } from '../../../Redux/Actions/User_Action/UploadProfileActions';
import { MDBCardImage } from 'mdb-react-ui-kit';

function ProfileSection() {
    const [photo, setPhoto] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const UserData = useSelector((state) => state.UserLoginReducer.loginuserdata)

    // const image = useSelector((state) => state.ProfileUploadReducer.ImageData)
    const userData = JSON.parse(localStorage.getItem('UserInfo'))
    useEffect(() => {
        JSON.parse(localStorage.getItem('UserInfo'))
    }, [dispatch])


    const handleUpload = (id) => {
        console.log('IDd', id);
        const formData = new FormData
        formData.append("image", photo)


        dispatch(uploadprofileAction(id, formData))
    }


    return (

        <div className="profile-section mt-4 mb-5 ms-5" style={{
            width: '27%', border: '1px solid black', height: '380px', float: 'left'
        }}>
            <div className="user-profile">
                <div className=" circle cover-fit" >
                    <MDBCardImage
                        type="file"
                        src={
                            userData
                                ? userData?.image
                                : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        }
                        alt="avatar"
                        width='160px'
                        height='150px'
                        className=""
                        style={{
                            width: "150px",
                            height: "130x",
                            borderRadius: "50%",
                        }}
                        fluid
                    />
                </div>
                <div className="profile-name ">{userData ? userData?.name : ""}</div>
                <div className="rental-history ">
                    <h2 className='ms-5 '>{userData ? userData?.email : ""}</h2>
                </div>
                <input onChange={(e) => setPhoto(e.target.files[0])} class="form-control form-control-sm" id="formFileSm" type="file" />
                <div className="button mt-3">
                    <Button onClick={() => { handleUpload(userData ? userData?.id : "") }} variant="outlined" size="small" >
                        Upload
                    </Button>
                </div>
            </div>

        </div >

    )
}

export default ProfileSection
