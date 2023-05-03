import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function ProfileUserSection() {
    return (
        <div className="container mt-4 mb-5 " style={{
            width: '37%', border: '1px solid black', height: '266px',
        }}>

            <div className='me-auto mb-auto mt-3' >
                <h2 >User Details</h2>
                <div className='me-auto'>
                    <TextField className='mt-1' style={{ width: "100%" }} id="outlined-basic" type="text" label="Name" variant="outlined" size='small' />
                    <TextField className='mt-2' style={{ width: "100%" }} id="outlined-basic" type="text" label="Name" variant="outlined" size='small' />

                    <TextField className='mt-2' style={{ width: "100%" }} id="outlined-basic" type="text" label="Name" variant="outlined" size='small' />

                    <Button className='mt-2 ' style={{ width: "100%" }} variant="outlined">
                        Edit
                    </Button>

                </div>

            </div>
        </div>
    )
}

export default ProfileUserSection
