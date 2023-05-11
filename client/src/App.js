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
          





          {/* Admin */}
          {/* <Route path='/adminhome' element={<Adminhome></Adminhome>} /> */}
          <Route path="/adminlogin" element={Admindata ? <Navigate to='/adminhome' /> : <Login />} />
          <Route path='/adminhome' element={Admindata ? <Adminhome /> : <Login />} />
          <Route path='/showalluser' element={Admindata ? <ShowAllUser /> : <Navigate to='/adminlogin' />} />
          <Route path='/addvehicle' element={Admindata ? <AddVehicle /> :<Navigate to='/adminlogin' /> } />
          <Route path='/showallvehicle' element={Admindata ? <ShowVehicles/> :<Navigate to='/adminlogin' /> } />
          <Route path='/editvehicle' element={<EditVehicle/> } />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
