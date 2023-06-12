// import './App.css';
import ShowAllUser from './Components/AdminShowAllUser/ShowAllUser';
import Adminhome from './Pages/Admin/AdminHome/Adminhome';
import Login from './Pages/Admin/Login/Login';
import UserHome from './Pages/User/UserHome/UserHome';
import Userlogin from './Pages/User/UserLogin/Userlogin';
import Signup from './Pages/User/UserSignUp/Signup';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Profile from './Pages/User/Profile/Profile';
import AddVehicle from './Pages/Admin/AddVehicles/AddVehicle';
import EditUser from './Pages/User/EditUser/EditUser';
import ShowVehicles from './Pages/Admin/ShowVehicles/ShowVehicles';
import OtpLogin from './Pages/User/OtpLogin/OtpLogin';
import EditVehicle from './Pages/Admin/EditVehicle/EditVehicle';
import DisplayBikes from './Pages/User/UserHome/Displaybikes/DisplayBikes';
import Booking from './Pages/User/BookingScreen/Booking';
import Rentbike from './Pages/User/RentBikeUser/Rentbike';
import RentRequest from './Pages/Admin/ShowRentRequest/RentRequest';
import ShowMyBikes from './Pages/User/ShowMyBikes/ShowMyBikes';
import CheckOutSuccess from './Pages/User/CheckOut/CheckOutSuccess';
import SingleViewBike from './Pages/User/SingleViewBike/SingleViewBike';
import Myrent from './Pages/User/MyRent/Myrent';
import AddCoupon from './Pages/Admin/AddCoupon/AddCoupon';
import GetBookings from './Pages/Admin/Bookings/GetBookings';
import VeiwMoreRentRequest from './Pages/Admin/ViewRentRequestAccept/VeiwMoreRentRequest';
import AddLocation from './Pages/Admin/Location/AddLocation';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';
import SalesReport from './Pages/Admin/SalesReport/SalesReport';

function App() {
  const UserData = useSelector((state) => state.UserLoginReducer.loginuserdata)
  const Admindata = useSelector((state) => state.AdminLoginReducer.adminLoginData)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* user */}
          <Route path="/signup" element={UserData ? <Navigate to='/' /> : <Signup />}> </Route>
          <Route path="/login" element={UserData ? <Navigate to='/' /> : <Userlogin />} />
          {/* <Route path="/" element={UserData ?<UserHome /> : <Navigate to='/login' /> } /> */}
          <Route path="/" element={<UserHome />} />
          <Route path="/profile" element={UserData ? <Profile /> : <Navigate to='/' />} />
          <Route path='/edituser' element={<EditUser />} />
          <Route path='/otplogin' element={<OtpLogin />} />
          <Route path='/bikes' element={<DisplayBikes />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/rentbike' element={<Rentbike />} />
          <Route path='/mybikes' element={<ShowMyBikes />} />
          <Route path='/checkout-success' element={<CheckOutSuccess />} />
          <Route path='/singleview' element={<SingleViewBike />} />
          <Route path="/myrent" element={<Myrent />} />

          {/* Admin */}
          {/* <Route path='/adminhome' element={<Adminhome></Adminhome>} /> */}
          <Route path="/adminlogin" element={Admindata ? <Navigate to='/adminhome' /> : <Login />} />
          <Route path='/adminhome' element={Admindata ? <Adminhome /> : <Login />} />
          <Route path='/showalluser' element={Admindata ? <ShowAllUser /> : <Navigate to='/adminlogin' />} />
          <Route path='/addvehicle' element={Admindata ? <AddVehicle /> :<Navigate to='/adminlogin' /> } />
          <Route path='/showallvehicle' element={Admindata ? <ShowVehicles/> :<Navigate to='/adminlogin' /> } />
          <Route path='/editvehicle' element={<EditVehicle/> } />
          <Route path='/rentrequest' element={<RentRequest/> } />
          <Route path='/addcoupon' element={<AddCoupon/> } />
          <Route path='/getbookings' element={<GetBookings/> } />
          <Route path='/viewmore-rentrequest' element={<VeiwMoreRentRequest/> } />
          <Route path='/addlocation' element={<AddLocation/> } />
          <Route path='/dashboard' element={<Dashboard/> } />
          <Route path='/salesreport' element={<SalesReport/> } />









        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
