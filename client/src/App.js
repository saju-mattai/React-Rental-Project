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

function App() {
  const UserData = useSelector((state) => state.UserLoginReducer.loginuserdata)
  const Admindata = useSelector((state) => state.AdminLoginReducer.adminLoginData)
  console.log('UserData', UserData);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* user */}
          <Route path="/signup" element={UserData ? <Navigate to='/' /> : <Signup />}> </Route>
          <Route path="/login" element={UserData ? <Navigate to='/' /> : <Userlogin />} />
          {/* <Route path="/" element={UserData ?<UserHome /> : <Navigate to='/login' /> } /> */}
          <Route path="/" element={<UserHome /> } />
          <Route path="/profile" element={<Profile /> } />
          




          {/* Admin */}
          {/* <Route path='/adminhome' element={<Adminhome></Adminhome>} /> */}
          <Route path="/adminlogin" element={Admindata ? <Navigate to='/adminhome' /> : <Login />} />
          <Route path='/adminhome' element={Admindata ? <Adminhome /> : <Login />} />
          <Route path='/showalluser' element={Admindata ? <ShowAllUser /> : <Navigate to='/adminlogin' />} />
          <Route path='/addvehicle' element={<AddVehicle />}  />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
