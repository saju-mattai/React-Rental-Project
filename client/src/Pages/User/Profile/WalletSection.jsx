import React from 'react'
import Button from '@mui/material/Button';


function WalletSection() {
    return (
        <div className="container " style={{ height: "92px", width: "37%", border: '1px solid black', marginBottom: "4px" ,marginTop: '-27px'}}>
            <div className='me-auto mt-4'>
                <h6>Wallet Amount :000</h6>

            </div>
            <Button style={{ marginBottom: "4px", width: "40%", marginLeft: "9em" }} variant="outlined">
                My Wallet
            </Button>
        </div>
    )
}

export default WalletSection
