import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { ShowAllUSerAction } from '../../Redux/Actions/Admin_Action/ShowAllUserAction';
import { MDBBtn } from 'mdb-react-ui-kit';
import { BlockUnblockAction } from '../../Redux/Actions/Admin_Action/BlockUnblockAction';
import Button from '@mui/material/Button';
import AdminDrawer from '../AdminDashbored/AdminDrawer';
export default function ShowAllUser() {
    const UserData = useSelector((state) => state.ShowAllUSerReducer.UserData)
    const blockunblock = useSelector((state) => state.ShowAllUSerReducer)
    console.log(blockunblock, 'blockunblock');


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ShowAllUSerAction())
    }, [])

    const handleBlockUnblock = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This action will block/unblock the user.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, proceed!',
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(BlockUnblockAction(id));
        
              Swal.fire({
                title: 'Success!',
                text: 'User has been blocked/unblocked.',
                icon: 'success',
              });
            }
          });
        // dispatch(BlockUnblockAction(id))
    }

    //    console.log('selee',selected);

    return (

        <div className='mt-5  col-md-6"  container ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <AdminDrawer />
            <div style={{ marginTop: '6em', width: '75%' }} className="maintable">
                <MDBTable bordered>
                    <MDBTableHead>


                        <tr>
                            <th scope='col'>No</th>
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