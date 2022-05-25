import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import RequireAuth from './pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './pages/DashBoard/DashBoard';
import MyAppointment from './pages/DashBoard/MyAppointment';
import MyReview from './pages/DashBoard/MyReview';

function App() {
  console.log(process.env.REACT_APP_name);
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>

        {/* Nested Routes */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
        {/* Nested Routes */}

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
