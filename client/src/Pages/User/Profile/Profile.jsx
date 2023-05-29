import React from 'react'
import Usernavbar from '../../../Components/UserNavBar/Usernavbar'
import ProfileSection from './ProfileSection'
import WalletSection from './WalletSection'
import ProfileDetailSection from './ProfileDetailsSection'

function Profile() {
    return (
        <div>
            <Usernavbar />
            <ProfileSection />
            <ProfileDetailSection />
            <WalletSection />
        </div>
    )
}

export default Profile
