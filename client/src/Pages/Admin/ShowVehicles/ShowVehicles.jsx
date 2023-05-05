import React, { useEffect } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AdminDrawer from '../../../Components/AdminDashbored/AdminDrawer';
import { useSelector, useDispatch } from 'react-redux';
import { ShowAllVehicleAction } from '../../../Redux/Actions/Admin_Action/ShowAllVehicleAction';

function ShowVehicles() {
    const Vehicledata = useSelector((state) => state.ShowAllVehicleReducer.VehicleData)
    const dispatch = useDispatch()
    console.log(Vehicledata);
    useEffect(() => {
        dispatch(ShowAllVehicleAction())
    }, [])


    return (
        <div className='mt-5  col-md-6"  container ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <AdminDrawer />
            <div style={{ marginTop: '6em', width: '75%' }} className="maintable">
                <MDBTable bordered>
                    <MDBTableHead>
                        <tr className='container '>
                            <th scope='col'>No</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Model</th>
                            <th scope='col'>Brand</th>
                            <th scope='col'>Price</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Colour</th>
                            <th scope='col'>Fuel Type</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>

                        {
                            Vehicledata ? Vehicledata.map((data, index) => {
                                return (
                                    <tr>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{data.Vname}</td>
                                        <td>{data.Vmodel}</td>
                                        <td>{data.Vbrand}</td>
                                        <td>{data.Vprice}</td>
                                        <td>
                                            {data.Vphoto && data.Vphoto.length > 0 && (
                                                <img src={data.Vphoto[0].url} alt="image" style={{ height: '80px', width :'100px' }} />
                                            )}
                                        </td>

                                        <td>{data.Vcolor}</td>
                                        <td>{data.Vfuel}</td>
                                        {/* <td>{data.Vphoto[0]}</td> */}

                                    </tr>
                                )
                            }) : "freeeeeeeeee"

                        }

                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    )
}

export default ShowVehicles
