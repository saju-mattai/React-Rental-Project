import React, { useState } from 'react';
import { Menu, Button, Text, Avatar } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,

} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { UserLogOutAction } from '../../Redux/Actions/User_Action/UserLogOutAction';
import './Use.css'


export default function Usernavbar() {
    const navigate = useNavigate()
    const dispacth = useDispatch()
    const UserData = useSelector((state) => state.UserLoginReducer.loginuserdata)

    const handleLogOut = () => {
        dispacth(UserLogOutAction())
    }
    const handleLogin = () => {
        navigate('/login')
    }
    const handleProfile = () => {
        navigate('/profile')
    }


    const [showNavColorThird, setShowNavColorThird] = useState(false);

    return (
        <>




            <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
                <MDBContainer fluid >
                    <MDBNavbarBrand href='#'>User Home</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorThird(!showNavColorThird)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorThird} navbar>
                        <MDBNavbarNav className='me-auto mb-4 mb-lg-0'   >
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page' href='#' style={{ marginLeft: '22rem' }}>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' style={{ marginLeft: '1rem' }}>Cars</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' style={{ marginLeft: '1rem' }}>Offers</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' style={{ marginLeft: '1rem' }}>Rent A Car</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#' style={{ marginLeft: '1rem' }}>Chat With US</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        {/* <strong>Login</strong> */}

                        <Menu shadow="md" width={200}>
                            <Menu.Target>
                                {/* <Button>HI {UserData ? UserData.data.name : ''}</Button> */}
                                {
                                    UserData ? <Button> Hi {UserData.data.name}</Button> : <Button onClick={handleLogin} >Login</Button>
                                }
                            </Menu.Target>

                            <Menu.Dropdown>
                                {/* <Menu.Label>Application</Menu.Label> */}
                                <Menu.Item onClick={handleProfile} icon={<AccountCircleIcon size={25} />}>Profile</Menu.Item>
                                <Menu.Item onClick={handleLogOut} icon={<LogoutIcon size={20} />}>Log Out</Menu.Item>
                                <Menu.Item icon={<IconPhoto size={20} />}>Gallery</Menu.Item>
                                <Menu.Item
                                    icon={<IconSearch size={14} />}
                                    rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
                                >
                                    Search
                                </Menu.Item>

                                {/* <Menu.Divider /> */}

                                {/* <Menu.Label>Danger zone</Menu.Label>
                                <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Transfer my data</Menu.Item>
                                <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item> */}
                            </Menu.Dropdown>
                        </Menu>



                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>


        </>

    );
}