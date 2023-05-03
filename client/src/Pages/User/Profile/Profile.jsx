import React from 'react'
import Usernavbar from '../../../Components/UserNavBar/Usernavbar'
import ProfileSection from './ProfileSection'
import ProfileUserSection from './ProfileUserSection'
import WalletSection from './WalletSection'

function Profile() {
    return (
        <div>
            <Usernavbar />
            <ProfileSection />
            <ProfileUserSection />
            <WalletSection />
        </div>
    )
}

export default Profile
