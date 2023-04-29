import React, { useEffect, useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { ShowAllUSerAction } from '../../Redux/Actions/Admin_Action/ShowAllUserAction';
import { MDBBtn } from 'mdb-react-ui-kit';
import { BlockUnblockAction } from '../../Redux/Actions/Admin_Action/BlockUnblockAction';
import Button from '@mui/material/Button';
import AdminDrawer from '../AdminDashbored/AdminDrawer';
export default function ShowAllUser() {
    const UserData = useSelector((state) => state.ShowAllUSerReducer.UserData)
    // console.log(UserData, 'userdaaraaaa');
    const blockunblock = useSelector((state) => state.ShowAllUSerReducer)
    console.log(blockunblock, 'blockunblock');


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ShowAllUSerAction())
    }, [])

    const handleBlockUnblock = (id) => {
        dispatch(BlockUnblockAction(id))
    }

    //    console.log('selee',selected);

    return (

        <div className="container">
            <AdminDrawer />
            <div style={{ marginTop: '6em' }} className="maintable">
                <MDBTable bordered>
                    <MDBTableHead>


                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Place</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Action</th>

                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            UserData ? UserData.map((data, index) => {


                                return (
                                    <tr>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.place}</td>
                                        <td>{data.status === true ? "Access Allowed" : "Access Denied"}</td>

                                        <td>
                                            <Button variant="outlined"
                                                onClick={() => {
                                                    handleBlockUnblock(data._id)
                                                }

                                                }
                                                style={data.status ? { backgroundColor: "red", width: "100px", color: "white" } : { backgroundColor: "green", width: "100px", color: "white" }}> {data.status ? 'Block' : 'Unblock'}   </Button>
                                        </td>

                                    </tr>
                                )
                            }) : ""
                        }


                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    );
}