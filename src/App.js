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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
